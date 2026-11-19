export const COMPANY_INFO = {
  name: "Sai Rohith Industries",
  brand: "Sri Gold",
  tagline: "From Field to Flour",
  motto: "Your Health is our Motto",
  address: "Plot No 13, APIIC Industrial Area, Gooty Road, Guntakal, Anantapur Dist, Andhra Pradesh - 515801",
  fssai: "10117013000686",
  gstin: "37AGJPR2095R1ZE",
  phone: "+91 95153 19049",
  phoneRaw: "+919515319049",
  landline: "08552226594",
  email: "srigoldgtl@gmail.com",
  whatsapp: "919515319049",
  mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.9651741969387!2d77.4155130104954!3d15.160257163069364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb6ef6de23f4813%3A0x99bca59748d410e8!2sSai%20Rohith%20Industries!5e0!3m2!1sen!2sin!4v1742580711669!5m2!1sen!2sin",
  directionsUrl: "https://maps.google.com/?q=Sai+Rohith+Industries+Guntakal"
};

export const DEVELOPER_INFO = {
  name: "Quick Developers",
  website: "https://www.quickdevelopers.in",
  displayWebsite: "www.quickdevelopers.in",
  phone: "+91 80748 96216",
  phoneRaw: "+918074896216",
  whatsapp: "918074896216",
  whatsappUrl: "https://wa.me/918074896216?text=Hello%20Quick%20Developers,%20I%20saw%20your%20work%20on%20Sai%20Rohith%20Industries%20website."
};

export const ADVANTAGES_DATA = [
  {
    id: 1,
    title: "100% Wholesome Grains",
    desc: "Sourced directly from fertile agricultural heartlands with zero adulteration or harmful synthetic bleaches.",
    icon: "Plant01Icon",
    badge: "Pure Sourcing"
  },
  {
    id: 2,
    title: "Advanced Milling Tech",
    desc: "Temperature-regulated stone chakki & precision roller milling that preserves natural dietary fiber and aroma.",
    icon: "PackageProcessIcon",
    badge: "Cold-Milled"
  },
  {
    id: 3,
    title: "Strict Quality Control",
    desc: "FSSAI registered plant with 5-tier inspection, multi-stage magnetic separators, and hygienic moisture tests.",
    icon: "TickDouble04Icon",
    badge: "FSSAI Certified"
  },
  {
    id: 4,
    title: "Reliable B2B & Retail Supply",
    desc: "Timely delivery for distributors, supermarkets, restaurants, caterers, and bulk industrial buyers across the region.",
    icon: "ContainerTruck02Icon",
    badge: "Swift Logistics"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Farm Selection",
    desc: "Direct procurement of gold-grade golden wheat and premium chana dal from select harvests."
  },
  {
    step: "02",
    title: "Multi-Stage Cleaning",
    desc: "High-power aspiration, de-stoning, and magnetic separation remove every foreign particle."
  },
  {
    step: "03",
    title: "Gentle Precision Milling",
    desc: "Traditional chakki stone friction combined with modern sifting ensures uniform texture without overheating."
  },
  {
    step: "04",
    title: "Hygienic Moisture-Sealed Pack",
    desc: "Automated nitrogen-safe packaging shields against humidity, preserving farm aroma till it hits your kitchen."
  }
];

export const PRODUCTS_LIST = [
  {
    id: "chakki-atta",
    name: "Sri Gold Whole Wheat Chakki Atta",
    teluguName: "శ్రీ గోల్డ్ చక్కి ఆటా",
    category: "Wheat Flours",
    tagline: "100% Atta, 0% Maida • Direct from Farmer House",
    motto: "Your Health is our Motto",
    description: "Manufactured using our unique blend of premium quality special wheat. The advanced milling technology helps retain 100% nutrients in whole wheat, keeping the rotis healthy and butter soft.",
    image: `${process.env.PUBLIC_URL}/products/sri-gold-chakki-atta.jpg`,
    backImage: `${process.env.PUBLIC_URL}/products/sri-gold-chakki-atta-nutrition.jpg`,
    badge: "Official Sri Gold Pack",
    grainType: "Selected Special Wheat",
    shelfLife: "Best before 3 months from packaging",
    packSizes: ["1 kg Retail Pack", "5 kg", "10 kg", "25 kg", "50 kg Bulk"],
    highlights: ["100% Atta, 0% Maida", "Direct from Farmer House", "14.3g Dietary Fibre", "Butter-Soft Rotis"],
    nutrition: {
      energy: "363 kcal",
      protein: "11.8 g",
      dietaryFibre: "14.3 g",
      carbohydrates: "75.1 g",
      fat: "1.7 g",
      calcium: "63.3 mg",
      iron: "3.3 mg",
      cholesterol: "0.0 mg",
      transFat: "0.0 g"
    },
    certifications: ["FSSAI: 10117013000686", "Zed Certified", "Eco-Friendly Processing"],
    recipes: [
      {
        name: "Butter-Soft Phulka & Chapati",
        time: "20 Mins",
        serves: "4",
        prep: "Knead 2 cups Sri Gold Chakki Atta with warm water and a pinch of salt into a soft, supple dough. Rest for 15 minutes. Roll into thin rounds and puff directly on open flame or hot tawa until golden spotted. Brush with fresh butter or ghee."
      },
      {
        name: "Stuffed Aloo Paratha",
        time: "30 Mins",
        serves: "4",
        prep: "Enclose spiced mashed potato filling inside rolled dough discs. Roll gently with dusting flour and roast on a cast-iron skillet with pure desi ghee until crispy and golden brown."
      }
    ]
  },
  {
    id: "maida",
    name: "Maida",
    category: "Wheat Flours",
    tagline: "Super-Fine Silk-Sifted Refined Wheat Flour",
    description: "Carefully milled from the best endosperm of choice wheat, providing exceptional gluten strength, stretchability, and silky texture for bakery delicacies, sweets, and gourmet breads.",
    image: "https://i.imgur.com/WECbYrA.jpg",
    badge: "Bakery Grade",
    grainType: "Selected Hard Wheat",
    shelfLife: "6 Months",
    packSizes: ["500g", "1 kg", "25 kg", "50 kg Bulk"],
    highlights: ["High Gluten Strength", "Uniform Consistency", "Bleach-Free Process"],
    recipes: [
      {
        name: "Restaurant-Style Garlic Naan",
        time: "40 Mins",
        serves: "4",
        prep: "Combine Maida with fresh curd, pinch of baking soda, sugar, and milk into a soft dough. Rest for 1 hour. Roll into teardrop shapes, top with minced garlic & coriander, and bake or skillet-sear with butter."
      },
      {
        name: "Classic Spongy Vanilla Cake",
        time: "45 Mins",
        serves: "6",
        prep: "Sift Maida with baking powder. Cream butter and sugar, fold in whisked eggs or condensed milk, add vanilla, and bake at 180°C for 30 minutes until a toothpick inserted comes out clean."
      }
    ]
  },
  {
    id: "bombay-rava",
    name: "Bombay Rava (Sooji)",
    category: "Rava & Semolina",
    tagline: "Crisp Golden Granulated Wheat Semolina",
    description: "Pristine golden granules crafted from hard durum wheat. Roasted or non-roasted, it absorbs moisture evenly without clumping, ensuring non-sticky breakfast upma, crispy dosas, and luscious halwa.",
    image: "https://i.imgur.com/QEwsWeO.jpg",
    badge: "Popular Breakfast",
    grainType: "Premium Hard Wheat",
    shelfLife: "6 Months",
    packSizes: ["500g", "1 kg", "25 kg", "50 kg Bulk"],
    highlights: ["Even Granulation", "Non-Sticky Cooking", "Roasted Fragrance"],
    recipes: [
      {
        name: "Homestyle Vegetable Upma",
        time: "15 Mins",
        serves: "4",
        prep: "Dry roast Bombay Rava until fragrant. Splutter mustard seeds, curry leaves, ginger, and green chillies in oil. Sauté onions, peas, and carrots. Add 3 parts boiling water, stir in rava continuously, cover, and steam."
      },
      {
        name: "Crispy Instant Rava Dosa",
        time: "20 Mins",
        serves: "4",
        prep: "Whisk equal parts Bombay Rava and rice flour with buttermilk, chopped onions, cumin seeds, and cracked pepper into a thin pouring batter. Splash onto a scorching tawa, drizzle ghee, and roast until lacework crisp."
      }
    ]
  },
  {
    id: "chiroti-rava",
    name: "Chiroti Rava",
    category: "Rava & Semolina",
    tagline: "Ultra-Fine Silken Semolina for Festive Delicacies",
    description: "Finely ground wheat semolina prized by traditional sweet makers. Its delicate particle size provides superior dough elasticity for multilayered festive sweets and melt-in-mouth delicacies.",
    image: "https://i.imgur.com/KPLmWOH.jpg",
    badge: "Sweet Specialist",
    grainType: "Refined High-Grade Wheat",
    shelfLife: "6 Months",
    packSizes: ["500g", "1 kg", "25 kg", "50 kg Bulk"],
    highlights: ["Micro-Fine Granules", "Superior Elasticity", "Ideal for Festive Sweets"],
    recipes: [
      {
        name: "Traditional Karnataka Chiroti",
        time: "40 Mins",
        serves: "6",
        prep: "Knead Chiroti Rava with warm ghee and water. Roll paper-thin, smear with rice flour-ghee paste, roll like a swiss roll, slice, flatten, and deep fry in hot ghee until crisp. Dust with powdered cardamom sugar."
      },
      {
        name: "Crisp Sweet Shankarpali",
        time: "35 Mins",
        serves: "8",
        prep: "Mix Chiroti Rava with a little Maida, warm milk, and powdered sugar. Roll into semi-thick sheet, cut diamond shapes with a fluted cutter, and slow-fry in oil until golden and crunchy."
      }
    ]
  },
  {
    id: "bansi-rava",
    name: "Bansi Rava",
    category: "Rava & Semolina",
    tagline: "Rustic Golden Durum Wheat Coarse Granules",
    description: "Cracked durum wheat semolina with a deep golden hue and earthy nutty flavor. Highly rich in protein and low in glycemic index, favored for traditional wholesome South Indian upma, khichdi, and payasam.",
    image: "https://i.imgur.com/KtNysYD.jpg",
    badge: "Healthy & Rustic",
    grainType: "100% Golden Durum Wheat",
    shelfLife: "6 Months",
    packSizes: ["500g", "1 kg", "25 kg", "50 kg Bulk"],
    highlights: ["Low Glycemic Index", "Rustic Texture", "High Plant Protein"],
    recipes: [
      {
        name: "Nutritious Bansi Rava Khichdi",
        time: "25 Mins",
        serves: "4",
        prep: "Roast Bansi Rava in a teaspoon of ghee. In a pressure cooker or pan, temper cumin, mustard, cashews, and ginger. Add mixed vegetables, 3.5 cups water, and salt. Stir in rava and cook on low flame until tender and hearty."
      },
      {
        name: "Aromatic Bansi Rava Kheer",
        time: "30 Mins",
        serves: "5",
        prep: "Simmer roasted Bansi Rava in full-cream milk until soft and plump. Sweeten with jaggery or sugar, infuse with green cardamom powder, and garnish with ghee-toasted cashews and raisins."
      }
    ]
  },
  {
    id: "besan-flour",
    name: "Besan Flour (Gram Flour)",
    category: "Specialty Flours",
    tagline: "100% Pure Roasted Bengal Gram (Chana Dal) Flour",
    description: "Milled exclusively from high-yield, premium-grade chana dal without mixing or impurities. Delivers an intensely nutty aroma, rich protein content, and lump-free smooth batter for authentic sweets and snacks.",
    image: "https://i.imgur.com/8ccp21l.jpg",
    badge: "High Protein",
    grainType: "Select Chana Dal",
    shelfLife: "6 Months",
    packSizes: ["500g", "1 kg", "25 kg", "50 kg Bulk"],
    highlights: ["100% Pure Bengal Gram", "Rich in Protein", "Smooth Lump-Free Texture"],
    recipes: [
      {
        name: "Desi Ghee Besan Ladoo",
        time: "35 Mins",
        serves: "10",
        prep: "Slowly roast Besan Flour in pure cow ghee over a gentle flame until golden brown and intensely nutty. Let cool slightly, blend in boora / powdered sugar and cardamom, and shape into aromatic round ladoos."
      },
      {
        name: "Crispy Vegetable Pakora",
        time: "20 Mins",
        serves: "4",
        prep: "Whisk Besan with carom seeds (ajwain), red chilli powder, hing, rice flour, and water into a glossy coating batter. Dip sliced onions, potatoes, or spinach and deep fry until amber and crackling crisp."
      }
    ]
  },
  {
    id: "idli-rava",
    name: "Idli Rava",
    category: "Specialty Flours",
    tagline: "Precision-Granulated Rava for Pillow-Soft Idlis",
    description: "Specially processed parboiled grain granules designed to absorb moisture and ferment with urad dal batter flawlessly, yielding ultra-soft, airy, and snow-white South Indian idlis every single morning.",
    image: "https://i.imgur.com/8vEgFqd.jpg",
    badge: "South Indian Staple",
    grainType: "Select Parboiled Grain",
    shelfLife: "6 Months",
    packSizes: ["500g", "1 kg", "25 kg", "50 kg Bulk"],
    highlights: ["Consistent Grain Size", "Aids Fluffy Fermentation", "Snow-White Appearance"],
    recipes: [
      {
        name: "Mallige Soft Steamed Idli",
        time: "20 Mins (+ferment)",
        serves: "6",
        prep: "Wash and squeeze excess water from soaked Idli Rava. Fold smoothly into fluffy ground urad dal batter with rock salt. Ferment overnight in a warm spot. Steam in greased idli molds for 10-12 minutes."
      },
      {
        name: "Instant Steamed Rava Dhokla",
        time: "25 Mins",
        serves: "4",
        prep: "Mix Idli Rava with whisked sour curd, ginger-green chilli paste, and water. Rest for 10 minutes, stir in fruit salt (eno), pour into greased plate and steam. Temper with mustard seeds, sesame, curry leaves and green chillies."
      }
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: "Ramesh Reddy",
    role: "Proprietor, Annapurna Sweets & Bakery",
    text: "We have been sourcing Sri Gold Maida and Chiroti Rava for over two years in Guntakal. The consistency, elasticity, and purity have elevated our sweets to another level.",
    location: "Guntakal"
  },
  {
    name: "Smt. Lakshmi Devi",
    role: "Home Chef & Culinary Enthusiast",
    text: "The Chakki Atta makes chapatis that remain wonderfully soft till dinner. You can immediately smell the fresh grain aroma the moment you open the pack.",
    location: "Anantapur"
  },
  {
    name: "K. Venkatesh",
    role: "Wholesale Grocery Distributor",
    text: "Sai Rohith Industries delivers on time with reliable bulk packing. Their Besan and Bombay Rava fly off our retail partner shelves across Rayalaseema.",
    location: "Bellary Road"
  }
];
