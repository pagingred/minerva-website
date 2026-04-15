// components/CapabilitiesGrid.tsx
import CapabilityCard from "./CapabilityCard";
import { partners } from "../data/partners";

export default function PartnerGrid() {
  return (
    <section>
      <div className="
        grid gap-6
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
      ">
        {partners.map((cap, i) => (
          <CapabilityCard key={i} {...cap} />
        ))}
      </div>
    </section>
  );
}