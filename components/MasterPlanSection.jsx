/* eslint-disable react/no-unescaped-entities */

import MasterPlanClient from "./MasterPlanClient";

export default function MasterPlanSection() {
  return (
    <section
      id="master-plan"
      aria-labelledby="master-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="master-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Master Plan
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <div className="text-gray-800 mb-5 space-y-6">
          <p>
            <b>Divyasree The Quiet Side</b> is a premium low-density residential
            development located in <b>Yelahanka New Town, North Bangalore</b>. Spread
            across <b>5.5 acres</b>, the project is designed with a balanced approach
            toward privacy, greenery, open spaces, and modern urban living.
            Unlike densely packed apartment communities, this development
            focuses on creating a quieter and more spacious residential
            environment with only <b>270 residences across 3 towers</b>.
          </p>
          <p>
            The project consists of 3 residential towers with <b>B + G + 23 floors</b>,
            offering carefully planned <b>3 BHK and 3.5 BHK luxury apartments</b> and
            penthouses. The overall master plan emphasizes open landscaped
            areas, pedestrian-friendly spaces, internal circulation planning,
            and modern lifestyle amenities for residents.
          </p>
          <p>
            A major feature of the master plan is the integration of landscaped
            gardens and community-focused spaces between the towers. The layout
            is designed to improve natural ventilation, daylight access, and
            movement flow while reducing congestion within the residential
            zones.
          </p>
          <p>
            The project includes a centrally positioned clubhouse, outdoor
            activity areas, fitness spaces, and leisure amenities designed to
            support comfortable everyday living. The internal layout also
            focuses on smooth vehicular movement while maintaining pedestrian
            safety within the community.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="relative w-full aspect-[5/3] bg-gray-100 overflow-hidden">
            <img
              src="./images/master-plan.webp"
              alt="Master Plan"
              className="w-full h-full object-cover"
              loading="lazy"
            />

            <MasterPlanClient />
          </div>

          <div className="bg-primary text-white text-center font-semibold text-lg md:text-xl py-4 px-4">
            Master Plan
          </div>
        </div>
        <div className="text-gray-800 leading-8 space-y-6 mt-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Master Plan Layout with Zone Identification
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Zone Number
                  </th>

                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Feature / Amenity
                  </th>

                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Description
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    01
                  </td>

                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    Main Entry / Exit
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    The project features a well-planned entrance and exit zone
                    with security monitoring, controlled vehicle access, visitor
                    management systems, and smooth internal traffic movement for
                    residents and guests.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    02
                  </td>

                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    Clubhouse
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    A centrally located clubhouse designed as the main social
                    and recreational space within the community. It includes
                    indoor leisure facilities, seating spaces, wellness areas,
                    and resident activity zones.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    03
                  </td>

                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    Landscaped Greens
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Open landscaped gardens and green spaces are distributed
                    across the project to create a calm and low-density
                    residential atmosphere with better airflow and visual
                    openness.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    04
                  </td>

                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    Residential Towers
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    The development consists of 3 residential towers with B + G
                    + 23 floors. The towers are positioned to improve privacy,
                    ventilation, natural light, and open views across the
                    community.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    05
                  </td>

                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    Fitness & Wellness Zone
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    Dedicated wellness spaces include a gymnasium, walking
                    pathways, outdoor seating areas, and recreational zones
                    designed to support healthy everyday living.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    06
                  </td>

                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    Swimming Pool & Leisure Zone
                  </td>

                  <td className="border border-gray-300 px-4 py-3">
                    The project includes a swimming pool along with surrounding
                    leisure seating and relaxation areas integrated into the
                    landscaped open spaces.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            Towers and Blocks Key Plan Features of Divyasree The Quiet Side
          </h2>

          <h3 className="text-xl font-semibold text-gray-900">
            Entry / Exit Planning
          </h3>

          <h3 className="text-xl font-semibold text-gray-900">
            Yelahanka Connectivity
          </h3>

          <p>
            The project is located in Yelahanka New Town with convenient access
            to Bellary Road, Hebbal, Airport Road, and major North Bangalore
            business corridors.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Secure Community Access
          </h3>

          <p>
            The entrance zone is planned with security systems, controlled
            access points, visitor screening, and organized vehicle circulation
            to maintain safety and smooth movement inside the development.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Tower Placement
          </h3>

          <h3 className="text-xl font-semibold text-gray-900">
            Low-Density Residential Planning
          </h3>

          <p>
            The 3 residential towers are carefully positioned across the
            5.5-acre layout to reduce crowding and improve privacy between
            residences. The spacing between towers allows better natural
            lighting and cross ventilation throughout the community.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Open Views & Ventilation
          </h3>

          <p>
            The towers are designed to maximize greenery views, daylight access,
            and airflow. The layout planning reduces direct tower-facing
            congestion commonly seen in high-density apartment developments.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">Structure</h3>

          <p>
            Each residential tower includes Basement + Ground + 23 floors (B + G
            + 23), with modern vertical circulation systems and efficient floor
            planning designed for comfortable urban living.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Clubhouse Location
          </h3>

          <h3 className="text-xl font-semibold text-gray-900">
            Central Accessibility
          </h3>

          <p>
            The clubhouse is positioned within easy walking distance from all
            towers, allowing residents to conveniently access lifestyle and
            recreational facilities without heavy internal traffic movement.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Community-Focused Design
          </h3>

          <p>
            The clubhouse is designed as a central social space where residents
            can access indoor activities, wellness amenities, seating lounges,
            and community interaction areas within a peaceful environment.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Open Space Planning
          </h3>

          <h3 className="text-xl font-semibold text-gray-900">
            Landscaped Environment
          </h3>

          <p>
            A significant portion of the project layout is dedicated to
            landscaped gardens, internal greens, and open activity spaces to
            create a calm residential setting within the city environment.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Low-Density Concept
          </h3>

          <p>
            The project focuses on lower residential density compared to large
            township developments, helping maintain quieter surroundings, better
            movement flow, and reduced congestion.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Parking Layout
          </h3>

          <h3 className="text-xl font-semibold text-gray-900">
            Basement Parking System
          </h3>

          <p>
            The development includes basement parking levels designed to reduce
            surface vehicle movement and keep the podium and landscaped areas
            more pedestrian-friendly.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Visitor & Resident Parking
          </h3>

          <p>
            Separate parking arrangements are expected for residents and visitor
            vehicles to improve internal traffic management and convenience.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Future-Ready Infrastructure
          </h3>

          <p>
            The parking layout is expected to support modern mobility
            requirements, including organized vehicle circulation and provisions
            for future infrastructure upgrades.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Internal Roads & Pathways
          </h3>

          <h3 className="text-xl font-semibold text-gray-900">
            Smooth Internal Circulation
          </h3>

          <p>
            The project includes planned internal roads for easy vehicle access,
            emergency movement, and organized traffic flow across the
            residential development.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Pedestrian-Friendly Spaces
          </h3>

          <p>
            Walking pathways, landscaped sidewalks, and open activity areas are
            integrated into the master plan to improve safety and encourage
            outdoor movement for residents.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Green Movement Zones
          </h3>

          <p>
            The internal design promotes quieter and more walkable community
            spaces through landscaped corridors and reduced unnecessary vehicle
            movement near residential zones.
          </p>

          <p>
            With low-density planning, landscaped open spaces, and carefully
            positioned residential towers, Divyasree The Quiet Side is designed
            to create a balanced urban living environment in the fast-growing
            residential region of North Bangalore.
          </p>
        </div>
      </div>
    </section>
  );
}
