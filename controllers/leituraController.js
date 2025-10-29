import Leitura from "../models/leitura.js";

export const saveLeitura = async (req, res) => {
  const { temperatura, umidade, pessoas, conforto } = req.body;

  // Validação de dados
  if (
    typeof temperatura !== "number" || temperatura < -50 || temperatura > 100 ||
    typeof umidade !== "number" || umidade < 0 || umidade > 100 ||
    typeof pessoas !== "number" || pessoas < 0 ||
    typeof conforto !== "boolean"
  ) {
    return res.status(400).send("Dados inválidos");
  }

  const leitura = new Leitura({ temperatura, umidade, pessoas, conforto });
  await leitura.save();

  console.log("Dados recebidos:", { temperatura, umidade, pessoas, conforto });
  res.send("Dados recebidos e salvos no MongoDB!");
};

export const getLeituras = async (req, res) => {
  try {
    const leituras = await Leitura.find().sort({ createdAt: -1 });
    res.json(leituras);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};