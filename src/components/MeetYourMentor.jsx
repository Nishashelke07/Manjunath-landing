import React from "react";
import mentorImg from "../assets/coachprofile.jpg";

// ✅ add your 2 certification images here
import cert1 from "../assets/certifications/cert1.jpg";
import cert2 from "../assets/certifications/cert2.jpg";
import cert3 from "../assets/certifications/cert3.jpg";
import cert4 from "../assets/certifications/cert4.jpg";
import cert5 from "../assets/certifications/cert5.jpg";
import cert6 from "../assets/certifications/cert6.jpg";
import cert7 from "../assets/certifications/cert7.jpg";
import cert8 from "../assets/certifications/cert8.jpg";



import Certifications from "./Certifications";

export default function MeetYourMentor() {


  const certs = [
    { src: cert1, alt: "Certification 1" },
    { src: cert2, alt: "Certification 2" },
    { src: cert3, alt: "Certification 3" },
    { src: cert4, alt: "Certification 4" },
    { src: cert5, alt: "Certification 5" },
    { src: cert6, alt: "Certification 6" },
    { src: cert7, alt: "Certification 7" },
    { src: cert8, alt: "Certification 8" },
  ];

  return (
    <section className="relative bg-white py-4 px-6 md:px-12 lg:px-24">
      <div className="mt-3 max-w-6xl mx-auto border border-gray-200 rounded-3xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Image */}
          <div className="order-1 md:order-2 h-full flex items-stretch">
            <img
              src={mentorImg}
              alt="Sourav Mishra - Coach"
              className="w-full h-96 sm:h-112 md:h-full object-cover md:rounded-l-none md:rounded-r-3xl"
            />
          </div>

          {/* Content */}
          <div className="order-2 md:order-1 p-8 md:p-14">
            {/* Heading */}
            <div className="mb-8">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-orange-400">
                Meet your coach
              </p>

              <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Sourav <span className="text-orange-400">Mishra</span>
              </h2>

              <p className="mt-4 text-base md:text-lg font-medium text-gray-700 leading-relaxed">
                From struggle to success — I wasn’t born with a fit body,{" "}
                <span className="font-semibold text-gray-900">I built it.</span>
              </p>

              <div className="mt-5 inline-flex flex-wrap items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm md:text-base text-gray-700">
                <span className="font-semibold text-orange-400">10+ years</span>
                <span className="text-gray-400">•</span>
                <span className="font-semibold text-orange-400">
                  7,000+ transformations
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                After <span className="font-bold text-gray-900">10 years</span> of
                trial, error, and learning, I finally cracked the code to{" "}
                <span className="text-orange-400 font-semibold">
                  sustainable fitness that works in real life.
                </span>
              </p>

              <p className="font-semibold text-gray-900">
                Expertise &amp; Experience —
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">
                    Top 10 Pro Coach
                  </span>{" "}
                  at HealthifyMe
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                    Senior Fitness Coach
                  </span>{" "}
                  at Fitelo
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Nutritionist</span>{" "}
                  at Apollo Clinic
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Coach</span> at
                  Anytime Fitness &amp; FITRR
                </li>
                <li>
                  <span className="font-semibold text-gray-900">7,000+</span>{" "}
                  transformations
                </li>
              </ul>

              <div className="pt-2 space-y-3">
                <p className="font-semibold text-gray-900">
                  Big fitness companies make one major mistake:
                </p>
                <p className="text-gray-900 font-bold">
                  they give everyone the same plan.
                </p>
                <p>No two bodies are the same.</p>
                <p>No two lifestyles are the same.</p>

                <p className="italic text-gray-600">
                  That’s exactly why{" "}
                  <span className="font-semibold text-gray-900">HealthyNation</span>{" "}
                  exists — to give you a plan that’s built for{" "}
                  <span className="text-orange-400 font-semibold">YOU</span>, not
                  the masses.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button
                // onClick={handleRedirect}
                className="px-8 py-3 bg-orange-400 text-white font-semibold rounded-xl shadow-md hover:bg-orange-500 hover:shadow-lg transition duration-300"
              >
                Start Your Fitness Journey
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Certifications (clean + premium, fully visible) */}
        <Certifications certs={certs} />

      </div>
    </section>
  );
}
