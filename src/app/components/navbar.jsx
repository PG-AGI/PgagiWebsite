"use client"
import React, { useState } from 'react';
import Calendlylink from '../buttons/callbutton';
import Image from 'next/image';
import Link from 'next/link';


export default function Navbar() {

    
    const [showIndustries, setShowIndustries] = useState(false);
    const [showAboutUs, setShowAboutUs] = useState(false);
    const [showSolutions, setShowSolutions] = useState(false);
    const [showAIResources, setShowAIResources] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleIndustries = () => {
        setShowIndustries(!showIndustries);
        setShowAboutUs(false); // Close About Us section
        setShowSolutions(false); // Close Solutions section
        setShowAIResources(false); // Close AI Resources section
        setSelectedOption('Industries');
    };

    const toggleAboutUs = () => {
        if (!showAboutUs) {
            setShowAboutUs(true);
            setShowIndustries(false); // Close Industries section
            setShowSolutions(false); // Close Solutions section
            setShowAIResources(false); // Close AI Resources section
            setSelectedOption('About Us');
        }
    };
    

    const toggleSolutions = () => {
        setShowSolutions(!showSolutions);
        setShowIndustries(false); // Close Industries section
        setShowAboutUs(false); // Close About Us section
        setShowAIResources(false); // Close AI Resources section
        setSelectedOption('Solutions');
    };

    const toggleAIResources = () => {
        setShowAIResources(!showAIResources);
        setShowIndustries(false); // Close Industries section
        setShowAboutUs(false); // Close About Us section
        setShowSolutions(false); // Close Solutions section
        setSelectedOption('AI resources');


    };


   
   







    return (
        
        
             <div>
            {/* Thin horizontal blue line */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30px', backgroundColor: '#14213d', width: '100%' }}>
    <span style={{ marginRight: '10px' }} className='text-white'>AI Calling Agent</span>
    <div>
        <Link href="/aboutus" style={{ fontWeight: 'bold' }} className='text-white'>Learn more</Link>
    </div>
</div>
            
            <div className="bg-white border-b-2 h-24 hidden md:flex md:justify-evenly md:px-8 lg:px-12 xl:px-24 ">
                {/* Logo */}
                <div className='flex items-center justify-center xl:pl-16 md:pl-10'>
                    <div className='flex-shrink-0  ' >
                        <Image src="/images/pgagi.png" alt="Company logo" className="h-14 object-contain" width={60} height={60}/>
                    </div>
                    <div className='text-3xl font-bold ml-2'>PG-AGI</div>
                </div>
                {/* Navbar links */}
                <div className="header-links contents font-semibold text-base lg:text-base ">
                    <ul className="flex items-center ml-4  lg:ml-5 xl:ml-2 lg:mr-8">
                    <li className="p-2.5 xl:p-6 text-center">
                    <Link href="/projects" className="text-decoration-none">
  <span>Our Projects</span>
</Link>
</li>
                        <li className="p-2.5 xl:p-6">
                            <button onMouseEnter={() => toggleSolutions('Solutions')}  className="focus:outline-none flex items-center">
                                <span className={selectedOption === 'Solutions' ? 'text-[#14213d]' : 'hover:text-[#14213d] cursor-pointer'}>Solutions</span>
                                <Image src="/images/dropdown.svg" width={20} height={20} alt="dropdown" className="ml-1 w-4 h-4" />
                            </button>
                        </li>
                        <li className="p-2.5 xl:p-6">
                            <button onMouseEnter={() => toggleIndustries('Industries')} className="focus:outline-none flex items-center">
                                <span className={selectedOption === 'Industries' ? 'text-[#14213d]' : 'hover:text-[#14213d] cursor-pointer'}>Industries</span>
                                <Image src="/images/dropdown.svg" width={20} height={20} alt="dropdown" className="ml-1 w-4 h-4" />
                            </button>
                        </li>
                        <li className="p-2.5 xl:p-6">
                            <button onMouseEnter={() => toggleAboutUs('About Us')}  className="focus:outline-none flex items-center">
                                <span className={selectedOption === 'About Us' ? 'text-[#14213d]' : 'hover:text-[#14213d] cursor-pointer'}>About Us</span>
                                <Image src="/images/dropdown.svg" width={20} height={20} alt="dropdown" className="ml-1 w-4 h-4" />
                            </button>
                        </li>
                        <li className="p-2.5 xl:p-6">
                            <button onMouseEnter={() => toggleAIResources('AI Resources')}  onClick={toggleAIResources} className="focus:outline-none flex items-center">
                                <span className={selectedOption === 'AI resources' ? 'text-[#14213d]' : 'hover:text-[#14213d] cursor-pointer'}>AI Resources</span>
                                <Image src="/images/dropdown.svg" width={20} height={20} alt="dropdown" className="ml-1 w-4 h-4" />
                            </button>
                        </li>
                    </ul>
                </div>
                {/* Search bar and button */}
                <div className=" md: lg:-ml-12 flex items-center gap-5 ">
                    <form action="" className="relative mx-auto w-max">
                        <input type="search"
                            className=" peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-primary focus:pl-16 focus:pr-4" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-0.5 absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-primary peer-focus:stroke-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </form>
                    <Calendlylink/>
                </div>
            </div>

            {/* AI Resources Section */}
            {showAIResources && (
                <div className="bg-white border-b-2 hidden md:flex md:justify-evenly md:px-8 lg:px-12 xl:px-24 py-6" onMouseLeave={() => setShowAIResources(false)}>
                    <div className="text-gray-600 body-font mt-0 flex flex-wrap justify-center" style={{ width: '80%', height: '280px', overflow: 'hidden' }}>
                        {/* <div className="py-6 px-6 flex items-start  w-full md:w-1/3" style={{ position: 'relative' }}>
                            <div className="h-full flex-grow hover:bg-[#F5F6FC]  mb-6 group" style={{ width: '100%', height: '100%' }}>
                                <div className="flex items-center">
                                    <h1 className="title-font text-md font-bold text-gray-600 hover:text-black     mb-3">AI+ eBook</h1>
                                    <img
                                        src="/images/rightarrow.png"
                                        alt="Arrow"
                                        style={{ width: '20px', height: '20px', transition: 'transform 0.1s' }}
                                        className='group-hover:translate-x-1'
                                    />
                                </div>
                                <p className="text-gray-600 hover:text-black    text-sm leading-relaxed mb-5">Maximize your AI knowledge</p>
                            </div>
                        </div> */}
                        <div className="py-6 px-6 flex items-start w-full md:w-1/3" style={{ position: 'relative' }}>
                            <div className="h-full flex-grow flex flex-col" style={{ width: '100%', height: '100%' }}>
                                <div className='hover:bg-[#F5F6FC]  mb-6 group' style={{ width: '100%' }}>
                                    <div className="flex items-center">
                                        <h1 className="title-font text-md font-bold text-gray-600 hover:text-black     mb-3" style={{ marginRight: '10px' }}> Blog</h1>
                                        <Image
    src="/images/rightarrow.png"
    alt="Arrow"
    width={20}
    height={20}
    style={{ transition: 'transform 0.1s' }}
    className='group-hover:translate-x-1'
/>

                                    </div>
                                    <p className="text-gray-600 hover:text-black    text-sm leading-relaxed mb-5">Articles and Stories</p>
                                </div>
                                {/* <div className='hover:bg-[#F5F6FC]  mb-6 group' style={{ width: '100%' }}>
                                    <div className="flex items-center">
                                        <h1 className="title-font text-md font-bold text-gray-600 hover:text-black     mb-3" style={{ marginRight: '10px' }}>See All Downloads</h1>
                                        <img
                                            src="/images/rightarrow.png"
                                            alt="Arrow"
                                            style={{ width: '20px', height: '20px', transition: 'transform 0.1s' }}
                                            className='group-hover:translate-x-1'
                                        />
                                    </div>
                                    <p className="text-gray-600 hover:text-black    text-sm leading-relaxed mb-5">UX Templates,checklist & Guides</p>
                                </div> */}
                            </div>
                            {/* Vertical Line */}
                            {/* <div className="absolute h-full w-px bg-gray-200 top-0 right-0"></div> */}
                        </div>
                        <div className="py-6 px-6 flex items-start hover:bg-[#F5F6FC]  mb-6 group w-full md:w-1/3">
                            {/* <div className="h-full flex-grow" style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                                <div className="flex items-center">
                                    <h1 className="title-font text-md font-bold text-gray-600 hover:text-black     mb-3" style={{ marginRight: '10px' }}>AI pilot</h1>
                                    <img
                                        src="/images/rightarrow.png"
                                        alt="Arrow"
                                        style={{ width: '20px', height: '20px', transition: 'transform 0.1s' }}
                                        className='group-hover:translate-x-1'
                                    />
                                </div>
                                <p className="text-gray-600 hover:text-black    text-sm leading-relaxed mb-5">Your AI-UX Assistant</p>
                                <div style={{ position: 'relative', flex: '1', width: '100%' }}>
                                    <video autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}>
                                        <source src="https://www.datocms-assets.com/16499/1699230326-customws.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            )}

            {showSolutions && (
                <div className="bg-white border-b-2 hidden md:flex md:justify-evenly md:px-8 lg:px-12 xl:px-24 py-4" onMouseLeave={() => setShowSolutions(false)}>
                    <div className="text-gray-600 body-font mt-0 flex flex-wrap justify-center" style={{ width: '80%', maxHeight: '515px', overflowY: 'auto' }}>
                        <div className="py-4 px-4 flex items-start w-full md:w-1/3 relative">
                            <div className="h-full flex-grow">
                                <div className='hover:bg-[#F5F6FC]  mb-6 group mb-6'>
                                    <div className="flex items-center">
                                        <h1 className="title-font text-md font-bold text-gray-600 hover:text-black     mb-2 mr-2">Create MVP</h1>
                                        <Image
    src="/images/rightarrow.png"
    alt="Arrow"
    width={20}
    height={20}
    style={{ transition: 'transform 0.1s' }}
    className='group-hover:translate-x-1'
/>

                                    </div>
                                    <p className="text-gray-600 hover:text-black    text-sm leading-relaxed mb-4">Create a standout AI-powered prototype that impresses investors with seamless functionality and cutting-edge technology..</p>
                                </div>
                                <div className='hover:bg-[#F5F6FC]  mb-6 group'>
    <div className="flex items-center">
        <h1 className="title-font text-md font-bold text-gray-600 hover:text-black mb-2 mr-2">Improve Product</h1>
        <Image
    src="/images/rightarrow.png"
    alt="Arrow"
    width={20}
    height={20}
    style={{ transition: 'transform 0.1s' }}
    className='group-hover:translate-x-1'
/>

    </div>
    <p className="text-gray-600 hover:text-black text-sm leading-relaxed mb-4">Enhance your product with AI integration for optimized processes, improved user experience, and smart features, all without adding complexity.</p>
</div>

                                <div className='hover:bg-[#F5F6FC]   mb-6 group'>
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            <h1 className="title-font text-md font-bold text-gray-600 hover:text-black     mb-2 mr-2">AI Research</h1>
                                            <Image
    src="/images/rightarrow.png"
    alt="Arrow"
    width={20}
    height={20}
    style={{ transition: 'transform 0.1s' }}
    className='group-hover:translate-x-1'
/>

                                        </div>
                                    </div>
                                    <p className="text-gray-600 hover:text-black     text-sm leading-relaxed mb-4">Gain deeper insights with AI-driven research, accurately predicting market behaviors and user preferences through advanced analytics.</p>
                                </div>
                            </div>
                            <div className="absolute h-full w-px bg-gray-200 top-0 right-0"></div> {/* Vertical Line */}
                        </div>
                        <div className="py-4 px-4 flex items-start w-full md:w-1/3 relative">
                            <div className="h-full flex-grow flex flex-col">
                                <div className='hover:bg-[#F5F6FC]  mb-6 group '>
                                    <div className="flex items-center">
                                        <h1 className="title-font text-md font-bold text-gray-600 hover:text-black     mb-2 mr-2">AI Calling Agent Subscription:</h1>
                                        <Image
    src="/images/rightarrow.png"
    alt="Arrow"
    width={20}
    height={20}
    style={{ transition: 'transform 0.1s' }}
    className='group-hover:translate-x-1'
/>

                                    </div>
                                    <ul className="list-disc pl-0 text-gray-600 hover:text-black">
                                        <li className="flex items-center mb-2" style={{ listStyle: 'none' }}>
                                        <Image src="/images/tick.png" alt="Tick" width={20} height={20} className="mr-2" />
                                            <span className='text-sm text-gray-600 hover:text-black '>Unlimited AI Calls:</span>
                                        </li>
                                        <li className="flex items-center mb-2" style={{ listStyle: 'none' }}>
                                        <Image src="/images/tick.png" alt="Tick" width={20} height={20} className="mr-2" />
                                            <span className='text-sm text-gray-600 hover:text-black '>Humanized Interactions:</span> 
                                        </li>
                                        <li className="flex items-center mb-2" style={{ listStyle: 'none' }}>
                                        <Image src="/images/tick.png" alt="Tick" width={20} height={20} className="mr-2" />

                                            <span className='text-sm text-gray-600 hover:text-black '>Seamless CRM Integration:
</span>
                                        </li>
                                        <li className="flex items-center mb-2" style={{ listStyle: 'none' }}>
                                        <Image src="/images/tick.png" alt="Tick" width={20} height={20} className="mr-2" />
                                            <span className='text-sm text-gray-600 hover:text-black '>Advanced Analytics & Insights with AI/ ML:
</span>
                                        </li>
                                    </ul>
                                </div>
                                <img src="https://adamfard.com/static/ux-design-agency-4-f773052c59837895521f19104191f67b.jpg" alt="Design Stream Subscription" className="w-full h-auto mb-4" style={{ maxHeight: 'calc(100% - 100px)' }} />
                            </div>
                            <div className="absolute h-full w-px bg-gray-200 top-0 right-0"></div> {/* Vertical Line */}
                        </div>
                        <div className="py-4 px-4 flex items-start w-full md:w-1/3 relative">
                            <div className="h-auto flex-grow">
                                <div className='hover:bg-[#F5F6FC]   group mb-6'>
                                    <div className="flex items-center">
                                        <h1 className="title-font text-md font-bold text-gray-600 hover:text-black     mb-2 mr-2">AI Strategy & Optimization Review:
</h1>
<Image
    src="/images/rightarrow.png"
    alt="Arrow"
    width={20}
    height={20}
    style={{ transition: 'transform 0.1s' }}
    className='group-hover:translate-x-1'
/>

                                    </div>
                                    <p className="text-gray-600 hover:text-black    text-sm leading-relaxed mb-4 text-md"><span className='font-bold'>Comprehensive AI Assessment:</span> Obtain an extensive 60+ page analysis of your current AI capabilities and future potential, identifying key areas for immediate improvement and strategic growth for the developers.

</p>
                                </div>
                                <img src="https://adamfard.com/static/ux-review-report-b4e2fc39a551aedd6130fd9020550e6b.png" alt="Solution 4 Image" className="w-full h-auto mb-4" style={{ maxHeight: 'calc(100% - 100px)' }} />
                            </div>
                            
                        </div>
                    </div>
                </div>
            )}

            {/* Industries Section */}
            {showIndustries && (
  <div className="bg-white border-b-2 hidden md:flex md:flex-wrap md:justify-evenly md:px-8 lg:px-12 xl:px-24" onMouseLeave={() => setShowIndustries(false)}>
    <section className="text-gray-600 body-font mt-0 grid grid-cols-3 gap-x-40 gap-y-0 justify-center">
      {[
        'Fintech', 'Chemical', 'SaaS', 'Edtech', 'Health',
        'Commerce', 'Security', 'Blockchain', 'Gaming',
        'Agritech', 'Proptech', 'Insurtech', 'Biotech', 'Cleantech',
        'Mobility', 'Foodtech', 'Medtech', 'Legaltech'
      ].map((industry, index) => (
        <div key={index} className="py-1 px-4 flex items-start hover:bg-[#F5F6FC] mb-6 group">
          <div className="h-full flex-grow">
            <div className="flex items-center">
              <h1 className="title-font text-md font-bold text-gray-600 hover:text-black mb-3">{industry}</h1>
             
            </div>
          </div>
        </div>
      ))}
    </section>
  </div>
)}





            {/* About Us Section */}
            {showAboutUs && (
    <div className="bg-white border-b-2 hidden md:flex md:justify-evenly md:px-8 lg:px-12 xl:px-24" onMouseLeave={() => setShowAboutUs(false)}>
       
        <section className="text-gray-600 body-font mt-0">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-wrap items-start justify-center -mx-8 -my-8">
                {/* <div className="py-8 px-8  flex items-start justify-center" style={{ marginLeft: '1rem', padding: '2rem', maxWidth: '400px', borderRadius: '8px' }} onMouseEnter={() => toggleAboutUs('Our core principles and beliefs')}>
                        <div className="h-full flex-grow">
                            <div className="flex hover:bg-[#F5F6FC]  mb-6 group items-center">
                                <h1 className="title-font text-md font-bold text-gray-600 hover:text-black     mb-3" style={{ marginRight: '10px' }}>Our Story and why Us</h1>
                                <img
                                    src="/images/rightarrow.png"
                                    alt="Arrow"
                                    style={{ width: '20px', height: '20px', transition: 'transform 0.1s' }}
                                    className='group-hover:translate-x-1'
                                />
                            </div>
                        </div>
                    </div> */}
                    <div className="py-8 px-8 flex items-start justify-center" style={{ marginLeft: '1rem', padding: '2rem', maxWidth: '400px', borderRadius: '8px' }} onMouseEnter={() => toggleAboutUs('Our core principles and beliefs')}>
      <div className="h-full flex-grow">
        <div className="flex hover:bg-[#F5F6FC] mb-6 group items-center">
          <Link href="/aboutus" className="title-font text-md font-bold text-gray-600 hover:text-black mb-3" style={{ marginRight: '10px' }}>
            Our core principles and beliefs
          </Link>
          <Image
    src="/images/rightarrow.png"
    alt="Arrow"
    width={20}
    height={20}
    style={{ transition: 'transform 0.1s' }}
    className='group-hover:translate-x-1'
/>

        </div>
      </div>
    </div>
                </div>
            </div>
        </section>
    </div>
)}
        </div>
    );
}