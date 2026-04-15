// components/CapabilitiesGrid.tsx
import CapabilityCard from "./CapabilityCard";
import { capabilities } from "../data/capabilities";

export default function CapabilitiesGrid() {
  return (
    <section className="w-full px-6 py-12">
      <div className="
        grid gap-6
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
      ">
        {capabilities.map((cap, i) => (
          <CapabilityCard key={i} {...cap} />
        ))}
      </div>
    </section>
  );
}