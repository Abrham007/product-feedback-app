import express from "express";
import cors from "cors";
import userRoute from "./Routes/userRoute.js";
import productRequestRoute from "./Routes/productRequestRoute.js";
import "./mongodb.js";

const app = express();
const port = 4000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Middleware
app.use(express.json());
app.use(express.static("images"));

app.use("/api", userRoute);
app.use("/api", productRequestRoute);

app.listen(port, () => {
  console.log(`listinig on port ${port}`);
});
