import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Poppins, Alexandria } from 'next/font/google';
import "./globals.scss";
import { AuthProvider } from "@/contexts/AuthContext";
import Providers from "@/contexts/providers";
import { SmoothScrollProvider } from "@/contexts/SmoothScrollContext";
import Navigation from "@/app/components/base/Navigation";
import Footer from "@/app/components/Footer";
import PageTransition from "@/app/components/PageTransition";

// Fonts
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '600'],
  display: 'swap',
});

const alexandria = Alexandria({
  subsets: ['latin'],
  variable: '--font-alexandria',
  weight: ['400', '600'],
  display: 'swap',
});

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
    <AuthProvider>
      <Providers>
        <SmoothScrollProvider>
          <html
            lang="en"
            className={`${poppins.variable} ${alexandria.variable}`}
          >
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              {/* Google Tag Manager */}
              {process.env.NODE_ENV === 'production' && (
              <Script id="google-tag-manager" strategy="lazyOnload">
                {`
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
                `}
              </Script>
              )}

              {/* Google Analytics */}
              {process.env.NODE_ENV === 'production' && (
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                strategy="lazyOnload"
              />
              )}
              {process.env.NODE_ENV === 'production' && (
              <Script id="google-analytics" strategy="lazyOnload">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `}
              </Script>
              )}

              {/* Structured Data */}
              <Script
                id="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "PGAGI",
                    "url": "https://pgagi.in",
                  }),
                }}
              />
            </head>

            <body>
              <noscript>
                <iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-TD3PQLP6"
                  height="0"
                  width="0"
                  style={{ display: "none", visibility: "hidden" }}
                ></iframe>
              </noscript>
              <Navigation />
              <main style={{ minHeight: '100vh', paddingTop: '0', position: 'relative' }}>
                <PageTransition>
                  {children}
                </PageTransition>
              </main>
              <Footer />
            </body>
          </html>
        </SmoothScrollProvider>
      </Providers>
    </AuthProvider>
  );
}


