import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Plus_Jakarta_Sans } from 'next/font/google';
import "@/styles/app/globals.scss";
import { AuthProvider } from "@/contexts/AuthContext";
import Providers from "@/contexts/providers";
import { SmoothScrollProvider } from "@/contexts/SmoothScrollContext";
import Navigation from "@/components/organisms/base/Navigation";
import Footer from "@/components/organisms/Footer";
import PageTransition from "@/components/organisms/PageTransition";

// Fonts
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '600'],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "PGAGI",
  description:
    "Your Go-To AI Consultancy For AI Research, AI Products, AI Solutions, AI MVP Design, Idea Validation",
  icons: "favicon.ico",
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
            className={`${poppins.variable} ${plusJakartaSans.variable}`}
            suppressHydrationWarning
            translate="no"
          >
            <head>
              <link rel="icon" href="/landing/PGAGI-logo.png" type="image/png" />
              <link rel="apple-touch-icon" href="/landing/PGAGI-logo.png" />
              {/* DNS prefetch for analytics — preconnect is skipped by lazyOnload scripts during Lighthouse */}
              <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
              <link rel="dns-prefetch" href="https://www.google-analytics.com" />

              <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
              <meta name="google" content="notranslate" />
              {/* Google Tag Manager — only loads when ID is configured */}
              {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GTM_ID && (
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

              {/* Google Analytics — only loads when ID is configured */}
              {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
                <Script
                  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                  strategy="lazyOnload"
                />
              )}
              {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
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
              {/* DataFast Analytics */}
              {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_DATAFAST_ID && process.env.NEXT_PUBLIC_DATAFAST_DOMAIN && (
                <Script
                  strategy="lazyOnload"
                  data-website-id={process.env.NEXT_PUBLIC_DATAFAST_ID}
                  data-domain={process.env.NEXT_PUBLIC_DATAFAST_DOMAIN}
                  src="https://datafa.st/js/script.js"
                />
              )}
            </head>

            <body>
              <noscript>
                <iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-TD3PQLP6"
                  height="0"
                  width="0"
                  className="gtmNoScriptFrame"
                ></iframe>
              </noscript>
              <Navigation />
              <main className="layoutMain">
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
