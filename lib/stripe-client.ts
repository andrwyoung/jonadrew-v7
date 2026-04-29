import Stripe from "stripe";

const isProd = process.env.NODE_ENV === "production";
const key = isProd
  ? process.env.STRIPE_SECRET_KEY!
  : process.env.STRIPE_SANDBOX_SECRET_KEY!;

export const stripeClient = new Stripe(key, {
  apiVersion: "2026-04-22.dahlia",
});
