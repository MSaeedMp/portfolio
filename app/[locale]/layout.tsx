import Header from "@/components/header/Header";
import CertificateModal from "@/components/certificate/CertificateModal";
import Providers from "@/components/providers";
import Footer from "@/components/footer/Footer";
import BackToTop from "@/components/buttons/BackToTop";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { i18n } from "@/i18n";
import { getMessages } from "next-intl/server";
import BgMovingParticles from "@/components/layout/BgMovingParticles";

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!i18n.locales.includes(locale)) {
    console.log("not found");
    notFound();
  }
  const messages = await getMessages();

  return (
    <>
      <NextIntlClientProvider locale={locale} messages={messages}>
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
    </>
  );
}
