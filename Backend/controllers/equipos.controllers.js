import Equipo from "../models/Equipos.js";

export const getEquipos = async (req, res) => {
  const equipos = await Equipo.find();
  res.status(200).json(equipos);
};

export const postEquipo = async (req, res) => {
  const equipos = new Equipo(req.body);
  try {
    const newEquipo = await equipos.save();
    res.status(201).json(newEquipo);
  } catch (error) {
    res.status(404).send({ error: "Faltan Datos" });
  }
};

export const deleteEquipo = async (req, res) => {
  try {
    await Equipo.deleteOne({ _id: req.params.id });
    res.status(204).json({ message: `Equipo Eliminado` });
  } catch (error) {
    res.status(404).send({ error: "Equipo no existe" });
  }
};

export const updateEquipo = async (req, res) => {
  try {
    const equipo = await Equipo.findOne({ _id: req.params.id });
    if (req.body.nombre) {
      equipo.nombre = req.body.nombre;
    }
    if (req.body.pais) {
      equipo.pais = req.body.pais;
    }
    if (req.body.director) {
      equipo.director = req.body.director;
    }
    await equipo.save();
    res.status(200).json(equipo);
  } catch (error) {
    res.status(404).send({ error: "Equipo no existe" });
  }
};
