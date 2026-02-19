import { avulso_produto } from "./precos";
import mousseMaracuja from "../../assets/mousse-maracuja.jpeg"
import mousseAbacaxi from "../../assets/mousse-abacaxi.jpeg"
import mousseMorango  from "../../assets/mousse-morango.jpeg"

export const MOUSSE_PRODUCTS = [
  {
    id: 1,
    categoria: "Mousse",
    nome: "Mousse de Maracujá",
    descricao: "Feito com poupa de verdade e equilíbrio na medida certa",
    preco: avulso_produto,
    imagem: mousseMaracuja,
  },
  {
    id: 2,
    categoria: "Mousse",
    nome: "Mousse de Abacaxi",
    descricao: "Explosão de refrescância e leveza tropical na garrafa",
    preco: avulso_produto,
    imagem: mousseAbacaxi,
  },
  {
    id: 3,
    categoria: "Mousse",
    nome: "Mousse de Morango",
    descricao: "O clássico que todo mundo ama. Super cremoso e geladinho ",
    preco: avulso_produto,
    imagem: mousseMorango,
  },
];
