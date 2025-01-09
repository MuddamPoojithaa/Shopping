const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Paths
const uploadsFolder = path.join(__dirname, "uploads");
const projectsFile = path.join(__dirname, "projects.json");

// Ensure the uploads folder exists
if (!fs.existsSync(uploadsFolder)) {
  fs.mkdirSync(uploadsFolder);
}

// Endpoint to upload cart data to the uploads folder
app.post("/upload-cart", (req, res) => {
  const { cartItems } = req.body;

  if (!cartItems || cartItems.length === 0) {
    return res.status(400).json({ message: "Cart is empty." });
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const fileName = `cart-${timestamp}.json`;
  const filePath = path.join(uploadsFolder, fileName);

  fs.writeFile(filePath, JSON.stringify(cartItems, null, 2), (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return res.status(500).json({ message: "Failed to save cart data." });
    }
    res.status(200).json({ message: "Cart data uploaded successfully.", fileName });
  });
});

// Endpoint to add cart data to projects.json
app.post("/add-to-projects", (req, res) => {
  const { cartItems } = req.body;

  if (!cartItems || cartItems.length === 0) {
    return res.status(400).json({ message: "Cart is empty." });
  }

  fs.readFile(projectsFile, "utf8", (err, data) => {
    if (err && err.code !== "ENOENT") {
      console.error("Error reading projects.json:", err);
      return res.status(500).json({ message: "Failed to read projects.json." });
    }

    const projects = data ? JSON.parse(data) : [];
    const updatedProjects = [...projects, ...cartItems];

    fs.writeFile(projectsFile, JSON.stringify(updatedProjects, null, 2), (err) => {
      if (err) {
        console.error("Error updating projects.json:", err);
        return res.status(500).json({ message: "Failed to update projects.json." });
      }
      res.status(200).json({ message: "Cart data added to projects.json successfully." });
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
