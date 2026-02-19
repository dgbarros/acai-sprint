import type { Product } from "../../types/product";
import imgNinho from "../../assets/acai-ninho.jpeg";
import imgPacoca from "../../assets/acai-pacoca.jpeg";
import imgPuro from "../../assets/acai-puro.jpeg";
import imgCupuacu from "../../assets/acai-cupuacu.jpeg";
import imgMorango from "../../assets/acai-morango.jpeg";
import { avulso_produto } from "./precos";


export const ACAI_PRODUCTS: Product[] = [
  {
    id: 1,
    categoria: "acai",
    nome: "Açaí com Ninho",
    descricao: "Cremosidade pura. Açaí batido com leite Ninho.",
    preco: avulso_produto,
    imagem: imgNinho,
  },
  {
    id: 2,
    categoria: "acai",
    nome: "Açaí com Paçoca",
    descricao: "O queridinho! Açaí com farofa de paçoca crocante.",
    preco: avulso_produto,
    imagem: imgPacoca,
  },
  {
    id: 3,
    categoria: "acai",
    nome: "Açaí Puro",
    descricao: "Para os raiz. Açaí puro, zero xarope, sabor intenso.",
    preco: avulso_produto,
    imagem: imgPuro,
  },
  {
    id: 4,
    categoria: "acai",
    nome: "Açaí com Cupuaçu",
    descricao: "Combinação amazônica clássica e refrescante.",
    preco: avulso_produto,
    imagem: imgCupuacu,
  },
  {
    id: 5,
    categoria: "acai",
    nome: "Açaí com Morango",
    descricao: "Equilíbrio perfeito entre doce e ácido.",
    preco: avulso_produto,
    imagem: imgMorango,
  },
];
