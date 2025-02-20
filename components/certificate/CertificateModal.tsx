"use client";

import { useCertificateModal } from "@/hooks/useCertificateModal";
import { links, mediaFiles } from "@/util/constants";
import Image from "next/image";
import CloseButton from "../buttons/CloseButton";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { useTranslations } from "next-intl";
import { CertificateType, MediaFile } from "@/util/types";

const CertificateModal = () => {
  const {
    isCertificateModalVisible,
    currentCertificateId,
    closeCertificateModal,
  } = useCertificateModal();

  const t = useTranslations();
  if (!isCertificateModalVisible || !currentCertificateId) return null;

  const currentCertificate = t
    .raw("certificatesSection.certificates")
    ?.find(
      (certificate: CertificateType) => certificate.id === currentCertificateId
    );

  const sourceLink = links[currentCertificateId];

  if (!currentCertificate) return null;

  const { title, id } = currentCertificate;
  const certificateMedia = mediaFiles[id];
  const image = (certificateMedia as MediaFile).image;

  return (
    <div
      onClick={closeCertificateModal}
      className="fixed inset-0 z-[1000] bg-stone-950/50 w-full h-full flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white text-foreground p-3 rounded-b-xl border-stone-400 shadow-xl flex flex-col w-full items-center max-w-[90%] md:max-w-4xl lg:max-w-5xl max-h-[70%] h-full"
      >
        <div className="flex justify-between w-full relative z-[4000] mb-4 text-black items-center pl-4">
          <div className="flex items-center gap-1">
            <AiOutlineSafetyCertificate className="!w-5 !h-5 text-primary" />
            <span className="font-medium font-inter">{title}</span>
            {sourceLink && (
              <a
                href={sourceLink as string}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Source link &rarr;
              </a>
            )}
          </div>
          <CloseButton onClick={closeCertificateModal} />
        </div>
        <div className="relative w-full h-full aspect-w-16 aspect-h-9">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-xl object-contain"
          />
        </div>
      </div>
    </div>
  );
};
export default CertificateModal;
