const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

let estacionamiento = ["Rojo", "Gris", "Azul", "Amarillo", "Verde"];

app.get("/vehiculos", (req, res) => {
  res.json({ total: estacionamiento.length, vehiculos: estacionamiento });
});

app.get("/vehiculos/:id", (req, res) => {
  const index = parseInt(req.params.id);
  if (index >= 0 && index < estacionamiento.length) {
    res.json({ posicion: index + 1, vehiculo: estacionamiento[index] });
  } else {
    res.status(404).json({ mensaje: "Vehículo no encontrado" });
  }
});

app.post("/vehiculos", (req, res) => {
  const { color } = req.body;
  if (color) {
    estacionamiento.push(color);
    res.status(201).json({ mensaje: "Vehículo agregado", color });
  } else {
    res.status(400).json({ mensaje: "Color no proporcionado" });
  }
});

app.put("/vehiculos/:id", (req, res) => {
  const index = parseInt(req.params.id);
  const { color } = req.body;
  if (index >= 0 && index < estacionamiento.length && color) {
    estacionamiento[index] = color;
    res.json({ mensaje: "Vehículo actualizado", color });
  } else {
    res.status(400).json({ mensaje: "Datos inválidos" });
  }
});

app.delete("/vehiculos/:id", (req, res) => {
  const index = parseInt(req.params.id);
  if (index >= 0 && index < estacionamiento.length) {
    const eliminado = estacionamiento.splice(index, 1);
    res.json({ mensaje: "Vehículo eliminado", eliminado });
  } else {
    res.status(404).json({ mensaje: "Vehículo no encontrado" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
