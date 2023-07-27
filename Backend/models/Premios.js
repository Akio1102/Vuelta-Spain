import mongoose from "mongoose";

const premiosSchema = mongoose.Schema(
  {
    tipo: {
      type: String,
      required: true,
      trim: true,
    },
    nombre_Ganador: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Premios = mongoose.model("premios", premiosSchema);

export default Premios;
