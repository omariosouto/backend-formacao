const { HOST, PORT } = process.env;
const diretorio = `http://${HOST}:${PORT}/imagens/`;

module.exports = () => [
  {
    id: 1,
    titulo: "Ceará",
    quantidadeDeDias: 3,
    preco: "1.800,59",
    imageUrl: `${diretorio}canoa-quebrada.jpg`,
    localizacao: "Praia de Canoa Quebrada, Aracati"
  },
  {
    id: 2,
    titulo: "Rio de Janeiro",
    quantidadeDeDias: 6,
    preco: "1.200,00",
    imageUrl: `${diretorio}copacabana.jpg`,
    localizacao: "Copacabana, Rio de Janeiro"
  },
  {
    id: 3,
    titulo: "Atibaia - Sao Paulo",
    quantidadeDeDias: 1,
    preco: "890,00",
    imageUrl: `${diretorio}atibaia.jpg`,
    localizacao: "Atibaia"
  },
  {
    id: 4,
    titulo: "Paraíba",
    quantidadeDeDias: 3,
    preco: "1.385,00",
    imageUrl: `${diretorio}paraiba.jpg`,
    localizacao: "Pitimbu – Pitimbu"
  },
  {
    id: 5,
    titulo: "Fortaleza",
    quantidadeDeDias: 4,
    preco: "3.120,00",
    imageUrl: `${diretorio}fortaleza.jpg`,
    localizacao: "Praia do Futuro"
  }
];
