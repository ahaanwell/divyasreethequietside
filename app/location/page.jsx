import BlogSection from "@/components/BlogsSection";
import LocationPage from "./LocationPage";

export const metadata = {
  title: {
    default:
      "The Quiet Side by DivyaSree Location | Yelahanka New Town Bangalore Connectivity",
    template: "%s | The Quiet Side by DivyaSree Location",
  },

  description:
    "Explore the prime location of The Quiet Side by DivyaSree in Yelahanka New Town, North Bangalore. Enjoy excellent connectivity to Hebbal, Manyata Tech Park, Bellary Road, Kempegowda International Airport, schools, hospitals, and business hubs.",

  keywords: [
    "The Quiet Side by DivyaSree location",
    "Divyasree The Quiet Side location",
    "The Quiet Side Yelahanka location",
    "Divyasree apartments Yelahanka",
    "Yelahanka New Town apartments",
  ],

  metadataBase: new URL("https://www.divyasreethequietside.co"),

  alternates: {
    canonical: "https://www.divyasreethequietside.co/location",
  },

  openGraph: {
    title:
      "The Quiet Side by DivyaSree Location | Yelahanka Bangalore",
    description:
      "Discover the strategic location advantages of The Quiet Side by DivyaSree in Yelahanka New Town with connectivity to Hebbal, Manyata Tech Park, airport, schools, and hospitals.",
    url: "https://www.divyasreethequietside.co/location",
    siteName: "The Quiet Side by DivyaSree",

    images: [
      {
        url:
          "https://www.divyasreethequietside.co/images/location-banner.png",
        width: 1200,
        height: 630,
        alt: "The Quiet Side by DivyaSree Location Map",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "The Quiet Side by DivyaSree Location | Yelahanka Connectivity",

    description:
      "View the location map and connectivity advantages of The Quiet Side by DivyaSree in Yelahanka New Town Bangalore.",

    images: [
      "https://www.divyasreethequietside.co/images/location-banner.png",
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Real Estate",
};

export default function page() {
  const schema = {
    "@context": "https://schema.org",

    "@graph": [

      {
        "@type": "BreadcrumbList",

        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.divyasreethequietside.co/"
          },

          {
            "@type": "ListItem",
            position: 2,
            name: "Location",
            item: "https://www.divyasreethequietside.co/location"
          }
        ]
      },

      {
        "@type": "ApartmentComplex",

        name: "The Quiet Side by DivyaSree",

        description:
          "The Quiet Side by DivyaSree is a premium low-density residential apartment project located in Yelahanka New Town, North Bangalore with excellent connectivity to Hebbal, Manyata Tech Park, Bellary Road and Kempegowda International Airport.",

        url: "https://www.divyasreethequietside.co/location",

        image:
          "https://www.divyasreethequietside.co/images/location-banner.png",

        address: {
          "@type": "PostalAddress",

          streetAddress: "Yelahanka New Town",

          addressLocality: "Bangalore",

          addressRegion: "Karnataka",

          postalCode: "560064",

          addressCountry: "IN"
        },

        geo: {
          "@type": "GeoCoordinates",

          latitude: "13.1005",

          longitude: "77.5963"
        }
      },

      {
        "@type": "Place",

        name: "Manyata Tech Park",

        address: {
          "@type": "PostalAddress",

          addressLocality: "Nagawara",

          addressRegion: "Karnataka",

          addressCountry: "IN"
        }
      },

      {
        "@type": "FAQPage",

        mainEntity: [

          {
            "@type": "Question",

            name: "Where is The Quiet Side by DivyaSree located?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "The Quiet Side by DivyaSree is located in Yelahanka New Town, North Bangalore with excellent connectivity to Hebbal, Manyata Tech Park and Kempegowda International Airport."
            }
          },

          {
            "@type": "Question",

            name: "How far is Manyata Tech Park from The Quiet Side by DivyaSree?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "Manyata Tech Park is approximately 12–15 km from The Quiet Side by DivyaSree project location in Yelahanka New Town."
            }
          },

          {
            "@type": "Question",

            name: "How far is Kempegowda International Airport from The Quiet Side by DivyaSree?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "Kempegowda International Airport is approximately 20–25 km from The Quiet Side by DivyaSree and can be reached within around 30–40 minutes depending on traffic conditions."
            }
          },

          {
            "@type": "Question",

            name: "Why is Yelahanka considered a preferred residential location?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "Yelahanka is considered one of the preferred residential areas in North Bangalore because of its greenery, planned infrastructure, airport connectivity, educational institutions, healthcare facilities, and proximity to major employment hubs."
            }
          }

        ]
      }

    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <LocationPage />
      <BlogSection />
    </>
  );
}