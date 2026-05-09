import BlogSection from "@/components/BlogsSection";
import MasterPlanPage from "./MasterPlanPage";

export const metadata = {
  title: {
    default:
      "The Quiet Side by DivyaSree Master Plan | Township Layout & Site Plan Yelahanka",
    template: "%s | The Quiet Side by DivyaSree Master Plan",
  },

  description:
    "Explore the master plan of The Quiet Side by DivyaSree in Yelahanka New Town, Bangalore. Discover the low-density township layout with residential towers, landscaped gardens, premium amenities, and open green spaces.",

  keywords: [
    "The Quiet Side by DivyaSree master plan",
    "Divyasree The Quiet Side master plan",
    "The Quiet Side Bangalore master plan",
    "The Quiet Side Yelahanka layout",
    "Divyasree township layout",
    "The Quiet Side site plan",
    "Yelahanka apartment master plan",
  ],

  metadataBase: new URL("https://www.divyasreethequietside.co"),

  alternates: {
    canonical: "https://www.divyasreethequietside.co/master-plan",
  },

  openGraph: {
    title:
      "The Quiet Side by DivyaSree Master Plan | Township Layout & Site Plan",

    description:
      "View the detailed master plan layout of The Quiet Side by DivyaSree Bangalore featuring residential towers, landscaped gardens, premium amenities, and open spaces.",

    url: "https://www.divyasreethequietside.co/master-plan",

    siteName: "The Quiet Side by DivyaSree",

    images: [
      {
        url:
          "https://www.divyasreethequietside.co/images/master-plan.webp",

        width: 1200,

        height: 630,

        alt: "The Quiet Side by DivyaSree Master Plan Layout",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "The Quiet Side by DivyaSree Master Plan | Township Layout Bangalore",

    description:
      "Discover the master plan layout of The Quiet Side by DivyaSree including tower placement, amenities, landscaped areas, and project infrastructure.",

    images: [
      "https://www.divyasreethequietside.co/images/master-plan.webp",
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

            item: "https://www.divyasreethequietside.co/",
          },

          {
            "@type": "ListItem",

            position: 2,

            name: "Master Plan",

            item: "https://www.divyasreethequietside.co/master-plan",
          },
        ],
      },

      {
        "@type": "ApartmentComplex",

        name: "The Quiet Side by DivyaSree Master Plan",

        description:
          "Master plan of The Quiet Side by DivyaSree residential project in Yelahanka New Town Bangalore featuring 3 towers, landscaped gardens, premium amenities, and low-density planning.",

        url: "https://www.divyasreethequietside.co/master-plan",

        image:
          "https://www.divyasreethequietside.co/images/master-plan.webp",

        address: {
          "@type": "PostalAddress",

          streetAddress: "Yelahanka New Town",

          addressLocality: "Bangalore",

          addressRegion: "Karnataka",

          postalCode: "560064",

          addressCountry: "IN"
        },

        numberOfAccommodationUnits: "270",

        amenityFeature: [

          {
            "@type": "LocationFeatureSpecification",

            name: "Landscaped Gardens",

            value: true
          },

          {
            "@type": "LocationFeatureSpecification",

            name: "Clubhouse",

            value: true
          },

          {
            "@type": "LocationFeatureSpecification",

            name: "Swimming Pool",

            value: true
          },

          {
            "@type": "LocationFeatureSpecification",

            name: "Children Play Area",

            value: true
          },

          {
            "@type": "LocationFeatureSpecification",

            name: "Walking Pathways",

            value: true
          },

          {
            "@type": "LocationFeatureSpecification",

            name: "Indoor Recreation Spaces",

            value: true
          }

        ]
      },

      {
        "@type": "FAQPage",

        mainEntity: [

          {
            "@type": "Question",

            name:
              "What does The Quiet Side by DivyaSree master plan include?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "The master plan of The Quiet Side by DivyaSree includes residential towers, landscaped gardens, premium amenities, open green spaces, internal pathways, and low-density planning designed for modern living."
            }
          },

          {
            "@type": "Question",

            name:
              "How many towers are included in The Quiet Side by DivyaSree master plan?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "The master plan of The Quiet Side by DivyaSree includes 3 residential towers with Basement + Ground + 23 floors."
            }
          },

          {
            "@type": "Question",

            name:
              "Where is The Quiet Side by DivyaSree located?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "The Quiet Side by DivyaSree is located in Yelahanka New Town, North Bangalore."
            }
          },

          {
            "@type": "Question",

            name:
              "What is the total land area of The Quiet Side by DivyaSree?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "The Quiet Side by DivyaSree is spread across approximately 5.5 acres with around 270 premium residential units."
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

      <MasterPlanPage />
      <BlogSection />
    </>
  );
}