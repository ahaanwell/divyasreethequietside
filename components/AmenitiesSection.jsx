const amenitiesData = [
  { id: 1, name: "Gymnasium", image: "./images/gym.svg", alt: "Gymnasium" },
  {
    id: 2,
    name: "Swimming Pool",
    image: "./images/swm.svg",
    alt: "Swimming Pool",
  },
  {
    id: 3,
    name: "Yoga Pavilion",
    image: "./images/yoga.svg",
    alt: "Yoga Pavilion",
  },
  {
    id: 4,
    name: "Video Door Phone",
    image: "./images/videos.svg",
    alt: "Video Door Phone",
  },
  {
    id: 5,
    name: "Kids Activity Zone",
    image: "./images/kids.svg",
    alt: "Kids Activity Zone",
  },
  {
    id: 6,
    name: "Mini Theater",
    image: "./images/mine.svg",
    alt: "Mini Theater",
  },
  {
    id: 7,
    name: "Aerobics Room",
    image: "./images/tennis.svg",
    alt: "Aerobics Room",
  },
  {
    id: 8,
    name: "Indoor Games Room",
    image: "./images/chess.svg",
    alt: "Indoor Games Room",
  },
  {
    id: 9,
    name: "Club House",
    image: "./images/disco-ball.svg",
    alt: "Club House",
  },
  {
    id: 10,
    name: "Dance/Music",
    image: "./images/dance.svg",
    alt: "Dance/Music",
  },
  {
    id: 11,
    name: "24/7 CCTV Monitoring",
    image: "./images/cctv.svg",
    alt: "24/7 CCTV Monitoring",
  },
  {
    id: 12,
    name: "Jogging Track",
    image: "./images/jog.svg",
    alt: "Jogging Track",
  },
];

export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
      aria-labelledby="amenities-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="amenities-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Amenities at Divyasree The Quiet Side
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />

        <div className="text-gray-800 leading-8 space-y-4 mb-5">
          <p>
            <b>Divyasree The Quiet Side</b> offers a thoughtfully planned collection of
            lifestyle amenities designed for modern urban living. The project
            focuses on creating a balanced residential environment where
            residents can enjoy fitness, relaxation, recreation, and everyday
            convenience within a peaceful low-density community.
          </p>
          <p>
            The amenities are distributed across landscaped open spaces,
            activity zones, and clubhouse areas to ensure easy accessibility
            from all three residential towers. Since the project has only <b>270
            residences</b> spread across <b>5.5 acres</b>, the community is planned to
            provide a quieter and less crowded lifestyle experience compared to
            larger township developments.
          </p>
          <p>
            The Quiet Side by DivyaSree is designed for families and professionals
            who prefer spacious living environments with practical lifestyle
            features and wellness-oriented spaces.
          </p>
        </div>

        <ul
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4"
          aria-label="Sattav Aaranya"
        >
          {amenitiesData.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-center justify-between w-full h-[150px] lg:h-[180px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-3 rounded-xl hover:border hover:border-gray-300 hover:shadow-md transition-all duration-300 bg-white"
            >
              <div className="w-full flex-1 flex items-center justify-center p-3 h-[60%]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-[90%] object-contain"
                  loading="lazy"
                />
              </div>

              <p className="text-center text-sm text-gray-700 font-light leading-tight pb-1">
                {item.name}
              </p>
            </li>
          ))}
        </ul>

        <div className="text-gray-800 leading-8 space-y-4 mt-6">
          <h2 className="text-2xl font-bold text-gray-900">Key Amenities</h2>

          <p>
            Here are some of the major amenities planned at Divyasree The Quiet
            Side:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Landscaped Gardens</li>
            <li>Clubhouse</li>
            <li>Swimming Pool</li>
            <li>Gymnasium</li>
            <li>Walking Pathways</li>
            <li>Kids’ Play Area</li>
            <li>Indoor Games</li>
            <li>Multipurpose Hall</li>
            <li>Senior Citizen Seating Zones</li>
            <li>Car Parking</li>
            <li>High-Speed Lifts</li>
            <li>Power Backup</li>
            <li>Water Storage Systems</li>
            <li>Waste Management Facilities</li>
            <li>24/7 Security Systems</li>
          </ul>

          <p>
            These amenities are planned to support daily comfort, recreational
            activities, and community living within the project.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Lifestyle & Wellness Amenities
          </h2>

          <h3 className="text-xl font-semibold text-gray-900">Clubhouse</h3>

          <p>
            The clubhouse is planned as the central social and recreational hub
            of the community. It is expected to include indoor activity areas,
            seating lounges, and spaces for resident interaction and gatherings.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">Gymnasium</h3>

          <p>
            A modern fitness center with workout equipment and exercise areas is
            planned for residents who prefer convenient access to fitness
            facilities within the project.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Yoga & Wellness Spaces
          </h3>

          <p>
            Dedicated wellness and yoga zones are expected to provide calm and
            functional spaces for meditation, stretching, and wellness
            activities.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">Swimming Pool</h3>

          <p>
            The project includes a swimming pool designed for both relaxation
            and fitness activities. Seating and leisure spaces are expected
            around the pool area.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Indoor Recreation
          </h3>

          <p>
            Indoor games and activity spaces are planned to provide
            entertainment and recreational options for residents across
            different age groups.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Active & Sports Amenities
          </h2>

          <h3 className="text-xl font-semibold text-gray-900">
            Walking & Jogging Pathways
          </h3>

          <p>
            Internal landscaped walking tracks and jogging pathways are planned
            to encourage outdoor movement and healthier lifestyles within the
            community.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Outdoor Activity Zones
          </h3>

          <p>
            Open spaces within the project are expected to include areas for
            casual recreation, social interaction, and outdoor relaxation.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Fitness-Oriented Community Design
          </h3>

          <p>
            The low-density planning allows for better open-space distribution,
            creating a calmer and more pedestrian-friendly residential
            atmosphere.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Kids & Family Zones
          </h2>

          <h3 className="text-xl font-semibold text-gray-900">
            Kids’ Play Area
          </h3>

          <p>
            Dedicated play spaces for children are planned within safe internal
            zones away from major vehicle movement areas.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Multipurpose Hall
          </h3>

          <p>
            The multipurpose hall is expected to support community events,
            indoor gatherings, celebrations, and social activities for
            residents.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Landscaped Gardens
          </h3>

          <p>
            Open green spaces and landscaped gardens form an important part of
            the project’s master planning approach, helping create a more
            peaceful living environment.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Senior Citizen Seating Areas
          </h3>

          <p>
            Comfortable seating zones and quieter landscaped corners are
            expected for senior residents and relaxation purposes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Convenience & Utility Features
          </h2>

          <h3 className="text-xl font-semibold text-gray-900">Car Parking</h3>

          <p>
            Basement parking facilities are planned to reduce surface congestion
            and improve internal pedestrian movement.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            High-Speed Lifts
          </h3>

          <p>
            Modern elevator systems are expected across all residential towers
            for smoother vertical movement.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">Power Backup</h3>

          <p>
            The project is expected to include backup power support for common
            areas and essential services.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Water Storage & Management
          </h3>

          <p>
            Water storage systems and utility infrastructure are planned to
            support long-term residential requirements within the development.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Waste Disposal Systems
          </h3>

          <p>
            Organized waste management facilities are expected as part of the
            project’s infrastructure planning.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Safety & Security Features
          </h2>

          <h3 className="text-xl font-semibold text-gray-900">
            24/7 CCTV Surveillance
          </h3>

          <p>
            The community is expected to include CCTV monitoring systems across
            important common areas and entry points.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Security Systems
          </h3>

          <p>
            Controlled entry access, visitor management systems, and internal
            security arrangements are expected to support safer residential
            living.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Smart Residential Infrastructure
          </h3>

          <p>
            The project may include modern residential infrastructure features
            focused on convenience, security, and efficient community
            management.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Modern Lifestyle Features at Divyasree The Quiet Side
          </h2>

          <p>
            The amenities at Divyasree The Quiet Side are designed to support
            comfortable everyday living while maintaining a quieter residential
            atmosphere within North Bangalore.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            Key Lifestyle Highlights
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Landscaped low-density residential environment</li>
            <li>Clubhouse with indoor recreational spaces</li>
            <li>Swimming pool and wellness-focused amenities</li>
            <li>Fitness and walking zones within the community</li>
            <li>Family-oriented open spaces and children’s play areas</li>
            <li>Modern security and utility infrastructure</li>
            <li>Pedestrian-friendly internal planning</li>
            <li>Green open spaces integrated across the layout</li>
          </ul>

          <p>
            The project focuses on creating a premium residential environment
            where residents can enjoy privacy, greenery, and lifestyle
            convenience within a well-connected part of Yelahanka New Town.
          </p>

          <p>
            With only 270 residences across 5.5 acres, Divyasree The Quiet Side
            offers a more spacious and balanced residential experience compared
            to many high-density apartment developments in Bangalore.
          </p>
        </div>
      </div>
    </section>
  );
}
