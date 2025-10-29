import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import leituraRoutes from "./routes/leituraRoutes.js";

const app = express();

app.use(cors({
  origin: "http://localhost:3000", //Permissão para a dashboard
  methods: ["GET"],
  allowedHeaders: ["Content-Type"]
}));

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

app.listen(8080, () => console.log("API rodando na porta 8080"));
