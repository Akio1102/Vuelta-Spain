import Premios from "../models/Premios.js";

export const getPremios = async (req, res) => {
  const premios = await Premios.find();
  res.status(200).json(premios);
};

export const postPremio = async (req, res) => {
  const premios = new Premios(req.body);
  try {
    const newPremio = await premios.save();
    res.status(201).json(newPremio);
  } catch (error) {
    res.status(404).send({ error: "Faltan Datos" });
  }
};

export const deletePremio = async (req, res) => {
  try {
    await Premios.deleteOne({ _id: req.params.id });
    res.status(204).json({ message: `Premio Eliminado` });
  } catch (error) {
    res.status(404).send({ error: "Premio no existe" });
  }
};

export const updatePremio = async (req, res) => {
  try {
    const premio = await Premios.findOne({ _id: req.params.id });
    if (req.body.tipo) {
      premio.tipo = req.body.tipo;
    }
    if (req.body.nombre_Ganador) {
      premio.nombre_Ganador = req.body.nombre_Ganador;
    }
    await premio.save();
    res.status(200).json(premio);
  } catch (error) {
    res.status(404).send({ error: "Premio no existe" });
  }
};
