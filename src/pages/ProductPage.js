import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import axios from "axios";
import "../styles.css"; // Make sure to create or update styles.css with the styles below

const products = [
  {
    id: 1,
    name: "Men Solid Round Neck T-Shirt",
    price: 1000,
    image: "images/30-bi-trouser-combraided-original-imagyzfzbbu78gre.webp",
  },

  {
    id: 2,
    name: "Men Self Design Polo T-Shirt",
    price: 2000,
    image: "images/32-el-p-cot-el-cielo-original-imagu75yvuxbyhrh.webp",
  },
  {
    id: 3,
    name: "Men Printed Round Neck T-Shirt",
    price: 3000,
    image: "images/m-tblrnfulsweat-plain-tripr-original-imah58ggcje9gs4q.webp",
  },

  {
    id:4,
    name:"Men solid design Polo T-Shirt",
    price:4000,
    image:"images/32-el-p-cot-el-cielo-original-imagu75yvuxbyhrh.webp",
  },
  {
    id:5,
    name:"Men Printed Round Neck T-Shirt",
    price:5000,
    image:"images/m-tblrnfulsweat-plain-tripr-original-imah58ggcje9gs4q.webp",
  },
  {
    id:6,
    name:"Men Solid Round Neck T-Shirt",
    price:6000,
    image:"images/30-bi-trouser-combraided-original-imagyzfzbbu78gre.webp",
  },
  {
    id:7,
    name:"Men Self Design Polo T-Shirt",
    price:7000,
    image:"images/32-el-p-cot-el-cielo-original-imagu75yvuxbyhrh.webp",
  },
  {
    id:8,
    name:"Men Printed Round Neck T-Shirt",
    price:8000,
    image:"images/m-tblrnfulsweat-plain-tripr-original-imah58ggcje9gs4q.webp",
  },
  {
    id:9,
    name:"Men Solid Round Neck T-Shirt",
    price:9000,
    image:"images/30-bi-trouser-combraided-original-imagyzfzbbu78gre.webp",
  }
];

const ProductPage = () => {
  const { addToCart } = useCart();
  const [notification, setNotification] = useState(null);
  const [error, setError] = useState(null);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const showError = (message) => {
    setError(message);
    setTimeout(() => setError(null), 3000);
  };

  const handleCheckout = async (product) => {
    addToCart(product);
    showNotification(`${product.name} added to cart`);
    try {
      const response = await axios.post(
        "http://localhost:3001/create-checkout-session",
        { items: [{ name: product.name, price: product.price, quantity: 1 }] }
      );
      const stripe = window.Stripe("your_publishable_key_here");
      await stripe.redirectToCheckout({ sessionId: response.data.id });
    } catch (error) {
      showError("Failed to proceed to checkout. Please try again.");
    }
  };

  return (
    <div className="product-page">
      <h1 className="page-title">Available Products</h1>
      {notification && <div className="notification">{notification}</div>}
      {error && <div className="error-notification">{error}</div>}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>₹{product.price.toLocaleString()}</p>
              <button onClick={() => handleCheckout(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
