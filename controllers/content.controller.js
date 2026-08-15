// Obtener todas las obras del museo
const getObras = async (req, res) => {
  try {
    res.status(200).json([
      { id: 1, titulo: "Mona Lisa Digital", artista: "Leonardo da Vinci", sala: "Renacimiento" },
      { id: 2, titulo: "La Noche Estrellada AR", artista: "Vincent van Gogh", sala: "Impresionismo" }
    ]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una obra por ID
const getObraById = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({
      id,
      titulo: "Mona Lisa Digital",
      descripcion: "Obra interactiva con realidad aumentada.",
      artista: "Leonardo da Vinci"
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getObras,
  getObraById
};