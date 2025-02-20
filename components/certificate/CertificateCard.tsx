"use client";

import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";
import { Card, CardContent } from "../ui/card";
import { useCertificateModal } from "@/hooks/useCertificateModal";
import { CertificateType, MediaFile } from "@/util/types";
import { mediaFiles } from "@/util/constants";
import { useTranslations } from "next-intl";

const CertificateCard = ({ certificate }: { certificate: CertificateType }) => {
  const t = useTranslations("certificatesSection");

  const {
    id,
    title,
    subtitle,
    description,
    awardedBy,
    issueDate,
    certificateId,
  } = certificate;
  const certificateMedia = mediaFiles[id];
  const badge = (certificateMedia as MediaFile).badge;

  const { openCertificateModal, setCurrentCertificateId } =
    useCertificateModal();

  const handleViewCertificate = () => {
    setCurrentCertificateId(id);
    openCertificateModal();
  };
  return (
    <Card className="sm:rounded-r-xl sm:rounded-l-none rounded-t-none rounded-b-xl">
      <CardContent className="grid gird-cols-1 sm:grid-cols-[10rem_auto_auto] py-5 px-5 sm:px-3 gap-x-4">
        <div className="relative w-full sm:h-full h-48">
          <Image
            src={badge as string}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-extrabold mt-4 sm:mt-0 font-inter">
            {title}
          </h2>
          <h4>{subtitle}</h4>
          <div className="my-2 flex flex-col gap-1">
            <span>
              {t("awardedBy")}:{" "}
              <span className="text-primary font-[700] font-inter">
                {awardedBy}
              </span>
            </span>
            <span>
              {t("issueDate")}: {issueDate}
            </span>
            {certificateId && (
              <span>
                {t("certificationId")}: {certificate.certificateId}
              </span>
            )}
          </div>
          <p className="text-muted-foreground">{description}</p>
          <PrimaryButton
            label="View Certificate"
            className="sm:self-end mt-4"
            onClick={handleViewCertificate}
          />
        </div>
      </CardContent>
    </Card>
  );
};
export default CertificateCard;
