import mongoose from "mongoose";

const leituraSchema = new mongoose.Schema({
  temperatura: Number,
  umidade: Number,
  pessoas: Number,
  conforto: Boolean,          
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("Leitura", leituraSchema);
