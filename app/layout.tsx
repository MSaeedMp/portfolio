import "./globals.css";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import Providers from "@/components/providers";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

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
  return (
    <html>
      <body
        className={`${nunito.variable} ${inter.variable} antialiased text-foreground `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
