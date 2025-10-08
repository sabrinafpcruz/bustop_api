import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
// Conexão com o MongoDB Atlas
mongoose.connect("mongodb+srv://sensor_user:g6RLto7dNXPxjGwa@brtiot.olyhgkw.mongodb.net/?retryWrites=true&w=majority&appName=BRTIoT")
  .then(() => console.log("✅ Conectado ao MongoDB Atlas"))
  .catch(err => console.error(err));

// Modelo de leitura
const leituraSchema = new mongoose.Schema({
  temperatura: Number,
  umidade: Number,
  timestamp: { type: Date, default: Date.now }
});
const Leitura = mongoose.model("Leitura", leituraSchema);

// Rota para receber dados do ESP32
app.post("/api/dados", async (req, res) => {
  const { temperatura, umidade } = req.body;
  if (temperatura === undefined || umidade === undefined) {
    return res.status(400).send("❌ Campos 'temperatura' e 'umidade' são obrigatórios");
  }

  const leitura = new Leitura({ temperatura, umidade });
  await leitura.save();

  console.log("📥 Dado recebido:", { temperatura, umidade });
  res.send("📡 Dados recebidos e salvos no MongoDB!");
});

// Rota de teste (GET)
app.get("/", (req, res) => {
  res.send("✅ API SmartStop está rodando!");
});

// Porta
app.listen(3000, () => console.log("🚀 API rodando na porta 3000"));