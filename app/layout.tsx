import "./globals.css";
import Providers from "@/components/providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | M. Saeed Mafipour",
    default: "M. Saeed Mafipour",
  },
  description: "M. Saeed Mafipour's portfolio built with Next.js",
  keywords: [
    "Portfolio",
    "M. Saeed",
    "Mafipour",
    "React",
    "Next.js",
    "Tailwind",
    "Type script",
  ],
  authors: [
    {
      name: "M. Saeed Mafipour",
    },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
