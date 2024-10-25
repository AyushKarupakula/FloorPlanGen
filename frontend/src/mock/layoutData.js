const mockLayouts = [
  {
    id: 1,
    name: "Modern Open Concept",
    image: "/assets/images/layout1.png",
    description: "A spacious layout with an open floor plan, perfect for modern living.",
  },
  {
    id: 2,
    name: "Traditional Family Home",
    image: "/assets/images/layout2.png",
    description: "A classic layout with separate rooms, ideal for families who value privacy.",
  },
  {
    id: 3,
    name: "Minimalist Studio",
    image: "/assets/images/layout3.png",
    description: "A compact and efficient layout, perfect for minimalist lifestyles.",
  },
];

export const generateLayout = (preferences) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real application, we would use the preferences to generate a layout
      // For now, we'll just return a random layout from our mock data
      const randomIndex = Math.floor(Math.random() * mockLayouts.length);
      resolve(mockLayouts[randomIndex]);
    }, 1000); // Simulate a delay
  });
};
