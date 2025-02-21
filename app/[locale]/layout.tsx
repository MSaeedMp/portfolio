import Header from "@/components/header/Header";
import CertificateModal from "@/components/certificate/CertificateModal";
import Providers from "@/components/providers";
import Footer from "@/components/footer/Footer";
import BackToTop from "@/components/buttons/BackToTop";
import BgMovingParticles from "@/components/layout/BgMovingParticles";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <CertificateModal />
            <BackToTop />
            <div className="fixed inset-0 -z-20">
              <BgMovingParticles />
            </div>
            <Header />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
