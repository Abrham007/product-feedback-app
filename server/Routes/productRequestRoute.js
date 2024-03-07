import express from "express";

import {
  getProductRequest,
  createProductRequest,
  updateProductRequest,
  deleteProductRequest,
  updateProductRequestUpvotes,
  createProductRequestComments,
  createProductRequestReplay,
} from "../Controllers/productRequestController.js";

const router = express.Router();

router.get("/product-request", getProductRequest);
router.post("/product-request", createProductRequest);
router.patch("/product-request", updateProductRequest);
router.delete("/product-request", deleteProductRequest);
router.patch("/product-request/upvotes", updateProductRequestUpvotes);
router.post("/product-request/comments", createProductRequestComments);
router.post("/product-request/replay", createProductRequestReplay);

export default router;
