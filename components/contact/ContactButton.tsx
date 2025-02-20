import { icons, links } from "@/util/constants";
import { ContactType } from "@/util/types";

const ContactButton = ({ contact }: { contact: ContactType }) => {
  const { id, name } = contact;
  const contactLink =
    id === "email" ? `mailto:${links.email}` : links[id];
  const ContactIcon = icons[id];

  return (
    <a
      href={contactLink as string}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-primary transition-colors duraiton-200 font-semibold"
    >
      <ContactIcon className="sm:w-8 sm:h-8 w-6 h-6" />
      <span className="sm:text-xl text-lg">{name}</span>
    </a>
  );
};
export default ContactButton;
