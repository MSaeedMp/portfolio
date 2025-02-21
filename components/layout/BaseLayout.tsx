import Header from "@/components/header/Header";
import CertificateModal from "@/components/certificate/CertificateModal";
import Providers from "@/components/providers";
import Footer from "@/components/footer/Footer";
import BackToTop from "@/components/buttons/BackToTop";
import BgMovingParticles from "@/components/layout/BgMovingParticles";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter, Nunito } from "next/font/google";

type Props = {
  children: React.ReactNode;
  locale: string;
};

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

export default async function BaseLayout({ children, locale }: Props) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${nunito.variable} ${inter.variable} antialiased text-foreground `}
      >
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
