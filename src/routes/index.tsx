import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  FlaskConical,
  Globe,
  Layers,
  Mail,
  Menu,
  MessageCircle,
  QrCode,
  Scale,
  ScanBarcode,
  Scissors,
  Server,
  Truck,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { HeroMockup } from "@/components/landing/HeroMockup";
import { RoiCalculator } from "@/components/landing/RoiCalculator";

const TITLE = "CEREBIIA OPEREX · Software de Control de Producción y Planta en Tiempo Real (MES)";
const DESC =
  "El sistema operativo moderno para fábricas y plantas de producción. Controla órdenes, lotes con QR, mermas, talleres externos (maquila) y liquidación de operarios en tiempo real.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/operex_logo.jpeg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/operex_logo.jpeg" },
    ],
  }),
  component: Index,
});

const WHATSAPP_DEMO =
  "https://wa.me/573000000000?text=Hola%2C%20quiero%20agendar%20una%20Demo%20de%20CEREBIIA%20OPEREX";
const WHATSAPP_SPECIALIST =
  "https://wa.me/573000000000?text=Hola%2C%20quiero%20hablar%20con%20un%20Especialista%20de%20CEREBIIA%20OPEREX";
const WHATSAPP_WHITELABEL =
  "https://wa.me/573000000000?text=Hola%2C%20me%20interesa%20el%20modelo%20Marca%20Blanca%20%2F%20Servidor%20Dedicado%20de%20CEREBIIA%20OPEREX";

const btnPrimaryBrand =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-dark hover:-translate-y-0.5";
const btnSecondaryWhite =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-2xs transition-all hover:border-slate-900 hover:text-slate-900";

/* ==========================================================================
   A. HEADER / NAV (Minimalista, limpio y ejecutivo)
   ========================================================================== */
function HeaderNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Plataforma", href: "#plataforma" },
    { label: "Industrias", href: "#industrias" },
    { label: "Marca Blanca", href: "#marca-blanca" },
    { label: "Precios", href: "#planes" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center" aria-label="CEREBIIA OPEREX Inicio">
          <img
            src="/operex_logo.jpeg"
            alt="CEREBIIA OPEREX"
            className="h-11 w-auto object-contain mix-blend-multiply"
          />
        </a>

        <nav className="hidden items-center gap-9 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition-colors hover:text-slate-900">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <a
            href={WHATSAPP_DEMO}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-brand"
          >
            Agendar Demo
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-4 pt-3 pb-5 md:hidden">
          <nav className="flex flex-col space-y-1.5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 border-t border-slate-100 pt-3">
            <a
              href={WHATSAPP_DEMO}
              target="_blank"
              rel="noreferrer"
              className={`${btnPrimaryBrand} w-full py-2.5 text-xs`}
            >
              Agendar Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ==========================================================================
   B. HERO SECTION (Blanco puro + Titular industrial contundente)
   ========================================================================== */
function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-white">
      <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 lg:pt-18 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.12fr]">
          {/* Left Copy */}
          <div>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
              El sistema operativo de tu planta.{" "}
              <span className="text-brand">Del insumo bruto al producto terminado.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Deja atrás las planillas de papel, los lotes perdidos en maquila y las horas
              liquidando nómina.{" "}
              <strong className="font-semibold text-slate-900">CEREBIIA OPEREX</strong> conecta
              órdenes de producción, escaneo QR en piso, control de mermas y productividad de
              operarios en tiempo real.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a href={WHATSAPP_DEMO} target="_blank" rel="noreferrer" className={btnPrimaryBrand}>
                Iniciar Piloto en Planta (30 Días)
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#marca-blanca" className={btnSecondaryWhite}>
                <Server className="h-4 w-4 text-slate-700" />
                Despliegue Dedicado / Marca Blanca
              </a>
            </div>

            {/* Executive Trust Metrics */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200/80 pt-7">
              <div>
                <p className="font-mono text-2xl font-extrabold text-slate-900 sm:text-3xl">−92%</p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  Tiempo liquidando destajo y turnos
                </p>
              </div>
              <div className="border-l border-slate-200/80 pl-4">
                <p className="font-mono text-2xl font-extrabold text-brand sm:text-3xl">100%</p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  Trazabilidad QR de lotes y maquila
                </p>
              </div>
              <div className="border-l border-slate-200/80 pl-4">
                <p className="font-mono text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  72 hrs
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  Implementación guiada en tu fábrica
                </p>
              </div>
            </div>
          </div>

          {/* Right Product Showcase */}
          <HeroMockup />
        </div>
      </div>

      {/* Clean Sector Strip */}
      <div className="border-t border-slate-100 bg-slate-50/70">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
            Sectores industriales:
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-600">
            {[
              "Confección y Textil",
              "Metalmecánica y CNC",
              "Plásticos y Empaques",
              "Calzado y Marroquinería",
              "Alimentos y Lotes",
              "Ensambles Industriales",
            ].map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   C. SELECTOR INTERACTIVO POR INDUSTRIA (Versatilidad Demostrada)
   ========================================================================== */
type IndustryItem = {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  icon: typeof Scissors;
  benefits: { title: string; desc: string }[];
  workflow: string[];
  kpis: { label: string; value: string; sub: string }[];
  sampleOrder: string;
  sampleRows: { lot: string; station: string; qty: string; status: string }[];
};

const INDUSTRIES: IndustryItem[] = [
  {
    id: "confeccion",
    tabLabel: "Confección, Textil & Calzado",
    title:
      "Control total desde la orden de corte hasta los talleres satélites y la liquidación a destajo.",
    subtitle:
      "Olvídate de los cupones de papel perdidos y las diferencias de inventario con satélites y lavanderías. Cada paquete lleva su código QR para saber exactamente quién hizo qué operación y cuánto pagarle.",
    icon: Scissors,
    benefits: [
      {
        title: "Órdenes de corte y curvas de talla/color",
        desc: "Calcula el consumo real por rollo de tela o cuero y genera automáticamente los tiquetes QR por paquete.",
      },
      {
        title: "Liquidación automática al destajo",
        desc: "Los operarios escanean su operación desde el celular o tablet de piso. La nómina queda lista sin digitar planillas.",
      },
      {
        title: "Control de satélites externos y lavandería",
        desc: "Registra remisiones de salida y retorno con alerta inmediata de prendas faltantes, segundas o retrasadas.",
      },
    ],
    workflow: [
      "Orden de Corte",
      "Paquetes QR",
      "Costura / Guarnición",
      "Lavandería / Satélite",
      "Calidad y Empaque",
    ],
    kpis: [
      { label: "Exactitud en nómina a destajo", value: "99.9%", sub: "Cero pagos duplicados" },
      { label: "Reducción de merma en corte", value: "-35%", sub: "Control rollo a rollo" },
    ],
    sampleOrder: "OP-8920 · Colección Denim / Calzado · 2.400 Unidades",
    sampleRows: [
      {
        lot: "PAQ-01 · Talla 30 / Índigo",
        station: "Satélite Costura Norte",
        qty: "120 / 120 und",
        status: "Completado",
      },
      {
        lot: "PAQ-02 · Talla 32 / Índigo",
        station: "Lavandería Proceso Stone",
        qty: "118 / 120 und",
        status: "En proceso",
      },
      {
        lot: "PAQ-03 · Talla 34 / Negro",
        station: "Módulo Terminación 03",
        qty: "96 / 96 und",
        status: "Auditado",
      },
    ],
  },
  {
    id: "metalmecanica",
    tabLabel: "Metalmecánica & Ensambles",
    title:
      "Rutas de mecanizado, consumo de lámina y perfiles, tiempos de ciclo y pintura o galvanizado.",
    subtitle:
      "Coordina cada orden de fabricación entre corte láser, doblez, soldadura y ensamble final. Conoce en tiempo real en qué estación está cada pieza y cuánto cuesta producirla.",
    icon: Wrench,
    benefits: [
      {
        title: "Secuencia clara de mecanizado y sub-ensambles",
        desc: "Monitorea el avance de cada componente desde el corte inicial hasta el ensamble y pruebas de calidad.",
      },
      {
        title: "Control de lámina, perfiles y retales",
        desc: "Compara el material teórico de ingeniería contra el consumo real en planta y la chatarra generada.",
      },
      {
        title: "Seguimiento de galvanizado y pintura externa",
        desc: "Controla por peso y por unidad cada lote que sale a tratamiento superficial o proceso externo.",
      },
    ],
    workflow: [
      "Corte Láser / CNC",
      "Doblez y Torno",
      "Soldadura MIG/TIG",
      "Pintura / Galvanizado",
      "Ensamble Final",
    ],
    kpis: [
      { label: "Aprovechamiento de lámina", value: "96.4%", sub: "Menor desperdicio" },
      { label: "Entregas a tiempo (OTIF)", value: "+25%", sub: "Sin cuellos de botella" },
    ],
    sampleOrder: "OF-3104 · Gabinete Industrial Acero Inox · 180 Unidades",
    sampleRows: [
      {
        lot: "SUB-101 · Chasis Base CNC",
        station: "Celda Doblez #02",
        qty: "180 / 180 pzs",
        status: "Completado",
      },
      {
        lot: "SUB-102 · Puerta + Bisagra",
        station: "Pintura Electrostática",
        qty: "145 / 180 pzs",
        status: "En proceso",
      },
      {
        lot: "SUB-103 · Barraje Interno",
        station: "Estación Torque y QA",
        qty: "110 / 180 pzs",
        status: "Auditado",
      },
    ],
  },
  {
    id: "plasticos",
    tabLabel: "Plásticos & Empaques",
    title:
      "Control por turnos de inyección y extrusión, merma de resina, molienda y pesaje de lote.",
    subtitle:
      "Supervisa la productividad de tus máquinas 24/7. Concilia cada kilo de resina virgen, pigmento y material recuperado en molino contra las unidades reales empacadas.",
    icon: Layers,
    benefits: [
      {
        title: "Productividad por turno (A / B / C) y máquina",
        desc: "Registra golpes por minuto, cavidades activas, tiempos de cambio de molde y motivos de paro en vivo.",
      },
      {
        title: "Balance de resina, purga y re-molienda",
        desc: "Sabes con exactitud cuánto polímero entró a tolva, cuánto salió en piezas buenas y cuánto se recicló.",
      },
      {
        title: "Rótulos QR por caja o bobina terminada",
        desc: "Trazabilidad completa de qué máquina, operario, turno y lote de resina produjo cada despacho.",
      },
    ],
    workflow: [
      "Mezcla y Tolva",
      "Inyección / Extrusión",
      "Control Molienda",
      "Impresión / Sellado",
      "Pesaje y Empaque",
    ],
    kpis: [
      { label: "Eficiencia OEE de máquinas", value: "91.2%", sub: "Monitoreo 24/7" },
      { label: "Material recuperado", value: "98.6%", sub: "Balance de masa exacto" },
    ],
    sampleOrder: "OP-7741 · Envase Polietileno Alta Densidad · 50.000 Piezas",
    sampleRows: [
      {
        lot: "INY-01 · Inyectora 250T",
        station: "Resina HDPE Lote #902",
        qty: "22.400 / 25.000",
        status: "En proceso",
      },
      {
        lot: "INY-02 · Inyectora 180T",
        station: "Masterbatch Negro/Gris",
        qty: "25.000 / 25.000",
        status: "Completado",
      },
      {
        lot: "MOL-04 · Molino Recuperado",
        station: "Re-incorporación 10%",
        qty: "184,5 kg OK",
        status: "Auditado",
      },
    ],
  },
  {
    id: "alimentos",
    tabLabel: "Manufactura General & Alimentos",
    title: "Formulaciones, control de mermas por lote de mezcla, envasado y fechas de vencimiento.",
    subtitle:
      "Garantiza la estandarización de tus recetas y cumple con las exigencias sanitarias (INVIMA / BPM). Rastrea qué lotes de ingredientes se usaron en cada lote de producto terminado.",
    icon: FlaskConical,
    benefits: [
      {
        title: "Control de recetas y pesaje de insumos",
        desc: "Asegura que cada batch respete las cantidades exactas de la formulación y registra el lote de cada proveedor.",
      },
      {
        title: "Medición de merma en mezcla y envasado",
        desc: "Detecta al instante desviaciones entre el rendimiento esperado del batch y las unidades reales envasadas.",
      },
      {
        title: "Trazabilidad de vencimientos y lotes (Recall Ready)",
        desc: "Consulta en segundos toda la genealogía de un lote despachado para auditorías de calidad o clientes.",
      },
    ],
    workflow: [
      "Recepción Insumos",
      "Pesaje de Receta",
      "Mezcla / Cocción",
      "Envasado y Loteado",
      "Liberación Calidad",
    ],
    kpis: [
      { label: "Rendimiento vs. Receta", value: "98.9%", sub: "Control por batch" },
      { label: "Trazabilidad de lotes", value: "100%", sub: "Listo para auditorías" },
    ],
    sampleOrder: "BATCH-5509 · Línea de Procesamiento y Envasado · 4.800 Unidades",
    sampleRows: [
      {
        lot: "BCH-01 · Pesaje Pre-Mezcla",
        station: "Insumo Base Lote #A44",
        qty: "1.200 kg OK",
        status: "Completado",
      },
      {
        lot: "BCH-02 · Línea Envasado 01",
        station: "Venc: Nov 2027 · QR",
        qty: "4.320 / 4.800 und",
        status: "En proceso",
      },
      {
        lot: "BCH-03 · Control Calidad",
        station: "Muestra Lab #QC-209",
        qty: "Conforme BPM",
        status: "Auditado",
      },
    ],
  },
];

function IndustrySelectorSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = INDUSTRIES[activeTab] ?? INDUSTRIES[0]!;

  return (
    <section
      id="industrias"
      className="scroll-mt-20 border-b border-slate-200/80 bg-slate-50/70 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Diseñado para hablar el mismo idioma de tu fábrica
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Haz clic en tu sector industrial para ver cómo{" "}
            <strong className="font-semibold text-slate-900">CEREBIIA OPEREX</strong> se adapta a
            tus procesos, unidades de medida y estaciones de trabajo.
          </p>
        </div>

        {/* Clean Pill Tabs */}
        <div
          role="tablist"
          aria-label="Selector de industria"
          className="mt-10 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {INDUSTRIES.map((item, idx) => {
            const Icon = item.icon;
            const active = idx === activeTab;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={active}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`flex cursor-pointer items-center gap-3.5 rounded-2xl border p-4 text-left transition-all ${
                  active
                    ? "border-slate-900 bg-white shadow-md ring-1 ring-slate-900/10"
                    : "border-slate-200/90 bg-white/70 text-slate-600 hover:border-slate-400 hover:bg-white"
                }`}
              >
                <div
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors ${
                    active ? "bg-slate-900 text-brand" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <span
                  className={`text-sm font-bold leading-snug ${
                    active ? "text-slate-900" : "text-slate-700"
                  }`}
                >
                  {item.tabLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Card */}
        <div className="card-modern mt-8 bg-white p-6 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_1fr] lg:items-center">
            <div>
              <h3 className="text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
                {current.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{current.subtitle}</p>

              <div className="mt-7 space-y-4">
                {current.benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-3.5">
                    <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-100 text-brand">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{b.title}</h4>
                      <p className="mt-0.5 text-sm text-slate-600">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clean Workflow Pills */}
              <div className="mt-8 border-t border-slate-100 pt-6">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Flujo típico controlado en piso:
                </span>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {current.workflow.map((step, i) => (
                    <div key={step} className="flex items-center gap-1.5">
                      <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                        {step}
                      </span>
                      {i < current.workflow.length - 1 && (
                        <ChevronRight className="h-4 w-4 text-slate-300" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Visual Preview */}
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                <div>
                  <span className="font-mono text-xs font-semibold text-brand">
                    EN PISO · {current.tabLabel.toUpperCase()}
                  </span>
                  <p className="mt-0.5 text-sm font-bold text-slate-900">{current.sampleOrder}</p>
                </div>
                <span className="rounded bg-slate-900 px-2.5 py-1 font-mono text-[11px] font-semibold text-white">
                  ACTIVO
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3.5">
                {current.kpis.map((k) => (
                  <div
                    key={k.label}
                    className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-2xs"
                  >
                    <span className="text-xs font-medium text-slate-500">{k.label}</span>
                    <p className="mt-1 font-mono text-2xl font-extrabold text-slate-900">
                      {k.value}
                    </p>
                    <span className="mt-0.5 block text-xs font-medium text-brand">{k.sub}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-2.5">
                {current.sampleRows.map((row) => (
                  <div
                    key={row.lot}
                    className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-xs shadow-2xs"
                  >
                    <div>
                      <p className="font-bold text-slate-900">{row.lot}</p>
                      <p className="text-slate-500">{row.station}</p>
                    </div>
                    <div className="text-right">
                      <span className="block font-mono font-bold text-slate-900">{row.qty}</span>
                      <span
                        className={`font-mono text-[11px] font-semibold ${
                          row.status === "En proceso" ? "text-brand" : "text-slate-600"
                        }`}
                      >
                        ● {row.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   D. BENTO GRID DE CAPACIDADES CENTRALES (Limpio, moderno y preciso)
   ========================================================================== */
function BentoCapabilitiesSection() {
  return (
    <section id="plataforma" className="scroll-mt-20 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Todo lo que necesitas para tener el control de tu producción
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Fácil de usar para el operario en su estación y potente para el gerente que necesita
            datos exactos en su celular o computador.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Bloque 1 (Doble ancho) */}
          <div className="card-modern card-modern-hover flex flex-col justify-between p-7 sm:p-9 lg:col-span-2">
            <div>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-brand">
                <QrCode className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Rutas de Producción Flexibles y Escaneo QR / Código de Barras
              </h3>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-600">
                Define las estaciones por las que viaja cualquier material. Con un simple escaneo
                desde una tablet o celular económico, sabes en qué paso va cada lote sin llenar
                formularios en papel.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                {
                  code: "LOTE-4829-01",
                  step: "1. Corte / Inicio",
                  status: "Completado",
                  active: false,
                },
                {
                  code: "LOTE-4829-02",
                  step: "2. Transformación",
                  status: "Completado",
                  active: false,
                },
                {
                  code: "LOTE-4829-03",
                  step: "3. Ensamble Activo",
                  status: "En estación",
                  active: true,
                },
                {
                  code: "LOTE-4829-04",
                  step: "4. Control Calidad",
                  status: "Siguiente",
                  active: false,
                },
              ].map((item) => (
                <div
                  key={item.code}
                  className={`rounded-xl border p-4 ${
                    item.active
                      ? "border-brand bg-slate-900 text-white"
                      : "border-slate-200/80 bg-slate-50/70"
                  }`}
                >
                  <ScanBarcode
                    className={`h-5 w-5 ${item.active ? "text-brand" : "text-slate-600"}`}
                  />
                  <p
                    className={`mt-3 font-mono text-xs font-bold ${
                      item.active ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {item.code}
                  </p>
                  <p
                    className={`mt-0.5 text-xs ${
                      item.active ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {item.step}
                  </p>
                  <span
                    className={`mt-2 inline-block font-mono text-[11px] font-semibold ${
                      item.active ? "text-brand" : "text-slate-500"
                    }`}
                  >
                    ● {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bloque 2 */}
          <div className="card-modern card-modern-hover flex flex-col justify-between p-7 sm:p-9">
            <div>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-brand">
                <Truck className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Gestión de Maquila y Procesos Externos
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Control estricto del material que sale a terceros (talleres satélites, galvanizado,
                tintorería, corte láser). Sabes qué insumos salieron, qué piezas regresaron y qué
                saldo queda pendiente.
              </p>
            </div>

            <div className="mt-7 rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                <span className="font-mono">REMISIÓN #RM-204</span>
                <span className="font-mono text-brand">CONCILIADA</span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-white p-2.5 ring-1 ring-slate-200/70">
                  <span className="block text-[10px] text-slate-400">SALIDA</span>
                  <span className="font-mono text-sm font-bold text-slate-900">500</span>
                </div>
                <div className="rounded-lg bg-white p-2.5 ring-1 ring-slate-200/70">
                  <span className="block text-[10px] text-slate-400">RETORNO</span>
                  <span className="font-mono text-sm font-bold text-slate-900">496</span>
                </div>
                <div className="rounded-lg bg-slate-900 p-2.5 text-white">
                  <span className="block text-[10px] text-slate-400">PENDIENTE</span>
                  <span className="font-mono text-sm font-bold text-brand">4</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bloque 3 */}
          <div className="card-modern card-modern-hover flex flex-col justify-between p-7 sm:p-9">
            <div>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-brand">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Rendimiento de Mano de Obra y Liquidación
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Mide la productividad por turno, máquina u operario en vivo. Liquida automáticamente
                pagos al destajo por operación, metas de bonificación o tarifas por hora sin errores
                manuales.
              </p>
            </div>

            <div className="mt-7 space-y-2">
              {[
                { name: "Ana M. · Costura / Ensamble", eff: "97%", pay: "Destajo validado" },
                { name: "Jorge T. · Operador Máquina", eff: "93%", pay: "Bono meta cumplido" },
              ].map((op) => (
                <div
                  key={op.name}
                  className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/70 px-3.5 py-2.5 text-xs"
                >
                  <div>
                    <p className="font-bold text-slate-900">{op.name}</p>
                    <p className="text-slate-500">{op.pay}</p>
                  </div>
                  <span className="rounded bg-slate-900 px-2.5 py-1 font-mono font-bold text-white">
                    {op.eff}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bloque 4 (Doble ancho) */}
          <div className="card-modern card-modern-hover flex flex-col justify-between p-7 sm:p-9 lg:col-span-2">
            <div>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-brand">
                <Scale className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Balance de Materiales y Reducción de Desperdicio
              </h3>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-600">
                Compara automáticamente el consumo teórico de tu ficha técnica contra el consumo
                real en planta. Detecta a tiempo fugas de inventario, sobrecostos de materia prima y
                mermas por estación.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
                <span className="text-xs font-medium text-slate-500">
                  Consumo Estándar (Receta/BOM)
                </span>
                <p className="mt-1 font-mono text-xl font-bold text-slate-900">1.450 kg</p>
                <span className="mt-1 block text-xs text-slate-400">Planificado para la orden</span>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
                <span className="text-xs font-medium text-slate-500">Consumo Real Registrado</span>
                <p className="mt-1 font-mono text-xl font-bold text-slate-900">1.476 kg</p>
                <span className="mt-1 block text-xs text-slate-500">
                  Medido en estaciones de piso
                </span>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-white">
                <span className="text-xs font-semibold text-slate-300">
                  Merma Controlada (1.8%)
                </span>
                <p className="mt-1 font-mono text-xl font-bold text-brand">+$8,4M COP</p>
                <span className="mt-1 block text-xs text-slate-400">
                  Ahorro mensual en materia prima
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   CASOS DE USO Y RESULTADOS (#casos-de-uso)
   ========================================================================== */
function ResultsSection() {
  const results = [
    {
      sector: "Confección y Textil",
      metric: "De 6 horas a 20 min",
      title: "Liquidación de nómina al destajo y control de satélites",
      desc: "Talleres y fábricas eliminan el conteo manual de cupones los viernes y tienen certeza exacta de cuántas prendas tiene cada taller satélite.",
    },
    {
      sector: "Metalmecánica y Ensamble",
      metric: "+28% entregas a tiempo",
      title: "Visibilidad de cuellos de botella en tiempo real",
      desc: "Los jefes de planta identifican al instante qué orden está detenida en corte, soldadura o pintura sin tener que recorrer toda la bodega.",
    },
    {
      sector: "Plásticos y Manufactura",
      metric: "-60% merma no registrada",
      title: "Control de materia prima lote a lote",
      desc: "Conciliación transparente entre los kilos de insumo entregados por bodega y las unidades buenas terminadas en cada turno.",
    },
  ];

  return (
    <section id="casos-de-uso" className="scroll-mt-20 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Un software que se paga solo desde el primer mes
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {results.map((r) => (
            <div key={r.title} className="card-modern card-modern-hover p-7">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand">
                {r.sector}
              </span>
              <p className="mt-3 font-mono text-3xl font-extrabold text-slate-900">{r.metric}</p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   E. MODELOS DE DESPLIEGUE: CLOUD SAAS VS. MARCA BLANCA EMPRESARIAL
   ========================================================================== */
function DeploymentModelsSection() {
  return (
    <section
      id="marca-blanca"
      className="scroll-mt-20 border-t border-slate-200/80 bg-slate-50/70 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Dos modalidades: Nube lista para usar o tu propia plataforma Marca Blanca
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Inicia hoy mismo en la nube de CEREBIIA o adquiere una instancia dedicada con tu propio
            dominio corporativo y marca empresarial.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Columna 1: Cloud SaaS (White Card) */}
          <div className="card-modern flex flex-col justify-between bg-white p-8 sm:p-10">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand">
                Modalidad 01 · Activación Inmediata
              </span>
              <h3 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                CEREBIIA OPEREX Cloud (SaaS)
              </h3>
              <p className="mt-2 text-base text-slate-600">
                Para plantas y talleres que requieren arrancar de inmediato con cero costos de
                servidores ni equipo de TI.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Acceso web y móvil seguro desde cualquier lugar",
                  "Niveles escalables: Taller Base, Fábrica Pro y Multi-Planta",
                  "Servidores, copias de seguridad y seguridad gestionados por CEREBIIA",
                  "Soporte continuo y actualizaciones automáticas incluidas",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
              <div>
                <span className="block text-xs font-medium text-slate-400">
                  Planes mensuales desde
                </span>
                <span className="font-mono text-2xl font-extrabold text-slate-900">
                  $160.000 <span className="text-xs font-normal text-slate-500">COP / mes</span>
                </span>
              </div>
              <a href="#planes" className={btnSecondaryWhite}>
                Ver Planes Cloud
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Columna 2: Marca Blanca / Instancia Dedicada (Executive Slate Card) */}
          <div className="flex flex-col justify-between rounded-2xl bg-slate-900 p-8 text-white shadow-xl sm:p-10">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand">
                Modalidad 02 · Enterprise & Marca Blanca
              </span>
              <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                Instancia Dedicada / Marca Blanca
              </h3>
              <p className="mt-2 text-base text-slate-300">
                Para corporativos, holdings manufactureros o consultoras que desean operar bajo su
                propia marca y servidor privado.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Servidor Cloud aislado y base de datos exclusiva para tu empresa",
                  "Dominio propio (ej. produccion.tuempresa.com) con tu logo y colores",
                  "Desarrollo de módulos a medida y reglas de negocio específicas",
                  "APIs dedicadas para conectar con tu ERP (SAP, Siesa, Odoo, World Office)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-6">
              <div>
                <span className="block text-xs font-medium text-slate-400">
                  Implementación dedicada desde
                </span>
                <span className="font-mono text-2xl font-extrabold text-white">
                  $3.500.000{" "}
                  <span className="text-xs font-normal text-slate-400">COP Setup + Infra</span>
                </span>
              </div>
              <a
                href={WHATSAPP_WHITELABEL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-dark"
              >
                Cotizar Marca Blanca
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   F. PLANES Y PRECIOS CLAROS (Con switch anual con descuento)
   ========================================================================== */
function PricingSection() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: "Plan Taller",
      monthly: "160.000",
      annualEq: "136.000",
      unit: "COP / mes",
      desc: "Ideal para talleres que quieren organizar sus órdenes y liquidar operarios sin papel.",
      popular: false,
      whitelabel: false,
      features: [
        "Hasta 2 supervisores",
        "Hasta 15 operarios en piso",
        "Flujo de órdenes en tiempo real",
        "Liquidación operativa (destajo o turno)",
        "Escaneo QR desde celular o tablet",
      ],
      cta: "Empezar con Plan Taller",
      href: WHATSAPP_DEMO,
    },
    {
      name: "Plan Fábrica Pro",
      monthly: "380.000",
      annualEq: "323.000",
      unit: "COP / mes",
      desc: "El más elegido por fábricas con múltiples estaciones, control de mermas y talleres externos.",
      popular: true,
      whitelabel: false,
      features: [
        "Hasta 6 administradores",
        "Operarios ilimitados en planta",
        "Trazabilidad multi-etapa por lote",
        "Control de maquila y procesos externos",
        "Control de mermas y códigos QR",
        "Tablero de eficiencia OEE en vivo",
      ],
      cta: "Probar Fábrica Pro (30 Días)",
      href: WHATSAPP_DEMO,
    },
    {
      name: "Plan Industrial",
      monthly: "750.000",
      annualEq: "637.500",
      unit: "COP / mes",
      desc: "Para empresas manufactureras con múltiples plantas, bodegas y costeo analítico.",
      popular: false,
      whitelabel: false,
      features: [
        "Operación Multi-planta y Multi-bodega",
        "Administradores y operarios ilimitados",
        "Inventario avanzado de materias primas",
        "Costos analíticos por unidad producida",
        "Soporte directo prioritario de ingeniería",
      ],
      cta: "Agendar Demo Industrial",
      href: WHATSAPP_DEMO,
    },
    {
      name: "Dedicated / Whitelabel",
      monthly: "3.500.000",
      annualEq: "3.500.000",
      unit: "COP Setup + Cuota Mensual",
      desc: "Tu propia plataforma en servidor privado, con tu dominio y personalización a medida.",
      popular: false,
      whitelabel: true,
      features: [
        "Despliegue en servidor propio aislado",
        "Dominio corporativo (produccion.tuempresa.com)",
        "Tu marca, logotipo y colores corporativos",
        "Horas de personalización de software incluidas",
        "Integración vía API con tu ERP actual",
      ],
      cta: "Contactar Arquitectura",
      href: WHATSAPP_WHITELABEL,
    },
  ];

  return (
    <section
      id="planes"
      className="scroll-mt-20 border-t border-slate-200/80 bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Elige el plan perfecto para el tamaño de tu operación
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            Precios claros en pesos colombianos. Todos los planes incluyen acompañamiento para que
            tu planta esté operando en menos de 72 horas.
          </p>

          {/* Clean Billing Toggle */}
          <div className="mt-8 inline-flex items-center rounded-xl border border-slate-200 bg-slate-100/80 p-1.5">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`cursor-pointer rounded-lg px-5 py-2 text-xs font-semibold transition-all ${
                !annual
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Pago Mensual
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`flex cursor-pointer items-center gap-2 rounded-lg px-5 py-2 text-xs font-semibold transition-all ${
                annual ? "bg-slate-900 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Pago Anual</span>
              <span
                className={`rounded px-2 py-0.5 font-mono text-[10px] font-bold ${
                  annual ? "bg-brand text-white" : "bg-slate-200 text-slate-800"
                }`}
              >
                -15% DTO
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((p) => {
            const price = annual && !p.whitelabel ? p.annualEq : p.monthly;
            return (
              <div
                key={p.name}
                className={`relative flex flex-col justify-between rounded-2xl p-7 transition-all ${
                  p.popular
                    ? "border-2 border-brand bg-white shadow-xl"
                    : p.whitelabel
                      ? "border border-slate-800 bg-slate-900 text-white shadow-lg"
                      : "border border-slate-200/90 bg-white shadow-sm hover:border-slate-400"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-bold text-white shadow-xs">
                    Más elegido
                  </span>
                )}

                <div>
                  <h3
                    className={`text-xl font-bold ${
                      p.whitelabel ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {p.name}
                  </h3>
                  <p
                    className={`mt-2 text-xs leading-relaxed ${
                      p.whitelabel ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {p.desc}
                  </p>

                  <div
                    className={`mt-6 border-y py-5 ${
                      p.whitelabel ? "border-slate-800" : "border-slate-100"
                    }`}
                  >
                    {p.whitelabel && (
                      <span className="block text-[11px] font-semibold uppercase text-brand">
                        Desde
                      </span>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`font-mono text-3xl font-extrabold ${
                          p.whitelabel ? "text-white" : "text-slate-900"
                        }`}
                      >
                        ${price}
                      </span>
                    </div>
                    <span
                      className={`mt-1 block text-xs ${
                        p.whitelabel ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {p.unit}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3 text-xs">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        <span className={p.whitelabel ? "text-slate-200" : "text-slate-700"}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 w-full rounded-xl py-3 text-center text-xs font-semibold transition-all ${
                    p.popular
                      ? "bg-brand text-white shadow-sm hover:bg-brand-dark"
                      : p.whitelabel
                        ? "bg-white text-slate-900 hover:bg-slate-100"
                        : "border border-slate-200 bg-slate-50 text-slate-800 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   CÓMO FUNCIONA EN 3 PASOS (Cero fricción en planta)
   ========================================================================== */
function HowItWorksSection() {
  const steps = [
    {
      step: "Paso 01",
      title: "Crea la orden e imprime los códigos QR",
      desc: "Registra tu orden de producción con sus etapas y materiales. El sistema genera automáticamente las etiquetas QR para cada lote, paquete o contenedor.",
      highlight: "En menos de 2 minutos",
    },
    {
      step: "Paso 02",
      title: "Escaneo rápido en piso o taller externo",
      desc: "Tus operarios o satélites escanean el código QR con cualquier celular o tablet al terminar su tarea. Sin llenar planillas en papel ni usar computadores complejos.",
      highlight: "Cero curva de aprendizaje",
    },
    {
      step: "Paso 03",
      title: "Control, mermas y nómina al instante",
      desc: "Mira desde tu celular el avance real de cada pedido, las unidades en maquila, el consumo de materia prima y la liquidación lista para pagar.",
      highlight: "Visibilidad 24/7 en vivo",
    },
  ];

  return (
    <section className="border-t border-slate-200/80 bg-slate-50/50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            ¿Cómo funciona en el día a día de tu fábrica?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            No necesitas cambiar tu forma de producir ni comprar equipos costosos. CEREBIIA OPEREX
            se adapta a tu planta en tres pasos simples.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, idx) => (
            <div
              key={s.step}
              className="card-modern card-modern-hover relative flex flex-col justify-between bg-white p-7 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 font-mono text-sm font-bold text-white shadow-xs">
                    0{idx + 1}
                  </span>
                  <span className="font-mono text-xs font-semibold text-brand">{s.highlight}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   PREGUNTAS FRECUENTES (Resolución de objeciones B2B)
   ========================================================================== */
function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Necesito comprar lectores o equipos especiales para mi planta?",
      a: "No. CEREBIIA OPEREX funciona en cualquier celular, tablet Android/iPad o computador que ya tengas. También es 100% compatible con lectores de código de barras/QR USB o Bluetooth e impresoras térmicas estándar.",
    },
    {
      q: "¿Es fácil de usar para operarios que no manejan computadores?",
      a: "Sí. La interfaz de piso está diseñada con botones grandes e intuitivos: el operario solo apunta la cámara al código QR del lote o paquete y confirma su operación en menos de 3 segundos.",
    },
    {
      q: "¿Cómo controla el material que enviamos a talleres satélites o maquila?",
      a: "Cada vez que envías material a un tercero (costura, lavandería, galvanizado, pintura, corte), el sistema genera una remisión digital con QR. Al regresar la mercancía, concilias entradas vs. salidas, sabiendo al instante qué taller tiene saldos pendientes o mermas.",
    },
    {
      q: "¿Cuándo me conviene el modelo Marca Blanca / Instancia Dedicada?",
      a: "El modelo Marca Blanca es ideal si eres una empresa manufacturera grande que exige servidor privado y dominio propio (produccion.tuempresa.com), o si eres una consultora/gremio que desea ofrecer la plataforma bajo tu propia marca a múltiples fábricas.",
    },
    {
      q: "¿Cuánto tiempo toma poner el sistema en marcha?",
      a: "En menos de 72 horas configuramos tus rutas de producción, estaciones y usuarios. Además, cuentas con un piloto guiado de 30 días acompañado por nuestro equipo de ingeniería.",
    },
  ];

  return (
    <section className="border-t border-slate-200/80 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Resolvemos tus dudas antes de empezar
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-slate-200/90 bg-white transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-bold text-slate-900">{item.q}</span>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-sm font-bold transition-colors ${
                      isOpen ? "bg-brand text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 px-6 pt-3 pb-5 text-sm leading-relaxed text-slate-600">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   FINAL CTA BANNER
   ========================================================================== */
function FinalCtaSection() {
  return (
    <section className="bg-white px-4 pb-20 sm:px-6 lg:pb-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-slate-900 p-8 text-center text-white shadow-2xl sm:p-14">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          Toma el control total de tu planta esta misma semana
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-300">
          Agenda una demostración personalizada de 20 minutos. Te mostramos cómo funcionaría
          CEREBIIA OPEREX con tus propias órdenes y estaciones de trabajo.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={WHATSAPP_DEMO}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-7 py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-brand-dark"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar Demo por WhatsApp
          </a>
          <a
            href={WHATSAPP_WHITELABEL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-slate-800"
          >
            Consultar Modelo Marca Blanca
          </a>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   G. FOOTER INDUSTRIAL Y ECOSISTEMA
   ========================================================================== */
function FooterSection() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center" aria-label="CEREBIIA OPEREX">
              <img
                src="/operex_logo.jpeg"
                alt="CEREBIIA OPEREX"
                className="h-12 w-auto object-contain mix-blend-multiply"
              />
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500">
              Sistema Integral de Ejecución y Control de Producción para Plantas y Fábricas (MES).
              Una solución del ecosistema{" "}
              <strong className="font-semibold text-slate-700">
                CEREBIIA (OPEREX • DATA • CALIDAD)
              </strong>
              .
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["CEREBIIA OPEREX", "CEREBIIA DATA", "CEREBIIA CALIDAD"].map((suite, i) => (
                <span
                  key={suite}
                  className={`rounded-lg px-2.5 py-1 font-mono text-[11px] font-semibold ${
                    i === 0
                      ? "bg-slate-900 text-white"
                      : "bg-white text-slate-600 ring-1 ring-slate-200"
                  }`}
                >
                  {suite}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-900">Plataforma</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#plataforma" className="hover:text-brand">
                  Módulos y Capacidades
                </a>
              </li>
              <li>
                <a href="#industrias" className="hover:text-brand">
                  Soluciones por Industria
                </a>
              </li>
              <li>
                <a href="#marca-blanca" className="hover:text-brand">
                  Marca Blanca / Dedicado
                </a>
              </li>
              <li>
                <a href="#planes" className="hover:text-brand">
                  Planes y Precios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-900">Recursos</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={WHATSAPP_SPECIALIST}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand"
                >
                  Documentación Técnica
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_DEMO}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand"
                >
                  Agendar Demostración
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_SPECIALIST}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand"
                >
                  Soporte a Clientes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Contacto Directo
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP_DEMO}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Comercial
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs text-slate-500">
                <Mail className="h-4 w-4 text-brand" />
                <span>soporte@cerebiia.com</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-slate-500">
                <Globe className="h-4 w-4 text-brand" />
                <span>operex.cerebiia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-slate-200/80 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 CEREBIIA S.A.S. Todos los derechos reservados.</p>
          <p>operex.cerebiia.com · Ecosistema Industrial CEREBIIA</p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <HeaderNav />
      <main>
        <HeroSection />
        <IndustrySelectorSection />
        <BentoCapabilitiesSection />
        <HowItWorksSection />
        <RoiCalculator />
        <ResultsSection />
        <DeploymentModelsSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <FooterSection />
    </div>
  );
}
