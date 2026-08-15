// Obtener puntos del usuario
const getPuntos = async (req, res) => {
  try {
    res.status(200).json({
      usuarioId: 1,
      puntosTotales: 450,
      nivel: "Explorador de Arte"
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Registrar visita a sala
const registrarVisita = async (req, res) => {
  try {
    const { salaId } = req.body;
    res.status(201).json({
      message: "Visita registrada con éxito",
      puntosGanados: 50,
      salaId
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getPuntos,
  registrarVisita
};