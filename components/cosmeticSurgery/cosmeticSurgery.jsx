/** @format */

import Link from "next/link";

function CosmeticSurgeryCard() {
  return (
    <div className="flex h-screen bg-transparent p-16">
      <div
        style={{ width: "45%" }}
        className="bg-transparent p-10 flex flex-col justify-center text-gray-700"
      >
        {" "}
        {/* 45% width */}
        <h1 className="text-7xl font-bold">COSMETIC</h1>
        <h2 className="text-7xl font-bold">SURGERY</h2>
        <p className="text-lg mt-4 w-80">
          Explore our popular beauty treatment offers and choose your products
        </p>
        <br/><br/>
        <div className="mt-10 space-y-2 text-gray-400">
          <h1 className="text-6xl text-gray-700">BREAST IMPLANT</h1>
          <h1 className="text-6xl">BREAST LIFT</h1>
          <h1 className="text-6xl">NOSE ENGINEER</h1>
          <h1 className="text-6xl">BODY SHAPE LIFTING</h1>
          <h1 className="text-6xl">FACE AUGMENTATION</h1>
        </div>
        <Link href="/procedures/type/page" passHref>
            <button
              className="bg-gray-300 opacity-60 text-black font-bold py-2 px-4 rounded whitespace-nowrap h-16 shadow-lg hover:shadow-xl transition-all mt-8 w-64 hover:text-white"
              style={{ borderRadius: "4px" }}
            >
              See More
            </button>
          </Link>
      </div>

      <div style={{ width: "55%" }} className="bg-transparent p-10">
        {" "}
        {/* 55% width */}
        <h1 className="font-bold text-lg">Cosmetic Surgery Breast Enlargement</h1>
        <br />
        <p className="flex-wrap">
          Cosmetic surgery breast enhancement (augmentation) is usually done to
          enhance the size or shape of breasts or to balance a difference in
          breast size. The procedure is performed by inserting a breast implant
          behind the breast tissue or above the breast muscle.{" "}
          <b>Breast Implants</b> come in a variety of shapes and sizes, with
          varying designs, in a range of materials. They can be placed in
          different <b>positions</b> through a variety of{" "}
          <b>incision locations</b>. The goal is to leave your breasts looking
          as natural as possible while enlarging them to your desired size.
        </p>
        <br />
        <p>
          The surgeon may recomment that a <b>breast lift</b> and breast
          augmentation be performed at the same time. This is mostly commonly
          recommended to treat the sagging appearance that results from aging or
          pregnancy. DUring this combined procedure, some breast tissue is
          removed, the breast skin is tightened and lifted, and an implant is
          inserted.
        </p>
        <br />
        <h1 className="font-bold text-lg">Cosmetic Surgery Breast Enlargement</h1>
        <br />
        <p>
          Cosmetic surgery breast enlargement is a very popular procedure that
          can be extremely satisfying. It is a permanent improvement to breast
          shape and size, commonly chosen in women who are not satisfied with
          the development of their breasts or in the case of trauma, disease or
          post-pregnancy loss.
          <br />
          Generally, most patientsbenefit by having major boosts in their
          self-confidence, and femininity.
        </p>
        <br />
        <h1 className="font-bold text-lg"> Best candidates for breast enlargement</h1>
        <br />
        <p>
          The best candidates for breast surgery are women who are emotionally
          well-adjusted and who have a through understanding of the procedure.
          They are in good health, have a history of physical activity, and eat
          a healthy diet.
        </p>
      </div>
    </div>
  );
}

export default CosmeticSurgeryCard;
