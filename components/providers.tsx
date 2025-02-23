"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "./ui/tooltip";
import { ModalProvider } from "@/context/CertificateModalContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TooltipProvider>
      <ModalProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </ModalProvider>
    </TooltipProvider>
  );
};
export default Providers;
