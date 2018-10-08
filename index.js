require("dotenv").config();
const { HOST, PORT } = process.env;

const restify = require("restify");
const pacotes = require("./pacotes")();
const viagens = require("./viagens")();

const servidor = restify.createServer();

servidor.get("/pacotes", (req, res) => {
  res.send(pacotes);
});

servidor.get("/viagens", (req, res) => {
  res.send(viagens);
});

servidor.get(
  "/imagens/*",
  restify.plugins.serveStatic({
    directory: "./public/"
  })
);

servidor.listen(PORT, () => {
  console.log(`Servidor de pé em http://${HOST}:${PORT}`);
  console.log("Para derrubar o servidor digite: ctrl + c");
});
