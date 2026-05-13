import CapabilityGrid from "../components/Capabilities/CapabilityGrid";
import PartnerGrid from "../components/Partners/PartnerGrid";

export default function CapabilitiesPage() {
  return (
    <div className="text-zinc-300 px-6 py-16 flex justify-center">
      <div
        className="
          w-full max-w-5/6
          p-8 md:p-12
          text-zinc-300
          leading-relaxed
		  topOffset
        "
      >
        <h1 className="text-4xl font-semibold text-black dark:text-white mb-6">
          Capabilities
        </h1>

        <p className="text-zinc-400 mb-10 leading-relaxed">
          Minerva Defense develops advanced systems for defense and intelligence applications. Our staff of experts work every day to provide R&D-driven solutions and emerging technologies to the warfighter. Success requires understanding the unique complexity of defense procurement, balancing mission needs with fiscal responsibility, and navigating extensive regulatory requirements.
        </p>
		
		<CapabilityGrid/>
			
		<br />
		<br />
			
        <h1 className="text-4xl font-semibold text-black dark:text-white mb-6">
          Who we work with
        </h1>
		<PartnerGrid/>
      </div>
    </div>
  );
}