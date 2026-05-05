// components/CapabilitiesGrid.tsx
import CapabilityCard from "./CapabilityCard";
import { capabilities } from "../data/capabilities";

export default function CapabilitiesGrid() {
  return (
    <section>
      <div className="
        grid gap-6
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-3
      ">
        {capabilities.map((cap, i) => (
          <CapabilityCard key={i} {...cap} />
        ))}
      </div>
    </section>
  );
}