import { useState } from 'react';



// 1. Configuração dos Produtos
const PRODUTOS = [
  {
    id: 1,
    nome: "Açaí com Ninho",
    descricao: "Cremosidade pura. Açaí batido com leite Ninho.",
    preco: 9.99,
    imagem: "" // colocar imagens mais atrativas
  },
  {
    id: 2,
    nome: "Açaí com Paçoca",
    descricao: "O queridinho! Açaí com farofa de paçoca crocante.",
    preco: 9.99,
    imagem: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    nome: "Açaí Puro",
    descricao: "Para os raiz. Açaí puro, zero xarope, sabor intenso.",
    preco: 9.99,
    imagem: "https://images.unsplash.com/photo-1628122365851-40432320ae42?auto=format&fit=crop&w=200&q=80"
  }
];

export default function App() {
  // Estado para controlar a quantidade de cada item { id_do_produto: quantidade }
  const [carrinho, setCarrinho] = useState<{[key: number]: number}>({});
  // Estado para controlar qual tela está visível ('menu' ou 'quem_somos')
  const [telaAtual, setTelaAtual] = useState<'menu' | 'quem_somos'>('menu');

  // Funções de adicionar/remover
  const adicionarItem = (id: number) => {
    setCarrinho(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removerItem = (id: number) => {
    setCarrinho(prev => {
      const novaQtd = (prev[id] || 0) - 1;
      if (novaQtd <= 0) {
        const novoCarrinho = { ...prev };
        delete novoCarrinho[id];
        return novoCarrinho;
      }
      return { ...prev, [id]: novaQtd };
    });
  };

  // --- LÓGICA DO COMBO E TOTAIS ---
  const calcularTotal = () => {
    // Soma todas as garrafas no carrinho, independente do sabor
    const qtdTotal = Object.values(carrinho).reduce((a, b) => a + b, 0);
    
    const combos = Math.floor(qtdTotal / 3);
    const avulsos = qtdTotal % 3;
    
    // 3 por 27,99 (Preço do combo) + avulsas por 9,99
    const totalFinanceiro = (combos * 27.99) + (avulsos * 9.99);
    
    return { qtdTotal, totalFinanceiro, combos };
  };

  const { qtdTotal, totalFinanceiro, combos } = calcularTotal();

  // Função para enviar ao WhatsApp
  const enviarPedido = () => {
    let mensagem = `*PEDIDO AÇAÍ SPRINT* 🟣\n\n`;
    
    Object.keys(carrinho).forEach(idStr => {
      const id = Number(idStr);
      const qtd = carrinho[id];
      const produto = PRODUTOS.find(p => p.id === id);
      if(produto) {
        mensagem += `• ${qtd}x ${produto.nome}\n`;
      }
    });

    mensagem += `\n📦 *Total de Itens:* ${qtdTotal}`;
    if(combos > 0) mensagem += ` (Aplicado ${combos}x Promoção)`;
    mensagem += `\n💰 *Valor Final:* R$ ${totalFinanceiro.toFixed(2)}`;
    mensagem += `\n\n_Aguardo instruções de pagamento e entrega._`;

    const link = `https://wa.me/5511915114581?text=${encodeURIComponent(mensagem)}`;
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pb-24">
      
      {/* --- HEADER --- */}
      <header className="bg-gradient-to-r from-purple-900 to-indigo-900 p-6 shadow-lg rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-white tracking-tighter">
            Açaí <span className="text-purple-300">Sprint</span> ⚡
          </h1>
          {/* Botão do Carrinho (Visual) */}
          <div className="relative">
             <span className="text-2xl">🛒</span>
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

        {/* Abas de Navegação */}
        <div className="flex gap-2 bg-purple-950/50 p-1 rounded-xl">
          <button 
            onClick={() => setTelaAtual('menu')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
              telaAtual === 'menu' ? 'bg-purple-500 text-white shadow' : 'text-purple-300 hover:bg-white/5'
            }`}
          >
            Cardápio
          </button>
          <button 
            onClick={() => setTelaAtual('quem_somos')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
              telaAtual === 'quem_somos' ? 'bg-purple-500 text-white shadow' : 'text-purple-300 hover:bg-white/5'
            }`}
          >
            Quem Somos
          </button>
        </div>
      </header>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <main className="p-4 max-w-md mx-auto">
        
        {telaAtual === 'menu' ? (
          <>
            {/* Banner da Promoção */}
            <div className="bg-purple-600/20 border border-purple-500/50 p-4 rounded-2xl mb-6 text-center animate-pulse">
              <p className="text-purple-200 text-sm font-bold uppercase tracking-widest mb-1">Promoção Relâmpago</p>
              <h2 className="text-2xl font-bold text-white">Leve 3 por R$ 27,99</h2>
              <p className="text-xs text-purple-300">Misture os sabores como quiser!</p>
            </div>

            {/* Lista de Produtos */}
            <div className="space-y-4">
              {PRODUTOS.map((produto) => (
                <div key={produto.id} className="bg-slate-800 rounded-2xl p-3 flex gap-4 border border-slate-700 shadow-xl overflow-hidden">
                  {/* Imagem do Produto */}
                  <div className="w-24 h-24 bg-slate-700 rounded-xl flex-shrink-0 overflow-hidden">
                    <img src={produto.imagem} alt={produto.nome} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Info do Produto */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-white leading-tight">{produto.nome}</h3>
                      <p className="text-slate-400 text-xs mt-1 line-clamp-2">{produto.descricao}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-bold text-purple-400">R$ {produto.preco.toString().replace('.', ',')}</span>
                      
                      {/* Controles de Quantidade */}
                      <div className="flex items-center bg-slate-900 rounded-lg p-1 gap-3">
                        <button 
                          onClick={() => removerItem(produto.id)}
                          className="w-6 h-6 flex items-center justify-center text-purple-400 hover:text-white font-bold"
                          disabled={!carrinho[produto.id]}
                        >
                          -
                        </button>
                        <span className="text-sm font-bold w-3 text-center">{carrinho[produto.id] || 0}</span>
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
          /* --- TELA QUEM SOMOS --- */
          <div className="space-y-6 animate-fade-in">
             <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
               <h2 className="text-2xl font-bold text-purple-400 mb-4">Nossa História</h2>
               <p className="text-slate-300 leading-relaxed mb-4">
                 O Açaí Sprint nasceu da necessidade de energia rápida e saborosa para quem vive na correria. 
                 Cansados de açaís cheios de gelo e demora no atendimento, criamos o conceito "Grab & Go".
               </p>
               <p className="text-slate-300 leading-relaxed">
                 Nossa missão é entregar açaí de verdade, cremoso e gelado, em garrafas práticas que te acompanham na faculdade, no trabalho ou no treino.
               </p>
             </div>

             <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
               <h3 className="text-xl font-bold text-white mb-2">Horário de Atendimento</h3>
               <ul className="text-slate-400 space-y-2">
                 <li>🕒 Seg a Sex: 12h às 18h</li>
                 <li>🚫 Sáb e Dom: Fechado</li>
               </ul>
             </div>
          </div>
        )}
      </main>

      {/* --- BARRA FIXA INFERIOR (CHECKOUT) --- */}
      {qtdTotal > 0 && telaAtual === 'menu' && (
        <div className="fixed bottom-0 left-0 w-full bg-slate-800 border-t border-slate-700 p-4 shadow-2xl">
          <div className="max-w-md mx-auto flex items-center justify-between gap-4">
             <div>
               <p className="text-slate-400 text-xs">Total a pagar</p>
               <p className="text-xl font-bold text-white">R$ {totalFinanceiro.toFixed(2).replace('.', ',')}</p>
               {combos > 0 && <span className="text-xs text-green-400 font-bold">Promoção aplicada!</span>}
             </div>
             
             <button 
               onClick={enviarPedido}
               className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors shadow-lg shadow-green-500/20"
             >
               Pedir no WhatsApp 
             </button>
          </div>
        </div>
      )}
    </div>
  );
}