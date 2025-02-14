import Image from "next/image";

const isVideo = (url: string) => {
  return url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".ogg");
};

const mediaStyle =
  "object-cover w-full h-auto rounded-b-xl group-hover:scale-95 transition-transform duration-300";
const CardMedia = ({ media, alt }: { media: string; alt: string }) => {
  return (
    <div className="relative w-full overflow-hidden">
      {isVideo(media) ? (
        <video
          src={media}
          autoPlay
          loop
          muted
          playsInline
          className={mediaStyle}
        />
      ) : (
        <Image
          src={media}
          alt={alt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          width={800}
          height={600}
          className={mediaStyle}
        />
      )}
      <div className="absolute inset-0 bg-black/5 group-hover:scale-95 transition-transform duration-300 rounded-b-xl rounded-t-none"></div>
    </div>
  );
};
export default CardMedia;
