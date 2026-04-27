// components/PartnerCard.tsx
import Image from "next/image";

type PartnerCardProps = {
  title: string;
  image: string;
};

export default function PartnerCard({
  title,
  image,
}: PartnerCardProps) {
  return (
    <div className="group relative overflow-hidden bg-zinc-900/80 dark:bg-zinc-900 dark:border border-zinc-800 hover:border-zinc-700 transition">
      
      <div className="aspect-[4/3] relative">
        <Image
          src={image}
          alt={title}
          fill
		  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
		  style={{ objectFit: "contain" }}
          className="object-cover opacity-80 group-hover:opacity-100 transition"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg text-white font-medium">
          {title}
        </h3>
      </div>

      {/* subtle hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}