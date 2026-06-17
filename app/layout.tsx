// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Newton-Raphson Calculator",
  description: "Calculadora interactiva del método de Newton-Raphson",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta
          name="google-site-verification"
          content="YmrQAKOvi-3ozcZlRuQIfwx2UoXNIF7-XMdhO48NWS8"
        />
        <meta name="google-adsense-account" content="ca-pub-3770775034295435" />
      </head>

      <body className={`${inter.className} min-h-screen flex flex-col pt-16`}>
        <Script
          id="adsense-script"
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3770775034295435"
          crossOrigin="anonymous"
        />

        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
