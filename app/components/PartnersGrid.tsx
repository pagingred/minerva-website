// components/PartnersGrid.tsx
import PartnerCard from "./PartnerCard";
import { partners } from "../data/partners";

export default function PartnersGrid() {
  return (
    <section>
      <div className="
        grid gap-6
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
      ">
        {partners.map((partner, i) => (
          <PartnerCard key={i} {...partner} />
        ))}
      </div>
    </section>
  );
}