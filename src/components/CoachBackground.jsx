import React from "react";

const certificates = [
  { id: 1, img: "/certificates/cert1.png" },
  { id: 2, img: "/certificates/cert2.png" },
  { id: 3, img: "/certificates/cert3.png" },
  { id: 4, img: "/certificates/cert4.png" },
  { id: 5, img: "/certificates/cert5.png" },
  { id: 6, img: "/certificates/cert6.png" },
  { id: 7, img: "/certificates/cert7.png" },
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
          7 certificates
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
              {/* <img
                src={item.img}
                alt="Certificate"
                className="h-32 w-auto object-contain"
              /> */}
            </div>

            {/* Content */}
            <div className="p-4">
              <p className="font-medium text-gray-900 truncate">
                Certification...
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
