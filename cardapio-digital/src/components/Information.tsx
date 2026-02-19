import { Zap } from "lucide-react";


export default function Information() {
  return (
    <>
      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-4 flex items-start gap-3 shadow-lg animate-fade-in">
        <div className="bg-amber-500/20 p-2 rounded-full text-amber-400">
          <Zap />
        </div>

        <div>
          <h3 className="font-bold text-amber-100 text-sm">Entrega via App</h3>
          <p className="text-amber-200/80 text-xs mt-1 leading-relaxed">
            Ainda não possuímos motoboy fixo. A taxa de entrega será calculada
            no momento do envio com base nos aplicativos (Uber/99 Moto).
          </p>
        </div>
      </div>
      <div className="bg-purple-600/20 border border-purple-500/50 p-4 rounded-2xl mb-6 text-center animate-pulse">
        <p className="text-purple-200 text-sm font-bold uppercase tracking-widest mb-1">
          Promoção
        </p>
        <h2 className="text-2xl font-bold text-white">Leve 3 por R$ 29,99</h2>
        <p className="text-xs text-purple-300">
          Misture os sabores como quiser!
        </p>
      </div>
    </>
  );
}
