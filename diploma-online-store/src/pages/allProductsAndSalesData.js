import prod01 from "../assets/saleImg04.png";
import prod02 from "../assets/productImg01.png";
import prod03 from "../assets/productImg02.png";
import prod04 from "../assets/productImg03.png";
import prod05 from "../assets/productImg04.png";
import prod06 from "../assets/productImg05.png";
import prod07 from "../assets/productImg06.png";
import prod08 from "../assets/productImg07.png";
import prod09 from "../assets/saleImg01.png";
import prod10 from "../assets/saleImg02.png";
import prod11 from "../assets/saleImg03.png";

// All products
export const allProducts = [
  { 
    id: 1, 
    title: "Secateurs", 
    img: prod01, 
    price: 250,        
    oldPrice: 350,     
    discount: "-29%",
    description: `This high quality everyday secateurs features a fully hardened and tempered, high-carbon steel blade for lasting sharpness. 
For comfort, the robust but lightweight alloy handles are covered in a soft grip, in a bright terracotta colore for maximum visibility in the garden. 
It won’t be easy to leave this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user. 
This secateur cuts up to 2.5cm diameter. Carrying RHS endorsement, possibly the highest accolade in gardening, for peace of mind this pruner comes with a ten-year guarantee against manufacture defects.`
  },
  { 
    id: 2, 
    title: "Collection for berries (plastic)", 
    img: prod02, 
    price: 26, 
    oldPrice: 35, 
    discount: "-26%",
    description: "Lightweight and durable plastic basket designed for picking and carrying berries. Ventilated structure prevents moisture buildup while keeping fruits fresh. Comfortable handle allows easy transportation for hours of berry collection in the garden."
  },
  { 
    id: 3, 
    title: "Gloves black", 
    img: prod03, 
    price: 9, 
    oldPrice: 14, 
    discount: "-36%",
    description: "Durable black gloves made from flexible fabric with reinforced grip. Perfect for gardening, landscaping, or light construction work. Protects hands from dirt, scratches, and blisters while offering comfort and breathability throughout the day."
  },
  { 
    id: 4, 
    title: "Sickle-shaped hacksaw", 
    img: prod04, 
    price: 300,
    description: "Heavy-duty sickle-shaped hacksaw ideal for cutting thick branches and maintaining trees. The curved blade allows faster and more efficient sawing action. Strong handle with slip-resistant grip ensures safety during demanding gardening tasks."
  },
  { 
    id: 5, 
    title: "Bayonet shovel", 
    img: prod05, 
    price: 180,
    description: "Traditional bayonet shovel with a sharp steel blade for digging hard soil and clay. Wooden ergonomic handle ensures comfortable grip. A versatile gardening tool suitable for planting, transplanting, and heavy-duty landscaping work."
  },
  { 
    id: 6, 
    title: "Garden pitchfork", 
    img: prod06, 
    price: 179,
    description: "Strong steel garden pitchfork designed for turning soil, compost, and mulch. Four sharp tines penetrate the ground with ease. Perfect for loosening soil or aerating compost piles. Durable handle provides comfort and stability during use."
  },
  { 
    id: 7, 
    title: "Barbell", 
    img: prod07, 
    price: 12,
    description: "Compact barbell for home and garden training routines. Made from durable steel with a comfortable grip coating. Ideal for beginners and experienced users. Helps improve strength, flexibility, and endurance in a practical and affordable way."
  },
  { 
    id: 8, 
    title: "Souvenir thermometer", 
    img: prod08, 
    price: 98, 
    oldPrice: 120, 
    discount: "-18%",
    description: "Decorative souvenir thermometer combining functionality with elegant design. Measures temperature accurately while serving as a stylish addition to your home or garden. Durable construction ensures long-lasting use both indoors and outdoors."
  },
  { 
    id: 9, 
    title: "Decorative forged bridge", 
    img: prod09, 
    price: 500, 
    oldPrice: 1000, 
    discount: "-50%",
    description: "Beautifully crafted decorative forged bridge for gardens and landscapes. Made with solid metal and elegant design details. Adds charm to outdoor spaces while remaining sturdy and weather-resistant. Perfect centerpiece for creating a unique atmosphere."
  },
  { 
    id: 10, 
    title: "Flower basket", 
    img: prod10, 
    price: 100, 
    oldPrice: 150, 
    discount: "-38%",
    description: "Handcrafted flower basket ideal for decoration or carrying blooms. Made with natural materials that complement any floral arrangement. Lightweight yet sturdy design allows easy transport and makes it a perfect gift for garden lovers."
  },
  { 
    id: 11, 
    title: "Aquarium lock", 
    img: prod11, 
    price: 150, 
    oldPrice: 200, 
    discount: "-25%",
    description: "Secure aquarium lock designed to protect tanks from accidental openings. Durable stainless steel mechanism ensures long-lasting safety. Easy to install and compatible with most aquarium types. Essential accessory for aquarists and pet owners."
  },
];

// Sales products
export const salesData = [
  allProducts[0],
  allProducts[1],
  allProducts[2],
  allProducts[7],
  allProducts[8],
  allProducts[9],
  allProducts[10],
];
