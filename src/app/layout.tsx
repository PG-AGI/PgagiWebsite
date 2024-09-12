// // import type { Metadata } from "next";
// // import { Inter } from "next/font/google";
// // import "./globals.scss";

// // import { inter } from "../utils/fontHelper";

// // export const metadata: Metadata = {
// // 	title: "PGAGI",
// // 	description: "Your Go-To AI Consultancy For AI Research, AI Products, AI Solutions, AI MVP Design, Idea Validation",
// // 	icons: "icon.svg",

// // };

// // export default function RootLayout({
// // 	children,
// // }: Readonly<{
// // 	children: React.ReactNode;
// // }>) {
// // 	return (
// // 		<html lang="en" className={inter.variable}>
// // 			<body>{children}</body>
// // 		</html>
// // 	);
// // }


// //google analytics
// import type { Metadata } from "next";
// import Script from "next/script";
// import "./globals.scss";

// import { inter } from "../utils/fontHelper";

// export const metadata: Metadata = {
//   title: "PGAGI",
//   description:
//     "Your Go-To AI Consultancy For AI Research, AI Products, AI Solutions, AI MVP Design, Idea Validation",
//   icons: "icon.svg",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={inter.variable}>
//       <head>
//         {/* <!-- Google tag (gtag.js) --> */}
//         <script async src="https://www.googletagmanager.com/gtag/js?id=G-QM1JEXC04W"></script>
//         <script>
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());

//           gtag('config', 'G-QM1JEXC04W');
//         </script>
//       </head>
//       <body>{children}</body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import Script from "next/script";
import "./globals.scss";

import { inter } from "../utils/fontHelper";

export const metadata: Metadata = {
  title: "PGAGI",
  description:
    "Your Go-To AI Consultancy For AI Research, AI Products, AI Solutions, AI MVP Design, Idea Validation",
  icons: "icon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QM1JEXC04W"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QM1JEXC04W');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}

