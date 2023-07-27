import { Router } from "express";
import {
  getCamisas,
  postCamisa,
  deleteCamisa,
  updateCamisa,
} from "../controllers/camisas.controllers.js";

const router = Router();

router.get("/api/camisas", getCamisas);
router.post("/api/camisas", postCamisa);
router.delete("/api/camisas/:id", deleteCamisa);
router.patch("/api/camisas/:id", updateCamisa);

export default router;
