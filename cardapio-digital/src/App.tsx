import { useState } from "react";
import { PRODUCTS } from "./data/products";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import CheckoutBar from "./components/CheckoutBar";

export default function App() {
  const [carrinho, setCarrinho] = useState<{ [key: number]: number }>({});
  const [telaAtual, setTelaAtual] = useState<"menu" | "quem_somos">("menu");

  const adicionarItem = (id: number) => {
    setCarrinho((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removerItem = (id: number) => {
    setCarrinho((prev) => {
      const novaQtd = (prev[id] || 0) - 1;
      if (novaQtd <= 0) {
        const novoCarrinho = { ...prev };
        delete novoCarrinho[id];
        return novoCarrinho;
      }
      return { ...prev, [id]: novaQtd };
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

  const enviarPedido = () => {
    let mensagem = `*PEDIDO AÇAÍ SPRINT*\n\n`;

    Object.keys(carrinho).forEach((idStr) => {
      const id = Number(idStr);
      const qtd = carrinho[id];
      const produto = PRODUCTS.find((p) => p.id === id);
      if (produto) {
        mensagem += `• ${qtd}x ${produto.nome}\n`;
      }
    });

    mensagem += `\n *Total de Itens:* ${qtdTotal}`;
    if (combos > 0) mensagem += ` (Aplicado ${combos}x Promoção)`;
    mensagem += `\n *Valor Final:* R$ ${totalFinanceiro.toFixed(2)}`;
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

      <ProductCard
        telaAtual={telaAtual}
        carrinho={carrinho}
        adicionarItem={adicionarItem}
        removerItem={removerItem}
      />

      {qtdTotal > 0 && telaAtual === 'menu' && (
        <CheckoutBar 
          total={totalFinanceiro}
          combos={combos}
          onCheckout={enviarPedido}
        />
      )}
    </div>
  );
}
