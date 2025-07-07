const express = require("express");
const app = express();
const PORT = 3000;
const productRoutes = require('./routes/productRoutes');

app.use(express.json());
app.use('/api/products', productRoutes);

// Sample test route
app.get("/", (req, res) => {
  res.send("🛒 Welcome to MarketPro Backend API");
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});