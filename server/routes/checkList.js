import express from "express";

import { getProducts, createCheckList } from "../controllers/checkList.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/new", createCheckList);
// router.get("/product/:id", getProduct);
// router.put("/update/:id", updateProduct);
// router.delete("/delete/:id", deleteProduct);

export default router;
