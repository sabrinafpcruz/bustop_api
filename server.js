import express from "express";
import mongoose from "mongoose";
import leituraRoutes from "./routes/leituraRoutes.js";

const app = express();
app.use(express.json());
// Conexão com o MongoDB Atlas
mongoose.connect("mongodb+srv://sensor_user:g6RLto7dNXPxjGwa@brtiot.olyhgkw.mongodb.net/?retryWrites=true&w=majority&appName=BRTIoT")
  .then(() => console.log("Conectado ao MongoDB Atlas"))
  .catch(err => console.error(err));

// Rotas
app.use(leituraRoutes);

//Rota de teste
app.get("/", (req, res) => {
  res.send(" API SmartStop está rodando!");
});

app.listen(3000, () => console.log("API rodando na porta 3000"));
