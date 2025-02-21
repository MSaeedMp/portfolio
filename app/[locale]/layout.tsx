import { Locale, routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import BaseLayout from "@/components/layout/BaseLayout";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    console.log("hi")
    notFound();
  }

  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}
