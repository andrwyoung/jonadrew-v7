import type { Metadata } from "next";
import { Caveat_Brush, Quicksand, Maven_Pro } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/navbar";
import Footer from "@/components/my-footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Jonadrew - Andrew Yong Art",
  description:
    "Art by Andrew Yong, a freelance illustrator for book covers and comics.",

  metadataBase: new URL("https://jonadrew.com"),

  keywords: [
    "illustrator",
    "comic book artist",
    "book cover illustration",
    "board game art",
    "Andrew Yong art",
    "Andrew Yong book covers",
    "Andrew Yong illustration",
    "Jonadrew",
    "digital painting",
    "middle grade artist",
    "middle grade book covers",
    "fantasy book covers",
    "children's book cover artist",
    "YA book cover illustration",
    "adventure book covers",
    "sci-fi book covers",
    "freelance book cover illustrator",
    "comic pages",
    "sequential art",
    "graphic novel artist",
  ],

  authors: [{ name: "Andrew Yong" }],
  creator: "Andrew Yong",

  openGraph: {
    title: "Jonadrew - Andrew Yong Art",
    description:
      "Art by Andrew Yong, a freelance illustrator for book covers and comics.",
    url: "https://jonadrew.com",
    siteName: "Jonadrew - Andrew Yong Art",
    images: [
      {
        url: "/og-image.png", // ideal: 1200x630
        width: 1480,
        height: 893,
        alt: "Andrew Yong illustration portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const logoFont = Caveat_Brush({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: "400",
});

const headerFont = Quicksand({
  variable: "--font-header",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const bodyFont = Maven_Pro({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${logoFont.variable} ${headerFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <Toaster />
        <div className="pt-14">{children}</div>
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
