import Etapa from "../models/Etapas.js";

export const getEtapas = async (req, res) => {
  const etapas = await Etapa.find();
  res.status(200).json(etapas);
};

export const postEtapa = async (req, res) => {
  const etapa = new Etapa(req.body);
  try {
    const newEtapa = await etapa.save();
    res.status(201).json(newEtapa);
  } catch (error) {
    res.status(404).send({ error: "Faltan Datos" });
  }
};

export const deleteEtapa = async (req, res) => {
  try {
    await Etapa.deleteOne({ _id: req.params.id });
    res.status(204).json({ message: `Etapa Eliminada` });
  } catch (error) {
    res.status(404).send({ error: "Etapa no existe" });
  }
};

export const updateEtapa = async (req, res) => {
  try {
    const etapa = await Etapa.findOne({ _id: req.params.id });
    if (req.body.nombre) {
      etapa.nombre = req.body.nombre;
    }
    if (req.body.fecha) {
      etapa.fecha = req.body.fecha;
    }
    if (req.body.ciudad_salida) {
      etapa.ciudad_salida = req.body.ciudad_salida;
    }
    if (req.body.ciudad_llegada) {
      etapa.ciudad_llegada = req.body.ciudad_llegada;
    }
    await etapa.save();
    res.status(200).json(etapa);
  } catch (error) {
    res.status(404).send({ error: "Etapa no existe" });
  }
};
