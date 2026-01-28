interface HeaderProps{
    qtdTotal: number;
    telaAtual: 'menu' | 'quem_somos';
    setTelaAtual: (tela: 'menu' | 'quem_somos') => void;
}

export default function Header({ qtdTotal, telaAtual, setTelaAtual}: HeaderProps) {
return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-900 p-6 shadow-lg rounded-b-3xl">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-white tracking-tighter">
          Açaí <span className="text-purple-300">Sprint</span> ⚡
        </h1>

                
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
  );
}