import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Factory, PackageX, CalendarX2, Database, QrCode, Calculator, Ruler, Tablet,
  Check, Server, Globe, Palette, Code2, Clock, ShieldCheck, Zap, MessageCircle, Mail, Phone,
} from "lucide-react";
import { HeroMockup } from "@/components/landing/HeroMockup";

const TITLE = "CEREBIIA OPERA · Control de producción para confección y manufactura";
const DESC = "MES para confección y manufactura: órdenes de corte, satélites, mermas de tela y liquidación a destajo con escaneo QR en tiempo real.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/573000000000?text=Hola%2C%20quiero%20un%20piloto%20de%20CEREBIIA%20OPERA";

const btnPrimary = "inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90";
const btnOutline = "inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-brand/50";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"><span className="h-px w-8 bg-brand" />{children}</p>;
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground"><Factory className="h-4 w-4" /></span>
          <span className="font-bold tracking-tight">CEREBIIA <span className="text-brand">OPERA</span></span>
          <span className="hidden sm:inline rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">MES Suite</span>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#caracteristicas" className="hover:text-foreground">Características</a>
          <a href="#flujo" className="hover:text-foreground">Flujo de Planta</a>
          <a href="#planes" className="hover:text-foreground">Planes & Precios</a>
          <a href="#marca-blanca" className="hover:text-foreground">Marca Blanca Dedicada</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href={WHATSAPP} className={`${btnOutline} hidden md:inline-flex py-2`}>Agendar Demostración</a>
          <a href="#contacto" className={`${btnPrimary} py-2`}>Probar Piloto<span className="hidden sm:inline"> en Planta</span></a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 pt-14 pb-20 sm:px-6 sm:pt-24 lg:grid-cols-[1fr_1.05fr]">
      <div>
        <p className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" /> MES para confección y manufactura
        </p>
        <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-[3.4rem]">
          Control total de tu planta, mermas y talleres satélites, <span className="text-brand">en tiempo real.</span>
        </h1>
        <p className="mt-7 max-w-lg text-lg text-muted-foreground">
          Elimina las remisiones en papel y los cuadernos. Desde la orden de corte hasta la liquidación a destajo, con escaneo QR en piso de planta.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-6">
          <a href="#contacto" className={btnPrimary}>Solicitar Piloto Guiado (30 Días)</a>
          <a href="#marca-blanca" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-brand">Conocer Modelo Marca Blanca <ArrowRight className="h-4 w-4 -rotate-45" /></a>
        </div>
        <dl className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-border border-y border-border py-5">
          {[["72 h", "Implementación"], ["−95%", "Tiempo de liquidación"], ["0%", "Lotes extraviados"]].map(([v, l]) => (
            <div key={l} className="px-4 first:pl-0">
              <dt className="font-mono text-xl font-semibold">{v}</dt>
              <dd className="mt-1 text-xs text-muted-foreground">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
      <HeroMockup />
    </section>
  );
}

function Pains() {
  const items = [
    { icon: PackageX, code: "ERR-01", t: "El abismo de los satélites externos", d: "Pérdida de prendas, insumos sin registrar y retrasos invisibles cuando el material sale de tu bodega." },
    { icon: CalendarX2, code: "ERR-02", t: "Caos cada sábado de pago", d: "Conteo manual de boletos de destajo, errores de liquidación y disputas con operarios por piezas producidas." },
    { icon: Database, code: "ERR-03", t: "ERPs sobredimensionados e inservibles en taller", d: "Sistemas contables rígidos que ningún supervisor de planta quiere llenar frente a una máquina." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <Eyebrow>El problema real en planta</Eyebrow>
      <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Lo que el papel y los cuadernos te están costando cada semana.</h2>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {items.map(({ icon: I, code, t, d }) => (
          <div key={code} className="panel panel-hover p-6">
            <div className="flex items-center justify-between">
              <I className="h-6 w-6 text-destructive" />
              <span className="font-mono text-xs text-destructive/80">{code}</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="caracteristicas" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6">
      <Eyebrow>Características técnicas</Eyebrow>
      <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Hecho para el piso de planta, no para la oficina contable.</h2>
      <div className="mt-10 grid gap-4 md:grid-cols-3 md:grid-rows-2">
        <div className="panel panel-hover p-6 md:col-span-2 md:row-span-2 flex flex-col">
          <QrCode className="h-7 w-7 text-brand" />
          <h3 className="mt-5 text-2xl font-bold">Trazabilidad por Fases & Tickets QR</h3>
          <p className="mt-2 max-w-lg text-muted-foreground">Genera etiquetas con código QR por paquete de corte. Los operarios o satélites escanean con cualquier celular o tablet.</p>
          <div className="mt-8 grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4">
            {["PKG-0431", "PKG-0432", "PKG-0433", "PKG-0434"].map((p, i) => (
              <div key={p} className="rounded-lg border border-border bg-background-2 p-3">
                <div className="grid aspect-square grid-cols-5 gap-0.5 rounded bg-foreground p-1.5">
                  {Array.from({ length: 25 }).map((_, k) => (
                    <span key={k} className={(k * 7 + i * 3) % 3 === 0 || [0, 4, 20].includes(k) ? "bg-background" : ""} />
                  ))}
                </div>
                <p className="mt-2 font-mono text-[11px]">{p}</p>
                <p className="font-mono text-[10px] text-muted-foreground">T{28 + i * 2} · 24 und</p>
              </div>
            ))}
          </div>
        </div>
        <div className="panel panel-hover p-6">
          <Calculator className="h-6 w-6 text-accent" />
          <h3 className="mt-4 font-semibold">Liquidación Automática por Operación</h3>
          <p className="mt-2 text-sm text-muted-foreground">Cálculo exacto de pago al destajo por prenda/docena terminada con auditoría anti-duplicados.</p>
        </div>
        <div className="panel panel-hover p-6">
          <Ruler className="h-6 w-6 text-accent" />
          <h3 className="mt-4 font-semibold">Métricas de Merma & Consumo de Tela</h3>
          <p className="mt-2 text-sm text-muted-foreground">Comparativo metro vs. unidad producida en tiempo real para proteger el margen del taller.</p>
        </div>
        <div className="panel panel-hover p-6 md:col-span-3 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Tablet className="h-8 w-8 shrink-0 text-brand" />
          <div className="flex-1">
            <h3 className="font-semibold">Modo Tablet de Piso</h3>
            <p className="mt-1 text-sm text-muted-foreground">Diseñado para usarse con guantes o en ambientes de taller: botones grandes, alto contraste y cero formularios burocráticos.</p>
          </div>
          <div className="flex gap-2">
            <span className="rounded-lg bg-accent px-5 py-3 font-mono text-sm font-bold text-accent-foreground">+12 OK</span>
            <span className="rounded-lg bg-primary px-5 py-3 font-mono text-sm font-bold text-primary-foreground">PAUSA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Flow() {
  const steps = [
    ["01", "Orden de corte", "Tallaje, consumo teórico y paquetes."],
    ["02", "Etiquetado QR", "Un ticket por paquete de corte."],
    ["03", "Satélites & módulos", "Remisión QR de salida y retorno."],
    ["04", "Terminación", "Control de calidad y empaque."],
    ["05", "Liquidación", "Pago a destajo calculado solo."],
  ];
  return (
    <section id="flujo" className="scroll-mt-20 border-y border-border bg-background-2">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Eyebrow>Flujo de planta</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Cada paquete, cada fase, cada peso.</h2>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(([n, t, d]) => (
            <li key={n} className="panel panel-hover p-5">
              <span className="font-mono text-sm text-brand">{n}</span>
              <h3 className="mt-3 font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Plans() {
  const plans = [
    { n: "Plan Taller / Satélite", p: "160.000", f: ["Hasta 15 operarios", "Órdenes de corte", "Liquidación básica"] },
    { n: "Plan Fábrica Pro", p: "380.000", pop: true, f: ["Multi-etapa", "Satélites externos", "Tickets QR", "Control de mermas"] },
    { n: "Plan Industrial", p: "750.000", f: ["Multi-bodega", "Costeo avanzado", "Soporte prioritario"] },
  ];
  return (
    <section id="planes" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6">
      <Eyebrow>Dos formas de adoptar el sistema</Eyebrow>
      <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Arranca en la nube o ten tu propia plataforma.</h2>

      <div className="mt-12 flex items-center gap-3">
        <span className="rounded border border-brand/40 bg-brand/10 px-2 py-1 font-mono text-xs text-brand">RUTA 1</span>
        <h3 className="text-xl font-semibold">Licencias SaaS · Cloud Multi-Tenant</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">Ideal para talleres y fábricas que quieren arrancar de inmediato sin costos de infraestructura.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {plans.map((pl) => (
          <div key={pl.n} className={`panel panel-hover relative flex flex-col p-6 ${pl.pop ? "border-brand/60 shadow-glow" : ""}`}>
            {pl.pop && <span className="absolute -top-3 left-6 rounded bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">Más Popular</span>}
            <h4 className="font-semibold">{pl.n}</h4>
            <p className="mt-4"><span className="font-mono text-3xl font-bold">${pl.p}</span><span className="text-sm text-muted-foreground"> COP / mes</span></p>
            <ul className="mt-6 flex-1 space-y-2 text-sm">
              {pl.f.map((x) => <li key={x} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-accent" />{x}</li>)}
            </ul>
            <a href="#contacto" className={`mt-6 ${pl.pop ? btnPrimary : btnOutline}`}>Empezar piloto</a>
          </div>
        ))}
      </div>

      <div id="marca-blanca" className="panel mt-16 scroll-mt-24 overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="rounded border border-accent/40 bg-accent/10 px-2 py-1 font-mono text-xs text-accent">RUTA 2</span>
              <h3 className="text-xl font-semibold">Marca Blanca & Servidor Dedicado</h3>
            </div>
            <p className="mt-4 text-3xl font-bold tracking-tight">Tu propia plataforma tecnológica.</p>
            <p className="mt-3 text-muted-foreground">Pensado para grandes marcas, distribuidores de moda o consultoras de procesos industriales.</p>
            <a href={WHATSAPP} className={`mt-8 ${btnPrimary}`}>Hablar con Arquitectura para Marca Blanca <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="grid gap-px border-t border-border bg-border sm:grid-cols-2 lg:border-t-0 lg:border-l">
            {[
              [Globe, "Dominio dedicado", "produccion.tuempresa.com"],
              [Server, "Infraestructura aislada", "Base de datos y servidor propios con copias de seguridad dedicadas."],
              [Palette, "Tu identidad", "Tus colores, logotipos e identidad en todo el software."],
              [Code2, "Módulos a medida", "Personalización de código para tu operativa única."],
            ].map(([I, t, d]) => {
              const Icon = I as typeof Globe;
              return (
                <div key={t as string} className="bg-card p-6">
                  <Icon className="h-5 w-5 text-accent" />
                  <p className="mt-3 font-semibold">{t as string}</p>
                  <p className={`mt-1 text-sm text-muted-foreground ${t === "Dominio dedicado" ? "font-mono" : ""}`}>{d as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ROI() {
  const stats = [
    [Clock, "6 h → 20 min", "en liquidación semanal de nómina a destajo."],
    [ShieldCheck, "0%", "lotes extraviados en maquila externa gracias al escaneo de remisión QR."],
    [Zap, "< 72 h", "de implementación en planta."],
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <div className="panel relative overflow-hidden p-8 sm:p-12">
        <div className="glow-amber absolute inset-0 opacity-60" />
        <div className="relative">
          <Eyebrow>ROI en planta</Eyebrow>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {stats.map(([I, v, d]) => {
              const Icon = I as typeof Clock;
              return (
                <div key={v as string}>
                  <Icon className="h-5 w-5 text-accent" />
                  <p className="mt-3 font-mono text-4xl font-bold text-accent">{v as string}</p>
                  <p className="mt-2 text-muted-foreground">{d as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contacto" className="scroll-mt-20 border-t border-border bg-background-2">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Pon tu planta bajo control en 30 días.</h2>
        <p className="mt-4 text-muted-foreground">Piloto guiado con tu propia orden de corte. Sin tarjeta, sin instalación.</p>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className={`mt-8 ${btnPrimary}`}><MessageCircle className="h-4 w-4" /> Solicitar Piloto por WhatsApp</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-bold">CEREBIIA <span className="text-brand">OPERA</span></p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">CEREBIIA S.A.S. · Suite de control de producción, confección y manufactura.</p>
          <span className="mt-4 inline-flex items-center gap-2 rounded border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground">
            <Factory className="h-3.5 w-3.5 text-brand" /> Tecnología desarrollada para el sector industrial y manufactura.
          </span>
        </div>
        <div>
          <p className="font-mono text-xs uppercase text-muted-foreground">Suite</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>CEREBIIA DATA</li><li>CEREBIIA CALIDAD</li><li className="text-brand">CEREBIIA OPERA</li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase text-muted-foreground">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={WHATSAPP} className="flex items-center gap-2 hover:text-brand"><MessageCircle className="h-4 w-4" /> WhatsApp comercial</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> soporte@cerebiia.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +57 300 000 0000</li>
          </ul>
        </div>
      </div>
      <p className="border-t border-border py-6 text-center font-mono text-xs text-muted-foreground">© 2026 CEREBIIA S.A.S. · opera.cerebiia.com</p>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Nav />
      <main>
        <Hero />
        <section className="border-y border-border bg-card">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between">
            <p>Diseñado para la industria de confección, textil y manufactura en Colombia y Latinoamérica.</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider">
              <li>Denim</li><li>Ropa interior</li><li>Deportiva</li><li>Dotación</li><li>Maquila</li>
            </ul>
          </div>
        </section>
        <Pains />
        <Features />
        <Flow />
        <Plans />
        <ROI />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
