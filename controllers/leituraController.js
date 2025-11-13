import Leitura from "../models/leitura.js";

export const saveLeitura = async (req, res) => {
  try {
    const {
      parada_id,
      device_id,
      timestamp,
      temperatura,
      umidade,
      pessoas,
      meta
    } = req.body;

    // --- Conversões e limpeza ---
    // Extrai valores numéricos de strings como "29.8 °C" e "61.0 %"
    const tempNum = typeof temperatura === "string"
      ? parseFloat(temperatura.replace(/[^\d.-]/g, ""))
      : temperatura;

    const umidNum = typeof umidade === "string"
      ? parseFloat(umidade.replace(/[^\d.-]/g, ""))
      : umidade;

    // Converte status de conforto textual para booleano
    const conforto =
      meta && meta.status_conforto === "confortável" ? true : false;

    // --- Validação dos dados ---
    if (
      isNaN(tempNum) || tempNum < -50 || tempNum > 100 ||
      isNaN(umidNum) || umidNum < 0 || umidNum > 100 ||
      typeof pessoas !== "number" || pessoas < 0
    ) {
      return res.status(400).send("Dados inválidos");
    }

    // --- Criação e salvamento ---
    const leitura = new Leitura({
      parada_id,
      device_id,
      timestamp,
      temperatura: tempNum,
      umidade: umidNum,
      pessoas,
      conforto
    });

    await leitura.save();

    console.log("Dados recebidos:", {
      parada_id,
      device_id,
      timestamp,
      temperatura: tempNum,
      umidade: umidNum,
      pessoas,
      conforto
    });

    res.send("Dados recebidos e salvos no MongoDB!");
  } catch (error) {
    console.error("Erro ao salvar leitura:", error);
    res.status(500).json({ error: error.message });
  }
};

export const getLeituras = async (req, res) => {
  try {
    const leituras = await Leitura.find().sort({ createdAt: -1 });
    res.json(leituras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
