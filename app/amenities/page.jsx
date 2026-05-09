import BlogSection from "@/components/BlogsSection";
import AmenitiesPage from "./AmenitiesPage";

export const metadata = {
  title: {
    default:
      "The Quiet Side by DivyaSree Amenities | Clubhouse, Swimming Pool & Lifestyle Facilities",
    template: "%s | The Quiet Side by DivyaSree Amenities",
  },

  description:
    "Explore the premium amenities at The Quiet Side by DivyaSree in Yelahanka New Town Bangalore including clubhouse, swimming pool, gymnasium, landscaped gardens, walking pathways, kids play area and modern lifestyle facilities.",

  keywords: [
    "The Quiet Side by DivyaSree amenities",
    "Divyasree The Quiet Side amenities",
    "The Quiet Side Bangalore amenities",
    "The Quiet Side clubhouse",
    "The Quiet Side swimming pool",
    "The Quiet Side gymnasium",
  ],

  metadataBase: new URL("https://www.divyasreethequietside.co"),

  alternates: {
    canonical: "https://www.divyasreethequietside.co/amenities",
  },

  openGraph: {
    title:
      "The Quiet Side by DivyaSree Amenities | Premium Lifestyle Facilities",

    description:
      "Discover premium lifestyle amenities at The Quiet Side by DivyaSree including clubhouse, fitness center, swimming pool, landscaped gardens and recreation spaces.",

    url: "https://www.divyasreethequietside.co/amenities",

    siteName: "The Quiet Side by DivyaSree",

    images: [
      {
        url:
          "https://www.divyasreethequietside.co/images/amenities.webp",

        width: 1200,

        height: 630,

        alt: "The Quiet Side by DivyaSree Amenities",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "The Quiet Side by DivyaSree Amenities | Luxury Lifestyle Facilities",

    description:
      "Explore modern lifestyle amenities at The Quiet Side by DivyaSree including clubhouse, gymnasium, swimming pool and landscaped gardens.",

    images: [
      "https://www.divyasreethequietside.co/images/amenities.webp"
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

            name: "Amenities",

            item: "https://www.divyasreethequietside.co/amenities"
          }
        ]
      },

      {
        "@type": "ApartmentComplex",

        name: "The Quiet Side by DivyaSree",

        description:
          "The Quiet Side by DivyaSree offers modern lifestyle amenities including clubhouse, swimming pool, landscaped gardens, fitness center, recreation spaces and children's play area in Yelahanka New Town Bangalore.",

        url: "https://www.divyasreethequietside.co/amenities",

        image:
          "https://www.divyasreethequietside.co/images/amenities.webp",

        address: {
          "@type": "PostalAddress",

          streetAddress: "Yelahanka New Town",

          addressLocality: "Bangalore",

          addressRegion: "Karnataka",

          postalCode: "560064",

          addressCountry: "IN"
        },

        amenityFeature: [

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

            name: "Gymnasium",

            value: true
          },

          {
            "@type": "LocationFeatureSpecification",

            name: "Walking Pathways",

            value: true
          },

          {
            "@type": "LocationFeatureSpecification",

            name: "Children Play Area",

            value: true
          },

          {
            "@type": "LocationFeatureSpecification",

            name: "Indoor Recreation Spaces",

            value: true
          },

          {
            "@type": "LocationFeatureSpecification",

            name: "Landscaped Gardens",

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
              "What amenities are available at The Quiet Side by DivyaSree?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "The Quiet Side by DivyaSree offers modern amenities including a clubhouse, swimming pool, gymnasium, landscaped gardens, walking pathways, indoor recreation spaces and children's play areas."
            }
          },

          {
            "@type": "Question",

            name:
              "Does The Quiet Side by DivyaSree have a clubhouse?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "Yes, The Quiet Side by DivyaSree features a modern clubhouse with indoor recreation areas, lounge spaces and community facilities."
            }
          },

          {
            "@type": "Question",

            name:
              "Are there fitness and recreation facilities at The Quiet Side by DivyaSree?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "Yes, the project includes a gymnasium, swimming pool, landscaped walking pathways and multiple recreation amenities for residents."
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

      <AmenitiesPage />
      <BlogSection />
    </>
  );
}