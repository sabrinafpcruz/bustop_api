import mongoose from "mongoose";

const uri = "mongodb+srv://sensor_user:g6RLto7dNXPxjGwa@brtiot.olyhgkw.mongodb.net/?retryWrites=true&w=majority&appName=BRTIoT";

mongoose.connect(uri)
  .then(() => {
    console.log("✅ Conexão com o MongoDB Atlas bem-sucedida!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Erro ao conectar ao MongoDB:", err);
    process.exit(1);
  });