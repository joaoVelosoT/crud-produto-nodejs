const express = require("express");
const router = require("./router/router");
const sequelize = require("./config/config");
const app = express();
const port = 8080;

app.use(express.json());
app.use("/api/product", router);

sequelize
  .authenticate()
  .then(async () => {
    console.log("Conexão estabelecida com sucesso");
    await sequelize.sync();
  })
  .then(async () => {
    app.listen(port, () => {
      console.log("Servidor Rodando");
    });
  })
  .catch((error) => {
    console.log("Erro ao conectar com o banco de dados", error);
  });
