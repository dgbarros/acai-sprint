import { ACAI_PRODUCTS } from "../data/products/acai";
import { MOUSSE_PRODUCTS } from "../data/products/mousse";
import ProductList from "./menu/ProductList";
import instagramIcon from "../assets/instagram.svg"


import { Zap, Camera, Code } from "lucide-react";
import correndo from "../assets/correndo.jpeg";
import anuncio from "../assets/anuncio.jpeg";
import type { Categoria } from "../types/product";

type Tela = "produtos" | "acai" | "mousse" | "quem_somos";

type CartKey = `${Categoria}:${number}`;

interface MainContentProps {
  telaAtual: Tela;
  carrinho: Record<CartKey, number>;
  adicionarItem: (categoria: Categoria, id: number) => void;
  removerItem: (categoria: Categoria, id: number) => void;
  mudarTela: (tela: Tela) => void;
}

export default function MainContent({
  telaAtual,
  carrinho,
  adicionarItem,
  removerItem,
  mudarTela,
}: MainContentProps) {
  return (
    <main className="p-4 max-w-md mx-auto">
      {telaAtual === "produtos" && (
        <div className="space-y-4">
          <a
            href="https://instagram.com/acaisprint"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-fuchsia-600 via-pink-600 to-purple-600 p-[1px] rounded-2xl shadow-lg block"
          >
            <div className="justify-center bg-slate-900 rounded-2xl px-4 py-3 flex items-center gap-3 hover:bg-slate-800 transition">
              <img src={instagramIcon} className="w-5 h-5" />

              <div>
                <p className="text-xs text-slate-400">Siga no Instagram</p>
                <p className="text-white font-semibold">@acaisprint</p>
              </div>
            </div>
          </a>
          <button
            onClick={() => mudarTela("acai")}
            className="w-full bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl p-4 flex items-center gap-4 shadow-xl hover:scale-[1.03] active:scale-95 transition"
          >
            <div className="w-20 h-20 rounded-xl overflow-hidden">
              <img
                src="/imagem-acai.jpg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <h3 className="text-white font-bold text-lg">Açaí na Garrafa</h3>
              <p className="text-purple-200 text-sm">Ver sabores e promoção</p>
            </div>
          </button>

          <button
            onClick={() => mudarTela("mousse")}
            className="w-full bg-gradient-to-r from-pink-700 to-rose-700 rounded-2xl p-4 flex items-center gap-4 shadow-xl hover:scale-[1.03] active:scale-95 transition"
          >
            <div className="w-20 h-20 rounded-xl overflow-hidden">
              <img
                src="/imagem-mousse.jpg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <h3 className="text-white font-bold text-lg">
                Mousse na Garrafa
              </h3>
              <p className="text-pink-200 text-sm">Ver opções disponíveis</p>
            </div>
          </button>
        </div>
      )}

      {telaAtual === "acai" && (
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

          <ProductList
            categoria="acai"
            produtos={ACAI_PRODUCTS}
            carrinho={carrinho}
            adicionarItem={adicionarItem}
            removerItem={removerItem}
          />
        </>
      )}

      {telaAtual === "mousse" && (
        <ProductList
          categoria="mousse"
          produtos={MOUSSE_PRODUCTS}
          carrinho={carrinho}
          adicionarItem={adicionarItem}
          removerItem={removerItem}
        />
      )}

      {telaAtual === "quem_somos" && (
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
