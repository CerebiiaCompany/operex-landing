import { useEffect, useState } from "react";
import { CheckCircle2, Clock, QrCode, TrendingUp, Truck } from "lucide-react";

type OrderView = {
  id: string;
  tab: string;
  orderNumber: string;
  productName: string;
  clientOrLine: string;
  oee: string;
  oeeTrend: string;
  scrap: string;
  scrapNote: string;
  completed: number;
  target: number;
  unit: string;
  activeStage: number;
  externalPartner: string;
  liveFeed: {
    who: string;
    action: string;
    qty: string;
    time: string;
    badge: string;
  }[];
};

const ORDERS: OrderView[] = [
  {
    id: "confeccion",
    tab: "Confección Denim",
    orderNumber: "OP-4829",
    productName: "Jean Industrial Cargo 14oz",
    clientOrLine: "Línea Corte & Costura · Lote Exportación",
    oee: "88.4%",
    oeeTrend: "+6.2% vs turno anterior",
    scrap: "1.8%",
    scrapNote: "Ahorro de 42 m de tela",
    completed: 1420,
    target: 1600,
    unit: "prendas",
    activeStage: 2,
    externalPartner: "Satélite Lavandería & Láser S.A.",
    liveFeed: [
      {
        who: "María R. · Estación Pretina",
        action: "Escaneo QR Paquete #09",
        qty: "+24 prendas",
        time: "Hace 12 seg",
        badge: "Destajo OK",
      },
      {
        who: "Lavandería Externa (Maquila)",
        action: "Retorno Remisión #RM-882",
        qty: "+120 prendas",
        time: "Hace 2 min",
        badge: "0 Faltantes",
      },
      {
        who: "Carlos V. · Control Calidad",
        action: "Liberación Lote Talla 32",
        qty: "+60 prendas",
        time: "Hace 5 min",
        badge: "99.4% Aprobado",
      },
    ],
  },
  {
    id: "plasticos",
    tab: "Inyección Plástica",
    orderNumber: "OP-4830",
    productName: "Envase Industrial HDPE 1000ml",
    clientOrLine: "Nave Inyectoras CNC · Turno B",
    oee: "91.2%",
    oeeTrend: "Disponibilidad 99.1%",
    scrap: "1.4%",
    scrapNote: "98% colada recuperada",
    completed: 8650,
    target: 10000,
    unit: "unidades",
    activeStage: 1,
    externalPartner: "Serigrafía & Etiquetado UV",
    liveFeed: [
      {
        who: "Inyectora 280T #03 · J. Pineda",
        action: "Cierre de contenedor QR-44",
        qty: "+250 pzs",
        time: "Hace 18 seg",
        badge: "Ciclo 18.1s",
      },
      {
        who: "Báscula Tolva #02",
        action: "Conciliación resina + molino",
        qty: "142.4 kg",
        time: "Hace 3 min",
        badge: "Balance Exacto",
      },
      {
        who: "Inspector Calidad · R. Soto",
        action: "Prueba de hermeticidad lote",
        qty: "+500 pzs",
        time: "Hace 8 min",
        badge: "Conforme",
      },
    ],
  },
  {
    id: "metalmecanica",
    tab: "Metalmecánica",
    orderNumber: "OP-4831",
    productName: "Gabinete Eléctrico Acero Inox",
    clientOrLine: "Celda Corte Láser, Doblez & Soldadura",
    oee: "89.7%",
    oeeTrend: "Cero retrasos de entrega",
    scrap: "1.6%",
    scrapNote: "98.4% aprovechamiento lámina",
    completed: 318,
    target: 360,
    unit: "gabinetes",
    activeStage: 3,
    externalPartner: "Pintura Electrostática & Galvanizado",
    liveFeed: [
      {
        who: "D. Castro · Estación Ensamble",
        action: "Torque y herrajes validados",
        qty: "+12 und",
        time: "Hace 25 seg",
        badge: "En tiempo",
      },
      {
        who: "Planta Pintura Electrostática",
        action: "Recepción Remisión #RM-703",
        qty: "+48 und",
        time: "Hace 4 min",
        badge: "Completo",
      },
      {
        who: "H. León · Soldadura MIG",
        action: "Sub-ensamble chasis principal",
        qty: "+16 und",
        time: "Hace 9 min",
        badge: "QC OK",
      },
    ],
  },
];

const STAGES = ["Materia Prima", "Transformación", "Maquila Externa", "Ensamble", "Calidad Final"];

export function HeroMockup() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [pulseCount, setPulseCount] = useState(0);

  const current = ORDERS[selectedIdx] ?? ORDERS[0]!;

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseCount((n) => (n + 1) % 8);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const liveUnits = Math.min(
    current.target,
    current.completed + pulseCount * (current.target > 2000 ? 15 : 2),
  );
  const pct = Math.round((liveUnits / current.target) * 100);

  return (
    <div className="shadow-mockup overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {/* Top Window Bar (Dark Titanium Header for Industrial Instrument Feel) */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-900 px-5 py-3 text-white">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-600" />
          <span className="h-2 w-2 rounded-full bg-slate-600" />
          <span className="h-2 w-2 rounded-full bg-brand" />
          <span className="ml-2 font-mono text-xs text-slate-300">
            operex.cerebiia.com · Control de Planta
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-slate-200">
          <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
          EN LÍNEA
        </span>
      </div>

      <div className="space-y-5 p-5 sm:p-6">
        {/* Clean App Header with Brand Logo & Order Type Selector */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <img
              src="/operex_logo.jpeg"
              alt="CEREBIIA OPEREX"
              className="h-8 w-auto object-contain mix-blend-multiply"
            />
            <span className="hidden h-4 w-px bg-slate-200 sm:inline-block" />
            <span className="hidden font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400 sm:inline-block">
              Orden activa
            </span>
          </div>
          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            {ORDERS.map((item, idx) => {
              const active = idx === selectedIdx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setSelectedIdx(idx);
                    setPulseCount(0);
                  }}
                  className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-semibold transition-all ${
                    active
                      ? "bg-slate-900 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Active Order Card */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded bg-slate-900 px-2 py-0.5 font-mono text-xs font-semibold text-white">
                  {current.orderNumber}
                </span>
                <span className="text-xs text-slate-500">{current.clientOrLine}</span>
              </div>
              <h3 className="mt-1.5 text-lg font-bold text-slate-900">{current.productName}</h3>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
              <Truck className="h-3.5 w-3.5 text-brand" />
              <span>{current.externalPartner}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex items-baseline justify-between text-sm">
              <span className="font-medium text-slate-600">
                Avance de lote:{" "}
                <strong className="font-mono font-bold text-slate-900">
                  {liveUnits.toLocaleString("es-CO")}
                </strong>{" "}
                / {current.target.toLocaleString("es-CO")} {current.unit}
              </span>
              <span className="font-mono text-sm font-bold text-brand">{pct}%</span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-brand transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          {/* Clean 5-Stage Pipeline */}
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
            {STAGES.map((stage, i) => {
              const done = i < current.activeStage;
              const currentSt = i === current.activeStage;
              return (
                <div
                  key={stage}
                  className={`rounded-lg px-2.5 py-2 text-center text-xs font-medium transition-all ${
                    currentSt
                      ? "bg-brand text-white shadow-xs"
                      : done
                        ? "border border-slate-300 bg-slate-100 text-slate-800"
                        : "border border-slate-200/80 bg-white text-slate-400"
                  }`}
                >
                  <span className="block truncate">{stage}</span>
                  <span
                    className={`mt-0.5 block font-mono text-[10px] ${
                      currentSt ? "text-white/90" : done ? "text-slate-600" : "text-slate-400"
                    }`}
                  >
                    {done ? "✓ OK" : currentSt ? "● ACTIVO" : "EN COLA"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Clean KPI Executive Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between text-xs font-medium text-slate-500">
              <span>Eficiencia OEE</span>
              <TrendingUp className="h-4 w-4 text-brand" />
            </div>
            <p className="mt-1.5 font-mono text-2xl font-bold text-slate-900">{current.oee}</p>
            <p className="mt-1 text-xs font-medium text-slate-500">{current.oeeTrend}</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between text-xs font-medium text-slate-500">
              <span>Índice de Merma</span>
              <CheckCircle2 className="h-4 w-4 text-slate-700" />
            </div>
            <p className="mt-1.5 font-mono text-2xl font-bold text-slate-900">{current.scrap}</p>
            <p className="mt-1 text-xs font-medium text-slate-500">{current.scrapNote}</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-900 p-4 text-white">
            <div className="flex items-center justify-between text-xs font-medium text-slate-400">
              <span>Liquidación Piso</span>
              <Clock className="h-4 w-4 text-brand" />
            </div>
            <p className="mt-1.5 font-mono text-2xl font-bold text-white">Automática</p>
            <p className="mt-1 text-xs font-medium text-slate-400">Al instante por cada QR</p>
          </div>
        </div>

        {/* Live QR Activity Stream */}
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
              <QrCode className="h-4 w-4 text-brand" />
              <span>Últimos escaneos QR registrados en piso</span>
            </div>
            <span className="font-mono text-[11px] text-slate-400">Tiempo real</span>
          </div>

          <div className="divide-y divide-slate-100">
            {current.liveFeed.map((event) => (
              <div
                key={event.action}
                className="flex items-center justify-between py-2.5 text-xs first:pt-0 last:pb-0"
              >
                <div className="min-w-0 pr-3">
                  <p className="truncate font-semibold text-slate-800">{event.who}</p>
                  <p className="truncate text-slate-500">
                    {event.action} · <span className="text-slate-400">{event.time}</span>
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <span className="block font-mono font-bold text-slate-900">{event.qty}</span>
                  <span className="font-mono text-[10px] font-semibold text-brand">
                    {event.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
