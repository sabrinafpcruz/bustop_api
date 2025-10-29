import express from "express";
import { saveLeitura, getLeituras } from "../controllers/leituraController.js";

const router = express.Router();

router.post("/api/dados", saveLeitura);
router.get("/api/dados", getLeituras);

export default router;
