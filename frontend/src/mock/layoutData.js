const mockLayouts = [
  {
    id: 1,
    name: "Modern Open Concept",
    image: "/assets/images/layout1.png",
    description: "A spacious layout with an open floor plan, perfect for modern living.",
    style: "modern",
    roomCount: 3,
    squareFootage: 1500,
    openPlan: true,
    features: ["Home Office", "Balcony"],
  },
  {
    id: 2,
    name: "Traditional Family Home",
    image: "/assets/images/layout2.png",
    description: "A classic layout with separate rooms, ideal for families who value privacy.",
    style: "traditional",
    roomCount: 4,
    squareFootage: 2000,
    openPlan: false,
    features: ["Fireplace", "Walk-in Closet"],
  },
  {
    id: 3,
    name: "Minimalist Studio",
    image: "/assets/images/layout3.png",
    description: "A compact and efficient layout, perfect for minimalist lifestyles.",
    style: "minimalist",
    roomCount: 1,
    squareFootage: 800,
    openPlan: true,
    features: [],
  },
  {
    id: 4,
    name: "Industrial Loft",
    image: "/assets/images/layout4.png",
    description: "An open and airy loft-style layout with industrial touches.",
    style: "industrial",
    roomCount: 2,
    squareFootage: 1200,
    openPlan: true,
    features: ["Home Office", "Balcony"],
  },
  {
    id: 5,
    name: "Rustic Retreat",
    image: "/assets/images/layout5.png",
    description: "A cozy layout with rustic charm, perfect for a countryside home.",
    style: "rustic",
    roomCount: 3,
    squareFootage: 1800,
    openPlan: false,
    features: ["Fireplace", "Walk-in Closet"],
  },
];

export const generateLayout = (preferences) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Filter layouts based on preferences
      const filteredLayouts = mockLayouts.filter(layout => {
        return (
          layout.style === preferences.style &&
          layout.roomCount >= preferences.roomCount &&
          Math.abs(layout.squareFootage - preferences.squareFootage) <= 500 &&
          layout.openPlan === preferences.openPlan &&
          preferences.features.every(feature => layout.features.includes(feature))
        );
      });

      // If no exact match, return a random layout
      const selectedLayout = filteredLayouts.length > 0
        ? filteredLayouts[Math.floor(Math.random() * filteredLayouts.length)]
        : mockLayouts[Math.floor(Math.random() * mockLayouts.length)];

      resolve(selectedLayout);
    }, 1500); // Increased delay to 1.5 seconds to simulate more processing time
  });
};
