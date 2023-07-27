import Ciclas from "../models/Ciclas.js";

export const getCiclas = async (req, res) => {
  const ciclas = await Ciclas.find();
  res.status(200).json(ciclas);
};

export const postCicla = async (req, res) => {
  const cicla = new Ciclas(req.body);
  try {
    const newCicla = await cicla.save();
    res.status(201).json(newCicla);
  } catch (error) {
    res.status(404).send({ error: "Faltan Datos" });
  }
};

export const deleteCicla = async (req, res) => {
  try {
    await Ciclas.deleteOne({ _id: req.params.id });
    res.status(204).json({ message: `Cicla Eliminado` });
  } catch (error) {
    res.status(404).send({ error: "Cicla no existe" });
  }
};

export const updateCicla = async (req, res) => {
  try {
    const cicla = await Ciclas.findOne({ _id: req.params.id });
    if (req.body.tipo) {
      cicla.tipo = req.body.tipo;
    }
    if (req.body.stock) {
      cicla.stock = req.body.stock;
    }
    await cicla.save();
    res.status(200).json(cicla);
  } catch (error) {
    res.status(404).send({ error: "Cicla no existe" });
  }
};
