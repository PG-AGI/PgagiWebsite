// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.scss";

// import { inter } from "../utils/fontHelper";

// export const metadata: Metadata = {
// 	title: "PGAGI",
// 	description: "Your Go-To AI Consultancy For AI Research, AI Products, AI Solutions, AI MVP Design, Idea Validation",
// 	icons: "icon.svg",

// };

// export default function RootLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode;
// }>) {
// 	return (
// 		<html lang="en" className={inter.variable}>
// 			<body>{children}</body>
// 		</html>
// 	);
// }


//google analytics
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
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-K7SGQVNZCQ"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K7SGQVNZCQ');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

