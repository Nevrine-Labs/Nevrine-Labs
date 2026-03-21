import type { Metadata } from "next";
import { Caveat, Libre_Baskerville } from "next/font/google";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Nevrine Labs — Creative Digital Agency",
  description:
    "We sketch ideas into digital reality. Nevrine Labs is a creative agency that brings your vision to life with imagination, craft, and code.",
  keywords: [
    "creative agency",
    "web development",
    "UI/UX design",
    "branding",
    "digital agency",
    "Nevrine Labs",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z0YGCTY9MM"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Z0YGCTY9MM');
          `}
        </Script>
      </head>
      <body
        className={`${caveat.variable} ${libreBaskerville.variable} antialiased`}
        style={{
          fontFamily:
            "var(--font-libre), 'Libre Baskerville', 'Palatino Linotype', serif",
        }}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
