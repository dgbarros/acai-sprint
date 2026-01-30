import { PRODUCTS } from "../data/products";
import { Clock, Zap, Camera, Code } from "lucide-react";
import correndo from "../assets/correndo.jpeg";
import anuncio from "../assets/anuncio.jpeg";
interface MainContentProps {
  telaAtual: "menu" | "quem_somos";
  carrinho: { [key: number]: number };
  adicionarItem: (id: number) => void;
  removerItem: (id: number) => void;
}

export default function MainContent({
  telaAtual,
  carrinho,
  adicionarItem,
  removerItem,
}: MainContentProps) {
  return (
    <main className="p-4 max-w-md mx-auto">
      {telaAtual === "menu" ? (
        <>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-4 flex items-start gap-3 shadow-lg animate-fade-in">
            <div className="bg-amber-500/20 p-2 rounded-full text-amber-400">
              <Zap />
            </div>

            <div>
              <h3 className="font-bold text-amber-100 text-sm">
                Entrega via App
              </h3>
              <p className="text-amber-200/80 text-xs mt-1 leading-relaxed">
                Ainda não possuímos motoboy fixo. A taxa de entrega será
                calculada no momento do envio com base nos aplicativos (Uber/99
                Moto).
              </p>
            </div>
          </div>
          {/* Banner da Promoção */}
          <div className="bg-purple-600/20 border border-purple-500/50 p-4 rounded-2xl mb-6 text-center animate-pulse">
            <p className="text-purple-200 text-sm font-bold uppercase tracking-widest mb-1">
              Promoção
            </p>
            <h2 className="text-2xl font-bold text-white">
              Leve 3 por R$ 27,99
            </h2>
            <p className="text-xs text-purple-300">
              Misture os sabores como quiser!
            </p>
          </div>

          {/* Lista de Produtos */}
          <div className="space-y-4">
            {PRODUCTS.map((produto) => (
              <div
                key={produto.id}
                className="bg-slate-800 rounded-2xl p-3 flex gap-4 border border-slate-700 shadow-xl overflow-hidden"
              >
                <div className="w-24 h-24 bg-slate-700 rounded-xl flex-shrink-0 overflow-hidden">
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-white leading-tight">
                      {produto.nome}
                    </h3>
                    <p className="text-slate-400 text-xs mt-1 line-clamp-2">
                      {produto.descricao}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <span className="font-bold text-purple-400">
                      R$ {produto.preco.toString().replace(".", ",")}
                    </span>

                    <div className="flex items-center bg-slate-900 rounded-lg p-1 gap-3">
                      <button
                        onClick={() => removerItem(produto.id)}
                        className="w-6 h-6 flex items-center justify-center text-purple-400 hover:text-white font-bold"
                        disabled={!carrinho[produto.id]}
                      >
                        -
                      </button>
                      <span className="text-sm font-bold w-3 text-center">
                        {carrinho[produto.id] || 0}
                      </span>
                      <button
                        onClick={() => adicionarItem(produto.id)}
                        className="w-6 h-6 flex items-center justify-center text-purple-400 hover:text-white font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-6">
          <h2 className="text-2xl font-bold text-purple-400">
            Olá, eu sou Eliton Santos
          </h2>

          <div className="flex gap-4 items-start">
            <img
              src={correndo}
              alt="Eliton correndo"
              className="w-28 h-40 object-cover rounded-xl flex-shrink-0"
            />

            <p className="text-slate-300 leading-relaxed text-sm">
              Minha vida sempre foi definida pelo movimento, pela superação e
              pela fé. Como atleta paralímpico, aprendi que cada desafio é um
              convite para um novo arranque, e é com esse mesmo espírito de
              resiliência que apresento a você o Açaí Sprint.
            </p>
          </div>

          <div className="flex gap-4 items-start flex-row-reverse">
            <img
              src={anuncio}
              alt="Eliton com Açaí Sprint"
              className="w-28 h-40 object-cover rounded-xl flex-shrink-0"
            />

            <p className="text-slate-300 leading-relaxed text-sm">
              O Açaí Sprint nasceu da minha paixão pelo esporte e da necessidade
              de oferecer uma energia prática e saudável para quem, assim como
              eu, não para de lutar pelos seus sonhos.
            </p>
          </div>

          <p className="text-slate-300 leading-relaxed text-sm">
            Como cristão e atleta, acredito que nada acontece sem um propósito
            maior. Hoje, o Açaí Sprint é o motor que me impulsiona em direção a
            uma vitória fundamental fora das pistas: a realização da minha
            cirurgia.
          </p>

          <p className="text-slate-300 leading-relaxed text-sm">
            Parte de cada venda é destinada diretamente ao custeio desse
            procedimento, permitindo que eu continue trilhando meu caminho no
            esporte e na vida.
          </p>

          <div className="mt-6 p-4 bg-purple-900/30 border border-purple-500/30 rounded-xl text-center">
            <p className="text-slate-200 italic">
              "Você não compra o produto,
              <br />
              <span className="text-purple-400 font-bold not-italic text-lg">
                você impulsiona o propósito."
              </span>
            </p>
          </div>
          <div className="mt-6 p-4 bg-slate-900/60 border border-slate-700 rounded-xl space-y-4">
            <p className="text-slate-300 text-sm text-center">
              Este projeto ganha vida através de mãos talentosas:
            </p>

            <div className="flex items-center justify-center gap-3 text-slate-400 text-sm">
              <Camera className="w-4 h-4 text-purple-400" />
              <span>
                Olhar e fotografia por{" "}
                <a
                  href="https://instagram.com/nathborgesfotografia"
                  target="_blank"
                  className="text-purple-400 hover:underline"
                >
                  @nathborgesfotografia
                </a>
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 text-slate-400 text-sm">
              <Code className="w-4 h-4 text-purple-400" />
              <span>
                Desenvolvimento e tecnologia por{" "}
                <a
                  href="https://instagram.com/dgbarroos"
                  target="_blank"
                  className="text-purple-400 hover:underline"
                >
                  @dgbarroos
                </a>
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
