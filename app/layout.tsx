import type { Metadata } from "next";
import { Caveat_Brush, Quicksand, Maven_Pro } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/navbar";
import Footer from "@/components/my-footer";

export const metadata: Metadata = {
  title: "Jonadrew - Portfolio",
  description: "Art by Andrew Yong: comics, book covers and board game art",

  metadataBase: new URL("https://jonadrew.com"),

  keywords: [
    "illustrator",
    "comic book artist",
    "book cover illustration",
    "board game art",
    "Andrew Yong",
    "Jonadrew",
    "digital painting",
    "middle grade artist",
  ],

  authors: [{ name: "Andrew Yong" }],
  creator: "Andrew Yong",

  openGraph: {
    title: "Jonadrew (Andrew Yong)",
    description: "Art by Andrew Yong: comics, book covers and board game art.",
    url: "https://jonadrew.com",
    siteName: "Jonadrew (Andrew Yong)",
    images: [
      {
        url: "/og-image.jpg", // drop a 1200x630 image in your /public folder
        width: 1200,
        height: 562,
        alt: "Crows",
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
        <div className="pt-14">{children}</div>
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
