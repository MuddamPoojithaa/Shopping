import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles.css"; // Importing CSS

const CartPage = () => {
  const { cartItems, removeFromCart, totalAmount, updateItemQuantity } = useCart();

  return (
    <div className="container cart-page" style={{ padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
      <h1 style={{ color: "#333", textAlign: "center" }}>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p style={{ color: "#888", textAlign: "center" }}>Your cart is empty.</p>
      ) : (
        <div>
          <div className="cart-items-container" style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
            {/* Cart Items Section */}
            <div className="cart-items" style={{ width: "60%" }}>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="cart-item"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px",
                    border: "1px solid #ddd",
                    marginBottom: "10px",
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                  }}
                >
                  {/* Product Details */}
                  <div className="item-info" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px" }}
                    />
                    <div>
                      <h4 style={{ margin: "0 0 5px", fontSize: "16px", color: "#333" }}>{item.name}</h4>
                     
                     
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="item-actions" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      style={{
                        backgroundColor: "#ddd",
                        color: "#333",
                        border: "none",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      -
                    </button>
                    <span style={{ fontSize: "16px", color: "#333" }}>{item.quantity}</span>
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                      style={{
                        backgroundColor: "#ddd",
                        color: "#333",
                        border: "none",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        backgroundColor: "#dc3545",
                        color: "#fff",
                        border: "none",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Details Section */}
            <div
              className="price-details"
              style={{
                width: "35%",
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                backgroundColor: "#fff",
                alignSelf: "flex-start",
              }}
            >
              <h3 style={{ color: "#555", marginBottom: "10px" }}>PRICE DETAILS</h3>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                <span>Price ({cartItems.length} item{cartItems.length > 1 && "s"})</span>
                <span>₹{(totalAmount).toLocaleString()}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                <span>Discount</span>
                <span style={{ color: "#28a745" }}>- ₹{(totalAmount * 0.2).toLocaleString()}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                <span>Delivery Charges</span>
                <span style={{ color: "#28a745" }}>Free</span>
              </div>
              <hr />
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
                <span>Total Amount</span>
                <span>₹{(totalAmount * 0.8).toLocaleString()}</span>
              </div>
              <p style={{ marginTop: "10px", color: "#28a745" }}>
                You will save ₹{(totalAmount * 0.2).toLocaleString()} on this order.
              </p>
              <Link to="/checkout">
                <button
                  style={{
                    width: "100%",
                    padding: "10px 15px",
                    backgroundColor: "#28a745",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                >
                  Place Order
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
