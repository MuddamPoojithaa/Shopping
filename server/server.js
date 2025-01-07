// server/server.js

const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = 3001; // Define your server port
const stripe = new Stripe("your_secret_key_here"); // Replace with your Stripe secret key

app.use(cors());
app.use(express.json());

// Create a checkout session
app.post("/create-checkout-session", async (req, res) => {
  const { items } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map(item => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price, // Amount should be in cents (e.g., $10.00 = 1000)
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: "http://localhost:3000/success", // URL to redirect after payment
      cancel_url: "http://localhost:3000/cancel", // URL to redirect if payment fails
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
