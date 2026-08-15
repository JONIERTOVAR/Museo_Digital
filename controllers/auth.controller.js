const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      user: { id: 1, name, email }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      token: 'jwt_token_simulado_12345'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  register,
  login
};