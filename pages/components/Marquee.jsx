import React from "react";
import Marquee from "react-fast-marquee";
const MarqueeComponent = () => {
  return (
    <div className="bg-orange-400 py-5">
      <Marquee>
        {[
          "Expert Care",
          "Pain Relief",
          "Recovery",
          "Rehabilitation",
          "Mobility",
          "Strength",
          "Healing",
          "Wellness",
          "Professional",
          "Experienced",
          "Trusted",
          "Personalized",
          "Effective",
          "Results",
        ].map((word, index) => (
          <span
            key={index}
            className="mx-4 text-xl font-semibold italic text-white">
            ✨ {word}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
