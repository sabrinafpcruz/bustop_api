import express from "express";
import { saveLeitura } from "../controllers/leituraController.js";

const router = express.Router();
router.post("/api/dados", saveLeitura);

export default router;
