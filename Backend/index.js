import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";

import CamisasRoutes from "./routes/camisas.routes.js";
import CiclasRoutes from "./routes/ciclas.routes.js";
import CiclistasRoutes from "./routes/ciclistas.routes.js";
import EquiposRoutes from "./routes/equipos.routes.js";
import EtapasRoutes from "./routes/etapas.routes.js";
import PremiosRoutes from "./routes/premios.routes.js";

const app = express();

app.use(express.json());

dotenv.config();

const PORT = process.env.PORT;

conectarDB();

app.use(CamisasRoutes);
app.use(CiclasRoutes);
app.use(CiclistasRoutes);
app.use(EquiposRoutes);
app.use(EtapasRoutes);
app.use(PremiosRoutes);

app.listen(PORT, () => {
  console.log(`Hola ${PORT}`);
});
