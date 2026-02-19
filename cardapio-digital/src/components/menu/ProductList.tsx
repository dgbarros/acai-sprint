import type { Categoria } from "../../types/product";

type CartKey = `${Categoria}:${number}`;

interface Product {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

interface ProductListProps {
  categoria: Categoria;
  produtos: Product[];
  carrinho: Record<CartKey, number>;
  adicionarItem: (categoria: Categoria, id: number) => void;
  removerItem: (categoria: Categoria, id: number) => void;
}

export default function ProductList({
  categoria,
  produtos,
  carrinho,
  adicionarItem,
  removerItem,
}: ProductListProps) {
  return (
    <div className="space-y-4">
      {produtos.map((produto) => {
        const key: CartKey = `${categoria}:${produto.id}`;
        const quantidade = carrinho[key] || 0;

        return (
          <div
            key={key}
            className="bg-slate-800 rounded-2xl p-3 flex gap-4 border border-slate-700 shadow-xl"
          >
            <div className="w-24 h-24 rounded-xl overflow-hidden">
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-white">
                  {produto.nome}
                </h3>
                <p className="text-slate-400 text-xs mt-1">
                  {produto.descricao}
                </p>
              </div>

              <div className="flex items-center justify-between mt-3">
                <span className="font-bold text-purple-400">
                  R$ {produto.preco.toFixed(2).replace(".", ",")}
                </span>

                <div className="flex items-center bg-slate-900 rounded-lg p-1 gap-3">
                  <button
                    onClick={() => removerItem(categoria, produto.id)}
                    disabled={!quantidade}
                    className="w-6 h-6 flex items-center justify-center text-purple-400 hover:text-white font-bold"
                  >
                    -
                  </button>

                  <span className="text-sm font-bold w-3 text-center">
                    {quantidade}
                  </span>

                  <button
                    onClick={() => adicionarItem(categoria, produto.id)}
                    className="w-6 h-6 flex items-center justify-center text-purple-400 hover:text-white font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
