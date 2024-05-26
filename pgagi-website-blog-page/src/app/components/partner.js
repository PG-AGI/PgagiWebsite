import React from 'react';
import Image from 'next/image';

const PartnerCompanies = () => {
  // Assuming you have logos stored in your project under the `assets/logos` directory
  const companyLogos = [
    // "/images/hounddog.png", // Replace with actual path to Samsung logo
    "/images/hx.png", // Replace with actual path to T-Mobile logo
    "/images/social27.png", // Replace with actual path to Kinteract logo
    // "/images/pgagi.png", // Replace with actual path to Thinkpricing logo
  ];

  return (
    <div className="bg-white pb-8 mt-10 ">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-xl lg:text-2xl text-gray-600 pb-5 md:pb-0 whitespace-nowrap">Partnered with Innovators like</h2>
          <div className="flex justify-center items-center space-x-20 mt-4">
            {companyLogos.map((logo, index) => (
              <Image key={index} src={logo} alt="Company logo" width={64} height={64} className="h-16 object-contain " />

            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCompanies;
