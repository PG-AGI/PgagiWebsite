import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Mobilenavbar = ({ closeNavbar }) => {
    return (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-[#14213D] text-white z-50 flex flex-col">
            <div className="mt-8 ml-10">
                <button
                    className="absolute right-0 top-0 bg-transparent p-7 rounded-lg focus:outline-none"
                    onClick={closeNavbar}
                >
                    <Image src="/images/x-button.png" alt="Close Navbar" width={15} height={15} />
                </button>
                <h2 className="text-lg font-semibold text-gray-500 mb-4">AI services</h2>
                <p className="text-xl my-3 font-bold">Research</p>
                <p className="text-xl my-3 font-bold">Unlimited Subscription</p>
                <p className="text-xl my-3 font-bold">AI Review</p>
            </div>
            <div className="ml-10 flex-grow">
                <h2 className="text-lg font-semibold text-gray-500 mb-4">Industries</h2>
                <p className="text-xl my-3 font-bold">Chemical</p>
                <p className="text-xl my-3 font-bold">SaaS</p>
                <p className="text-xl my-3 font-bold">Edtech</p>
                <p className="text-xl my-3 font-bold">Health</p>
                <p className="text-xl my-3 font-bold">Commerce</p>
                <p className="text-xl my-3 font-bold">Security</p>
                <p className="text-xl my-3 font-bold">Blockchain</p>
            </div>
            <div className="ml-10 mb-8">
                <h2 className="text-lg font-semibold text-gray-500 mb-4">About Us</h2>
                <Link href="/aboutus">
                    <p className="text-xl text-white font-bold cursor-pointer">Our core principles and beliefs</p>
                </Link>
            </div>
           
            <div className="fixed bottom-0 left-0 w-full p-4 bg-[#14213D] text-white border-t border-gray-300">
                <p className="text-md mb-2">10x your product experience</p>
                <Link href="/contact-us">
                    <button className="px-8  py-4 bg-white w-full h-16 text-[#14213D] text-lg font-semibold  rounded-md focus:outline-none">
                        Contact Us
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default Mobilenavbar;
