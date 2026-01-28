interface CheckoutBarProps {
  total: number;
  combos: number;
  onCheckout: () => void;
}

export default function CheckoutBar({ total, combos, onCheckout }: CheckoutBarProps) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-800 border-t border-slate-700 p-4 shadow-2xl z-50">
      <div className="max-w-md mx-auto flex items-center justify-between gap-4">
        <div>
          <p className="text-slate-400 text-xs">Total a pagar</p>
          <p className="text-xl font-bold text-white">
            R$ {total.toFixed(2).replace('.', ',')}
          </p>
          {combos > 0 && (
            <span className="text-xs text-green-400 font-bold animate-pulse">
              Promoção aplicada!
            </span>
          )}
        </div>
        
        <button 
          onClick={onCheckout}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors shadow-lg shadow-green-500/20 active:scale-95"
        >
          <span>Pedir no WhatsApp</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}