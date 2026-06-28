import {
  ArrowRight,
  Bot,
  Check,
  Download,
  Github,
  KeyRound,
  Layers,
  MonitorDown,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo, LogoMark } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { GITHUB_URL, RELEASES_URL } from "@/lib/utils";

const NAV = [
  { label: "Features", href: "#features" },
  { label: "Surfaces", href: "#surfaces" },
  { label: "Download", href: "#download" },
];

const FEATURES = [
  {
    icon: Zap,
    title: "Native performance",
    body: "Written in Rust. No Electron, no JVM, no Python startup lag — it opens instantly and stays fast across thousands of blobs.",
  },
  {
    icon: Bot,
    title: "Agent-ready by design",
    body: "First-class MCP and ACP support. Let LLMs and coding agents operate your Azure storage — with scoped credentials and human-in-the-loop confirmation.",
  },
  {
    icon: Layers,
    title: "One engine, four surfaces",
    body: "CLI for scripts, MCP for LLMs, ACP for coding agents, and a desktop app — all sharing the same Rust core, so behavior is identical everywhere.",
  },
  {
    icon: ShieldCheck,
    title: "Safe by default",
    body: "Every destructive operation flows through a policy layer that requires explicit confirmation. Agents cannot silently delete your data.",
  },
  {
    icon: KeyRound,
    title: "Scoped access, not keys",
    body: "Generate time-boxed SAS URLs instead of sharing account keys. Secrets live in your OS keyring, never echoed.",
  },
  {
    icon: Github,
    title: "Open source",
    body: "Apache-2.0 licensed and built in the open. Signed, reproducible installers for every platform on every release.",
  },
];

const SURFACES = [
  {
    icon: MonitorDown,
    name: "Desktop",
    body: "A native menu, account → container overview, drag-and-drop upload, real dialogs, back/forward navigation, command palette, and auto-update.",
  },
  {
    icon: Terminal,
    name: "CLI",
    body: "Scriptable verbs — ls, cat, cp, rm, sas, set-tier, properties — with json / yaml / table / tsv output that composes with jq and your pipelines.",
  },
  {
    icon: Bot,
    name: "MCP server",
    body: "The same operations exposed to AI agents over stdio. Read freely; destructive actions require an explicit confirmation before they run.",
  },
];

const PLATFORMS = [
  { name: "Windows", detail: "x64 · ARM64", files: "NSIS .exe · MSI" },
  { name: "macOS", detail: "Intel · Apple Silicon", files: "universal .dmg" },
  { name: "Linux", detail: "x86_64 · aarch64", files: ".AppImage · .deb · .rpm" },
];

const FAQ = [
  {
    q: "How is this different from Azure Storage Explorer?",
    a: "Arkived targets the same job — browse and manage Azure Storage — but is native Rust (fast, no Electron), scriptable from a CLI, and operable by AI agents through MCP. One core powers all of it.",
  },
  {
    q: "Is it safe to point an AI agent at my storage?",
    a: "Yes. The MCP server lets agents read freely, but every destructive operation is gated by a policy layer that requires explicit confirmation. Agents can't silently delete or overwrite your data.",
  },
  {
    q: "How do I connect?",
    a: "Connection string, account key, SAS, Azurite, or a Microsoft Entra sign-in that discovers your subscriptions and storage accounts through Azure Resource Manager.",
  },
  {
    q: "Does it auto-update?",
    a: "The desktop app checks for new signed releases on launch and updates itself — download once, then it stays current.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
        {eyebrow}
      </div>
      <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-pretty text-[1.05rem] leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div id="top" className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="container-app flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button href={GITHUB_URL} external variant="ghost" size="sm" className="hidden sm:inline-flex">
              <Github className="size-4" />
              GitHub
            </Button>
            <Button href="#download" size="sm">
              <Download className="size-4" />
              Download
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] hero-glow" />
        <div className="container-app relative pb-20 pt-20 sm:pt-28">
          <Reveal className="mx-auto max-w-3xl text-center">
            <a
              href={RELEASES_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <span className="size-2 rounded-full bg-primary" />
              Now in early release — installers for every platform
              <ArrowRight className="size-3.5" />
            </a>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              The fast, agent-ready
              <br />
              <span className="text-brand-gradient">Azure Storage client</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Arkived is a Rust-native client for Microsoft Azure Storage — a modern alternative to
              Storage Explorer. Browse, move, and manage blobs from a desktop app, a terminal, or an
              AI agent, all powered by one shared core.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#download" size="lg">
                <Download className="size-[18px]" />
                Download for your OS
              </Button>
              <Button href={GITHUB_URL} external variant="outline" size="lg">
                <Github className="size-[18px]" />
                Star on GitHub
              </Button>
            </div>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["Rust-native", "MCP + ACP", "Apache-2.0", "Signed & auto-updating"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <Check className="size-4 text-primary" />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Terminal showcase */}
          <Reveal delay={0.15} className="mx-auto mt-16 max-w-3xl">
            <div className="overflow-hidden rounded-2xl border border-border bg-card/70 shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
                <span className="size-3 rounded-full bg-red-400/70" />
                <span className="size-3 rounded-full bg-yellow-400/70" />
                <span className="size-3 rounded-full bg-green-400/70" />
                <span className="ml-2 text-xs text-muted-foreground mono">arkived — zsh</span>
              </div>
              <pre className="mono overflow-x-auto p-5 text-[0.85rem] leading-relaxed">
                <code>
                  <span className="text-muted-foreground"># sign in, discover, and browse — anywhere</span>
                  {"\n"}
                  <span className="text-primary">$</span> arkived login
                  {"\n"}
                  <span className="text-primary">$</span> arkived account list{" "}
                  <span className="text-muted-foreground">--format table</span>
                  {"\n"}
                  <span className="text-primary">$</span> arkived ls htstorageprod/statements
                  {"\n"}
                  <span className="text-muted-foreground">  monthly/ 2026-statement.pdf 1.2 MiB Hot</span>
                  {"\n\n"}
                  <span className="text-muted-foreground"># hand a 24h read-only link to a teammate</span>
                  {"\n"}
                  <span className="text-primary">$</span> arkived sas htstorageprod/statements/2026.pdf{" "}
                  <span className="text-muted-foreground">--read --hours 24</span>
                  {"\n\n"}
                  <span className="text-muted-foreground"># or run it as an MCP server for your agent</span>
                  {"\n"}
                  <span className="text-primary">$</span> arkived mcp
                </code>
              </pre>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-border/60 py-20 sm:py-28">
        <div className="container-app">
          <Reveal>
            <SectionHeading
              eyebrow="Why Arkived"
              title="Built for speed, scripts, and agents"
              subtitle="Everything sits on one trustworthy Rust core, surfaced the way you actually work."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
                    <f.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Surfaces */}
      <section id="surfaces" className="border-t border-border/60 py-20 sm:py-28">
        <div className="container-app">
          <Reveal>
            <SectionHeading
              eyebrow="One core, every surface"
              title="Use it however you work"
              subtitle="The same operations behave identically whether a person clicks them, a script runs them, or an agent calls them."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {SURFACES.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-gradient-to-b from-card/70 to-card/30 p-7">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
                    <s.icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{s.name}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="border-t border-border/60 py-20 sm:py-28">
        <div className="container-app">
          <Reveal>
            <SectionHeading
              eyebrow="Download"
              title="Installers for every platform and processor"
              subtitle="Download, run, and Arkived installs itself — then keeps itself up to date."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {PLATFORMS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <a
                  href={RELEASES_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card/50 p-7 transition-colors hover:border-primary/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">{p.name}</span>
                    <Download className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <span className="mt-1 text-sm text-muted-foreground">{p.detail}</span>
                  <span className="mt-5 text-sm text-primary mono">{p.files}</span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border bg-card/40 p-6">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <div className="font-semibold">Prefer the CLI?</div>
                  <div className="text-sm text-muted-foreground">Install from crates.io with Cargo.</div>
                </div>
                <code className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground">
                  cargo install arkived
                </code>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 flex justify-center">
            <Button href={RELEASES_URL} external variant="outline">
              All downloads & release notes
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/60 py-20 sm:py-28">
        <div className="container-app">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Good to know" />
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-border/70 overflow-hidden rounded-2xl border border-border bg-card/40">
            {FAQ.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.04}>
                <details className="group p-6 open:bg-card/30">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                    {item.q}
                    <span className="text-primary transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 py-20 sm:py-24">
        <div className="container-app">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-card/80 to-card/30 px-6 py-14 text-center">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-40 hero-glow" />
              <h2 className="relative text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Start managing Azure storage the fast way
              </h2>
              <p className="relative mx-auto mt-3 max-w-xl text-muted-foreground">
                Free, open source, and agent-ready. Download the desktop app or grab the CLI.
              </p>
              <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="#download" size="lg">
                  <Download className="size-[18px]" />
                  Download Arkived
                </Button>
                <Button href={GITHUB_URL} external variant="outline" size="lg">
                  <Github className="size-[18px]" />
                  View source
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 py-12">
        <div className="container-app flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <LogoMark size={24} />
            <span className="text-sm text-muted-foreground">
              Arkived — by{" "}
              <a href="https://horizon-tech.io" className="text-foreground hover:text-primary">
                Horizon Tech
              </a>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">
              GitHub
            </a>
            <a href={RELEASES_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">
              Releases
            </a>
            <a
              href={`${GITHUB_URL}/blob/main/LICENSE-APACHE`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              Apache-2.0
            </a>
          </div>
        </div>
        <div className="container-app mt-6 text-center text-xs text-muted-foreground sm:text-left">
          Not affiliated with Microsoft. "Microsoft" and "Azure" are trademarks of Microsoft
          Corporation.
        </div>
      </footer>
    </div>
  );
}
