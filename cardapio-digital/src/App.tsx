import { useState } from "react";
import { ACAI_PRODUCTS } from "./data/products/acai";
import { MOUSSE_PRODUCTS } from "./data/products/mousse";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import CheckoutBar from "./components/CheckoutBar";
import type { Categoria } from "./types/product";

type CartKey = `${Categoria}:${number}`;
type Tela = "produtos" | "acai" | "mousse" | "quem_somos";

export default function App() {
  const [carrinho, setCarrinho] = useState<Record<CartKey, number>>({});
  const [telaAtual, setTelaAtual] = useState<Tela>("produtos");

  const adicionarItem = (categoria: Categoria, id: number) => {
    const key = `${categoria}:${id}` as CartKey;

    setCarrinho((prev) => ({
      ...prev,
      [key]: (prev[key] || 0) + 1,
    }));
  };

  const removerItem = (categoria: Categoria, id: number) => {
    const key = `${categoria}:${id}` as CartKey;

    setCarrinho((prev) => {
      const novaQtd = (prev[key] || 0) - 1;

      if (novaQtd <= 0) {
        const novo = { ...prev };
        delete novo[key];
        return novo;
      }

      return { ...prev, [key]: novaQtd };
    });
  };

  const calcularTotal = () => {
    const qtdTotal = Object.values(carrinho).reduce((a, b) => a + b, 0);

    const combos = Math.floor(qtdTotal / 3);
    const avulsos = qtdTotal % 3;
    const totalFinanceiro = combos * 27.99 + avulsos * 9.99;

    return { qtdTotal, totalFinanceiro, combos };
  };

  const { qtdTotal, totalFinanceiro, combos } = calcularTotal();

  const buscarProduto = (categoria: Categoria, id: number) => {
    if (categoria === "acai") {
      return ACAI_PRODUCTS.find((p) => p.id === id);
    }
    if (categoria === "mousse") {
      return MOUSSE_PRODUCTS.find((p) => p.id === id);
    }
    return null;
  };

  const enviarPedido = () => {
    let mensagem = `*PEDIDO AÇAÍ SPRINT*\n\n`;

    Object.entries(carrinho).forEach(([key, qtd]) => {
      const [categoria, idStr] = key.split(":") as [Categoria, string];
      const id = Number(idStr);

      const produto = buscarProduto(categoria, id);

      if (produto) {
        mensagem += `• ${qtd}x ${produto.nome}\n`;
      }
    });

    mensagem += `\n*Total de Itens:* ${qtdTotal}`;
    if (combos > 0) mensagem += ` (Aplicado ${combos}x Promoção)`;
    mensagem += `\n*Valor Final:* R$ ${totalFinanceiro.toFixed(2)}`;
    mensagem += `\n\n_Aguardo instruções de pagamento e entrega._`;

    const link = `https://wa.me/5511915114581?text=${encodeURIComponent(mensagem)}`;
    window.open(link, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pb-24">
      <Header
        qtdTotal={qtdTotal}
        telaAtual={telaAtual}
        setTelaAtual={setTelaAtual}
      />

      <MainContent
        telaAtual={telaAtual}
        mudarTela={setTelaAtual}
        carrinho={carrinho}
        adicionarItem={adicionarItem}
        removerItem={removerItem}
      />

      {qtdTotal > 0 && (telaAtual === "acai" || telaAtual === "mousse") && (
        <CheckoutBar
          total={totalFinanceiro}
          combos={combos}
          onCheckout={enviarPedido}
        />
      )}
    </div>
  );
}
