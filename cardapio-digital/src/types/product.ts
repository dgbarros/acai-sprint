export type Categoria = "acai" | "mousse" | "acai_mousse";

export interface Product {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: Categoria;
}
