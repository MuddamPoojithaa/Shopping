import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const products = [
  {
    id: 1,
    src: "images/30-bi-trouser-combraided-original-imagyzfzbbu78gre.webp",
    alt: "Men Solid Round Neck T-Shirt",
    name: "ELABOT",
    price: "₹249",
    originalPrice: "₹999",
    discount: "75% off",
    availability: "Only few left",
    sizes: "S, M, L, XL",
  },
  {
    id: 2,
    src: "images/32-el-p-cot-el-cielo-original-imagu75yvuxbyhrh.webp",
    alt: "Men Self Design Polo T-Shirt",
    name: "EyeBogler",
    price: "₹259",
    originalPrice: "₹1,299",
    discount: "80% off",
    availability: "Hot Deal",
    sizes: "M, L, XL",
  },
  {
    id: 3,
    src: "images/m-tblrnfulsweat-plain-tripr-original-imah58ggcje9gs4q.webp",
    alt: "Men Printed Round Neck T-Shirt",
    name: "VeBNor",
    price: "₹249",
    originalPrice: "₹999",
    discount: "75% off",
    availability: "Free delivery",
    sizes: "S, M, L",
  },
  {
    id: 1,
    src: "images/30-bi-trouser-combraided-original-imagyzfzbbu78gre.webp",
    alt: "Men Solid Round Neck T-Shirt",
    name: "ELABOT",
    price: "₹249",
    originalPrice: "₹999",
    discount: "75% off",
    availability: "Only few left",
    sizes: "S, M, L, XL",
  },
  {
    id: 2,
    src: "images/32-el-p-cot-el-cielo-original-imagu75yvuxbyhrh.webp",
    alt: "Men Self Design Polo T-Shirt",
    name: "EyeBogler",
    price: "₹259",
    originalPrice: "₹1,299",
    discount: "80% off",
    availability: "Hot Deal",
    sizes: "M, L, XL",
  },
  {
    id: 3,
    src: "images/m-tblrnfulsweat-plain-tripr-original-imah58ggcje9gs4q.webp",
    alt: "Men Printed Round Neck T-Shirt",
    name: "VeBNor",
    price: "₹249",
    originalPrice: "₹999",
    discount: "75% off",
    availability: "Free delivery",
    sizes: "S, M, L",
  },
  {
    id: 1,
    src: "images/30-bi-trouser-combraided-original-imagyzfzbbu78gre.webp",
    alt: "Men Solid Round Neck T-Shirt",
    name: "ELABOT",
    price: "₹249",
    originalPrice: "₹999",
    discount: "75% off",
    availability: "Only few left",
    sizes: "S, M, L, XL",
  },
  {
    id: 2,
    src: "images/32-el-p-cot-el-cielo-original-imagu75yvuxbyhrh.webp",
    alt: "Men Self Design Polo T-Shirt",
    name: "EyeBogler",
    price: "₹259",
    originalPrice: "₹1,299",
    discount: "80% off",
    availability: "Hot Deal",
    sizes: "M, L, XL",
  },
  {
    id: 3,
    src: "images/m-tblrnfulsweat-plain-tripr-original-imah58ggcje9gs4q.webp",
    alt: "Men Printed Round Neck T-Shirt",
    name: "VeBNor",
    price: "₹249",
    originalPrice: "₹999",
    discount: "75% off",
    availability: "Free delivery",
    sizes: "S, M, L",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate("/products");
  };

  return (
    <div className="homepage">
      <h1>Welcome to Our Store</h1>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card" onClick={handleProductClick}>
            <img src={product.src} alt={product.alt} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.alt}</p>
            <div className="price-container">
              <span className="product-price">{product.price}</span>
              <span className="original-price">{product.originalPrice}</span>
              <span className="discount">{product.discount}</span>
            </div>
            <p className="availability">{product.availability}</p>
            <p className="sizes">Sizes: {product.sizes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
