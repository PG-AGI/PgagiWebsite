'use client'
import { TypeAnimation } from "react-type-animation"
import Mobilenavbar from "./mobilenavbar"; // Import the Mobilenavbar component
import Calendlylink from "../buttons/callbutton"; // Import the CalendlyLink component
import Image from "next/image";
import heroImage from "../../../public/images/hero-image.png";
import React, { useState } from 'react';

const Mysvg = () => {
    return (
        <svg
            fill="#000000"
            viewBox="0 0 24 24"
            id="research"
            data-name="Flat Line"
            xmlns="http://www.w3.org/2000/svg"
            className="icon flat-line mx-1 -ml-1"
            width={30}
            height={25}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <circle id="secondary" cx="8" cy="10" r="3" style={{ fill: "#2ca9bc", strokeWidth: 2 }}></circle>
                <path
                    id="primary"
                    d="M17,12v5m-4,0V15M3,15l2.83-2.83M8,7a3,3,0,1,0,3,3A3,3,0,0,0,8,7Z"
                    style={{
                        fill: "none",
                        stroke: "#000000",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                    }}
                ></path>
                <path
                    id="primary-2"
                    data-name="primary"
                    d="M8,3H20a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V17"
                    style={{
                        fill: "none",
                        stroke: "#000000",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                    }}
                ></path>
            </g>
        </svg>
    );
};






export default function HeroSection() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    return (
        <div className="container max-w-screen-xl mx-auto px-4 bg-white ">
            {/* Heading and Navbar button */}
            <div className="flex justify-between items-center py-4 relative">
    <div className="font-bold text-xl md:text-xl md:hidden">PG-AGI</div>
    <button
        className="md:hidden bg-transparent p-2 rounded-lg focus:outline-none "
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
    >
        <Image src="/images/menu.png" alt="Menu" width={30} height={30} />
    </button>
    <div className="md:hidden absolute bottom-0 left-0 w-full h-px bg-gray-200"></div> {/* Horizontal line */}
</div>


            <div className="flex flex-col md:flex-row justify-between space-x-2">
                <div className="text-center md:text-left mt-5 md:w-[55%] md:ml-8 lg:ml-12 xl:ml-16">
                    {/* Content */}
                    <div className="font-bold text-white-900 text-sm md:text-md leading-normal md:mb-2 mt-2"> Start your AI journey with us</div>
                    <div className="font-extrabold text-white-900 text-2xl md:text-4xl lg:text-4xl xl:text-6xl leading-normal mb-8 mygrad ">Your Go-To <br />AI Consultancy
                        <div className="md:pt-1 lg:pt-5"> for {' '}
                            <TypeAnimation
                                sequence={[
                                    "AI MVP Design",
                                    1000,
                                    ' AI Research',
                                    1000,
                                    ' Idea Validation',
                                    1000,
                                    "AI Solutions",
                                    1000,
                                    "AI Products",
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ display: 'inline-block', color: '#14213d' }}
                                repeat={Infinity}
                            />
                        </div>
                    </div>
                    <div className="text-center mt-10">
                        <div className=" text-mg md:text-md mt-4 leading-normal mb-4  bg-warning p-1 px-3 rounded-2xl w-fit">AI Adoptions typically result in:</div>
                        <div className="pb-10">
                            <ul className="max-w-md space-y-3 text-gray-700 list-inside text-left">
                                <li className="flex items-center">
                                    <svg className="w-7 h-7 me-2 text-green-500  flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    35% efficiency gains in business processes.
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-7 h-7 me-2 text-green-500  flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    150% ROI for every dollar invested.
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-7 h-7 me-2 text-green-500  flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    Decision-making speeds improved by 300%.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-4 md:flex-row py-0 px-6 md:justify-start justify-between items-center mt-0 lg:gap-6 md:gap-6">
    <div className="w-full md:w-auto ">
        <Calendlylink />
    </div>
    <button className=" border border-primary text-gray-800 font-bold py-4 px-6 rounded inline-flex items-center gap-3 text-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl cursor-pointer">
        <Mysvg />
        <span>See case studies</span>
    </button>
</div>
                </div>
                <div className="mt-2 md:w-[45%]">
                    <Image src={heroImage} priority="true" alt="Hero Image" className=" md:pb-20 md:h-full md:w-full  h-[500px] w-[800px] md:mr-16 md:object-contain  " />
                </div>
            </div>

            {/* Mobile Navbar */}
            {isNavbarOpen && <Mobilenavbar closeNavbar={() => setIsNavbarOpen(false)} />}
        </div>
    );
}
