import mongoose from "mongoose";

const etapasSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    fecha: {
      type: Date,
      required: true,
      trim: true,
    },
    ciudad_salida: {
      type: String,
      required: true,
      trim: true,
    },
    ciudad_llegada: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Etapa = mongoose.model("etapas", etapasSchema);

export default Etapa;
