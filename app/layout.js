import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import BrochureWrapper from "@/components/BrochureWrapper";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default:
      "Divyasree The Quiet Side | The Quiet Side by DivyaSree | Yelahanka Bangalore Apartments",
    template: "%s | The Quiet Side by DivyaSree",
  },

  description:
    "Explore Divyasree The Quiet Side, a luxury apartment in Yelahanka New Town, Bangalore. Spread across 5.5 acres, The Quiet Side by DivyaSree excellent connectivity to IT hubs and the airport.",

  keywords: [
    "The Quiet Side by DivyaSree",
    "Divyasree The Quiet Side",
    "The Quiet Side Bangalore",
    "The Quiet Side Yelahanka",
    "Divyasree apartments Yelahanka",
    "luxury apartments in Yelahanka",
  ],

  metadataBase: new URL("https://www.divyasreethequietside.co"),

  alternates: {
    canonical: "https://www.divyasreethequietside.co/",
  },

  openGraph: {
    title:
      "The Quiet Side by DivyaSree | Luxury Apartments in Yelahanka Bangalore",
    description:
      "Explore Divyasree The Quiet Side, a luxury apartment in Yelahanka New Town, Bangalore. Spread across 5.5 acres, The Quiet Side by DivyaSree excellent connectivity to IT hubs and the airport.",
    url: "https://www.divyasreethequietside.co/",
    siteName: "The Quiet Side by DivyaSree",
    images: [
      {
        url: "https://www.divyasreethequietside.co/images/banner/divyasreethequietside.webp",
        width: 1200,
        height: 630,
        alt: "The Quiet Side by DivyaSree Yelahanka Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "The Quiet Side by DivyaSree | Yelahanka Bangalore Apartments",
    description:
      "Discover luxury 3 and 3.5 BHK apartments at The Quiet Side by DivyaSree in Yelahanka New Town, Bangalore.",
    images: [
      "https://www.divyasreethequietside.co/images/banner/divyasreethequietside.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  authors: [
    {
      name: "The Quiet Side by DivyaSree",
      url: "https://www.divyasreethequietside.co/",
    },
  ],

  creator: "The Quiet Side by DivyaSree",
  publisher: "The Quiet Side by DivyaSree",

  category: "Real Estate",

  verification: {
    google: "5v3LrvOEHTMP_lT9pjGs99a1VvX1aeCfaqGpoC0g-mM",
  },
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "DivyaSree Developers",
        url: "https://www.divyasreethequietside.co/",
        logo:
          "https://www.divyasreethequietside.co/images/banner/divyasreethequietside.webp",
      },

      {
        "@type": "ApartmentComplex",
        name: "The Quiet Side by DivyaSree",
        description:
          "Explore Divyasree The Quiet Side, a luxury apartment in Yelahanka New Town, Bangalore. Spread across 5.5 acres, The Quiet Side by DivyaSree excellent connectivity to IT hubs and the airport.",
        url: "https://www.divyasreethequietside.co/",
        image:
          "https://www.divyasreethequietside.co/images/banner/divyasreethequietside.webp",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Yelahanka New Town",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          postalCode: "560064",
          addressCountry: "IN",
        },

        numberOfAccommodationUnits: "270",

        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Swimming Pool",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Gymnasium",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Clubhouse",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Children Play Area",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Landscaped Gardens",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Walking Pathways",
            value: true,
          },
        ],

        offers: {
          "@type": "Offer",
          price: "24500000",
          priceCurrency: "INR",
          availability: "https://schema.org/PreSale",
          url: "https://www.divyasreethequietside.co/",
        },
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Divyasree The Quiet Side?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Divyasree The Quiet Side is an upcoming premium low-density residential project located in Yelahanka New Town, North Bangalore offering luxury 3 BHK and 3.5 BHK apartments and penthouses.",
            },
          },

          {
            "@type": "Question",
            name: "Where is The Quiet Side by DivyaSree located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The project is located in Yelahanka New Town, North Bangalore with connectivity to Hebbal, Manyata Tech Park, Bellary Road, and Kempegowda International Airport.",
            },
          },

          {
            "@type": "Question",
            name: "Who is the developer of The Quiet Side by DivyaSree?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The project is being developed by DivyaSree Developers, a Bangalore-based real estate developer known for premium residential and commercial developments.",
            },
          },

          {
            "@type": "Question",
            name: "What apartment configurations are available in The Quiet Side by DivyaSree?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The project offers spacious 3 BHK and 3.5 BHK luxury apartments along with select penthouse residences.",
            },
          },

          {
            "@type": "Question",
            name: "What is the starting price of apartments in The Quiet Side by DivyaSree?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The expected starting price of residences in the project is approximately ₹2.45 Crore onwards.",
            },
          },

          {
            "@type": "Question",
            name: "How large is The Quiet Side by DivyaSree project?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The project is spread across approximately 5.5 acres and includes around 270 residential units with low-density planning.",
            },
          },

          {
            "@type": "Question",
            name: "What amenities are available in The Quiet Side by DivyaSree?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The project is expected to include a clubhouse, swimming pool, gymnasium, landscaped gardens, children's play areas, walking pathways, indoor recreation spaces, and modern security systems.",
            },
          },

          {
            "@type": "Question",
            name: "What is the tower configuration of The Quiet Side by DivyaSree?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The project consists of 3 residential towers with Basement + Ground + 23 floors.",
            },
          },

          {
            "@type": "Question",
            name: "What is the expected possession timeline for The Quiet Side by DivyaSree?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The tentative possession timeline for the project is expected from 2030 onwards.",
            },
          },

          {
            "@type": "Question",
            name: "Why is Yelahanka a preferred residential location in Bangalore?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yelahanka is considered one of the preferred residential locations in North Bangalore because of its greenery, organized infrastructure, airport connectivity, educational institutions, healthcare facilities, and proximity to major employment hubs.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>

      <body
        className={`${poppins.variable} ${robotoMono.variable} antialiased`}
      >
        <Header />
        <BrochureWrapper />
        {children}
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}