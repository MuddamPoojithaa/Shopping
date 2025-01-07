import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import '../styles.css'; // Importing CSS

const CartPage = () => {
  const { cartItems, removeFromCart, totalAmount } = useCart();

  return (
    <div className="container cart-page" style={{ padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
      <h1 style={{ color: "#333" }}>Cart</h1>
      {cartItems.length === 0 ? (
        <p style={{ color: "#888" }}>Your cart is empty.</p>
      ) : (
        <div>
          <h2 style={{ color: "#555" }}>Your Cart Items:</h2>
          <ul className="cart-items" style={{ listStyleType: "none", padding: 0 }}>
            {cartItems.map((item) => (
              <li key={item.id} style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <div className="cart-item-details" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="cart-item-name" style={{ fontWeight: "bold" }}>{item.name}</span>
                  <span className="cart-item-price">₹{(item.price).toLocaleString()}</span> {/* Display price in Rupees */}
                </div>
                <button 
                  className="remove-button" 
                  onClick={() => removeFromCart(item.id)} 
                  style={{
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "5px"
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3 className="total-amount" style={{ color: "#555" }}>Total Amount: ₹{(totalAmount).toLocaleString()}</h3> {/* Display total amount in Rupees */}
          <Link to="/checkout">
            <button className="checkout-button" style={{ 
              padding: "10px 15px", 
              backgroundColor: "#28a745", 
              color: "#fff", 
              border: "none", 
              borderRadius: "5px", 
              cursor: "pointer",
              marginTop: "10px" 
            }}>
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
