import BlogSection from "@/components/BlogsSection";
import PricePage from "./PricePage";

export const metadata = {
  title: {
    default:
      "The Quiet Side by DivyaSree Price | Yelahanka Bangalore | Pre Launch Offer",
    template: "%s | The Quiet Side by DivyaSree Price",
  },

  description:
    "Explore the latest price of The Quiet Side by DivyaSree in Yelahanka New Town, Bangalore. Discover premium 3 and 3.5 BHK apartment pricing, floor plans, and exclusive pre-launch offers.",

  keywords: [
    "The Quiet Side by DivyaSree price",
    "Divyasree The Quiet Side price",
    "The Quiet Side Bangalore price",
    "The Quiet Side Yelahanka price",
    "Divyasree apartments price",
    "3 BHK apartments Yelahanka price",
    "3.5 BHK apartments Bangalore price",
  ],

  metadataBase: new URL("https://www.divyasreethequietside.co"),

  alternates: {
    canonical: "https://www.divyasreethequietside.co/price",
  },

  openGraph: {
    title:
      "The Quiet Side by DivyaSree Price | Luxury Apartments in Yelahanka",
    description:
      "View the latest price list of The Quiet Side by DivyaSree in Yelahanka Bangalore including premium 3 and 3.5 BHK apartment pricing and payment plans.",
    url: "https://www.divyasreethequietside.co/price",
    siteName: "The Quiet Side by DivyaSree",
    images: [
      {
        url: "https://www.divyasreethequietside.co/images/thequietside.webp",
        width: 1200,
        height: 630,
        alt: "The Quiet Side by DivyaSree Price List",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "The Quiet Side by DivyaSree Price | Yelahanka Bangalore Apartments",
    description:
      "Check the latest price list of The Quiet Side by DivyaSree including 3 and 3.5 BHK apartment pricing in Yelahanka Bangalore.",
    images: [
      "https://www.divyasreethequietside.co/images/thequietside.webp",
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

export default function Page() {
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
            name: "Price",
            item: "https://www.divyasreethequietside.co/price"
          }
        ]
      },

      {
        "@type": "ApartmentComplex",
        name: "The Quiet Side by DivyaSree",

        description:
          "The Quiet Side by DivyaSree is a premium low-density residential apartment project located in Yelahanka New Town, Bangalore offering luxury 3 and 3.5 BHK apartments with modern amenities and spacious layouts.",

        url: "https://www.divyasreethequietside.co/price",

        image:
          "https://www.divyasreethequietside.co/images/thequietside.webp",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Yelahanka New Town",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          postalCode: "560064",
          addressCountry: "IN"
        },

        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: "24500000",
          availability: "https://schema.org/PreOrder",
          url: "https://www.divyasreethequietside.co/price"
        }
      },

      {
        "@type": "FAQPage",
        mainEntity: [

          {
            "@type": "Question",
            name: "What is the starting price of The Quiet Side by DivyaSree apartments?",

            acceptedAnswer: {
              "@type": "Answer",
              text:
                "The expected starting price of apartments at The Quiet Side by DivyaSree is approximately ₹2.45 Crore onwards depending on the unit configuration and floor selection."
            }
          },

          {
            "@type": "Question",
            name: "Where is The Quiet Side by DivyaSree located?",

            acceptedAnswer: {
              "@type": "Answer",
              text:
                "The Quiet Side by DivyaSree is located in Yelahanka New Town, North Bangalore with connectivity to Hebbal, Manyata Tech Park, Bellary Road, and Kempegowda International Airport."
            }
          },

          {
            "@type": "Question",
            name: "What apartment configurations are available in The Quiet Side by DivyaSree?",

            acceptedAnswer: {
              "@type": "Answer",
              text:
                "The project offers premium 3 BHK and 3.5 BHK luxury apartments along with spacious layouts and modern amenities."
            }
          },

          {
            "@type": "Question",
            name: "Does The Quiet Side by DivyaSree offer payment plans?",

            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes, the project is expected to provide flexible payment plans, construction-linked plans, and home loan assistance for buyers."
            }
          },

          {
            "@type": "Question",
            name: "How many units are available in The Quiet Side by DivyaSree?",

            acceptedAnswer: {
              "@type": "Answer",
              text:
                "The project is spread across approximately 5.5 acres and includes around 270 premium residential units."
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

      <PricePage />
      <BlogSection />
    </>
  );
}