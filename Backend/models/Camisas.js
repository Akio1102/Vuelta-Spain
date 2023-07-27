import mongoose from "mongoose";

const camisasSchema = mongoose.Schema(
  {
    tipo: {
      type: String,
      required: true,
      trim: true,
    },
    color: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Camisas = mongoose.model("camisas", camisasSchema);

export default Camisas;
