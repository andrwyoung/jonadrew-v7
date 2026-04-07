import type { Metadata } from "next";
import { Caveat_Brush, Quicksand, Maven_Pro } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/navbar";
import Footer from "@/components/my-footer";

export const metadata: Metadata = {
  title: "Jonadrew",
  description: "Art by Andrew Yong: comics, book covers and board game art",
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
        <div className="pt-14">{children}</div>
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
