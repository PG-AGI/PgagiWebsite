"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Design = () => {
  const initialContent = {
    paragraph: (
      <>
        These problems, being so common, call for decisive and drastic solutions. The solutions, below, however, only scratch the surface of the deep underlying problems.
      </>
    ),
    listItems: ['Low activation and adoption', 'Low Retention', 'Less churn']
  };

  const [content, setContent] = useState(initialContent);
  const [thirdSVGContent, setThirdSVGContent] = useState({});
  const [isTextBlue, setIsTextBlue] = useState(false);

  const handleButtonClick = (svgNumber) => {
    setIsTextBlue(true); // Set text color to blue when button is clicked

    if (svgNumber === 1) {
      setContent({
        paragraph: (
          <>
            For most tech ventures, product performance is synonymous with business performance. However, despite the vitality of the product&apos;s success, the problems below couldn&apos;t be any more common.
          </>
        ),
        listItems: ['Low activation and adoption', 'Low Retention', 'Less churn']
      });
    } else if (svgNumber === 2) {
      setContent({
        paragraph: (
          <>
            These problems, being so common, call for decisive and drastic solutions. The solutions, below, however, only scratch the surface of the deep underlying problems.
          </>
        ),
        listItems: ['Hire more people', 'Launch new features', 'Increase the Marketing & Sales Budget', 'Retarget customers']
      });
      setThirdSVGContent({}); // Reset third SVG content
    } else if (svgNumber === 3) {
      setThirdSVGContent({
        paragraph: (
          <>
            Before reallocating resources to marketing or sales, ensure your product&apos;s core is AI-enhanced for smarter performance. Our AI solutions elevate your product by
          </>
        ),
        listItems: [
          'Predictive Analytics Enhancement',
          'Personalized Experience Algorithms',
          'Data-Informed Design Insights',
          'Advanced Interaction Intelligence',
          'Insight-Driven Feature Development',
        ]
      });
    }
  };

  const [isOpenChallenges, setIsOpenChallenges] = useState(false);
  const [isOpenCompanies, setIsOpenCompanies] = useState(false);
  const [isOpenWhatWeDo, setIsOpenWhatWeDo] = useState(false);

  return (
    <div className="p-4 sm:p-8 ">
    <div className="flex justify-center">
      <div className="w-full lg:w-2/5">
        <h1 className="text-3xl sm:text-5xl  font-extrabold text-center mb-20">Have you ever been <br /> down this road?</h1>

        <div>
          <h1
            className="text-lg font-bold  cursor-pointer flex justify-between items-center mb-8"
            onClick={() => setIsOpenChallenges(!isOpenChallenges)}
          >
            Product Challenges
            <span className={`transform transition-transform ${isOpenChallenges ? 'rotate-180' : ''}`}>&#9660;</span>
          </h1>
          {isOpenChallenges && (
            <div className="pl-4">
              <p className="mb-4 text-md">
                For most tech ventures, product performance is synonymous with business performance. However, despite the vitality of the product&apos;s success, the problems below couldn&apos;t be any more common.
              </p>
              <ul className="mb-8 list-none pl-0 text-md">
                <li><Image src="/images/cross.png" alt="Tick" width={16} height={16} className="inline-block mr-2" />Low activation and adoption</li>
                <li><Image src="/images/cross.png" alt="Tick" width={16} height={16} className="inline-block mr-2" />Low Retention</li>
                <li><Image src="/images/cross.png" alt="Tick" width={16} height={16} className="inline-block mr-2" />Less churn</li>
              </ul>
            </div>
          )}
        </div>

        <div>
          <h1
            className="text-lg font-bold mb-8 cursor-pointer flex justify-between items-center"
            onClick={() => setIsOpenCompanies(!isOpenCompanies)}
          >
            What other companies do
            <span className={`transform transition-transform ${isOpenCompanies ? 'rotate-180' : ''}`}>&#9660;</span>
          </h1>
          {isOpenCompanies && (
            <div className="pl-4">
              <p className="mb-4 text-md">
                These problems, being so common, call for decisive and drastic solutions. The solutions, below, however, only scratch the surface of the deep underlying problems.
              </p>
              <ul className="mb-8 list-none pl-0 text-md">
                <li><Image src="/images/cross.png" alt="Tick" width={16} height={16} className="inline-block mr-2" />Hire more people</li>
                <li><Image src="/images/cross.png" alt="Tick" width={16} height={16} className="inline-block mr-2" />Launch new features</li>
                <li><Image src="/images/cross.png" alt="Tick" width={16} height={16} className="inline-block mr-2" />Increase the Marketing & Sales Budget</li>
                <li><Image src="/images/cross.png" alt="Tick" width={16} height={16} className="inline-block mr-2" />Retarget customers</li>
              </ul>
            </div>
          )}
        </div>

        <div>
          <h1
            className="text-lg font-bold mb-4 cursor-pointer flex justify-between items-center"
            onClick={() => setIsOpenWhatWeDo(!isOpenWhatWeDo)}
          >
            What we do
            <span className={`transform transition-transform ${isOpenWhatWeDo ? 'rotate-180' : ''}`}>&#9660;</span>
          </h1>
          {isOpenWhatWeDo && (
            <div className="pl-4">
              <p className="mb-4 text-md">
                Before pouring your budget into marketing, team composition, and sales, you should build a solid foundation with an outstanding product experience. That&apos;s what we do. We design products that market themselves to make your job that much easier.
              </p>
              <ul className="list-none pl-0 text-md">
                <li><Image src="/images/correct.png" alt="Tick" width={16} height={16} className="inline-block mr-2" />Predictive Analytics Enhancement</li>
                <li><Image src="/images/correct.png" alt="Tick" width={16} height={16} className="inline-block mr-2" />Personalized Experience Algorithms</li>
                <li><Image src="/images/correct.png" alt="Tick" width={16} height={16} className="inline-block mr-2" />Data-Informed Design Insights</li>
                <li><Image src="/images/correct.png" alt="Tick" width={16} height={16} className="inline-block mr-2" />Advanced Interaction Intelligence</li>
                <li><Image src="/images/correct.png" alt="Tick" width={16} height={16} className="inline-block mr-2" />Insight-Driven Feature Development</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>




  );
};

export default Design;
