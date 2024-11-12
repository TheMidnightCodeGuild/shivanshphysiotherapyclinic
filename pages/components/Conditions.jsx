import React from "react";
import Image from "next/image";

const Conditions = () => {
  const conditions = [
    {
      title: "Back & Neck",
      mainCondition: "Sciatica",
      secondaryCondition: "Cervical Spondylitis",
      additionalCount: 2,
      image: "https://reliva.in/wp-content/uploads/2023/12/srv-back-pain.webp",
      alt: "Back and neck pain illustration",
    },
    {
      title: "Back & Neck",
      mainCondition: "Sciatica",
      secondaryCondition: "Cervical Spondylitis",
      additionalCount: 2,
      image: "https://reliva.in/wp-content/uploads/2023/12/srv-back-pain.webp",
      alt: "Back and neck pain illustration",
    },
    {
      title: "Back & Neck",
      mainCondition: "Sciatica",
      secondaryCondition: "Cervical Spondylitis",
      additionalCount: 2,
      image: "https://reliva.in/wp-content/uploads/2023/12/srv-back-pain.webp",
      alt: "Back and neck pain illustration",
    },
    {
      title: "Back & Neck",
      mainCondition: "Sciatica",
      secondaryCondition: "Cervical Spondylitis",
      additionalCount: 2,
      image: "https://reliva.in/wp-content/uploads/2023/12/srv-back-pain.webp",
      alt: "Back and neck pain illustration",
    },
    {
      title: "Back & Neck",
      mainCondition: "Sciatica",
      secondaryCondition: "Cervical Spondylitis",
      additionalCount: 2,
      image: "https://reliva.in/wp-content/uploads/2023/12/srv-back-pain.webp",
      alt: "Back and neck pain illustration",
    },
    {
      title: "Back & Neck",
      mainCondition: "Sciatica",
      secondaryCondition: "Cervical Spondylitis",
      additionalCount: 2,
      image: "https://reliva.in/wp-content/uploads/2023/12/srv-back-pain.webp",
      alt: "Back and neck pain illustration",
    },
  ];

  return (
    <div className="py-16 bg-[#F9F9FC]">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Conditions We Treat
          </h2>
          <p className="text-gray-600 text-lg">
            Our physiotherapy helps you manage various conditions, including:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conditions.map((condition, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden flex w-[400px] border border-[#E0E0E0]">
              <div className="relative w-64 justify-center items-center">
                <Image
                  src={condition.image}
                  alt={condition.alt}
                  fill
                  className="object-center  rounded-xl"
                />
              </div>
              <div className="w-1/2 p-4 ">
                <h3 className="text-xl font-semibold text-[#1F3E5A] mb-4">
                  {condition.title}
                </h3>
                <p className="text-gray-700 mb-2 border-b border-gray-200 pb-2">
                  {condition.mainCondition}
                </p>

                <p className="text-gray-700 mb-2 border-b border-gray-200 pb-2">
                  {condition.secondaryCondition}
                </p>
                <p className="text-green-600">
                  +{condition.additionalCount} Conditions
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Conditions;
