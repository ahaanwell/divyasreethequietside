/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

const landmarks = [
  { label: "Outer Ring Road", detail: "Immediate Access" },
  { label: "Sarjapur Road", detail: "10–15 Minutes" },
  { label: "Electronic City", detail: "25–30 Minutes" },
  { label: "Koramangala", detail: "20 Minutes" },
];

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31085.5835456088!2d77.59906409999999!3d13.118311899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1856f737d2d5%3A0xbef78d20185d942f!2sYelahanka%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1778179422770!5m2!1sen!2sin";

export default function LocationSection() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="w-full bg-white pt-14 px-3 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="location-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Location & Connectivity
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <div className="text-gray-800 leading-8 space-y-4 mb-6">
          <p>
            <a href="https://www.divyasree.com/location">
              <b>Location</b>
            </a> is one of the strongest aspects of <b>Divyasree The Quiet
            Side</b>. Situated in <b>Yelahanka New Town, North Bangalore</b>, the project
            offers a peaceful residential environment while maintaining
            excellent access to key business districts, airport connectivity,
            and social infrastructure. The area is known for its greenery,
            organized road network, and lower congestion compared to many
            central Bangalore locations.
          </p>
          <p>
            Yelahanka New Town has emerged as one of North Bangalore’s important
            residential corridors because of its balanced urban development,
            proximity to employment hubs, and improving infrastructure. The
            location combines residential comfort with practical city
            connectivity, making it suitable for both end-use living and
            long-term investment consideration.
          </p>
          <p>
            The project location offers convenient access to Hebbal, Airport
            Road, Thanisandra, Jakkur, and Bellary Road. Important commercial
            zones such as Manyata Tech Park, Kirloskar Business Park, and nearby
            office corridors can be reached through well-developed road
            infrastructure.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <div className="w-full h-[380px] md:h-[460px]">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Divyasree The Quiet Side location map — Yelahanka New Town, North Bangalore"
              aria-label="Google Maps showing Divyasree The Quiet Side location in Yelahanka New Town, North Bangalore"
            />
          </div>

          <Link
            href="https://maps.app.goo.gl/mgHt22xpDC33Br8B9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Know more about Divyasree The Quiet Side location in Yelahanka New Town, North Bangalore"
            className="block w-full bg-primary hover:bg-blue-800 text-white text-center font-semibold text-lg py-4 transition-colors duration-200"
          >
            Know More About Location
          </Link>
        </div>

        <div className="text-gray-800 flex justify-between mt-4">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Address</h2>

            <p className="leading-7">
              <b>Divyasree The Quiet Side</b> <br /> Situated in Yelahanka New
              Town, North Bangalore
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Landmark and Map Details
            </h3>

            <div className="space-y-2">
              <p>
                <strong>Landmark:</strong> Near Budigere Cross Junction, Off Old
                Madras Road (NH-75)
              </p>
              <p>
                <strong>Coordinates:</strong> 13.0491° N, 77.7483° E
              </p>
              <p>
                <strong>Google Plus Code:</strong> 2PXX+FM8, Budigere Cross,
                Bengaluru, Karnataka 560049
              </p>
            </div>
          </div>
        </div>
        <div className="text-gray-800 leading-8 space-y-4 mt-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Key Location Highlights
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Smooth access to Bellary Road and Hebbal flyover network</li>
            <li>Convenient connectivity to Kempegowda International Airport</li>
            <li>
              Close to major North Bangalore business districts and tech parks
            </li>
            <li>
              Near educational institutions, healthcare centers, and shopping
              destinations
            </li>
            <li>
              Located within a well-developed residential neighborhood with wide
              roads and greenery
            </li>
            <li>
              Access to upcoming metro and infrastructure expansion projects in
              North Bangalore
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            Connectivity Snapshot
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Key Infrastructure
                  </th>

                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Distance
                  </th>

                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Travel Time
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Kempegowda International Airport
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 22 km
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    35–40 mins
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Hebbal Flyover
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 12 km
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    20–25 mins
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Manyata Tech Park
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 14 km
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    25–30 mins
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Yelahanka Railway Station
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 4 km
                  </td>

                  <td className="border border-gray-300 px-4 py-3">10 mins</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">Jakkur</td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 7 km
                  </td>

                  <td className="border border-gray-300 px-4 py-3">15 mins</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Kirloskar Business Park
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 13 km
                  </td>

                  <td className="border border-gray-300 px-4 py-3">25 mins</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm italic">
            Travel time may vary depending on traffic and route conditions.
          </p>

          <p>
            Divyasree The Quiet Side is positioned within one of North
            Bangalore’s established residential zones, offering good road
            connectivity along with access to important employment and lifestyle
            destinations.
          </p>

          <p>
            The project location also benefits from ongoing infrastructure
            improvements across North Bangalore. Road widening projects,
            airport-related growth, and future metro connectivity plans are
            expected to improve accessibility further in the coming years.
          </p>

          <p>
            Because of these connectivity advantages, Yelahanka New Town
            continues to attract working professionals, families, and long-term
            property investors seeking a balance between urban convenience and
            peaceful residential living.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Airport Connectivity
          </h2>

          <p>
            Kempegowda International Airport is one of the key infrastructure
            advantages for North Bangalore residential developments. The airport
            can be accessed through Bellary Road and surrounding highway
            networks.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold text-gray-900">Distance:</span>{" "}
              Around 22 km
            </li>

            <li>
              <span className="font-semibold text-gray-900">Travel Time:</span>{" "}
              Approximately 35–40 minutes by car
            </li>
          </ul>

          <p>
            The location is particularly beneficial for frequent travelers and
            professionals working in airport-related business zones.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Metro Connectivity
          </h2>

          <p>
            North Bangalore is expected to benefit significantly from future
            metro expansion projects and improved public transportation
            infrastructure.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Nearby Metro Connectivity
          </h3>

          <p>
            Planned and proposed metro developments across North Bangalore are
            expected to improve city-wide access over the coming years.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Future Connectivity Benefits
          </h3>

          <p>
            Future metro access may help improve travel convenience toward
            Hebbal, Central Bangalore, and other commercial districts.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Bus & Public Transport
          </h2>

          <p>
            BMTC bus services and local transport facilities connect Yelahanka
            to major parts of Bangalore regularly.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Connectivity Benefits
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Easy access to Hebbal, Majestic, and Central Bangalore</li>
            <li>
              Public transport routes available toward airport and business
              districts
            </li>
            <li>
              Good local road connectivity for cab and app-based transport
              services
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            Road Connectivity
          </h2>

          <p>
            Road connectivity is one of the major strengths of Yelahanka New
            Town. The area benefits from wide roads, flyover connectivity, and
            access to important North Bangalore corridors.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Distance from Major Places (Divyasree The Quiet Side)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Key Location
                  </th>

                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Distance
                  </th>

                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Travel Time
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Bellary Road
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 5 km
                  </td>
                  <td className="border border-gray-300 px-4 py-3">10 mins</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Yelahanka Railway Station
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 4 km
                  </td>
                  <td className="border border-gray-300 px-4 py-3">10 mins</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">Hebbal</td>
                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 12 km
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    20–25 mins
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Manyata Tech Park
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 14 km
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    25–30 mins
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">Jakkur</td>
                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 7 km
                  </td>
                  <td className="border border-gray-300 px-4 py-3">15 mins</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Kempegowda International Airport
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 22 km
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    35–40 mins
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Kirloskar Business Park
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 13 km
                  </td>
                  <td className="border border-gray-300 px-4 py-3">25 mins</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Nearby Schools & Colleges
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Within 3–6 km
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    10–15 mins
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Healthcare Facilities
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Within 5–8 km
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    15–20 mins
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            Important Road Links
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Bellary Road (NH 44) connectivity toward airport and city zones
            </li>
            <li>
              Hebbal Flyover access toward Outer Ring Road and Central Bangalore
            </li>
            <li>
              Connectivity toward Thanisandra, Jakkur, and Airport Road
              corridors
            </li>
            <li>
              Access to upcoming infrastructure improvements in North Bangalore
            </li>
          </ul>
        </div>
        <div className="text-gray-800 leading-8 space-y-4 mt-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Upcoming Infrastructure Improvements
          </h2>

          <h3 className="text-xl font-semibold text-gray-900">
            Metro Expansion Plans
          </h3>

          <p>
            Future metro connectivity proposals across North Bangalore are
            expected to improve transportation convenience and reduce travel
            dependency on road traffic.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Road & Connectivity Development
          </h3>

          <p>
            Road widening projects, flyover expansions, and airport corridor
            development continue to strengthen the infrastructure profile of
            North Bangalore.
          </p>

          <p>
            Overall, Yelahanka New Town offers strong connectivity advantages
            while maintaining a quieter and more residential atmosphere compared
            to several high-density city locations.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Market Comparison of Yelahanka with Hebbal
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Feature
                  </th>

                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Hebbal
                  </th>

                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Yelahanka
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Market Phase
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Mature Urban Zone
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Fast-Growing Residential Zone
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Traffic Density
                  </td>
                  <td className="border border-gray-300 px-4 py-3">High</td>
                  <td className="border border-gray-300 px-4 py-3">Moderate</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Residential Environment
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Mixed Commercial
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    More Residential & Green
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Open Spaces
                  </td>
                  <td className="border border-gray-300 px-4 py-3">Limited</td>
                  <td className="border border-gray-300 px-4 py-3">
                    Better Green Coverage
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">Best For</td>
                  <td className="border border-gray-300 px-4 py-3">
                    Commercial Access
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Long-Term Residential Living
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            Top Reasons to Consider Yelahanka for Residential Investment
          </h2>

          <h3 className="text-xl font-semibold text-gray-900">
            1. North Bangalore Growth Corridor
          </h3>

          <p>
            Yelahanka benefits from the larger growth of North Bangalore, driven
            by airport expansion, business parks, and infrastructure
            development. The region continues to attract premium residential
            projects and long-term investment interest.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            2. Strong Infrastructure Development
          </h3>

          <p>
            Road connectivity, airport accessibility, metro expansion proposals,
            and commercial growth are improving the long-term infrastructure
            profile of the area.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            3. Established Social Infrastructure
          </h3>

          <p>
            Yelahanka already has well-developed educational institutions,
            hospitals, supermarkets, and lifestyle facilities, making it
            suitable for family-oriented residential living.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            4. Balanced Urban Lifestyle
          </h3>

          <p>
            Compared to more crowded commercial districts, Yelahanka offers a
            calmer residential atmosphere with wider roads, greenery, and lower
            congestion levels.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            5. Demand for Premium Housing
          </h3>

          <p>
            North Bangalore continues to witness increasing demand for spacious
            and low-density luxury apartments due to changing lifestyle
            preferences among working professionals and families.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            6. Long-Term Residential Potential
          </h3>

          <p>
            Because of its connectivity, organized development pattern, and
            infrastructure growth, Yelahanka remains one of the preferred
            residential destinations for long-term living in Bangalore.
          </p>

          <p>
            With low-density planning, premium residences, and strong North
            Bangalore connectivity, Divyasree The Quiet Side combines peaceful
            urban living with practical access to major city destinations.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Educational Hub: Schools Near Divyasree The Quiet Side
          </h2>

          <p>
            Yelahanka New Town has developed into one of North Bangalore’s
            well-established educational corridors. The area is home to several
            reputed schools offering CBSE, ICSE, State Board, and international
            curriculum options. This makes the location suitable for families
            looking for long-term residential living with access to quality
            education nearby.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Schools Near Divyasree The Quiet Side
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    School Name
                  </th>

                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Distance
                  </th>

                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Curriculum
                  </th>

                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Key Highlights
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Ryan International School
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 4 km | 10 min
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    ICSE / CBSE
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Known for balanced academics and extracurricular development
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    National Public School (NPS), Yelahanka
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 5 km | 12 min
                  </td>

                  <td className="border border-gray-300 px-4 py-3">CBSE</td>

                  <td className="border border-gray-300 px-4 py-3">
                    Strong academic reputation and competitive learning
                    environment
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Canadian International School
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 8 km | 18 min
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    IB / IGCSE
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    International curriculum with multicultural student
                    community
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Vidyashilp Academy
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 9 km | 20 min
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    ICSE / ISC
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Focus on holistic education and experiential learning
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Delhi Public School, North Bangalore
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 10 km | 22 min
                  </td>

                  <td className="border border-gray-300 px-4 py-3">CBSE</td>

                  <td className="border border-gray-300 px-4 py-3">
                    Large campus with strong academic and sports infrastructure
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Chrysalis High
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 6 km | 15 min
                  </td>

                  <td className="border border-gray-300 px-4 py-3">CBSE</td>

                  <td className="border border-gray-300 px-4 py-3">
                    Emphasis on integrated learning and student development
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The presence of educational institutions across Yelahanka, Hebbal,
            and North Bangalore has contributed significantly to residential
            demand in the region. Families often prefer this area due to the
            availability of schools within comfortable driving distance.
          </p>
        </div>

        <div className="text-gray-800 leading-8 space-y-4 mt-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Hospitals Near Divyasree The Quiet Side
          </h2>

          <p>
            North Bangalore has witnessed major healthcare infrastructure growth
            over the last decade. Yelahanka and nearby areas now offer access to
            multispeciality hospitals, diagnostic centers, and emergency
            healthcare facilities.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Hospitals Near Divyasree The Quiet Side
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Hospital Name
                  </th>

                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Distance
                  </th>

                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Key Speciality
                  </th>

                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Highlight
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Aster CMI Hospital
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 11 km | 22 min
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Multispeciality Care
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Advanced healthcare and critical care facilities
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Columbia Asia Hospital, Hebbal
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 12 km | 25 min
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    General & Emergency Care
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Known for modern healthcare infrastructure
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Cytecare Hospital
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 10 km | 20 min
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Oncology & Advanced Treatment
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Specialized cancer care and diagnostics
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Navachethana Hospital
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 5 km | 12 min
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    General Medicine
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Local healthcare access for nearby residents
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Omega Multispeciality Hospital
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 7 km | 15 min
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Multispeciality Services
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Family healthcare and emergency medical support
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The growing healthcare ecosystem in North Bangalore is one of the
            important factors contributing to the region’s residential
            development and long-term livability.
          </p>
        </div>
        <div className="text-gray-800 leading-8 space-y-4 mt-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Business & Employment Hubs Near Divyasree The Quiet Side
          </h2>

          <p>
            One of the major advantages of Divyasree The Quiet Side is its
            connectivity to North Bangalore’s expanding employment corridors.
            Yelahanka provides access to major business parks, IT zones, and
            commercial districts while maintaining a quieter residential
            environment.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Top IT & Business Hubs Nearby
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Business Hub
                  </th>

                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Distance
                  </th>

                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Key Companies
                  </th>

                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Current Importance
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Manyata Tech Park
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 14 km | 25–30 min
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    IBM, Cognizant, Microsoft
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    One of Bangalore’s largest IT and business parks
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Kirloskar Business Park
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 13 km | 25 min
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Philips, Toyota Financial, EMC
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Major commercial and office hub in North Bangalore
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Ecopolis SEZ
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 15 km | 30 min
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    IT & Technology Firms
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Emerging office and technology zone
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Brigade Magnum
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 12 km | 24 min
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Multiple Corporate Offices
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Commercial office development near Hebbal
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    RMZ Galleria Business Hub
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 8 km | 18 min
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Retail & Office Spaces
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Mixed-use commercial and lifestyle destination
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            North Bangalore continues to attract technology companies, startups,
            aviation-related businesses, and corporate office developments
            because of airport connectivity and planned infrastructure growth.
          </p>
        </div>
        <div className="text-gray-800 leading-8 space-y-4 mt-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Lifestyle & Entertainment Centers Near Divyasree The Quiet Side
          </h2>

          <p>
            Even though Yelahanka offers a relatively peaceful residential
            atmosphere, residents still have access to major shopping malls,
            entertainment centers, restaurants, and multiplexes within
            convenient driving distance.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Lifestyle & Entertainment Centers Near Yelahanka
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Destination
                  </th>

                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Distance
                  </th>

                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Key Feature
                  </th>

                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Popular Attraction
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    RMZ Galleria Mall
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 7 km | 15 min
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Shopping & Entertainment
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Multiplex cinema and retail outlets
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Elements Mall
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 13 km | 28 min
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Retail & Dining
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Family entertainment and shopping stores
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Esteem Mall
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 11 km | 22 min
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Lifestyle Shopping
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Restaurants and fashion outlets
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Phoenix Mall of Asia
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 10 km | 20 min
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Large Retail Destination
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Premium shopping and entertainment spaces
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Orion Avenue
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Approx. 14 km | 30 min
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Shopping & Dining
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Lifestyle retail and multiplex access
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The growth of shopping and entertainment infrastructure across North
            Bangalore has improved the overall residential appeal of Yelahanka
            and nearby areas. Residents can access modern lifestyle conveniences
            while still living in a quieter and less congested neighborhood
            compared to many central Bangalore zones.
          </p>

          <p>
            Because of its connectivity, social infrastructure, educational
            institutions, healthcare access, and growing commercial ecosystem,
            Yelahanka New Town continues to remain one of the preferred
            residential locations in North Bangalore for families and working
            professionals.
          </p>
        </div>
        <div className="text-gray-800 leading-8 space-y-4 mt-4">
          <h2 className="text-2xl font-bold text-gray-900">Yelahanka</h2>
          <Image
            src="/images/yelahanka.webp"
            alt="Yelahanka"
            width={800}
            height={400}
            preload
            className="w-full h-auto rounded-lg"
          />
          <p>
            <a href="https://en.wikipedia.org/wiki/Yelahanka" target="_blank" rel="noopener noreferrer">
              <b>Yelahanka</b>
            </a> is a rapidly developing area in North Bangalore. Over the last decade, it has developed into one of
            the city’s most preferred residential destinations for
            professionals, families, and long-term property investors. The area
            is attracting strong demand because of its strategic location,
            better road infrastructure, airport connectivity, and proximity to
            major business districts such as Hebbal and Manyata Tech Park.
          </p>

          <p>
            The growth of Yelahanka is supported by multiple employment and
            infrastructure corridors, including the Hebbal business zone,
            Manyata Tech Park, airport-related commercial developments, and
            emerging technology parks across North Bangalore. Because of this,
            the region has become an important residential choice for buyers
            looking for spacious homes away from highly congested city areas.
          </p>

          <p>
            As of 2026, Yelahanka offers a balanced combination of residential
            comfort, greenery, urban infrastructure, and connectivity
            advantages. Large residential layouts, organized planning, and lower
            congestion levels compared to central Bangalore locations continue
            to increase the area’s long-term residential appeal.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Growth of Yelahanka, Bangalore
          </h2>

          <p>
            Yelahanka is one of the major growth corridors in North Bangalore.
            Originally known for its lakes, defense establishments, and quieter
            residential environment, the area has gradually transformed into a
            well-developed urban zone with premium residential projects,
            educational institutions, healthcare facilities, and commercial
            growth.
          </p>

          <p>
            The development of Kempegowda International Airport played a major
            role in accelerating the growth of North Bangalore, including
            Yelahanka. Improved connectivity, expanding road infrastructure, and
            increasing office developments across Hebbal and nearby corridors
            further strengthened residential demand in the area.
          </p>

          <p>
            In recent years, several premium apartment communities, mixed-use
            developments, and infrastructure projects have contributed to
            Yelahanka’s steady real estate growth.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Proximity Highlights
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Yelahanka Railway Station – around 4 km</li>
            <li>Hebbal – around 12 km</li>
            <li>Manyata Tech Park – around 14 km</li>
            <li>Kempegowda International Airport – around 22 km</li>
            <li>Jakkur – around 7 km</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            Why Yelahanka Works for Premium Residential Living
          </h2>

          <p>
            Yelahanka benefits from planned road networks, organized layouts,
            wide roads, and relatively lower congestion levels compared to many
            central city locations. The area supports low-density residential
            developments and premium apartment communities focused on
            comfortable long-term living.
          </p>

          <p>
            The availability of open spaces, educational institutions,
            hospitals, and shopping centers further improves the overall
            residential environment for families and working professionals.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            History of Yelahanka
          </h2>

          <p>
            Yelahanka has historical importance as one of the older settlement
            regions near Bangalore. For many years, the locality remained a calm
            residential and defense-oriented zone with agricultural surroundings
            and lake systems.
          </p>

          <p>
            As Bangalore expanded northward, infrastructure development and
            airport connectivity gradually transformed Yelahanka into a major
            residential destination. The growth of IT parks, business corridors,
            and commercial developments across North Bangalore accelerated
            housing demand in the area during the late 2010s and early 2020s.
          </p>

          <p>
            Today, Yelahanka is recognized as one of the city’s well-established
            residential regions with organized urban growth and improving
            infrastructure.
          </p>
        </div>
        <div className="text-gray-800 leading-8 space-y-4 mt-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Strategic Location Advantage
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Smooth connectivity to Bellary Road (NH 44) and Hebbal Flyover
            </li>
            <li>Easy access toward airport corridors and business districts</li>
            <li>
              Connectivity toward Thanisandra, Jakkur, and Outer Ring Road
            </li>
            <li>
              Planned metro expansion and road infrastructure improvements
            </li>
            <li>
              Access to multiple employment and commercial hubs in North
              Bangalore
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">
            IT & Business Hubs Near Yelahanka
          </h2>

          <h3 className="text-xl font-semibold text-gray-900">
            Major Employment Zones Nearby
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Business Hub
                  </th>

                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Approx. Distance
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Manyata Tech Park
                  </td>

                  <td className="border border-gray-300 px-4 py-3">14 km</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Kirloskar Business Park
                  </td>

                  <td className="border border-gray-300 px-4 py-3">13 km</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Brigade Magnum
                  </td>

                  <td className="border border-gray-300 px-4 py-3">12 km</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    Ecopolis SEZ
                  </td>

                  <td className="border border-gray-300 px-4 py-3">15 km</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3">
                    RMZ Galleria Commercial Zone
                  </td>

                  <td className="border border-gray-300 px-4 py-3">8 km</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            These commercial and technology hubs continue to generate
            residential demand in North Bangalore, especially among
            professionals looking for better living environments with reduced
            commute stress.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Why People Prefer Yelahanka
          </h2>

          <h3 className="text-xl font-semibold text-gray-900">
            Better Residential Environment
          </h3>

          <p>
            Compared to several densely populated city areas, Yelahanka offers a
            calmer and greener residential atmosphere with organized layouts and
            wider roads.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Access to Social Infrastructure
          </h3>

          <p>
            The locality has established schools, colleges, hospitals,
            supermarkets, shopping centers, and daily convenience facilities
            within reachable distance.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Airport Connectivity
          </h3>

          <p>
            The area benefits from smooth access to Kempegowda International
            Airport, making it suitable for professionals, business travelers,
            and aviation-related industries.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Scope for Planned Development
          </h3>

          <p>
            Large land parcels and organized infrastructure planning have
            allowed the development of spacious residential communities with
            better open space management.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Long-Term Growth Potential
          </h3>

          <p>
            Because of continuous infrastructure expansion and growing business
            activity across North Bangalore, Yelahanka remains one of the city’s
            important long-term residential growth corridors.
          </p>
        </div>
        <div className="text-gray-800 leading-8 space-y-4 mt-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Premium Residential Projects in North Bangalore
          </h2>

          <p>
            Several premium residential developments across North Bangalore have
            increased the area’s popularity among luxury homebuyers and
            investors. The region continues to witness demand for spacious
            apartments, gated communities, and low-density developments.
          </p>

          <p>
            Divyasree The Quiet Side is part of this evolving residential
            landscape, offering premium 3 BHK and 3.5 BHK apartments and
            penthouses within a low-density 5.5-acre community in Yelahanka New
            Town.
          </p>

          <p>
            With only 270 residences across 3 towers, the project focuses on
            privacy, landscaped surroundings, and comfortable urban living in
            one of Bangalore’s steadily growing residential locations.
          </p>

          <p>
            Overall, Yelahanka continues to develop as a well-connected and
            infrastructure-driven residential destination in North Bangalore,
            supported by airport growth, business expansion, and long-term urban
            development plans.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            North Bangalore: The Emerging Growth Corridor of Bangalore
          </h2>

          <p>
            North Bangalore has become one of the most important residential and
            infrastructure growth regions in the city. Over the last decade, the
            area has transformed from a relatively quiet suburban zone into a
            major destination for premium housing, commercial development,
            technology parks, and large-scale infrastructure projects. Today,
            North Bangalore is considered one of the strongest long-term real
            estate markets in Bangalore because of airport connectivity, planned
            road networks, and expanding business districts.
          </p>

          <p>
            The region includes major residential and commercial locations such
            as Yelahanka, Hebbal, Jakkur, Thanisandra, Devanahalli, and Airport
            Road. These areas are witnessing continuous development due to the
            presence of employment hubs, metro expansion proposals, and large
            infrastructure investments.
          </p>

          <p>
            Divyasree The Quiet Side is located in Yelahanka New Town, one of
            the established residential neighborhoods within North Bangalore.
            The project benefits from the region’s growing infrastructure while
            offering a quieter and more low-density residential environment
            compared to crowded central city zones.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Why North Bangalore is Growing Rapidly
          </h2>

          <p>
            The biggest reason behind the growth of North Bangalore is the
            development of Kempegowda International Airport. After the airport
            became operational, the entire northern corridor started attracting
            commercial investments, business parks, hospitality developments,
            and premium residential projects.
          </p>

          <p>
            Several infrastructure projects have further accelerated growth
            across the region, including:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Airport corridor expansion</li>
            <li>Bellary Road (NH 44) improvements</li>
            <li>Peripheral Ring Road proposals</li>
            <li>Metro rail expansion plans</li>
            <li>Business and technology park developments</li>
            <li>Road widening and flyover connectivity projects</li>
          </ul>

          <p>
            Because of these developments, North Bangalore has become one of the
            city’s most preferred regions for residential living and long-term
            investment.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Proximity Highlights of North Bangalore
          </h2>

          <p>
            North Bangalore offers strong connectivity to important commercial
            and transportation hubs across the city.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Key Connectivity Advantages
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Kempegowda International Airport connectivity</li>
            <li>Easy access to Hebbal and Outer Ring Road</li>
            <li>
              Connectivity toward Manyata Tech Park and business corridors
            </li>
            <li>Smooth road access through Bellary Road (NH 44)</li>
            <li>Growing metro and public transport infrastructure</li>
          </ul>

          <p>
            Divyasree The Quiet Side benefits from these connectivity advantages
            while being positioned in a calmer residential pocket of Yelahanka
            New Town.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Why North Bangalore Works for Premium Residential Living
          </h2>

          <p>
            North Bangalore supports premium residential development because of
            its organized urban planning, wider roads, and availability of
            larger land parcels. Compared to several older parts of Bangalore,
            the area offers lower congestion levels and better opportunities for
            low-density housing communities.
          </p>

          <p>
            The region has also become popular among professionals working in
            technology parks, airport-related businesses, startups, and
            corporate offices located across Hebbal and surrounding business
            districts.
          </p>

          <p>
            For buyers seeking spacious apartments, greenery, and better
            long-term residential infrastructure, North Bangalore has emerged as
            one of the city’s strongest residential destinations.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            History of North Bangalore’s Development
          </h2>

          <p>
            For many years, North Bangalore consisted mainly of agricultural
            land, lakes, defense establishments, and smaller residential
            neighborhoods. The region experienced gradual growth during
            Bangalore’s IT expansion, but the major transformation started after
            the airport corridor development.
          </p>

          <p>
            As business activity increased around Hebbal, Yelahanka, and Airport
            Road, residential demand also began rising rapidly. Technology
            parks, educational institutions, hospitals, and retail
            infrastructure expanded across the northern corridor during the late
            2010s and early 2020s.
          </p>

          <p>
            Today, North Bangalore is one of Bangalore’s largest urban growth
            regions with a combination of residential, commercial, aviation, and
            infrastructure-driven development.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Strategic Location Advantage of North Bangalore
          </h2>

          <h3 className="text-xl font-semibold text-gray-900">
            Important Connectivity Corridors
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Bellary Road (NH 44) connectivity across the city</li>
            <li>Access toward Hebbal Flyover and Outer Ring Road</li>
            <li>Airport connectivity through major highway corridors</li>
            <li>Access toward Thanisandra, Jakkur, and Yelahanka</li>
            <li>
              Future metro and road expansion projects improving transportation
            </li>
          </ul>

          <p>
            These infrastructure advantages continue to support residential and
            commercial growth across the region.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Major IT & Business Hubs in North Bangalore
          </h2>

          <p>
            North Bangalore has become a strong employment corridor because of
            the growth of technology parks, commercial office spaces, and
            business centers.
          </p>
        </div>
      </div>
    </section>
  );
}
