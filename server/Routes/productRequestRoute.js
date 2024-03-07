import express from "express";

import {
  getProductRequest,
  createProductRequest,
  updateProductRequest,
  deleteProductRequest,
  updateProductRequestUpvotes,
  updateProductRequestComments,
  updateProductRequestReplay,
} from "../Controllers/productRequestController.js";

const router = express.Router();

router.get("/product-request", getProductRequest);
router.post("/product-request", createProductRequest);
router.patch("/product-request", updateProductRequest);
router.delete("/product-request", deleteProductRequest);
router.patch("/product-request/upvotes", updateProductRequestUpvotes);
router.patch("/product-request/comments", updateProductRequestComments);
router.patch("/product-request/replay", updateProductRequestReplay);

export default router;
