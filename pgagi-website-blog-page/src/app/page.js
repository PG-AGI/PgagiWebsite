'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "./components/footer";
import HeroSection from "./components/myhero";
import Navbar from "./components/navbar";
import Design from "./components/design";
import Cards from "./components/cards";
import React from "react";
import PartnerCompanies from "./components/partner";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the new website page
    router.replace('/posts'); // Replace '/new-page-url' with the actual URL of the new page
  }, [router]);

  // return (
  //   <div>
  //     <div>
  //       {/* <GlareBackground/> */}
  //       <Navbar />
  //       <div>
  //         <HeroSection />
  //         <PartnerCompanies />
  //       </div>
  //       <Design />
  //       <Cards />
  //       <Footer />
  //     </div>
  //   </div>
  // );
}


// "use client"; // Ensure this is at the top of the file

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function Page() {
//   const router = useRouter();

//   useEffect(() => {
//     // Ensure the router is ready before attempting to use it
//     if (router.isReady) {
//       // Redirect to the new website page
//       router.replace('/posts'); // Replace '/new-page-url' with the actual URL of the new page
//     }
//   }, [router.isReady, router]);

//   return null; // or a loading spinner if you want
// }
