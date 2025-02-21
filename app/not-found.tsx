import NotFoundPage from "@/components/global/NotFoundPage";
import BaseLayout from "@/components/layout/BaseLayout";
import { routing } from "@/i18n/routing";

export default function GlobalNotFound() {
  return (
    <BaseLayout locale={routing.defaultLocale}>
      <NotFoundPage />
    </BaseLayout>
  );
}
