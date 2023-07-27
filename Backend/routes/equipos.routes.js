import { Router } from "express";
import {
  getEquipos,
  postEquipo,
  deleteEquipo,
  updateEquipo,
} from "../controllers/equipos.controllers.js";

const router = Router();

router.get("/api/equipos", getEquipos);
router.post("/api/equipos", postEquipo);
router.delete("/api/equipos/:id", deleteEquipo);
router.patch("/api/equipos/:id", updateEquipo);

export default router;
