// components/CapabilityCard.tsx
import Image from "next/image";

type CapabilityCardProps = {
  title: string;
  category: string;
  image: string;
};

export default function CapabilityCard({
  title,
  category,
  image,
}: CapabilityCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition">
      
      <div className="aspect-[4/3] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 transition"
        />
      </div>

      <div className="p-4">
        <p className="text-xs text-zinc-400 uppercase tracking-wide">
          {category}
        </p>
        <h3 className="text-lg text-white font-medium">
          {title}
        </h3>
      </div>

      {/* subtle hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}