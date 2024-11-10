"use client"
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const products = [
  {
    id: 1,
    name: "Pran Face Mask",
    description: "A rejuvenating face mask from Pran that deeply cleanses and hydrates your skin, providing essential nutrients and a refreshing feel. Suitable for all skin types, it helps to eliminate impurities, leaving your skin smooth and glowing after every use.",
    category: "Beauty",
    price: "$12.99",
    rating: 4.5,
    img: "/img/1.png"
  },
  {
    id: 2,
    name: "Sunsilk Shampoo",
    description: "A nourishing shampoo by Sunsilk crafted to strengthen hair and add a vibrant shine. Its unique formula gently cleanses, hydrates, and revitalizes each strand, making it ideal for daily use to achieve soft, manageable hair.",
    category: "Beauty",
    price: "$9.99",
    rating: 4.7,
    img: "/img/2.png"
  },
  {
    id: 3,
    name: "Whitening Toothpaste",
    description: "A premium whitening toothpaste designed to remove stains and prevent plaque buildup, ensuring a brighter smile. Its advanced formula not only cleans but also protects your teeth and gums, offering a refreshing experience every time.",
    category: "Beauty",
    price: "$3.99",
    rating: 4.2,
    img: "/img/3.png"
  },
  {
    id: 4,
    name: "Pran Apples",
    description: "Fresh, crisp apples sourced from local farms by Pran, perfect for snacking or adding to your favorite recipes. These apples are packed with vitamins and antioxidants, providing a healthy snack option for all ages.",
    category: "Groceries",
    price: "$4.99",
    rating: 4.6,
    img: "/img/4.png"
  },
  {
    id: 5,
    name: "Bread",
    description: "A loaf of freshly baked bread, soft and ideal for sandwiches or toast. Made with quality ingredients, it offers a delicious, wholesome experience, whether for breakfast or lunch.",
    category: "Groceries",
    price: "$2.50",
    rating: 4.3,
    img: "/img/5.png"
  },
  {
    id: 6,
    name: "Pran Milk",
    description: "A carton of Pran's fresh milk, rich in calcium and essential nutrients. This high-quality milk is perfect for drinking on its own, with cereal, or as a base for various recipes, offering a creamy, satisfying taste.",
    category: "Groceries",
    price: "$1.99",
    rating: 4.8,
    img: "/img/6.png"
  },
  {
    id: 7,
    name: "Comfort Sofa",
    description: "A comfortable and stylish sofa designed to complement any living room decor. Its plush cushions and supportive frame make it a perfect spot for relaxation, offering durability and elegance.",
    category: "Furniture",
    price: "$499.99",
    rating: 4.9,
    img: "/img/7.png"
  },
  {
    id: 8,
    name: "Wooden Dining Table",
    description: "A sturdy and spacious wooden dining table perfect for family meals. Crafted from high-quality wood, it provides durability and an elegant look to enhance your dining area.",
    category: "Furniture",
    price: "$299.99",
    rating: 4.5,
    img: "/img/8.png"
  },
  {
    id: 9,
    name: "Cozy Bed",
    description: "A cozy bed with a supportive mattress that ensures a restful sleep. Built with premium materials, it combines comfort and style, making it a great addition to any bedroom.",
    category: "Furniture",
    price: "$399.99",
    rating: 4.7,
    img: "/img/9.png"
  },
  {
    id: 10,
    name: "Pro Tennis Racket",
    description: "A high-quality tennis racket designed for players seeking improved performance. Its lightweight frame and balanced grip provide excellent control and power, ideal for competitive play.",
    category: "Sports",
    price: "$59.99",
    rating: 4.4,
    img: "/img/10.png"
  },
  {
    id: 11,
    name: "Durable Basketball",
    description: "A durable basketball built for outdoor play, designed to withstand rough surfaces. Its superior grip and bounce make it an ideal choice for basketball enthusiasts.",
    category: "Sports",
    price: "$19.99",
    rating: 4.6,
    img: "/img/11.png"
  },
  {
    id: 12,
    name: "Running Shoes",
    description: "Comfortable and durable running shoes designed for long-distance runners. With a cushioned sole and breathable upper, they offer superior support and comfort for everyday training.",
    category: "Sports",
    price: "$79.99",
    rating: 4.8,
    img: "/img/12.png"
  },
  {
    id: 13,
    name: "Bold Lipstick",
    description: "A vibrant, long-lasting lipstick that adds a bold look to any outfit. With moisturizing ingredients, it glides on smoothly, leaving your lips soft and hydrated throughout the day.",
    category: "Beauty",
    price: "$6.99",
    rating: 4.3,
    img: "/img/13.png"
  },
  {
    id: 14,
    name: "Moisturizing Conditioner",
    description: "A rich, moisturizing conditioner designed to leave hair soft and manageable. Its nourishing formula helps to detangle and reduce frizz, making it ideal for all hair types.",
    category: "Beauty",
    price: "$8.99",
    rating: 4.7,
    img: "/img/14.png"
  },
  {
    id: 15,
    name: "Fresh Bananas",
    description: "Ripe, delicious bananas perfect for snacks, smoothies, and desserts. These naturally sweet fruits provide a quick source of energy, ideal for a healthy diet.",
    category: "Groceries",
    price: "$1.50",
    rating: 4.5,
    img: "/img/15.png"
  },
  {
    id: 16,
    name: "Farm Fresh Eggs",
    description: "A dozen fresh eggs sourced from local farms, perfect for a healthy breakfast. Rich in protein, they’re ideal for cooking or baking a variety of dishes.",
    category: "Groceries",
    price: "$2.99",
    rating: 4.6,
    img: "/img/16.png"
  },
  {
    id: 17,
    name: "Modern Coffee Table",
    description: "A sleek, modern coffee table that adds a stylish touch to any living space. Its sturdy design and smooth finish make it both functional and attractive.",
    category: "Furniture",
    price: "$149.99",
    rating: 4.7,
    img: "/img/17.png"
  },
  {
    id: 18,
    name: "Spacious Bookshelf",
    description: "A spacious bookshelf ideal for organizing books and decorative items. With its durable build, it’s a great addition to any room that needs extra storage space.",
    category: "Furniture",
    price: "$99.99",
    rating: 4.6,
    img: "/img/18.png"
  },
  {
    id: 19,
    name: "Non-Slip Yoga Mat",
    description: "A non-slip yoga mat designed to provide stability and comfort during exercise. Its high-quality material ensures durability and ease of use, making it perfect for all fitness levels.",
    category: "Sports",
    price: "$25.99",
    rating: 4.8,
    img: "/img/19.png"
  },
  {
    id: 20,
    name: "Adjustable Dumbbells",
    description: "A set of adjustable dumbbells ideal for home workouts, allowing for various weight adjustments. Perfect for strength training, they offer versatility and convenience.",
    category: "Sports",
    price: "$89.99",
    rating: 4.9,
    img: "/img/20.png"
  }
];

const ProductDetails = () => {
  const { id } = useParams(); // Use useParams to get the product ID from the URL

  // Find the product based on the ID
  const product = products.find((p) => p.id.toString() === id);

  // If the product is not found, return a 404 page
  if (!product) {
    notFound(); // This will show Next.js's 404 page
    return null;
  }

  return (
    <div className="p-8 max-w-md m-auto">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <Image src={product.img} alt={product.name} width={300} height={200} />
      <p className="text-gray-700 mt-4">{product.description}</p>
      <p className="text-xl font-semibold mt-4">Price: {product.price}</p>
      <p className="text-yellow-500">Rating: {product.rating} ★</p>
    </div>
  );
};

export default ProductDetails;
