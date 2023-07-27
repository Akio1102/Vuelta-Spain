import Camisas from "../models/Camisas.js";

export const getCamisas = async (req, res) => {
  const camisas = await Camisas.find();
  res.status(200).json(camisas);
};

export const postCamisa = async (req, res) => {
  const camisa = new Camisas(req.body);
  try {
    const newCamisa = await camisa.save();
    res.status(201).json(newCamisa);
  } catch (error) {
    res.status(404).send({ error: "Faltan Datos" });
  }
};

export const deleteCamisa = async (req, res) => {
  try {
    await Camisas.deleteOne({ _id: req.params.id });
    res.status(204).json({ message: `Camisa Eliminado` });
  } catch (error) {
    res.status(404).send({ error: "Camisa no existe" });
  }
};

export const updateCamisa = async (req, res) => {
  try {
    const camisa = await Camisas.findOne({ _id: req.params.id });
    if (req.body.tipo) {
      camisa.tipo = req.body.tipo;
    }
    if (req.body.color) {
      camisa.color = req.body.color;
    }
    await camisa.save();
    res.status(200).json(camisa);
  } catch (error) {
    res.status(404).send({ error: "Camisa no existe" });
  }
};
