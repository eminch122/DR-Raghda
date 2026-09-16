import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans, Cinzel, Tajawal } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { VideoModalProvider } from '@/context/VideoModalContext';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import VideoModal from '@/components/ui/VideoModal';
import { siteConfig } from '@/data/siteConfig';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

const tajawal = Tajawal({
  subsets: ['arabic'],
  variable: '--font-tajawal',
  display: 'swap',
  weight: ['400', '500', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.canonical),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.doctor.name }],
  openGraph: {
    type: 'website',
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
  icons: {
    icon: '/media/clinic-logo.png',
  },
  alternates: {
    canonical: siteConfig.seo.canonical,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Dentiste Dr Zribi Raghda - Détartrage, Prothèses, Implantologie, Esthétique, Aligneurs - Tunis Lac 2',
  logo: 'https://dr-raghda-zribi.tn/media/clinic-logo.png',
  image: 'https://dr-raghda-zribi.tn/media/clinic-logo.png',
  telephone: siteConfig.clinic.phoneDisplay,
  email: siteConfig.clinic.email,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: siteConfig.google.overallRating,
    reviewCount: String(siteConfig.google.totalReviewsCount),
    bestRating: '5',
    worstRating: '1',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${siteConfig.clinic.address.building}, ${siteConfig.clinic.address.floor}, ${siteConfig.clinic.address.street}`,
    addressLocality: siteConfig.clinic.address.city,
    postalCode: siteConfig.clinic.address.postalCode,
    addressCountry: siteConfig.clinic.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: String(siteConfig.clinic.coordinates.lat),
    longitude: String(siteConfig.clinic.coordinates.lng),
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:30',
      closes: '23:00',
    },
  ],
  medicalSpecialty: ['Dentistry', 'Implantology', 'Prosthodontics', 'Cosmetic Dentistry', 'Orthodontics'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`scroll-smooth ${playfair.variable} ${jakarta.variable} ${cinzel.variable} ${tajawal.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('dr_zribi_lang');if(s==='ar'){document.documentElement.lang='ar';document.documentElement.setAttribute('dir','rtl');}else if(s==='en'){document.documentElement.lang='en';document.documentElement.setAttribute('dir','ltr');}else if(s==='fr'){document.documentElement.lang='fr';document.documentElement.setAttribute('dir','ltr');}}catch(e){}})();`,
          }}
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-porcelain text-slate-800 antialiased selection:bg-goldPrimary selection:text-white">
        <LanguageProvider>
          <VideoModalProvider>
            <TopBar />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <WhatsAppFloat />
            <VideoModal />
          </VideoModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
