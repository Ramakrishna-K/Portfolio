import React from "react";
import { certifications } from "../../constants";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Certifications I have completed to enhance my technical knowledge and
          professional skills.
        </p>
      </div>

      {/* Certification Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="w-full sm:w-[320px] p-6 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105"
          >
            {/* Certificate Image */}
            <div className="w-full h-40 overflow-hidden rounded-lg mb-4">
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white">
              {cert.title}
            </h3>

            {/* Issuer */}
            <p className="text-gray-300 mt-1">{cert.issuer}</p>

            {/* Date */}
            <p className="text-sm text-gray-500 mt-1">{cert.date}</p>

            {/* Description */}
            <p className="text-gray-400 text-sm mt-3">
              {cert.desc}
            </p>

            {/* Button */}
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm bg-[#8245ec] px-4 py-2 rounded-lg text-white hover:bg-purple-600 transition"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;