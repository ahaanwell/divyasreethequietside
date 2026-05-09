/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  FaBuilding,
  FaRupeeSign,
  FaVectorSquare,
  FaDoorOpen,
  FaLayerGroup,
  FaCity,
  FaHelmetSafety,
  FaCertificate,
  FaCalendarDay,
} from "react-icons/fa6";
import { MdApartment } from "react-icons/md";

const highlights = [
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Project Type",
    value: "Apartment",
  },
  {
    icon: <FaRupeeSign className="text-3xl text-primary" />,
    label: "Starting Price",
    value: "₹2.45 Cr* Onwards",
  },
  {
    icon: <MdApartment className="text-3xl text-primary" />,
    label: "Unit Type",
    value: "3 & 3.5 BHK",
  },
  {
    icon: <FaVectorSquare className="text-3xl text-primary" />,
    label: "Unit Sizes",
    value: "1900 to 2900 sq.ft",
  },
  {
    icon: <FaDoorOpen className="text-3xl text-primary" />,
    label: "Project Status",
    value: "New Launch",
  },
  {
    icon: <FaLayerGroup className="text-3xl text-primary" />,
    label: "Land Area",
    value: "5.5 Acres",
  },
  {
    icon: <FaCity className="text-3xl text-primary" />,
    label: "Total Units",
    value: "270 Units",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Total No. of Floors",
    value: "B + G + 23 Floors",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "No Of Towers",
    value: "3 Towers",
  },
  {
    icon: <FaHelmetSafety className="text-3xl text-primary" />,
    label: "Builder",
    value: "DivyaSree",
  },
  {
    icon: <FaCertificate className="text-3xl text-primary" />,
    label: "Rera No",
    value: "Coming Soon",
  },
  {
    icon: <FaCalendarDay className="text-3xl text-primary" />,
    label: "Possession",
    value: "2030 onwards*",
  },
];

export default function ProjectHighlights() {
  return (
    <section
      id="project-highlights"
      aria-labelledby="highlights-heading"
      className="w-full bg-white pt-8 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="highlights-heading"
          className="text-3xl font-semibold text-gray-900 text-center mb-5"
        >
          About The Quiet Side by DivyaSree
        </h2>
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          aria-label="The Quiet Side by DivyaSree project highlights"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl px-1 sm:px-5 py-3 sm:py-5 flex items-start gap-1 sm:gap-4 hover:shadow-sm transition-shadow duration-300"
            >
              <div aria-hidden="true" className="mt-1 flex-shrink-0">
                {item.icon}
              </div>

              <div>
                <p className="text-sm text-gray-500 leading-tight mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-gray-800 leading-snug">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto pt-8 space-y-6">
          <div className="text-gray-800 leading-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Divyasree The Quiet Side: Premium Low-Density Luxury Living in
              North Bangalore
            </h2>

            <p>
              <a href="https://www.divyasreethequietside.co/"><strong>Divyasree The Quiet Side</strong></a> is an upcoming premium residential
              project by <a href="https://www.divyasree.com/" target="_blank" rel="noopener noreferrer"><b>Divyasree Developers</b></a> located in Yelahanka New Town,
               <a href="https://en.wikipedia.org/wiki/Bengaluru_North_district" target="_blank" rel="noopener noreferrer">North Bangalore</a>. This exclusive low-density development is
              thoughtfully designed for modern families who prefer peaceful
              surroundings, spacious homes, and luxury living away from the
              crowded city environment. Spread across <b>5.5 acres</b> of prime land,
              the project consists of <b>3 elegant towers</b> with <b>B + G + 23 floors</b> and offers only <b>270 luxury apartments</b> and penthouses.
            </p>

            <p>
              The project features spacious <b>3 BHK and 3.5 BHK residences</b> crafted
              with modern architecture, smart layouts, and premium interiors. <b>Divyasree The Quiet Side Bangalore</b> is designed to create a calm
              and private lifestyle experience while still offering excellent
              connectivity to key locations across North Bangalore. The starting
              price of these premium apartments is expected from ₹2.45 Crore
              onwards, making it a strong option for buyers looking for luxury
              homes in a fast-growing residential destination.
            </p>

            <p>
              It is one of the most anticipated luxury apartment projects in <a href="https://en.wikipedia.org/wiki/Yelahanka" target="_blank" rel="noopener noreferrer">
                <b>Yelahanka</b>
              </a> New Town due to its low-density planning and prime
              location advantage. North Bangalore has become one of the city’s
              most preferred investment zones because of rapid infrastructure
              growth, improved road connectivity, and proximity to Kempegowda
              International Airport.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Location Advantage of Divyasree The Quiet Side
            </h2>

            <p>
              The location of <a href="https://www.divyasreethequietside.co/"><strong>Divyasree The Quiet Side</strong></a> is <a href="https://en.wikipedia.org/wiki/Yelahanka" target="_blank" rel="noopener noreferrer"><b>Yelahanka</b></a> New Town,
              North Bangalore. The area is known for its greenery, wide roads,
              peaceful atmosphere, and well-developed social infrastructure.
              Yelahanka has transformed into a major residential and investment
              hotspot with growing demand for premium housing developments.
            </p>

            <p>
              The project location offers excellent connectivity to important
              areas such as Hebbal, Manyata Tech Park, Airport Road, Jakkur, and
              Outer Ring Road. The smooth access to Bellary Road and upcoming
              metro developments makes daily commuting easy for professionals
              working in North Bangalore’s IT and business hubs.
            </p>

            <p>
              Major employment zones including Manyata Tech Park, Kirloskar Tech
              Park, Ecopolis, and Hebbal business district are located within
              convenient driving distance from the project. This makes Divyasree
              The Quiet Side a preferred choice for working professionals and
              families looking for reduced travel time and better lifestyle
              convenience.
            </p>

            <p>
              The upcoming metro connectivity in North Bangalore is expected to
              further improve transportation access in the coming years. The
              area already benefits from strong road infrastructure, airport
              connectivity, and rapid urban development, which are adding
              significant long-term value to residential properties in
              Yelahanka.
            </p>
          </div>
        </div>

        <div className="text-gray-800 leading-8 space-y-6 pt-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Key Highlights and Unique Selling Points of Divyasree The Quiet Side
            Bangalore
          </h2>

          <h3 className="text-xl font-semibold text-gray-900">
            Low-Density Luxury Community
          </h3>

          <p>
            Unlike crowded residential developments, this project offers only
            270 premium residences across 5.5 acres, ensuring better privacy,
            peaceful surroundings, and spacious living.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Prime Yelahanka New Town Location
          </h3>

          <p>
            The project is located in one of North Bangalore’s most established
            residential zones with excellent social infrastructure, schools,
            healthcare centers, and shopping destinations nearby.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Luxury Apartments & Penthouses
          </h3>

          <p>
            Divyasree The Quiet Side offers spacious <b>3 BHK and 3.5 BHK apartments</b> designed for modern family living,
            along with premium penthouses designed for modern luxury living and
            enhanced comfort.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Premium Lifestyle Amenities
          </h3>

          <p>
            Residents can enjoy landscaped gardens, a modern clubhouse, swimming
            pool, gymnasium, indoor recreation spaces, and wellness-focused
            lifestyle facilities.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Excellent North Bangalore Connectivity
          </h3>

          <p>
            The project provides smooth access to Hebbal, Airport Road, Manyata
            Tech Park, and Kempegowda International Airport, making it ideal for
            professionals and frequent travelers.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Trusted Developer Reputation
          </h3>

          <p>
            Divyasree Developers is known for delivering quality residential and
            commercial developments across Bangalore with a focus on design,
            planning, and construction standards.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            High Investment Potential
          </h3>

          <p>
            Yelahanka New Town continues to witness strong real estate
            appreciation due to infrastructure growth, metro expansion plans,
            and increasing demand for luxury housing in North Bangalore.
          </p>
        </div>

        <div className="text-gray-800 leading-8 space-y-6 pt-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Quick Facts about Divyasree The Quiet Side Yelahanka
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Fact Category
                  </th>
                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Specific Details
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    Project Type
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Premium low-density luxury apartments & penthouses
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    Total Land Area
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    5.5 Acres
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    Location
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Yelahanka New Town, North Bangalore
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    Developer
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Divyasree Developers
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    Unit Variants
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    3 BHK & 3.5 BHK
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    Starting Price
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    ₹ 2.45 Cr* onwards
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    Total Units
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    270 Units
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    Towers & Floors
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    3 Towers, B + G + 23 Floors
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    Amenities
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Clubhouse, gym, swimming pool, landscaped gardens
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    Project Status
                  </td>
                  <td className="border border-gray-300 px-4 py-3">Upcoming</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    Possession
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    2030 onwards (Tentative)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <b>Divyasree The Quiet Side North Bangalore</b> offers carefully planned
            premium residences with spacious layouts and modern design concepts.
            The project is mainly focused on buyers who prefer privacy, lower
            density communities, and a peaceful living atmosphere within city
            limits.
          </p>

          <p>
            The project includes spacious 3 BHK and 3.5 BHK luxury apartments
            designed for comfortable family living. The homes are expected to
            feature large balconies, premium fittings, efficient ventilation,
            and abundant natural light.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            3 BHK Apartments
          </h3>

          <p>
            Ideal for modern families looking for spacious layouts with
            functional living and dining spaces.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            3.5 BHK Apartments
          </h3>

          <p>
            Suitable for larger families requiring additional flexibility for a
            study room, home office, or guest space.
          </p>
        </div>
        <div className="text-gray-800 leading-8 space-y-6 pt-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Project Key Dates
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold text-gray-900">
                Pre-Launch Phase:
              </span>{" "}
              Ongoing
            </li>

            <li>
              <span className="font-semibold text-gray-900">
                Launch Date (Tentative):
              </span>{" "}
              2026
            </li>

            <li>
              <span className="font-semibold text-gray-900">
                Completion Time (Expected):
              </span>{" "}
              4–5 Years from Launch
            </li>

            <li>
              <span className="font-semibold text-gray-900">
                Completion Date (Expected):
              </span>{" "}
              2030
            </li>

            <li>
              <span className="font-semibold text-gray-900">
                Possession Date (Expected):
              </span>{" "}
              2030 onwards
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            Customer Reviews & Investment Outlook
          </h2>

          <p>
            Divyasree The Quiet Side is already attracting strong interest among
            luxury home buyers and investors in North Bangalore. One of the
            biggest advantages of the project is its low-density design, which
            is becoming increasingly rare in Bangalore’s premium residential
            market.
          </p>

          <p>
            Real estate experts consider Yelahanka New Town one of the most
            stable and high-potential residential zones in North Bangalore due
            to its excellent infrastructure, green surroundings, and growing
            connectivity improvements. The area continues to attract both
            end-users and long-term investors seeking premium residential
            properties.
          </p>

          <p>
            The project is expected to appeal strongly to professionals working
            in Hebbal, Manyata Tech Park, and nearby business districts because
            of the reduced travel time and peaceful residential environment.
          </p>

          <p>
            The Divyasree The Quiet Side brochure will provide complete details
            about the master plan, floor plans, amenities, specifications, and
            overall development vision. With premium planning, a trusted
            developer brand, and a strategic North Bangalore location, the
            project stands out as a strong luxury housing and investment
            opportunity in Bangalore’s evolving real estate market.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            RERA Approval Status
          </h2>

          <p>
            The RERA registration for Divyasree The Quiet Side is currently
            under process. Once approved, the official Karnataka RERA
            registration number will be issued by the Karnataka Real Estate
            Regulatory Authority. The project is expected to receive all
            necessary approvals and clearances from the concerned development
            and statutory authorities before the official launch phase.
          </p>

          <p>
            As the project is currently in the upcoming stage, buyers and
            investors are showing strong interest due to the reputation of
            Divyasree Developers and the premium location advantage in Yelahanka
            New Town, North Bangalore.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Expression of Interest (EOI) Charges for Divyasree The Quiet Side
          </h2>

          <p>
            The Expression of Interest (EOI) process for Divyasree The Quiet
            Side is expected to begin during the pre-launch phase. EOI customers
            are likely to receive priority unit selection, preferred inventory
            access, and attractive early launch pricing benefits before the
            official project launch.
          </p>

          <p>
            Interested buyers may need to submit a post-dated cheque (PDC) in
            favor of the developer for priority allotment during the initial
            launch period. The tentative EOI amount structure is expected to
            vary depending on the apartment configuration and unit size.
          </p>

          <p>
            EOI registration helps buyers secure preferred facing units, higher
            floor options, and better pricing during the early stages of the
            project launch.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Payment Plan – Flexible Construction Linked Structure
          </h2>

          <p>
            Divyasree The Quiet Side is expected to offer a customer-friendly
            payment structure designed to provide financial flexibility for
            homebuyers and investors.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Tentative Payment Structure
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Initial booking amount during reservation</li>
            <li>Stage-wise payments linked to construction progress</li>
            <li>Final payment during possession handover</li>
          </ul>

          <p>
            The structured payment schedule is expected to make the purchase
            process smoother and more manageable for buyers investing in premium
            luxury apartments in North Bangalore.
          </p>
        </div>
        <div className="text-gray-800 leading-8 space-y-6 pt-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Latest Update – 2026
          </h2>

          <p>
            Divyasree Developers is recognized as one of Bangalore’s established
            real estate developers with experience in delivering premium
            residential and commercial developments. The company is known for
            modern architecture, quality construction standards, and carefully
            planned developments across the city.
          </p>

          <p>
            With Divyasree The Quiet Side, the developer aims to introduce a
            premium low-density residential community in Yelahanka New Town that
            focuses on privacy, greenery, spacious homes, and modern lifestyle
            amenities. The project is expected to attract luxury homebuyers
            looking for peaceful living environments with excellent urban
            connectivity.
          </p>

          <p>
            North Bangalore continues to witness strong infrastructure growth
            due to airport expansion, metro connectivity plans, business
            corridor development, and improved road networks. Because of these
            developments, premium residential projects in Yelahanka are gaining
            significant attention from both investors and end-users.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Historical Growth of Yelahanka & North Bangalore
          </h2>

          <p>
            Before becoming one of Bangalore’s major residential and investment
            corridors, Yelahanka was primarily known for its calm suburban
            environment, lakes, and defense establishments. Over the years, the
            area gradually transformed into a major urban growth zone due to
            planned infrastructure expansion and improved connectivity.
          </p>

          <p>
            The development of Kempegowda International Airport played a major
            role in the rapid growth of North Bangalore. After the airport
            became operational, several business parks, residential
            developments, hospitality projects, and commercial hubs started
            emerging across the region.
          </p>

          <p>
            In the late 2010s and early 2020s, areas such as Hebbal, Yelahanka,
            Jakkur, and Thanisandra witnessed major real estate growth because
            of the expansion of IT parks, startup ecosystems, and corporate
            office spaces. Business hubs like Manyata Tech Park, Kirloskar
            Business Park, and nearby commercial corridors created strong
            housing demand in North Bangalore.
          </p>

          <p>
            Infrastructure projects such as the Peripheral Ring Road, Satellite
            Town Ring Road (STRR), metro rail expansion, and road widening
            projects further improved connectivity across the region. These
            developments significantly reduced travel time between North
            Bangalore and other important parts of the city.
          </p>

          <p>
            Yelahanka New Town is now considered one of the most preferred
            residential destinations due to its green surroundings, organized
            layout planning, wide roads, educational institutions, healthcare
            facilities, and smooth airport connectivity. The area offers a
            balanced lifestyle with a combination of urban convenience and
            peaceful residential living.
          </p>

          <p>
            Because of continuous infrastructure growth and rising demand for
            luxury housing, Divyasree The Quiet Side is expected to become a
            strong investment option in North Bangalore’s premium residential
            market. The project combines low-density living, modern amenities,
            and strategic connectivity in one of Bangalore’s fastest-growing
            locations.
          </p>
        </div>
      </div>
    </section>
  );
}
