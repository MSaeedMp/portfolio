import { CertificateModalContext } from "@/context/CertificateModalContext";
import { useContext } from "react";

export const useCertificateModal = () => {
  const context = useContext(CertificateModalContext);
  if (!context)
    throw new Error("useModalContext must be used within a ModalProvider");
  return context;
};
