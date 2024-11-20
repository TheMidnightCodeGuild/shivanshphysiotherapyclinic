import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-12 sm:py-32 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Doctor's Photo */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border-2 border-neutral-600">
            <Image
              src="/images/doctor.jpg"
              alt="Dr. Naveen Moghi's portrait"
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Right side - Description */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Dr. Naveen Moghi
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 10 years of experience in physiotherapy, Dr. Naveen
              Moghi has established himself as a respected physiotherapist with
              extensive experience across various prestigious institutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-orange-500">✓</span>
                <p className="text-gray-700">
                  Ex. Consultant Physiotherapist - Government Dhanvantari
                  Hospital
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-500">✓</span>
                <p className="text-gray-700">
                  Ex. Consultant Physiotherapist - Jeewandeep Physiotherapy
                  Center, Kharakua
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-500">✓</span>
                <p className="text-gray-700">
                  Present Consultant Physiotherapist - Jain Multi-Speciality
                  Hospital, Freeganj Ujjain
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-500">✓</span>
                <p className="text-gray-700">
                  Ex. Visiting Physiotherapist - Goa Ranji Team, BCCI
                </p>
              </div>
            </div>
            <p className="text-gray-600">
              Currently serving as the owner of Shivansh Physiotherapy Clinic in
              Vivekanand Colony, Ujjain, Dr. Moghi combines his extensive
              experience with modern therapeutic techniques to provide
              comprehensive care to his patients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
