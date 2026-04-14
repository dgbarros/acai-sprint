import type { Product } from "../../types/product";
import imgAcaiMousseMorango from "../../assets/acai-mousse-morango.jpeg";
import imgAcaiMousseMaracuja from "../../assets/acai-mousse-maracuja.jpeg";
import { avulso_produto } from "./precos";

export const ACAI_COM_MOUSSE_PRODUCTS: Product[] = [
  {
    id: 1,
    categoria: "acai_mousse",
    nome: "Açaí com mousse de Morango",
    descricao: "Cremosidade pura. Açaí batido com Mousse de Morango.",
    preco: avulso_produto,
    imagem: imgAcaiMousseMorango,
  },
  {
    id: 2,
    categoria: "acai_mousse",
    nome: "Açaí com Mousse de Maracujá",
    descricao: "Cremosidade pura. Açaí batido com Mousse de Maracujá.",
    preco: avulso_produto,
    imagem: imgAcaiMousseMaracuja,
  },
];
