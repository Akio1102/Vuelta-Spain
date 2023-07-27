import { Router } from "express";
import {
  getEtapas,
  postEtapa,
  deleteEtapa,
  updateEtapa,
} from "../controllers/etapas.controllers.js";

const router = Router();

router.get("/api/etapas", getEtapas);
router.post("/api/etapas", postEtapa);
router.delete("/api/etapas/:id", deleteEtapa);
router.patch("/api/etapas/:id", updateEtapa);

export default router;
