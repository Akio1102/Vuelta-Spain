import { Router } from "express";
import {
  getCiclas,
  postCicla,
  deleteCicla,
  updateCicla,
} from "../controllers/ciclas.controllers.js";

const router = Router();

router.get("/api/ciclas", getCiclas);
router.post("/api/ciclas", postCicla);
router.delete("/api/ciclas/:id", deleteCicla);
router.patch("/api/ciclas/:id", updateCicla);

export default router;
