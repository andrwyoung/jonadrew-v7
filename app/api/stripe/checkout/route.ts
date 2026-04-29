import { stripeClient } from "@/lib/stripe-client";
import { NextRequest, NextResponse } from "next/server";

type LineItem = {
  name: string;
  price: number; // in cents
  quantity: number;
  image?: string;
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const items: LineItem[] = body.items;

  if (!items || items.length === 0) {
    return new NextResponse("Cart is empty", { status: 400 });
  }

  try {
    const session = await stripeClient.checkout.sessions.create({
      mode: "payment",
      allow_promotion_codes: true,
      payment_method_types: ["card"],

      line_items: items.map((item) => ({
        quantity: item.quantity,
        price_data: {
          currency: "usd",
          unit_amount: item.price,
          product_data: {
            name: item.name,
            ...(item.image
              ? { images: [`${process.env.NEXT_PUBLIC_URL}${item.image}`] }
              : {}),
          },
        },
      })),

      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },

      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 500, currency: "usd" }, // $5
            display_name: "Standard Shipping",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 5 },
              maximum: { unit: "business_day", value: 10 },
            },
          },
        },
      ],

      success_url: `${req.nextUrl.origin}/store/success`,
      cancel_url: `${req.nextUrl.origin}/store`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return new NextResponse("Failed to create Stripe session", { status: 500 });
  }
}
