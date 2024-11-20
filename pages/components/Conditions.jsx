import React from "react";
import Image from "next/image";

const Conditions = () => {
  const conditions = [
    {
      title: "Back & Neck Pain",
      mainCondition: "Sciatica",
      secondaryCondition: "Cervical Spondylitis",
      additionalCount: 3,
      image: "https://reliva.in/wp-content/uploads/2023/12/srv-back-pain.webp",
      alt: "Back and neck pain illustration",
    },
    {
      title: "Sports Injuries",
      mainCondition: "Muscle Strains",
      secondaryCondition: "Ligament Sprains",
      additionalCount: 4,
      image: "https://reliva.in/wp-content/uploads/2023/12/srv-back-pain.webp",
      alt: "Sports injury treatment",
    },
    {
      title: "Joint Pain",
      mainCondition: "Knee Arthritis",
      secondaryCondition: "Shoulder Pain",
      additionalCount: 3,
      image: "https://reliva.in/wp-content/uploads/2023/12/srv-back-pain.webp",
      alt: "Joint pain treatment",
    },
    {
      title: "Neurological Conditions",
      mainCondition: "Stroke Rehabilitation",
      secondaryCondition: "Bell's Palsy",
      additionalCount: 2,
      image: "https://reliva.in/wp-content/uploads/2023/12/srv-back-pain.webp",
      alt: "Neurological rehabilitation",
    },
    {
      title: "Post-Surgery Care",
      mainCondition: "Joint Replacement",
      secondaryCondition: "Spinal Surgery",
      additionalCount: 3,
      image: "https://reliva.in/wp-content/uploads/2023/12/srv-back-pain.webp",
      alt: "Post-surgical rehabilitation",
    },
    {
      title: "Pediatric Conditions",
      mainCondition: "Cerebral Palsy",
      secondaryCondition: "Developmental Delays",
      additionalCount: 2,
      image: "https://reliva.in/wp-content/uploads/2023/12/srv-back-pain.webp",
      alt: "Pediatric physiotherapy",
    },
    {
      title: "Women's Health",
      mainCondition: "Pregnancy Care",
      secondaryCondition: "Postpartum Recovery",
      additionalCount: 2,
      image: "https://reliva.in/wp-content/uploads/2023/12/srv-back-pain.webp",
      alt: "Women's health physiotherapy",
    },
    {
      title: "Respiratory Conditions",
      mainCondition: "COPD",
      secondaryCondition: "Post-Covid Recovery",
      additionalCount: 2,
      image: "https://reliva.in/wp-content/uploads/2023/12/srv-back-pain.webp",
      alt: "Respiratory physiotherapy",
    },
    {
      title: "Workplace Injuries",
      mainCondition: "Repetitive Strain",
      secondaryCondition: "Postural Problems",
      additionalCount: 2,
      image: "https://reliva.in/wp-content/uploads/2023/12/srv-back-pain.webp",
      alt: "Workplace injury rehabilitation",
    },
  ];

  return (
    <section className="py-12 sm:py-24 bg-[#FAD5A5]">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
            Conditions We Treat
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Our physiotherapy helps you manage various conditions, including:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {conditions.map((condition, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden flex flex-col sm:flex-row w-full sm:w-auto border border-[#E0E0E0] hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full sm:w-64 h-48 sm:h-auto">
                <Image
                  src={condition.image}
                  alt={condition.alt}
                  fill
                  className="object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-t-none"
                />
              </div>
              <div className="w-full sm:w-1/2 p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-[#1F3E5A] mb-3 sm:mb-4">
                  {condition.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-2 border-b border-gray-200 pb-2">
                  {condition.mainCondition}
                </p>
                <p className="text-sm sm:text-base text-gray-700 mb-2 border-b border-gray-200 pb-2">
                  {condition.secondaryCondition}
                </p>
                <p className="text-sm sm:text-base text-green-600">
                  +{condition.additionalCount} Conditions
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conditions;
