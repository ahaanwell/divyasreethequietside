/* eslint-disable react/no-unescaped-entities */

import FloorPlanClient from "./FloorPlanClient";

export default function FloorPlanSection() {
  return (
    <section
      id="floor-plan"
      aria-labelledby="floor-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="floor-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Floor Plan
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <div className="text-gray-800 space-y-6 pb-5">
          <p>
            <a href="https://www.divyasreethequietside.co/floor-plans">
              <b>Divyasree The Quiet Side Floor Plan</b> </a> offers spacious and thoughtfully designed <b>3 BHK and 3.5 BHK luxury apartments</b> and penthouses for modern
            urban families. The project focuses on low-density living, efficient
            layouts, privacy, and comfortable everyday functionality. Every
            residence is planned with attention to natural light, ventilation,
            and optimal space utilization.
          </p>
          <p>
            The apartments at <b>Divyasree The Quiet Side</b> are designed for buyers
            who prefer larger living spaces in peaceful surroundings instead of
            crowded high-rise communities. Located in <b>Yelahanka New Town, North
            Bangalore</b>, the project combines modern architecture with a calm
            residential atmosphere.
          </p>
        </div>
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          aria-label="Divyasree The Quiet Side floor plans"
        >
          <li className="rounded-xl overflow-hidden border border-gray-200 shadow-sm cursor-pointer">
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
              <img
                src="./images/3-bhk-floorplan.webp"
                alt="3 BHK Floor Plan"
                className="w-full h-full object-cover"
                loading="lazy"
              />

              <FloorPlanClient plan="3 BHK Floor Plan" />
            </div>

            <div className="bg-primary text-white text-center font-semibold text-base md:text-lg py-3 px-4">
              3 BHK Floor Plan
            </div>
          </li>
          <li className="rounded-xl overflow-hidden border border-gray-200 shadow-sm cursor-pointer">
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
              <img
                src="./images/3-5-bhk-floorplan.webp"
                alt="3.5 BHK Floor Plan"
                className="w-full h-full object-cover"
                loading="lazy"
              />

              <FloorPlanClient plan="3.5 BHK Floor Plan" />
            </div>

            <div className="bg-primary text-white text-center font-semibold text-base md:text-lg py-3 px-4">
              3.5 BHK Floor Plan
            </div>
          </li>
          <li className="rounded-xl overflow-hidden border border-gray-200 shadow-sm cursor-pointer">
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
              <img
                src="./images/4-bhk-floorplan.webp"
                alt="Penthouse Floor Plan"
                className="w-full h-full object-cover"
                loading="lazy"
              />

              <FloorPlanClient plan="Penthouse Floor Plan" />
            </div>

            <div className="bg-primary text-white text-center font-semibold text-base md:text-lg py-3 px-4">
              Penthouse Floor Plan
            </div>
          </li>
        </ul>
        <div className="text-gray-800 leading-8 space-y-6 mt-6">
          <h2 className="text-2xl font-bold text-gray-900">
            3 BHK and 3.5 BHK Apartments in Yelahanka New Town, North Bangalore
          </h2>

          <p>
            An apartment is a residential unit within a multi-story development
            that offers security, shared amenities, and community living. In
            premium developments like Divyasree The Quiet Side, apartments are
            designed to provide privacy, comfort, and lifestyle convenience
            within a gated environment.
          </p>

          <p>
            The project includes premium <b>3 BHK and 3.5 BHK apartments</b> and
            penthouses in North Bangalore, close to major business hubs, airport
            connectivity, educational institutions, and healthcare facilities.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Core Design Philosophy: Privacy, Natural Light & Efficient Space
            Planning
          </h2>

          <p>
            One of the key highlights of Divyasree The Quiet Side is its
            low-density planning concept. Spread across <b>5.5 acres</b> with only 270
            residences, the project is designed to reduce congestion and create
            a quieter, more peaceful living environment.
          </p>

          <p>
            The homes are planned with a strong focus on natural ventilation and
            functional space utilization. Large windows, open balconies, and
            efficient layouts help maximize airflow and daylight throughout the
            apartments. The design philosophy also emphasizes minimal wasted
            space, ensuring better usability of every square foot within the
            home.
          </p>

          <p>
            The overall layout planning aims to create a balance between modern
            luxury and practical everyday living. Spacious living areas,
            carefully positioned bedrooms, and separate utility zones enhance
            both comfort and privacy for residents.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Best Units for End-Use
          </h2>

          <p>
            For families planning long-term living in North Bangalore, the mid
            and higher-floor apartments offer better views, improved
            ventilation, and a quieter residential experience. Since the project
            consists of only <b>3 towers</b> with limited units, buyers can expect a
            more private and less crowded lifestyle compared to larger township
            developments.
          </p>

          <p>
            The premium residences are especially suitable for professionals
            working in Hebbal, Manyata Tech Park, Airport Road, and nearby
            business districts. The peaceful location of Yelahanka New Town
            combined with excellent connectivity makes the project ideal for
            end-use buyers looking for balanced urban living.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">3 BHK Floor Plan</h2>

          <p>
            The <b>3 BHK apartments</b> at Divyasree The Quiet Side are designed for
            modern families seeking spacious and functional homes with premium
            features and practical layouts.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Expected Layout Features
          </h3>

          <p>
            The layout is expected to include a spacious living and dining area,
            three well-planned bedrooms, attached bathrooms, a modern kitchen
            with utility space, and wide balconies for better airflow and
            natural light.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Balcony & Utility Design
          </h3>

          <p>
            Large balconies connected to the living area create additional open
            space for relaxation. Separate utility areas help maintain organized
            kitchen functionality without affecting the main living spaces.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">Ideal For</h3>

          <p>
            These homes are suitable for growing families, working
            professionals, and buyers looking for a premium residential address
            in North Bangalore with spacious interiors and peaceful
            surroundings.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            3.5 BHK Floor Plan
          </h2>

          <p>
            The <b>3.5 BHK residences</b> are expected to offer larger layouts with
            additional flexible spaces suitable for home offices, study rooms,
            guest rooms, or entertainment areas.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Expected Layout Features
          </h3>

          <p>
            The apartments are likely to include expansive living zones, premium
            master bedrooms, multiple attached bathrooms, additional
            multi-purpose spaces, and spacious balconies with open views.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Privacy & Space Planning
          </h3>

          <p>
            The 3.5 BHK homes are designed to provide better separation between
            private and common living areas, making them suitable for families
            requiring extra space and enhanced comfort.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">Ideal For</h3>

          <p>
            These units are ideal for larger families, professionals working
            from home, or buyers seeking luxury residences with additional
            flexibility and long-term lifestyle comfort.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Penthouses at Divyasree The Quiet Side
          </h2>

          <p>
            The project is also expected to include premium penthouses designed
            for buyers looking for exclusive luxury living in North Bangalore.
            These residences are likely to feature larger layouts, wider
            terraces, panoramic views, and enhanced privacy.
          </p>

          <p>
            Positioned on the upper floors, the penthouses are expected to
            provide better openness, improved natural light, and a premium
            lifestyle experience within the low-density community setting.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Model Apartments: Experience the Future Living Concept
          </h2>

          <p>
            The model apartments at Divyasree The Quiet Side are expected to be
            available during the official launch phase. These sample residences
            will help buyers understand the project’s design approach, material
            quality, layout efficiency, and overall lifestyle experience.
          </p>

          <p>
            The model homes will showcase the project’s focus on space
            optimization, modern interiors, and comfortable family living.
            Buyers will be able to experience the actual room proportions,
            ventilation planning, balcony spaces, and movement flow inside the
            apartments.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Key Highlights of the Model Apartments
          </h3>

          <h3 className="text-xl font-semibold text-gray-900">
            Interior Planning
          </h3>

          <p>
            The model homes will demonstrate efficient furniture arrangements,
            spacious living areas, and practical bedroom layouts without making
            the spaces feel crowded.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Construction & Finishing Standards
          </h3>

          <p>
            Visitors will be able to observe the overall construction quality,
            premium fittings, modern kitchen layouts, bathroom designs, and
            material selections planned for the project.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Ventilation & Natural Lighting
          </h3>

          <p>
            Large windows and open balconies are expected to allow better
            airflow and natural daylight across all major living spaces,
            improving overall comfort and energy efficiency.
          </p>

          <p>
            With low-density planning, spacious layouts, and a peaceful North
            Bangalore location, Divyasree The Quiet Side is positioned as a
            premium residential project focused on comfortable urban living and
            long-term residential value.
          </p>
        </div>
      </div>
    </section>
  );
}
