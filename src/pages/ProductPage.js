import React from "react";
import { useCart } from "../context/CartContext";
import axios from "axios";
import '../styles.css'; // Importing CSS

const products = [
  { id: 1, name: "Product 1", price: 1000, image: "images/30-bi-trouser-combraided-original-imagyzfzbbu78gre.webp" },
  { id: 2, name: "Product 2", price: 2000, image: "images/32-el-p-cot-el-cielo-original-imagu75yvuxbyhrh.webp" },
  { id: 3, name: "Product 3", price: 3000, image: "images/m-tblrnfulsweat-plain-tripr-original-imah58ggcje9gs4q.webp" },
];

const ProductPage = () => {
  const { addToCart } = useCart();

  const handleCheckout = async (product) => {
    addToCart(product);

    try {
      const response = await axios.post("http://localhost:3001/create-checkout-session", {
        items: [{ name: product.name, price: product.price, quantity: 1 }],
      });

      const sessionId = response.data.id;

      // Redirect to Stripe checkout
      const stripe = window.Stripe("your_publishable_key_here"); // Replace with your Stripe publishable key
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <div>
      <h1>Product Page</h1>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" /> {/* Display image */}
          <h2>{product.name}</h2>
          <p>Price: ₹{(product.price).toLocaleString()}</p> {/* Display price in Rupees */}
          <button onClick={() => handleCheckout(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
