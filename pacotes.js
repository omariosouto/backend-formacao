const { HOST, PORT } = process.env;
const diretorio = `http://${HOST}:${PORT}/imagens/`;

module.exports = () => [
  {
    id: 1,
    titulo: "Porto de Galinhas",
    quantidadeDeDias: 7,
    preco: "2.490,99",
    imageUrl: `${diretorio}porto-de-galinhas.jpg`,
    localizacao: "Porto de galinhas",
    nomeDoHotel: "Resort Porto de Galinhas",
    servico: "Hotel + café da manhã",
    data: "8~15 de agosto"
  },
  {
    id: 2,
    titulo: "Buzios",
    quantidadeDeDias: 7,
    preco: "1.990,99",
    imageUrl: `${diretorio}buzios.jpg`,
    localizacao: "Buzios - RJ",
    nomeDoHotel: "Resort Buzios Spa",
    servico: "Hotel + café da manhã",
    data: "9~16 de setembro"
  },
  {
    id: 3,
    titulo: "Natal",
    quantidadeDeDias: 5,
    preco: "1.700,00",
    imageUrl: `${diretorio}natal.jpg`,
    localizacao: "Natal - RN",
    nomeDoHotel: "Resort Natal Show",
    servico: "Hotel + café da manhã",
    data: "13~18 de setembro"
  },
  {
    id: 4,
    titulo: "Rio de Janeiro",
    quantidadeDeDias: 4,
    preco: "2.300,00",
    imageUrl: `${diretorio}copacabana.jpg`,
    localizacao: "Copacabana - RJ",
    nomeDoHotel: "Resort RJ Spa",
    servico: "Hotel + café da manhã",
    data: "9~13 de outubro"
  },
  {
    id: 5,
    titulo: "Manaus",
    quantidadeDeDias: 6,
    preco: "2.850,00",
    imageUrl: `${diretorio}manaus.jpg`,
    localizacao: "Manaus - AM",
    nomeDoHotel: "Pousada Amazonas Plus",
    servico: "Hotel + café da manhã",
    data: "9~15 de outubro"
  },
  {
    id: 6,
    titulo: "Salvador",
    quantidadeDeDias: 6,
    preco: "1.880,90",
    imageUrl: `${diretorio}salvador.jpg`,
    localizacao: "Salvador - BA",
    nomeDoHotel: "Pousada Pelourinho",
    servico: "Hotel + café da manhã",
    data: "5~11 de novembro"
  },
  {
    id: 7,
    titulo: "Ceará",
    quantidadeDeDias: 7,
    preco: "1.800,59",
    imageUrl: `${diretorio}canoa-quebrada.jpg`,
    localizacao: "Praia de Canoa Quebrada, Aracati",
    nomeDoHotel: "Pousada do Aracati",
    servico: "Hotel + café da manhã",
    data: "8~15 de setembro"
  },
  {
    id: 8,
    titulo: "Fernando de Noronha",
    quantidadeDeDias: 6,
    preco: "6.700,00",
    imageUrl: `${diretorio}fernando-de-noronha.jpg`,
    localizacao: "Fernando de Noronha, Rio de Janeiro",
    nomeDoHotel: "Pousada Amazonas Plus",
    servico: "Hotel + café da manhã",
    data: "21~27 de outubro"
  },
  {
    id: 9,
    titulo: "Atibaia - Sao Paulo",
    quantidadeDeDias: 1,
    preco: "890,00",
    imageUrl: `${diretorio}atibaia.jpg`,
    localizacao: "Atibaia",
    nomeDoHotel: "Pousada Amazonas Plus",
    servico: "Hotel + café da manhã",
    data: "9~13 de outubro"
  },
  {
    id: 10,
    titulo: "Paraíba",
    quantidadeDeDias: 3,
    preco: "1.385,00",
    imageUrl: `${diretorio}paraiba.jpg`,
    localizacao: "Pitimbu – Pitimbu",
    nomeDoHotel: "Pitimbu Hotel",
    servico: "Hotel + café da manhã",
    data: "9~13 de outubro"
  },
  {
    id: 11,
    titulo: "Fortaleza",
    quantidadeDeDias: 4,
    preco: "3.120,00",
    imageUrl: `${diretorio}fortaleza.jpg`,
    localizacao: "Praia do Futuro",
    nomeDoHotel: "Praia do Futuro Hostel",
    servico: "Hotel + café da manhã",
    data: "9~13 de outubro"
  }
];
