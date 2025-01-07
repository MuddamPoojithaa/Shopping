import React from "react";
import '../styles.css'; // Ensure your CSS is imported

const HomePage = () => {
  return (
    <div className="container">
      <h2>Home Products</h2>
      <div className="product-grid">
        <div className="product-card">
          <img src="images/30-bi-trouser-combraided-original-imagyzfzbbu78gre.webp" alt="Product 1" className="product-image" />
          <h2>Product 1</h2>
          <p>Short description of Product 1</p>
          <button>Add to Cart</button>
        </div>
        <div className="product-card">
          <img src="images/32-el-p-cot-el-cielo-original-imagu75yvuxbyhrh.webp" alt="Product 2" className="product-image" />
          <h2>Product 2</h2>
          <p>Short description of Product 2</p>
          <button>Add to Cart</button>
        </div>
        <div className="product-card">
          <img src="images/m-tblrnfulsweat-plain-tripr-original-imah58ggcje9gs4q.webp" alt="Product 3" className="product-image" />
          <h2>Product 3</h2>
          <p>Short description of Product 3</p>
          <button>Add to Cart</button>
        </div>
        {/* Add more products as needed */}
      </div>
    </div>
  );
};

export default HomePage;
