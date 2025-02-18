import { createContext, useState } from "react";

type CertificateModalContextType = {
  isCertificateModalVisible: boolean;
  setIsCertificateModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  closeCertificateModal: () => void;
  openCertificateModal: () => void;
  currentCertificateId: number | null;
  setCurrentCertificateId: React.Dispatch<React.SetStateAction<number | null>>;
};

export const CertificateModalContext =
  createContext<CertificateModalContextType | null>(null);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCertificateModalVisible, setIsCertificateModalVisible] =
    useState<boolean>(false);
  const [currentCertificateId, setCurrentCertificateId] = useState<
    number | null
  >(null);
  const closeCertificateModal = () => setIsCertificateModalVisible(false);
  const openCertificateModal = () => setIsCertificateModalVisible(true);

  const value = {
    isCertificateModalVisible,
    setIsCertificateModalVisible,
    closeCertificateModal,
    openCertificateModal,
    currentCertificateId,
    setCurrentCertificateId,
  };

  return (
    <CertificateModalContext.Provider value={value}>
      {children}
    </CertificateModalContext.Provider>
  );
};
