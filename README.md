# 🚏 API BuStop – IoT + MongoDB

API desenvolvida em **Node.js** com **Express** e **Mongoose**, responsável por receber, validar, armazenar e disponibilizar dados de sensores IoT no **MongoDB Atlas**.  
Esta API integra-se com uma dashboard feita em **Next.js**, exibindo em tempo real dados de **temperatura, umidade e contagem de pessoas** detectadas em pontos de ônibus inteligentes.

---

## 📡 Funcionalidades

- 📥 Recebe dados enviados pelos dispositivos IoT (temperatura, umidade, pessoas)
- ✅ Realiza **validação** dos dados antes do armazenamento
- 🧹 Garante persistência segura no **MongoDB Atlas**
- 📤 Disponibiliza os dados via **API REST**
- 🔗 Integra-se facilmente com aplicações front-end (Next.js, React, etc.)

---

## 🏗️ Arquitetura do Projeto

```
salvarmongoiot/
│
├── models/
│   └── leitura.js             # Schema Mongoose para os dados do sensor
│
├── controllers/
│   └── leituraController.js   # Lógica de validação e persistência
│
├── routes/
│   └── leituraRoutes.js       # Define as rotas da API
│
├── server.js                  # Configuração principal do servidor Express
├── package.json               # Dependências e scripts NPM
└── .gitignore
```

---

## ⚙️ Tecnologias Utilizadas

| Categoria | Tecnologias |
|------------|-------------|
| Backend | Node.js, Express |
| Banco de Dados | MongoDB Atlas, Mongoose |
| Segurança | CORS |
| Linguagem | JavaScript (ES Modules) |

---

## 🚀 Instalação e Execução

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/bustop_api.git
cd bustop_api
```

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Configure o ambiente

Crie um arquivo `.env` (ou edite diretamente a string no `server.js`) com a variável de conexão ao MongoDB Atlas:

```
MONGO_URI="sua_string_de_conexao"
PORT=8080
```

### 4️⃣ Execute o servidor

```bash
npm start
```

A API estará disponível em:  
👉 `http://localhost:8080/`

---

## 🌐 Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| **GET** | `/` | Testa se a API está online |
| **POST** | `/api/dados` | Recebe dados dos sensores IoT |
| **GET** | `/api/dados` | Retorna todas as leituras armazenadas |

### 🧪 Exemplo de Requisição (POST)

```bash
POST http://localhost:8080/api/dados
Content-Type: application/json

{
  "temperatura": 27.3,
  "umidade": 61,
  "pessoas": 3
  "conforto": true
}
```

**Resposta esperada:**
```
Dados recebidos e salvos no MongoDB!
```

---

## 🧠 Estrutura de Dados (Schema MongoDB)

```js
{
  temperatura: Number,
  umidade: Number,
  pessoas: Number,
  coforto: Boolean,
  timestamp: Date
}
```

---

## 🛡️ Validações Aplicadas

A API rejeita leituras que:
- 🌡️ Têm temperatura < -50 °C ou > 100 °C  
- 💧 Têm umidade < 0% ou > 100%  
- 👥 Têm número de pessoas negativo  

---

## 🔗 Integração com Dashboard (Next.js)

A dashboard consome os dados usando:

```ts
axios.get("http://localhost:8080/api/dados")
```

> Certifique-se de que o **CORS** esteja habilitado no backend para permitir o acesso do front-end (porta 3000 por padrão).

---

## 📦 Dependências principais

```json
"dependencies": {
  "cors": "^2.8.5",
  "express": "^5.1.0",
  "mongoose": "^8.19.1",
  "mongodb": "^6.20.0"
}
```
