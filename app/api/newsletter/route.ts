// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const { email } = await req.json();

//   if (!email) {
//     return NextResponse.json({ error: "Email is required" }, { status: 400 });
//   }

//   try {
//     const res = await fetch(
//       `https://api.convertkit.com/v3/forms/${process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID}/subscribe`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           api_key: process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY,
//           email,
//         }),
//       },
//     );

//     const data = await res.json();
//     console.log("newsletter subscription request: ", data);

//     if (data.subscription) {
//       return NextResponse.json({ success: true });
//     } else {
//       return NextResponse.json(
//         { error: "Subscription failed" },
//         { status: 400 },
//       );
//     }
//   } catch {
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }
