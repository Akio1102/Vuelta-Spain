import { Router } from "express";
import {
  getPremios,
  postPremio,
  deletePremio,
  updatePremio,
} from "../controllers/premios.controllers.js";

const router = Router();

router.get("/api/premios", getPremios);
router.post("/api/premios", postPremio);
router.delete("/api/premios/:id", deletePremio);
router.patch("/api/premios/:id", updatePremio);

export default router;
