import mongoose from "mongoose";

const ciclasSchema = mongoose.Schema(
  {
    tipo: {
      type: String,
      required: true,
      trim: true,
    },
    stock: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Ciclas = mongoose.model("ciclas", ciclasSchema);

export default Ciclas;
