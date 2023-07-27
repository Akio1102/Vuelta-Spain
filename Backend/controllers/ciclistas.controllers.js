import Ciclista from "../models/Ciclistas.js";

const getCiclistas = async (req, res) => {
  const ciclistas = await Ciclista.find();
  res.json(ciclistas);
};

const postCiclista = async (req, res) => {
  const ciclista = new Ciclista(req.body);
  try {
    const nuevoCiclista = await ciclista.save();
    res.json(nuevoCiclista);
  } catch (error) {
    console.log(error);
  }
};

const deleteCiclista = async (req, res) => {
  try {
    await Ciclista.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch (error) {
    res.status(404);
    res.send({ error: "Ciclista no existe" });
  }
};

const updateCiclista = async (req, res) => {
  try {
    const ciclista = await Ciclista.findOne({ _id: req.params.id });
    if (req.body.nombre) {
      ciclista.nombre = req.body.nombre;
    }
    if (req.body.age) {
      ciclista.age = req.body.age;
    }
    await ciclista.save();
    res.send(ciclista);
  } catch (error) {
    res.status(404);
    res.send({ error: "Ciclista no existe" });
  }
};

export { getCiclistas, postCiclista, deleteCiclista, updateCiclista };
