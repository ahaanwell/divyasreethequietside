import BlogSection from "@/components/BlogsSection";
import FloorPlanPage from "./FloorPlanPage";

export const metadata = {
  title: {
    default:
      "The Quiet Side by DivyaSree Floor Plan | Yelahanka Bangalore | Premium Apartment Layouts",
    template: "%s | The Quiet Side by DivyaSree Floor Plan",
  },

  description:
    "Explore the detailed floor plans of The Quiet Side by DivyaSree in Yelahanka New Town, Bangalore. View spacious 3 BHK and 3.5 BHK apartment layouts with modern architecture, efficient designs, and luxury living spaces.",

  keywords: [
    "The Quiet Side by DivyaSree floor plan",
    "DivyaSree The Quiet Side floor plan",
    "Divyasree The Quiet Side floor plan",
    "The Quiet Side Bangalore floor plan",
    "The Quiet Side Yelahanka layout",
    "Divyasree apartment layout",
    "3 BHK floor plan Yelahanka",
    "3.5 BHK floor plan Bangalore",
  ],

  metadataBase: new URL("https://www.divyasreethequietside.co"),

  alternates: {
    canonical: "https://www.divyasreethequietside.co/floor-plans",
  },

  openGraph: {
    title:
      "The Quiet Side by DivyaSree Floor Plan | 3 & 3.5 BHK Apartment Layouts",

    description:
      "View spacious floor plans and premium apartment layouts of The Quiet Side by DivyaSree in Yelahanka Bangalore with modern architecture and smart living spaces.",

    url: "https://www.divyasreethequietside.co/floor-plans",

    siteName: "The Quiet Side by DivyaSree",

    images: [
      {
        url:
          "https://www.divyasreethequietside.co/images/banner/divyasree-the-quiet-side.webp",

        width: 1200,

        height: 630,

        alt: "The Quiet Side by DivyaSree Floor Plan Layout",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "The Quiet Side by DivyaSree Floor Plan | Premium Apartment Layouts",

    description:
      "Discover spacious and modern floor plans at The Quiet Side by DivyaSree Bangalore featuring luxury 3 and 3.5 BHK apartment layouts.",

    images: [
      "https://www.divyasreethequietside.co/images/banner/divyasree-the-quiet-side.webp",
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

            name: "Floor Plan",

            item: "https://www.divyasreethequietside.co/floor-plans",
          },
        ],
      },

      {
        "@type": "Apartment",

        name: "The Quiet Side by DivyaSree Floor Plan",

        description:
          "Detailed floor plans of The Quiet Side by DivyaSree apartments located in Yelahanka New Town Bangalore including spacious 3 BHK and 3.5 BHK apartment layouts.",

        url: "https://www.divyasreethequietside.co/floor-plans",

        image:
          "https://www.divyasreethequietside.co/images/banner/divyasree-the-quiet-side.webp",

        address: {
          "@type": "PostalAddress",

          streetAddress: "Yelahanka New Town",

          addressLocality: "Bangalore",

          addressRegion: "Karnataka",

          postalCode: "560064",

          addressCountry: "IN",
        },

        numberOfRooms: "3,3.5",

        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",

            name: "Spacious Living Rooms",

            value: true,
          },

          {
            "@type": "LocationFeatureSpecification",

            name: "Modern Kitchen Layout",

            value: true,
          },

          {
            "@type": "LocationFeatureSpecification",

            name: "Large Balcony Design",

            value: true,
          },

          {
            "@type": "LocationFeatureSpecification",

            name: "Natural Ventilation",

            value: true,
          },
        ],
      },

      {
        "@type": "FAQPage",

        mainEntity: [

          {
            "@type": "Question",

            name:
              "What apartment types are available in The Quiet Side by DivyaSree floor plan?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "The Quiet Side by DivyaSree offers spacious 3 BHK and 3.5 BHK apartment floor plans designed for premium and comfortable living.",
            },
          },

          {
            "@type": "Question",

            name:
              "Where is The Quiet Side by DivyaSree located?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "The Quiet Side by DivyaSree is located in Yelahanka New Town, North Bangalore.",
            },
          },

          {
            "@type": "Question",

            name:
              "Are the floor plans of The Quiet Side by DivyaSree spacious?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "Yes, the floor plans are designed with spacious living areas, modern kitchens, balconies, natural ventilation, and efficient layouts for comfortable urban living.",
            },
          },

          {
            "@type": "Question",

            name:
              "Does The Quiet Side by DivyaSree offer low-density living?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "Yes, the project is planned as a premium low-density residential community spread across approximately 5.5 acres with around 270 units.",
            },
          },

        ],
      },

    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <FloorPlanPage />
      <BlogSection />
    </>
  );
}