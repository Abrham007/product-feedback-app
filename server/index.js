import express from "express";
import cors from "cors";
import userRoute from "./Routes/userRoute.js";
import productRequestRoute from "./Routes/productRequestRoute.js";
import "./mongodb.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("images"));

app.use("/api", userRoute);
app.use("/api", productRequestRoute);

app.use(express.static(path.join(__dirname, "../dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist"));
});

app.listen(PORT, () => {
  console.log(`listinig on port ${PORT}`);
});
