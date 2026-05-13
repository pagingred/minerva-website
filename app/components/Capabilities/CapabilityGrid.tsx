// components/CapabilityGrid.tsx
import CapabilityCard from "./CapabilityCard";
import { capabilities } from "../../data/capabilities";

export default function CapabilitiesGrid() {
  return (
    <section>
      <div className="grid gap-6 grid-cols-1">
        {capabilities.map((cap, i) => (
          <CapabilityCard
            key={i}
            index={i}
            {...cap}
          />
        ))}
      </div>
    </section>
  );
}