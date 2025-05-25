import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import PlausibleProvider from "next-plausible";
import Outbound from "@/components/outbound";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WordNet",
  description: "truly understand language.",
  openGraph: {
    title: "WordNet",
    siteName: "WordNet",
    description: "truly understand language.",
    images: "/og.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" type="application/manifest+json" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <PlausibleProvider
          domain="wordnet.app"
          customDomain="https://wordnet.app"
          trackOutboundLinks
          selfHosted
          taggedEvents
          enabled
        />
      </head>
      <body className={`${notoSerif.className} antialiased dark`}>
        <Outbound />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
