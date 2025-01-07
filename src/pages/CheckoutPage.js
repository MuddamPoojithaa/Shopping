import React from "react";
import { useCart } from "../context/CartContext";
import '../styles.css'; // Importing CSS

const CheckoutPage = () => {
  const { cartItems, totalAmount } = useCart();

  const handleCheckout = () => {
    // Add your payment processing logic here
    alert("Proceeding to payment...");
  };

  return (
    <div className="checkout-container" style={{ padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
      <h1 className="checkout-title" style={{ color: "#333" }}>Checkout</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message" style={{ color: "#888" }}>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          <h2 className="cart-items-title" style={{ color: "#555" }}>Your Cart Items:</h2>
          <ul className="cart-items-list" style={{ listStyleType: "none", padding: 0 }}>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item" style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <span className="cart-item-name" style={{ fontWeight: "bold" }}>{item.name}</span>
                <span className="cart-item-price">₹{(item.price).toLocaleString()}</span> {/* Display price in Rupees */}
              </li>
            ))}
          </ul>
          <h3 className="total-amount" style={{ color: "#555" }}>Total Amount: ₹{(totalAmount).toLocaleString()}</h3> {/* Display total amount in Rupees */}
          <button 
            className="checkout-button" 
            onClick={handleCheckout} 
            style={{
              padding: "10px 15px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px"
            }}
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
