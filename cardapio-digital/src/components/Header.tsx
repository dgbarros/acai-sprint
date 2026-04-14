import { ShoppingCart, Zap, ArrowLeft } from "lucide-react";

type Tela = "produtos" | "acai" | "mousse" | "acai_mousse" | "quem_somos";

interface HeaderProps {
  qtdTotal: number;
  telaAtual: Tela;
  setTelaAtual: (tela: Tela) => void;
}

export default function Header({
  qtdTotal,
  telaAtual,
  setTelaAtual,
}: HeaderProps) {
  const estaDentroDeCategoria =
    telaAtual === "acai" || telaAtual === "mousse" || telaAtual === "acai_mousse";

  return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-900 p-6 shadow-lg rounded-b-3xl">
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          
          {estaDentroDeCategoria && (
            <button
              onClick={() => setTelaAtual("produtos")}
              className="text-white/80 hover:text-white"
            >
              <ArrowLeft />
            </button>
          )}

          <h1 className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2">
            Açaí <span className="text-purple-300">Sprint</span>
            <Zap className="w-5 h-5 text-yellow-300" />
          </h1>
        </div>

        <div className="relative">
          <ShoppingCart className="w-6 h-6 text-white" />
          {qtdTotal > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {qtdTotal}
            </span>
          )}
        </div>
      </div>

      <p className="text-purple-200 text-sm mb-4">
        Energia que flui! Chega de colher, experimente a liberdade de tomar seu açaí onde quiser.
      </p>

      {!estaDentroDeCategoria && (
        <div className="flex gap-2 bg-purple-950/50 p-1 rounded-xl">
          <button
            onClick={() => setTelaAtual("produtos")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
              telaAtual === "produtos"
                ? "bg-purple-500 text-white shadow"
                : "text-purple-300 hover:bg-white/5"
            }`}
          >
            Produtos
          </button>

          <button
            onClick={() => setTelaAtual("quem_somos")}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
              telaAtual === "quem_somos"
                ? "bg-purple-500 text-white shadow"
                : "text-purple-300 hover:bg-white/5"
            }`}
          >
            Quem Somos
          </button>
        </div>
      )}
    </header>
  );
}
