// Shared product data for the entire application
export const sampleProducts = [
  // Electronics
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop"
    ],
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation",
    longDescription: "These premium wireless headphones deliver exceptional sound quality with active noise cancellation. Features include 30-hour battery life, quick charge capability, and comfortable over-ear design. Perfect for travel, work, or leisure listening.",
    rating: 4.5,
    reviews: 128,
    inStock: true,
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Quick charge (5 min = 3 hours)",
      "Comfortable over-ear design",
      "Premium sound quality"
    ],
    specifications: {
      "Battery Life": "30 hours",
      "Charging Time": "2 hours",
      "Connectivity": "Bluetooth 5.0",
      "Weight": "250g",
      "Warranty": "2 years"
    }
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&h=500&fit=crop"
    ],
    category: "Electronics",
    description: "Advanced smartwatch with health monitoring features",
    longDescription: "Stay connected and healthy with this feature-rich smartwatch. Monitor your heart rate, track workouts, receive notifications, and much more. Water-resistant design perfect for active lifestyles.",
    rating: 4.8,
    reviews: 89,
    inStock: true,
    features: [
      "Heart rate monitoring",
      "Fitness tracking",
      "Water resistant",
      "7-day battery life",
      "GPS enabled"
    ],
    specifications: {
      "Display": "1.4 inch AMOLED",
      "Battery Life": "7 days",
      "Water Resistance": "5ATM",
      "Connectivity": "Bluetooth, WiFi",
      "Sensors": "Heart rate, GPS, Accelerometer"
    }
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop"
    ],
    category: "Electronics",
    description: "Portable Bluetooth speaker with excellent sound quality",
    longDescription: "Take your music anywhere with this powerful portable Bluetooth speaker. Features include 12-hour battery life, waterproof design, and crystal-clear audio quality.",
    rating: 4.5,
    reviews: 134,
    inStock: true,
    features: [
      "12-hour battery life",
      "Waterproof design",
      "Bluetooth 5.0",
      "Crystal-clear audio",
      "Portable and lightweight"
    ],
    specifications: {
      "Battery Life": "12 hours",
      "Connectivity": "Bluetooth 5.0",
      "Water Resistance": "IPX7",
      "Weight": "600g",
      "Warranty": "1 year"
    }
  },
  {
    id: 9,
    name: "Gaming Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop"
    ],
    category: "Electronics",
    description: "High-performance gaming laptop with RTX graphics",
    longDescription: "Experience gaming like never before with this high-performance gaming laptop. Features RTX graphics, fast SSD storage, and high-refresh display for smooth gameplay.",
    rating: 4.7,
    reviews: 67,
    inStock: true,
    features: [
      "RTX Graphics Card",
      "Fast SSD Storage",
      "High-refresh Display",
      "RGB Keyboard",
      "Advanced Cooling"
    ],
    specifications: {
      "Graphics": "RTX 4060",
      "RAM": "16GB DDR5",
      "Storage": "512GB SSD",
      "Display": "15.6\" 144Hz",
      "Warranty": "2 years"
    }
  },
  {
    id: 10,
    name: "Wireless Mouse",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop"
    ],
    category: "Electronics",
    description: "Ergonomic wireless mouse with precision tracking",
    longDescription: "Work and play with precision using this ergonomic wireless mouse. Features high-precision sensor, long battery life, and comfortable design.",
    rating: 4.3,
    reviews: 89,
    inStock: true,
    features: [
      "High-precision sensor",
      "Long battery life",
      "Ergonomic design",
      "Wireless connectivity",
      "Programmable buttons"
    ],
    specifications: {
      "Sensor": "Optical 1600 DPI",
      "Battery Life": "18 months",
      "Connectivity": "2.4GHz Wireless",
      "Weight": "100g",
      "Warranty": "1 year"
    }
  },
  {
    id: 11,
    name: "Tablet",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop"
    ],
    category: "Electronics",
    description: "10-inch tablet with high-resolution display",
    longDescription: "Perfect for work and entertainment, this 10-inch tablet features a high-resolution display, long battery life, and powerful performance.",
    rating: 4.4,
    reviews: 156,
    inStock: true,
    features: [
      "10-inch HD Display",
      "Long battery life",
      "Powerful processor",
      "Lightweight design",
      "Multiple connectivity options"
    ],
    specifications: {
      "Display": "10\" HD",
      "Battery Life": "10 hours",
      "Storage": "64GB",
      "Connectivity": "WiFi, Bluetooth",
      "Warranty": "1 year"
    }
  },
  {
    id: 19,
    name: "iPhone 15",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop"
    ],
    category: "Electronics",
    description: "Latest iPhone with advanced camera and performance",
    longDescription: "Experience the latest in smartphone technology with the iPhone 15. Features advanced camera system, powerful A17 chip, and all-day battery life.",
    rating: 4.8,
    reviews: 234,
    inStock: true,
    features: [
      "Advanced camera system",
      "A17 Bionic chip",
      "All-day battery life",
      "5G connectivity",
      "iOS 17"
    ],
    specifications: {
      "Display": "6.1\" Super Retina XDR",
      "Chip": "A17 Bionic",
      "Storage": "128GB",
      "Camera": "48MP Main Camera",
      "Warranty": "1 year"
    }
  },
  
  // Sports
  {
    id: 3,
    name: "Running Shoes",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop"
    ],
    category: "Sports",
    description: "Comfortable running shoes for all terrains",
    longDescription: "Perfect for runners of all levels, these shoes provide excellent cushioning, support, and durability for any terrain.",
    rating: 4.3,
    reviews: 156,
    inStock: true,
    features: [
      "Excellent cushioning",
      "All-terrain grip",
      "Breathable material",
      "Lightweight design",
      "Durable construction"
    ],
    specifications: {
      "Weight": "280g",
      "Drop": "8mm",
      "Material": "Mesh upper",
      "Sole": "Rubber outsole",
      "Warranty": "6 months"
    }
  },
  {
    id: 6,
    name: "Yoga Mat",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop"
    ],
    category: "Sports",
    description: "Non-slip yoga mat for all types of exercises",
    longDescription: "Enhance your yoga practice with this premium non-slip yoga mat. Provides excellent grip, cushioning, and durability for all types of exercises.",
    rating: 4.7,
    reviews: 167,
    inStock: true,
    features: [
      "Non-slip surface",
      "Excellent cushioning",
      "Easy to clean",
      "Lightweight and portable",
      "Durable material"
    ],
    specifications: {
      "Size": "72\" x 24\"",
      "Thickness": "6mm",
      "Material": "TPE",
      "Weight": "2.5 lbs",
      "Warranty": "1 year"
    }
  },
  {
    id: 12,
    name: "Dumbbells Set",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop"
    ],
    category: "Sports",
    description: "Adjustable dumbbells for home workouts",
    longDescription: "Build strength at home with these adjustable dumbbells. Perfect for a variety of exercises and suitable for all fitness levels.",
    rating: 4.6,
    reviews: 98,
    inStock: true,
    features: [
      "Adjustable weight",
      "Space-saving design",
      "Comfortable grip",
      "Durable construction",
      "Multiple exercises"
    ],
    specifications: {
      "Weight Range": "5-50 lbs",
      "Material": "Cast iron",
      "Grip": "Rubber coated",
      "Storage": "Compact rack",
      "Warranty": "1 year"
    }
  },
  {
    id: 13,
    name: "Basketball",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=500&fit=crop"
    ],
    category: "Sports",
    description: "Official size basketball for indoor and outdoor play",
    longDescription: "Perfect for both indoor and outdoor basketball games. Official size and weight with excellent grip and durability.",
    rating: 4.5,
    reviews: 45,
    inStock: true,
    features: [
      "Official size",
      "Indoor/outdoor use",
      "Excellent grip",
      "Durable construction",
      "Consistent bounce"
    ],
    specifications: {
      "Size": "Official (29.5\")",
      "Weight": "22 oz",
      "Material": "Composite leather",
      "Use": "Indoor/Outdoor",
      "Warranty": "6 months"
    }
  },
  {
    id: 14,
    name: "Tennis Racket",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop"
    ],
    category: "Sports",
    description: "Professional tennis racket with carbon fiber frame",
    longDescription: "Improve your tennis game with this professional-grade racket. Features carbon fiber frame for power and control.",
    rating: 4.4,
    reviews: 73,
    inStock: true,
    features: [
      "Carbon fiber frame",
      "Professional grade",
      "Power and control",
      "Comfortable grip",
      "Durable strings"
    ],
    specifications: {
      "Head Size": "100 sq in",
      "Weight": "300g",
      "String Pattern": "16x19",
      "Grip Size": "4 3/8",
      "Warranty": "1 year"
    }
  },
  {
    id: 15,
    name: "Swimming Goggles",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500&h=500&fit=crop"
    ],
    category: "Sports",
    description: "Anti-fog swimming goggles with UV protection",
    longDescription: "Swim with confidence using these anti-fog goggles. Features UV protection and comfortable fit for all swimming activities.",
    rating: 4.2,
    reviews: 112,
    inStock: true,
    features: [
      "Anti-fog coating",
      "UV protection",
      "Comfortable fit",
      "Adjustable straps",
      "Clear vision"
    ],
    specifications: {
      "Lens": "Polycarbonate",
      "UV Protection": "100%",
      "Strap": "Adjustable",
      "Fit": "Universal",
      "Warranty": "6 months"
    }
  },
  
  // Home
  {
    id: 4,
    name: "Coffee Maker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop"
    ],
    category: "Home",
    description: "Automatic coffee maker with programmable settings",
    longDescription: "Start your day right with this automatic coffee maker. Features programmable settings, thermal carafe, and multiple brew sizes.",
    rating: 4.6,
    reviews: 203,
    inStock: true,
    features: [
      "Programmable settings",
      "Thermal carafe",
      "Multiple brew sizes",
      "Auto shut-off",
      "Easy to clean"
    ],
    specifications: {
      "Capacity": "12 cups",
      "Carafe": "Thermal",
      "Timer": "24-hour",
      "Filter": "Permanent",
      "Warranty": "1 year"
    }
  },
  {
    id: 8,
    name: "Desk Lamp",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop"
    ],
    category: "Home",
    description: "LED desk lamp with adjustable brightness",
    longDescription: "Illuminate your workspace with this modern LED desk lamp. Features adjustable brightness, color temperature, and flexible positioning.",
    rating: 4.2,
    reviews: 78,
    inStock: true,
    features: [
      "LED technology",
      "Adjustable brightness",
      "Color temperature control",
      "Flexible positioning",
      "Energy efficient"
    ],
    specifications: {
      "Light Source": "LED",
      "Brightness": "Adjustable",
      "Color Temperature": "3000K-6000K",
      "Power": "USB powered",
      "Warranty": "1 year"
    }
  },
  {
    id: 16,
    name: "Air Purifier",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop"
    ],
    category: "Home",
    description: "HEPA air purifier for clean indoor air",
    longDescription: "Breathe cleaner air with this HEPA air purifier. Removes allergens, dust, and pollutants from your home environment.",
    rating: 4.5,
    reviews: 89,
    inStock: true,
    features: [
      "HEPA filtration",
      "Allergen removal",
      "Quiet operation",
      "Energy efficient",
      "Easy maintenance"
    ],
    specifications: {
      "Filter Type": "HEPA",
      "Coverage": "500 sq ft",
      "Noise Level": "< 50 dB",
      "Power": "50W",
      "Warranty": "2 years"
    }
  },
  {
    id: 17,
    name: "Throw Pillows",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=500&fit=crop"
    ],
    category: "Home",
    description: "Decorative throw pillows for living room",
    longDescription: "Add comfort and style to your living space with these decorative throw pillows. Soft, durable, and easy to clean.",
    rating: 4.3,
    reviews: 67,
    inStock: true,
    features: [
      "Decorative design",
      "Soft and comfortable",
      "Easy to clean",
      "Durable material",
      "Multiple colors"
    ],
    specifications: {
      "Size": "18\" x 18\"",
      "Material": "Cotton blend",
      "Fill": "Polyester",
      "Care": "Machine washable",
      "Warranty": "6 months"
    }
  },
  {
    id: 18,
    name: "Kitchen Knife Set",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop"
    ],
    category: "Home",
    description: "Professional chef knife set with wooden block",
    longDescription: "Upgrade your kitchen with this professional knife set. Includes all essential knives with a beautiful wooden storage block.",
    rating: 4.7,
    reviews: 134,
    inStock: true,
    features: [
      "Professional grade",
      "Sharp blades",
      "Wooden storage block",
      "Ergonomic handles",
      "Complete set"
    ],
    specifications: {
      "Knives": "8-piece set",
      "Blade Material": "High-carbon steel",
      "Handle": "Ergonomic",
      "Storage": "Wooden block",
      "Warranty": "Lifetime"
    }
  },
  
  // Clothing
  {
    id: 25,
    name: "Cotton T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop"
    ],
    category: "Clothing",
    description: "Comfortable cotton t-shirt in various colors",
    longDescription: "Made from 100% premium cotton, this comfortable t-shirt is perfect for everyday wear. Available in multiple colors and sizes.",
    rating: 4.3,
    reviews: 89,
    inStock: true,
    features: [
      "100% cotton",
      "Comfortable fit",
      "Multiple colors",
      "Machine washable",
      "Durable construction"
    ],
    specifications: {
      "Material": "100% Cotton",
      "Care": "Machine washable",
      "Fit": "Regular",
      "Colors": "Multiple",
      "Warranty": "6 months"
    }
  },
  {
    id: 26,
    name: "Denim Jeans",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop"
    ],
    category: "Clothing",
    description: "Classic denim jeans with modern fit",
    longDescription: "These classic denim jeans feature a modern fit and premium denim construction. Perfect for casual and semi-formal occasions.",
    rating: 4.5,
    reviews: 156,
    inStock: true,
    features: [
      "Premium denim",
      "Modern fit",
      "Durable construction",
      "Classic style",
      "Comfortable waistband"
    ],
    specifications: {
      "Material": "98% Cotton, 2% Elastane",
      "Fit": "Slim",
      "Rise": "Mid-rise",
      "Colors": "Blue, Black",
      "Warranty": "6 months"
    }
  },
  {
    id: 27,
    name: "Hoodie",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop"
    ],
    category: "Clothing",
    description: "Warm and comfortable hoodie for casual wear",
    longDescription: "Stay cozy with this comfortable hoodie. Features a soft fleece lining, adjustable drawstring hood, and kangaroo pocket.",
    rating: 4.4,
    reviews: 123,
    inStock: true,
    features: [
      "Soft fleece lining",
      "Adjustable hood",
      "Kangaroo pocket",
      "Comfortable fit",
      "Warm and cozy"
    ],
    specifications: {
      "Material": "80% Cotton, 20% Polyester",
      "Lining": "Fleece",
      "Pocket": "Kangaroo",
      "Colors": "Multiple",
      "Warranty": "6 months"
    }
  },
  {
    id: 28,
    name: "Running Shorts",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop"
    ],
    category: "Clothing",
    description: "Lightweight running shorts for active lifestyle",
    longDescription: "Perfect for running and workouts, these lightweight shorts feature moisture-wicking fabric and comfortable elastic waistband.",
    rating: 4.2,
    reviews: 78,
    inStock: true,
    features: [
      "Moisture-wicking",
      "Lightweight",
      "Elastic waistband",
      "Comfortable fit",
      "Quick-dry fabric"
    ],
    specifications: {
      "Material": "Polyester blend",
      "Features": "Moisture-wicking",
      "Waistband": "Elastic",
      "Length": "5-inch inseam",
      "Warranty": "6 months"
    }
  },
  {
    id: 29,
    name: "Winter Jacket",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=500&fit=crop"
    ],
    category: "Clothing",
    description: "Warm winter jacket with insulation",
    longDescription: "Stay warm during cold weather with this insulated winter jacket. Features water-resistant outer shell and cozy inner lining.",
    rating: 4.6,
    reviews: 167,
    inStock: true,
    features: [
      "Insulated lining",
      "Water-resistant",
      "Warm and cozy",
      "Multiple pockets",
      "Adjustable hood"
    ],
    specifications: {
      "Material": "Nylon outer, Polyester lining",
      "Insulation": "Synthetic",
      "Water Resistance": "Water-resistant",
      "Pockets": "4 exterior, 2 interior",
      "Warranty": "1 year"
    }
  },
  {
    id: 30,
    name: "Dress Shirt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop"
    ],
    category: "Clothing",
    description: "Professional dress shirt for formal occasions",
    longDescription: "Look professional with this crisp dress shirt. Perfect for business meetings, interviews, and formal events.",
    rating: 4.4,
    reviews: 134,
    inStock: true,
    features: [
      "Professional look",
      "Crisp cotton",
      "Classic collar",
      "Button-down style",
      "Easy care"
    ],
    specifications: {
      "Material": "100% Cotton",
      "Collar": "Classic",
      "Fit": "Regular",
      "Colors": "White, Blue, Pink",
      "Warranty": "6 months"
    }
  },
  
  // Accessories
  {
    id: 5,
    name: "Laptop Backpack",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop"
    ],
    category: "Accessories",
    description: "Durable laptop backpack with multiple compartments",
    longDescription: "Carry your laptop and essentials safely with this durable backpack. Features multiple compartments, padded laptop sleeve, and comfortable straps.",
    rating: 4.4,
    reviews: 92,
    inStock: true,
    features: [
      "Multiple compartments",
      "Padded laptop sleeve",
      "Comfortable straps",
      "Durable material",
      "Water resistant"
    ],
    specifications: {
      "Capacity": "25L",
      "Laptop Size": "Up to 17\"",
      "Material": "Nylon",
      "Weight": "1.2 kg",
      "Warranty": "1 year"
    }
  },
  {
    id: 20,
    name: "Phone Case",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop"
    ],
    category: "Accessories",
    description: "Protective phone case with wireless charging",
    longDescription: "Protect your phone with this durable case. Features wireless charging compatibility, drop protection, and precise cutouts.",
    rating: 4.2,
    reviews: 78,
    inStock: true,
    features: [
      "Wireless charging compatible",
      "Drop protection",
      "Precise cutouts",
      "Durable material",
      "Slim design"
    ],
    specifications: {
      "Material": "TPU",
      "Protection": "Drop tested",
      "Charging": "Wireless compatible",
      "Design": "Slim fit",
      "Warranty": "6 months"
    }
  },
  {
    id: 21,
    name: "Sunglasses",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop"
    ],
    category: "Accessories",
    description: "UV protection sunglasses with polarized lenses",
    longDescription: "Protect your eyes in style with these UV protection sunglasses. Features polarized lenses and comfortable fit.",
    rating: 4.6,
    reviews: 123,
    inStock: true,
    features: [
      "UV protection",
      "Polarized lenses",
      "Comfortable fit",
      "Stylish design",
      "Durable frame"
    ],
    specifications: {
      "UV Protection": "100%",
      "Lenses": "Polarized",
      "Frame": "Acetate",
      "Style": "Aviator",
      "Warranty": "1 year"
    }
  },
  {
    id: 22,
    name: "Watch Strap",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"
    ],
    category: "Accessories",
    description: "Leather watch strap compatible with smartwatches",
    longDescription: "Upgrade your smartwatch with this premium leather strap. Comfortable, durable, and compatible with most smartwatches.",
    rating: 4.3,
    reviews: 56,
    inStock: true,
    features: [
      "Premium leather",
      "Smartwatch compatible",
      "Comfortable fit",
      "Easy to install",
      "Durable construction"
    ],
    specifications: {
      "Material": "Genuine leather",
      "Compatibility": "Universal",
      "Width": "22mm",
      "Length": "Adjustable",
      "Warranty": "6 months"
    }
  },
  {
    id: 23,
    name: "Travel Mug",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=500&fit=crop"
    ],
    category: "Accessories",
    description: "Insulated travel mug keeps drinks hot for hours",
    longDescription: "Keep your drinks at the perfect temperature with this insulated travel mug. Features leak-proof lid and comfortable grip.",
    rating: 4.5,
    reviews: 89,
    inStock: true,
    features: [
      "Insulated design",
      "Leak-proof lid",
      "Comfortable grip",
      "Easy to clean",
      "Dishwasher safe"
    ],
    specifications: {
      "Capacity": "16 oz",
      "Material": "Stainless steel",
      "Insulation": "Double wall",
      "Lid": "Leak-proof",
      "Warranty": "1 year"
    }
  },
  {
    id: 24,
    name: "Power Bank",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1588200908342-23b585c03e26?w=300&h=300&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1588200908342-23b585c03e26?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1588200908342-23b585c03e26?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1588200908342-23b585c03e26?w=500&h=500&fit=crop"
    ],
    category: "Accessories",
    description: "High-capacity power bank with fast charging",
    longDescription: "Never run out of battery with this high-capacity power bank. Features fast charging, multiple ports, and LED indicators.",
    rating: 4.4,
    reviews: 167,
    inStock: true,
    features: [
      "High capacity",
      "Fast charging",
      "Multiple ports",
      "LED indicators",
      "Compact design"
    ],
    specifications: {
      "Capacity": "20000mAh",
      "Output": "18W",
      "Ports": "2 USB + 1 USB-C",
      "Weight": "400g",
      "Warranty": "1 year"
    }
  }
];