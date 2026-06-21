const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const lostItemRoutes = require("./routes/lostItemRoutes");
const foundItemRoutes = require("./routes/foundItemRoutes");
const claimRoutes = require("./routes/claimRoutes");

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Server running");
});

app.use("/api/auth", authRoutes);
app.use("/api/lost", lostItemRoutes);
app.use("/api/found", foundItemRoutes);
app.use("/api/claim", claimRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});