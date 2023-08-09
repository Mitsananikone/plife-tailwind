/** @format */

import TreatmentCard from "@/components/treatmentCard/treatmentCard";

export default function Treatments() {
  return (
    <div className="flex flex-col items-center space-y-8 px-4">
      <h1
          className="text-xl font-bold tracking-widest text-center mt-5 text-gray-500"
          style={{ scale: "1.70" }}
        > VIEW PROCEDURES AND TREATMENTS</h1>
      <div className="flex flex-row justify-between space-x-2 md:space-x-4 lg:space-x-8 xl:space-x-12 2xl:space-x-16">
        <TreatmentCard imageUrl="/images/types/aesthetic.PNG" description="AESTHETIC & NON-SURGICAL" />
        <TreatmentCard imageUrl="/images/types/weightloss.PNG" description="WEIGHT LOSS" />
        <TreatmentCard imageUrl="/images/types/cosmeticsurgery.PNG" description="COSMETIC SURGERY" />
        <TreatmentCard imageUrl="/images/types/gyno.PNG" description="COSMETIC GYNECOLOGY" />
      </div>
      <div className="flex flex-row justify-between space-x-2 md:space-x-4 lg:space-x-8 xl:space-x-12 2xl:space-x-16">
        <TreatmentCard imageUrl="/images/types/dental.PNG" description="DENTAL TREATMENTS" />
        <TreatmentCard imageUrl="/images/types/trans.PNG" description="GENDER TRANSITION" />
        <TreatmentCard imageUrl="/images/types/lipo.PNG" description="LIPOSUCTION" />
        <TreatmentCard imageUrl="/images/types/hair.PNG" description="HAIR TRANSFORMATION" />
      </div>
    </div>
  );
}
