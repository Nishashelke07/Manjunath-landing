import React from "react";

import cert1 from "../assets/certifications/cert1.jpeg";
import cert2 from "../assets/certifications/cert2.jpeg";
import cert3 from "../assets/certifications/cert3.jpeg";
import cert4 from "../assets/certifications/cert4.jpeg";
import cert5 from "../assets/certifications/cert5.jpeg";

const certificates = [
  { id: 1, img: cert1 },
  { id: 2, img: cert2 },
  { id: 3, img: cert3 },
  { id: 4, img: cert4 },
  { id: 5, img: cert5 },
];

const CoachBackground = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-10 pb-14 text-center">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Coach Background
          </h2>
          <p className="text-sm text-gray-500">Verified credentials</p>
        </div>

        <span className="rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-sm font-medium text-orange-600">
          5 certificates
        </span>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-2 gap-4">
        {certificates.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-gray-200 bg-white shadow-sm"
          >
            {/* Image */}
            <div className="flex items-center justify-center rounded-t-2xl bg-gray-50 p-4">
              <img
                src={item.img}
                alt={`Certificate ${item.id}`}
                className="h-32 w-auto object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-4 text-left">
              <p className="font-medium text-gray-900 truncate">
                Certification {item.id}
              </p>
              <p className="text-sm text-gray-500">Click to preview</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoachBackground;
