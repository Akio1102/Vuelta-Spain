import { Router } from "express";
import {
  getCiclistas,
  postCiclista,
  deleteCiclista,
  updateCiclista,
} from "../controllers/ciclistas.controllers.js";

const router = Router();

router.get("/api/ciclistas", getCiclistas);
router.post("/api/ciclistas", postCiclista);
router.delete("/api/ciclistas/:id", deleteCiclista);
router.patch("/api/ciclistas/:id", updateCiclista);

export default router;
