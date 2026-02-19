export type Categoria = "acai" | "mousse" | "vitamina";

export interface Product {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: Categoria;
}
