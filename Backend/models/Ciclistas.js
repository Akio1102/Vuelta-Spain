import mongoose from "mongoose";

const ciclistaSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Ciclista = mongoose.model("Ciclistas", ciclistaSchema);

export default Ciclista;
