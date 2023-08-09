/** @format */
import TreatmentCard from "@/components/treatmentCard/treatmentCard";

export default function BreastImplantInfo() {
  return (
    <div className="overscroll-y-auto flex h-screen bg-transparent p-0 w-full pr-16 ">
      {" "}
      {/* Fixed div */}
      <div className="flex h-screen bg-transparent p-16 w-full pr-16 ">
        <div className="bg-transparent p-10 px-0 2 ">
          <h2 className="font-bold text-xl mt-8">
            Cosmetic Surgery Breast Enlargement
          </h2>

          <p className="text-m flex-wrap">
            Cosmetic surgery breast enhancement (augmentation) is usually done
            to enhance the size or shape of breasts or to balance a difference
            in breast size. The procedure is performed by inserting a breast
            implant behind the breast tissue or above the breast muscle.{" "}
            <b>Breast Implants</b> come in a variety of shapes and sizes, with
            varying designs, in a range of materials. They can be placed in
            different <b>positions</b> through a variety of{" "}
            <b>incision locations</b>. The goal is to leave your breasts looking
            as natural as possible while enlarging them to your desired size.
          </p>
          <br />
          <p className="text-m flex-wrap">
            The surgeon may recomment that a <b>breast lift</b> and breast
            augmentation be performed at the same time. This is mostly commonly
            recommended to treat the sagging appearance that results from aging
            or pregnancy. DUring this combined procedure, some breast tissue is
            removed, the breast skin is tightened and lifted, and an implant is
            inserted.
          </p>

          <div className="flex flex-row justify-around space-x-10 mt-8">
            {" "}
            {/* Flex container for cards */}
            <TreatmentCard
              imageUrl="/images/info/implant1.PNG"
              description="
          Incisions are made to keep scards as inconspicuous as possible, under the breast, around the nipple, or in the armpit.  Breast tissue and skin is lifted to create a pocket for each implant."
            />
            <TreatmentCard
              imageUrl="/images/info/implant2.PNG"
              description="
          The breast implant may be inserted directly under the breast tissue, partially or completely beneath the pectoral muscle."
            />
            <TreatmentCard
              imageUrl="/images/info/implant3.PNG"
              description="
          After surgery, breasts appear fuller and more natural in tone and contour.  Scars will fade with time."
            />
          </div>

          <h2 className="font-bold text-xl mt-12">
            Cosmetic Surgery Breast Enlargement
          </h2>

          <p className="text-m flex-wrap">
            Cosmetic surgery breast enlargement is a very popular procedure that
            can be extremely satisfying. It is a permanent improvement to breast
            shape and size, commonly chosen in women who are not satisfied with
            the development of their breasts or in the case of trauma, disease
            or post-pregnancy loss.
            <br />
            Generally, most patientsbenefit by having major boosts in their
            self-confidence, and femininity.
          </p>

          <h2 className="font-bold text-xl mt-12">
            {" "}
            Best candidates for breast enlargement
          </h2>

          <p className="text-m flex-wrap">
            The best candidates for breast surgery are women who are emotionally
            well-adjusted and who have a through understanding of the procedure.
            They are in good health, have a history of physical activity, and
            eat a healthy diet.
          </p>
        </div>
      </div>
    </div>
  );
}
