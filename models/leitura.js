import mongoose from "mongoose";

const leituraSchema = new mongoose.Schema({
  parada_id: { type: String, required: false },     // Ex: "BRT-AvRecife-001"
  device_id: { type: String, required: false },     // Ex: "esp32-sim-01"
  temperatura: { type: Number, required: true },
  umidade: { type: Number, required: true },
  pessoas: { type: Number, required: true },
  conforto: { type: Boolean, required: true },
  timestamp: { type: String, required: false },     // Formato: "12/11/2025 - 23:22"
  createdAt: { type: Date, default: Date.now }      // Mantém data de criação no servidor
});

export default mongoose.model("Leitura", leituraSchema);
