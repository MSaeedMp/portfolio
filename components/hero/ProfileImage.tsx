import { mediaFiles } from "@/util/constants";
import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="w-48 aspect-square relative bg-zinc-400 rounded-full overflow-hidden border-2 border-primary">
      <Image
        src={mediaFiles["profile"] as string}
        fill
        alt="profile image"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
      <div className="absolute inset-0 bg-primary/5 rounded-full"></div>
    </div>
  );
};
export default ProfileImage;
