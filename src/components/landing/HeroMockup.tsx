import { useEffect, useState } from "react";
import { QrCode, Scissors, Truck } from "lucide-react";

const OPS = ["Ana R.", "Luis M.", "Carla P.", "Jorge T.", "Diana V.", "Sat. Costuras Bello"];
const TASKS = ["Pretina", "Bolsillo trasero", "Costura lateral", "Ojal y botón", "Dobladillo", "Remache"];

type Scan = { id: number; op: string; task: string; qty: number; lot: string; time: string };

function makeScan(id: number): Scan {
  const d = new Date();
  return {
    id,
    op: OPS[id % OPS.length] ?? "",
    task: TASKS[(id * 7) % TASKS.length] ?? "",
    qty: 12 * (1 + (id % 3)),
    lot: `PKG-0${(431 + id * 3) % 900}`,
    time: d.toTimeString().slice(0, 8),
  };
}

export function HeroMockup() {
  const [scans, setScans] = useState<Scan[]>([]);
  const [done, setDone] = useState(684);

  useEffect(() => {
    setScans([3, 2, 1, 0].map(makeScan));
    let n = 4;
    const t = setInterval(() => {
      const s = makeScan(n++);
      setScans((p) => [s, ...p].slice(0, 5));
      setDone((d) => (d >= 1188 ? 684 : d + s.qty));
    }, 2200);
    return () => clearInterval(t);
  }, []);

  const pct = Math.round((done / 1200) * 100);

  return (
    <div className="panel shadow-glow relative overflow-hidden p-4 sm:p-6 text-left">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">opera.cerebiia.com/ordenes/OC-2418</span>
        </div>
        <span className="hidden sm:flex items-center gap-1.5 font-mono text-xs text-accent">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" /> EN VIVO
        </span>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-3">
          <div className="rounded-lg border border-border bg-background-2 p-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="font-mono text-xs text-muted-foreground">ORDEN DE CORTE</p>
                <p className="mt-1 text-lg font-bold">OC-2418 · Jean Slim Denim 12oz</p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-brand/40 bg-brand/10 px-2 py-1 font-mono text-xs text-brand">
                <Truck className="h-3.5 w-3.5" /> En Satélite de Costura
              </span>
            </div>
            <div className="mt-4 flex items-end justify-between font-mono text-sm">
              <span><span className="text-2xl font-semibold text-foreground">{done.toLocaleString("es-CO")}</span><span className="text-muted-foreground"> / 1.200 prendas</span></span>
              <span className="text-brand">{pct}%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-brand transition-all duration-700" style={{ width: `${pct}%` }} />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-1.5 font-mono text-[10px] uppercase">
              {["Corte", "Satélite", "Terminación", "Despacho"].map((f, i) => (
                <div key={f} className={`rounded px-2 py-1.5 text-center border ${i === 0 ? "border-accent/40 text-accent bg-accent/10" : i === 1 ? "border-brand/50 text-brand bg-brand/10" : "border-border text-muted-foreground"}`}>{f}</div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-background-2 p-4">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground"><Scissors className="h-3.5 w-3.5" /> MERMA DE TELA</p>
              <p className="font-mono text-sm font-semibold text-accent">2.4% <span className="text-muted-foreground font-normal">/ meta 3.5%</span></p>
            </div>
            <div className="relative mt-3 h-2 rounded-full bg-muted">
              <div className="h-full w-[24%] rounded-full bg-accent" />
              <div className="absolute top-[-4px] left-[35%] h-4 w-px bg-brand" />
            </div>
            <p className="mt-2 font-mono text-[11px] text-muted-foreground">1.842 m consumidos · 1,53 m/und · ahorro 41 m</p>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-background-2 p-4 lg:col-span-2">
          <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground"><QrCode className="h-3.5 w-3.5" /> LECTURAS QR</p>
          <ul className="mt-3 space-y-2">
            {scans.map((s, i) => (
              <li key={s.id} className={`rounded-md border px-3 py-2 ${i === 0 ? "animate-feed border-accent/40 bg-accent/5" : "border-border"}`}>
                <div className="flex justify-between font-mono text-[11px] text-muted-foreground"><span>{s.lot}</span><span>{s.time}</span></div>
                <div className="mt-0.5 flex justify-between text-sm"><span className="truncate">{s.op} · {s.task}</span><span className="font-mono text-accent">+{s.qty}</span></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
