import { useState } from "react";
import { ArrowRight, CheckCircle2, Clock, TrendingUp } from "lucide-react";

const WHATSAPP_ROI =
  "https://wa.me/573000000000?text=Hola%2C%20calcul%C3%A9%20el%20ROI%20de%20mi%20planta%20en%20CEREBIIA%20OPEREX%20y%20quiero%20agendar%20una%20demo";

export function RoiCalculator() {
  const [operators, setOperators] = useState(35);
  const [monthlyOrders, setMonthlyOrders] = useState(120);
  const [hasExternalMaquila, setHasExternalMaquila] = useState(true);

  const hoursSavedPerMonth = Math.round(
    operators * 1.4 + monthlyOrders * 0.25 + (hasExternalMaquila ? 18 : 0),
  );
  const scrapSavingsCop =
    Math.round(
      (operators * 85000 + monthlyOrders * 22000 + (hasExternalMaquila ? 950000 : 0)) / 10000,
    ) * 10000;

  const recommendedPlan =
    operators <= 15 && !hasExternalMaquila
      ? { name: "Plan Taller", price: "$160.000 COP / mes" }
      : operators <= 65
        ? { name: "Plan Fábrica Pro", price: "$380.000 COP / mes" }
        : operators <= 140
          ? { name: "Plan Industrial", price: "$750.000 COP / mes" }
          : { name: "Instancia Dedicada / Marca Blanca", price: "Desde $3.500.000 Setup" };

  return (
    <section className="border-y border-slate-200/80 bg-slate-50/70 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="card-modern overflow-hidden bg-white p-8 sm:p-12">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            {/* Left Controls */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                ¿Cuánto dinero y tiempo puede ahorrar tu planta cada mes?
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Mueve los deslizadores según el tamaño de tu operación actual y descubre el impacto
                real de eliminar el papel, los descuadres en maquila y las mermas invisibles.
              </p>

              <div className="mt-8 space-y-6">
                <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="roi-operators" className="text-sm font-semibold text-slate-700">
                      Operarios o estaciones en planta
                    </label>
                    <span className="rounded-md bg-slate-900 px-3 py-1 font-mono text-sm font-bold text-white">
                      {operators} personas
                    </span>
                  </div>
                  <input
                    id="roi-operators"
                    type="range"
                    min={5}
                    max={200}
                    step={5}
                    value={operators}
                    onChange={(e) => setOperators(Number(e.target.value))}
                    className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-[#C2410C]"
                  />
                  <div className="mt-2 flex justify-between font-mono text-xs text-slate-400">
                    <span>5 operarios</span>
                    <span>100 operarios</span>
                    <span>200+ operarios</span>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="roi-orders" className="text-sm font-semibold text-slate-700">
                      Órdenes o lotes producidos al mes
                    </label>
                    <span className="rounded-md bg-slate-900 px-3 py-1 font-mono text-sm font-bold text-white">
                      {monthlyOrders} órdenes/mes
                    </span>
                  </div>
                  <input
                    id="roi-orders"
                    type="range"
                    min={20}
                    max={600}
                    step={20}
                    value={monthlyOrders}
                    onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                    className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-[#C2410C]"
                  />
                  <div className="mt-2 flex justify-between font-mono text-xs text-slate-400">
                    <span>20 órdenes</span>
                    <span>300 órdenes</span>
                    <span>600+ órdenes</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50/60 p-5">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      ¿Envías procesos a talleres externos o maquila?
                    </p>
                    <p className="text-xs text-slate-500">
                      Satélites de costura, lavandería, pintura, galvanizado o corte láser.
                    </p>
                  </div>
                  <div className="inline-flex rounded-lg bg-slate-200/80 p-1">
                    <button
                      type="button"
                      onClick={() => setHasExternalMaquila(true)}
                      className={`cursor-pointer rounded-md px-4 py-1.5 text-xs font-semibold transition-all ${
                        hasExternalMaquila
                          ? "bg-slate-900 text-white shadow-xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Sí, usamos externos
                    </button>
                    <button
                      type="button"
                      onClick={() => setHasExternalMaquila(false)}
                      className={`cursor-pointer rounded-md px-4 py-1.5 text-xs font-semibold transition-all ${
                        !hasExternalMaquila
                          ? "bg-slate-900 text-white shadow-xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Todo es interno
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="rounded-2xl bg-slate-900 p-7 text-white shadow-xl sm:p-9">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Proyección de Impacto Mensual
                </span>
                <span className="font-mono text-xs font-medium text-slate-400">
                  Retorno desde el mes 1
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Reducción de mermas y fugas</span>
                    <TrendingUp className="h-4 w-4 text-brand" />
                  </div>
                  <p className="mt-2 font-mono text-2xl font-bold text-white sm:text-3xl">
                    ${scrapSavingsCop.toLocaleString("es-CO")}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">COP ahorrados cada mes</p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Tiempo administrativo libre</span>
                    <Clock className="h-4 w-4 text-brand" />
                  </div>
                  <p className="mt-2 font-mono text-2xl font-bold text-white sm:text-3xl">
                    {hoursSavedPerMonth} horas
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Liberadas al mes en planillas y conteo
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-800/70 p-5">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Licencia recomendada para tu capacidad
                </span>
                <div className="mt-1.5 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold text-white">{recommendedPlan.name}</h3>
                  <span className="font-mono text-base font-bold text-white">
                    {recommendedPlan.price}
                  </span>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-brand" />
                  Piloto guiado de 30 días en tu planta
                </span>
                <a
                  href={WHATSAPP_ROI}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-dark"
                >
                  Solicitar Demo Personalizada
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
