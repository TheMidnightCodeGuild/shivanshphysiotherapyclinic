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
      image:
        "https://bhaktiadmin.bhaktivedantahospital.com/public/upload//posts/16691678661087.jpg",
      alt: "Sports injury treatment",
    },
    {
      title: "Knee & Ankle Pain",
      mainCondition: "Knee Arthritis",
      secondaryCondition: "Shoulder Pain",
      additionalCount: 3,
      image:
        "https://www.verywellhealth.com/thmb/olIQA2pgIHm63VMGj7znfKwNN_0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1213394222-09e1093a458445439be1211d47b2560a.jpg",
      alt: "Joint pain treatment",
    },
    {
      title: "Geriatric Care",
      mainCondition: "Balance Disorders",
      secondaryCondition: "Parkinson’s",
      additionalCount: 2,
      image:
        "https://cdn-djmgl.nitrocdn.com/WKDrbFhGmXUqrdsfVwgWscBHIyiXYRMC/assets/images/optimized/rev-b6df2e9/reliva.in/wp-content/uploads/2023/12/co-geriatric-care.webp",
      alt: "Neurological rehabilitation",
    },
    {
      title: "Post-Surgery Care",
      mainCondition: "Joint Replacement",
      secondaryCondition: "Spinal Surgery",
      additionalCount: 3,
      image:
        "https://dta0yqvfnusiq.cloudfront.net/gulfs79068181/2015/09/postsurgery.jpg",
      alt: "Post-surgical rehabilitation",
    },
    {
      title: "Shoulder & Elbow ",
      mainCondition: "Cerebral Palsy",
      secondaryCondition: "Developmental Delays",
      additionalCount: 2,
      image: "/images/shoulder.webp",
      alt: "Pediatric physiotherapy",
    },
    {
      title: "Women's Health",
      mainCondition: "Pregnancy Care",
      secondaryCondition: "Postpartum Recovery",
      additionalCount: 2,
      image: "/images/women.webp",
      alt: "Women's health physiotherapy",
    },
    {
      title: "Cardiac & Respiratory",
      mainCondition: "COPD",
      secondaryCondition: "Post-Covid Recovery",
      additionalCount: 2,
      image: "/images/cardiac.webp",
      alt: "Respiratory physiotherapy",
    },
    {
      title: "Hip & Pelvic Pain",
      mainCondition: "Repetitive Strain",
      secondaryCondition: "Postural Problems",
      additionalCount: 2,
      image: "/images/hip.webp",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6  ">
          {conditions.map((condition, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden flex flex-col sm:flex-row w-full sm:w-auto border border-[#E0E0E0] ">
              <div className="relative w-full sm:w-56 h-48 sm:h-40">
                <Image
                  src={condition.image}
                  alt={condition.alt}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="w-full sm:w-1/2 p-3">
                <h3 className="text-lg sm:text-lg font-semibold text-[#1F3E5A] mb-3 sm:mb-2">
                  {condition.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-2 border-b border-gray-200 ">
                  {condition.mainCondition}
                </p>
                <p className="text-sm sm:text-base text-gray-700 mb-2 border-b border-gray-200 ">
                  {condition.secondaryCondition}
                </p>
                <p className="text-sm sm:text-base text-green-500">
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
