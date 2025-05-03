import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import productRoutes from "./routes/product.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";
import connectDB from "./config/db.js";
connectDB();
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4002;

app.use("/api/products", productRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
