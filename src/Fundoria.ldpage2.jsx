import { useState, useEffect, useRef } from "react";

/* ─── BRAND ─────────────────────────────────────────────── */
const BLUE  = "#2F80ED";
const GREEN = "#00C896";
const GRAD  = `linear-gradient(90deg,${BLUE},${GREEN})`;

/* ─── DATA ───────────────────────────────────────────────── */
const TICKER = [
  "PROTOCOL STATUS: PRE-LAUNCH","PHASE 1: CORE INFRASTRUCTURE",
  "IDENTITY LAYER: COMPLETE","SMART CONTRACTS: IN AUDIT",
  "TRADER EVALUATION: IN DEV","HYPERLIQUID NATIVE: ✓","NON-CUSTODIAL: ✓",
];

const MODULES = [
  { id:"01", label:"UX INTERFACE",         desc:"Unified trading environment mirroring live Hyperliquid order books, pricing, and liquidity metrics. Identical UX across evaluation and funded phases eliminates behavioral divergence." },
  { id:"02", label:"SMART VAULTS",         desc:"Programmable capital containers defining allocation limits, risk parity constraints, and deterministic settlement pools — governed by code, not discretion." },
  { id:"03", label:"PROTOCOL CONTROL",     desc:"Identity verification and risk enforcement layer on HyperEVM. Every order is validated against identity, capital availability, and risk constraints before execution is authorised." },
  { id:"04", label:"EXECUTION ENGINE",     desc:"Hyperliquid provides the canonical execution venue: high-throughput order matching, sub-second latency, and on-chain settlement guarantees." },
  { id:"05", label:"OFF-CHAIN INDEXER",    desc:"Deterministic computation layer for performance aggregation, drawdown auditing, and signed attestations committed on-chain as verifiable checkpoints." },
  { id:"06", label:"DAO GOVERNANCE [PHASE III]", desc:"Progressive decentralisation of risk frameworks, fee structures, and protocol upgrade paths — beginning with protocol stewards toward full DAO authority." },
];

const ARCH_STAGES = [
  { id:"01", layer:"VAULT LAYER",   title:"TRADER VAULTS", sub:"CAPITAL ISOLATION",  icon:"vault",  desc:"Isolated capital with enforced drawdown and exposure constraints. Non-custodial by design. Each sub-account is independently bounded at the protocol level." },
  { id:"02", layer:"ORACLE LAYER",  title:"RISK ENGINE",   sub:"GUARD & VALIDATE",   icon:"shield", desc:"Monitors NAV in real time, validates risk limits, and triggers automatic execution halts when constraints are breached. No manual path to override." },
  { id:"03", layer:"COORD LAYER",   title:"MASTER HUB",    sub:"ALLOCATE & SETTLE",  icon:"hub",    desc:"Capital allocation and settlement logic across all vaults and strategies. Profit and loss are finalised deterministically at epoch boundaries." },
  { id:"04", layer:"MARKET ACCESS", title:"EXECUTION",     sub:"HYPERLIQUID NATIVE", icon:"bolt",   desc:"Trades executed on Hyperliquid with on-chain references for continuous verification. Execution is externalized; Fundoria never modifies matching logic." },
];

const TRACE_LINES = [
  ["// Stage 1 · Data Ingress",          "vault_state.update_on_fill(trade)"],
  ["// Stage 2 · Guardian Verify",       "oracle.validate_metrics(sharpe, vol)"],
  ["// Stage 3 · Continuous NAV",        "nav.stream_live()"],
  ["// Stage 4 · Immutable Checkpoint",  "ledger.write_checkpoint(epoch_id)_"],
];

const RISK_ITEMS = [
  { code:"RC_00", label:"Deterministic drawdown protection" },
  { code:"RC_01", label:"Non-custodial risk enforcement" },
  { code:"RC_02", label:"Real-time execution gating" },
  { code:"RC_03", label:"Independent oracle verification" },
  { code:"RC_04", label:"Smart contracts under independent security audit" },
];

const RISK_METRICS = [
  { label:"MAX DRAWDOWN",    value:"5.00%",   pct:33,  status:"ACTIVE",  color:GREEN },
  { label:"DAILY LOSS LIMIT",value:"2.50%",   pct:18,  status:"ACTIVE",  color:GREEN },
  { label:"EXPOSURE CAP",    value:"10.0×",   pct:55,  status:"ACTIVE",  color:BLUE  },
  { label:"LATENCY",         value:"<1.2ms",  pct:8,   status:"CRITICAL",color:"#ff6060" },
  { label:"SMART CONTRACTS", value:"IN AUDIT",pct:70,  status:"PENDING", color:"#f0a030" },
];

const TOKEN_CARDS = [
  { label:"VERIFICATION & TIERS",  desc:"Required for trader progression and access to advanced capital allocation modules. Tier advancement is algorithmic and continuous." },
  { label:"ECOSYSTEM INCENTIVES",  desc:"Incentive distribution tied to protocol activity, vault participation, and contributor engagement — not speculative demand." },
  { label:"GOVERNED PARAMETERS",   desc:"Vote on global risk limits, fee structures, and protocol-level coordination hooks. Governance power weighted by alignment metrics." },
];

const TOKEN_ALLOC = [
  { label:"Community & Ecosystem", pct:40, color:BLUE },
  { label:"Protocol Treasury",     pct:25, color:GREEN },
  { label:"Team & Contributors",   pct:20, color:"#2196F3" },
  { label:"Early Backers",         pct:10, color:"#15B8A6" },
  { label:"Liquidity Provision",   pct:5,  color:"#06C18A" },
];

const CLASSES = [
  { id:"FND_CLS_01", class:"TRADERS",           tag:"SKILL VERIFICATION", settle:"On-Chain Track Record",    accent:BLUE,      icon:"chart",
    items:["Simulated & funded trading environments","Persistent on-chain performance history","Protocol-mediated capital access","Tiered progression via verified metrics"],
    cta:"APPLY FOR WHITELIST" },
  { id:"FND_CLS_02", class:"CAPITAL PROVIDERS", tag:"CAPITAL PROVISION",  settle:"Non-Custodial Settlement", accent:GREEN,     icon:"vault",
    items:["Programmable non-custodial vaults","Automated accounting & settlement","Rule-enforced risk management","Verified traders with auditable records"],
    cta:"PRE-REGISTER INTEREST" },
  { id:"FND_CLS_03", class:"DAOs & INSTITUTIONS",tag:"TREASURY SCALING",  settle:"DAO Native Integration",   accent:"#15B8A6", icon:"dao",
    items:["Custom mandate-specific profiles","On-chain performance attestations","Direct governance integration","Institutional API access"],
    cta:"REQUEST INSTITUTIONAL ACCESS" },
];

const ROADMAP = [
  { phase:"01", title:"FOUNDATION",       sub:"CORE TRADING & VERIFICATION", status:"ACTIVE",
    items:["Protocol interface & simulated environments","On-chain identity & attribution logic","Hyperliquid integration","Initial vault architecture with enforced risk"] },
  { phase:"02", title:"SCALING",          sub:"VAULT MARKETS & CAPITAL",      status:"PENDING",
    items:["Mandate-specific vault configurations","Institutional & DAO capital pathways","Enhanced settlement & reporting","Capital scaling tied to performance tiers"] },
  { phase:"03", title:"DECENTRALISATION", sub:"GOVERNANCE & ECOSYSTEM",       status:"PENDING",
    items:["DAO-controlled protocol parameters","Third-party integrations & analytics","Composable financial products","Standardised on-chain identity primitives"] },
];

const FAQS = [
  { q:"How is risk enforced?",              a:"Risk rules are encoded in vault contracts and enforced by the guardian oracle. Breaches trigger automated constraints — with no path for manual override." },
  { q:"What if the oracle fails?",          a:"Circuit-breaker logic halts execution for any affected vault. The system defaults to a safe state; no new orders are routed until oracle health is restored." },
  { q:"How is off-chain data verified?",    a:"Off-chain computation outputs are signed attestations committed to on-chain storage. Any third party can reproduce the computation from the same inputs and verify the result." },
  { q:"Is the protocol non-custodial?",     a:"Yes. Capital is held through smart-contract vaults on HyperEVM. The protocol never exercises custodial control or discretionary intervention over allocated capital." },
  { q:"Who can become a verified trader?",  a:"Any participant who completes the evaluation phase through the Fundoria interface. Verification is purely performance-based — no relationship, jurisdiction, or approval process." },
  { q:"What blockchain does Fundoria run on?", a:"HyperEVM, the smart-contract layer of the Hyperliquid ecosystem. Execution is handled by Hyperliquid's HyperCore matching engine." },
  { q:"Are the smart contracts audited?",   a:"Smart contracts are currently under independent security audit. Audit reports will be published on-chain and linked from the protocol documentation before mainnet." },
  { q:"How do investors allocate to traders?", a:"Capital providers deposit into vault contracts. Allocation to verified traders is algorithmic — based on verification tier, performance history, and vault-specific eligibility rules." },
  { q:"What is the $FND token?",            a:"FND is a coordination utility token enabling governance participation, trader tier progression, vault access, and ecosystem incentives. It does not represent equity, revenue-sharing rights, or a claim on performance." },
  { q:"When is the mainnet launch expected?", a:"Deployment is milestone-gated. Phase I is active. Phase II vault markets launch after independent security review. No fixed calendar date is committed." },
  { q:"What is the minimum deposit?",       a:"Minimum deposit parameters are configured per vault and will be published prior to Phase II launch. No global minimum is set at the protocol level." },
  { q:"How does Fundoria differ from prop trading firms?", a:"Prop firms enforce rules off-chain, custody capital, and apply discretionary overrides. Fundoria implements all risk, identity, and capital logic as deterministic smart contracts — no intermediary, no discretion, full auditability." },
];

/* ─── UTILS ──────────────────────────────────────────────── */
function useInView(ref, threshold = 0.12) {
  const [v, setV] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold });
    o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return v;
}

function Fade({ children, delay = 0, y = 24 }) {
  const ref = useRef(null);
  const v = useInView(ref);
  return (
    <div ref={ref} style={{ opacity:v?1:0, transform:v?`translateY(0)`:`translateY(${y}px)`, transition:`opacity .7s ${delay}s ease, transform .7s ${delay}s ease` }}>
      {children}
    </div>
  );
}

function GT({ children }) {
  return <span style={{ background:GRAD, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>{children}</span>;
}

function Tag({ children, color = BLUE }) {
  return <span style={{ fontSize:10, letterSpacing:"0.14em", fontFamily:"'Space Mono',monospace", color, border:`1px solid ${color}40`, padding:"3px 10px", borderRadius:3 }}>{children}</span>;
}

function Mono({ children, style = {} }) {
  return <span style={{ fontFamily:"'Space Mono',monospace", ...style }}>{children}</span>;
}

/* ─── ICONS ──────────────────────────────────────────────── */
function Icon({ name, size = 20, color = "currentColor", strokeWidth = 1.5 }) {
  const icons = {
    vault:  "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4",
    shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    check2: "M20 6L9 17l-5-5",
    hub:    "M12 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM2 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm10 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M14 4l4.5 7M18.5 13L14 20M10 4L5.5 11M5.5 13 10 20",
    bolt:   "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
    chart:  "M18 20V10M12 20V4M6 20v-6",
    dao:    "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
    lock:   "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4",
    check:  "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3",
    layers: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    cpu:    "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
    zap:    "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {icons[name] && <path d={icons[name]} />}
    </svg>
  );
}

/* ─── PARTICLE CANVAS ────────────────────────────────────── */
function ParticleCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W, H, raf;
    const particles = [];

    function init() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      particles.length = 0;
      for (let i = 0; i < 70; i++) {
        particles.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 1.2 + 0.4,
          o: Math.random() * 0.4 + 0.1,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 110) {
            ctx.strokeStyle = `rgba(47,128,237,${0.12 * (1 - d / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
        ctx.fillStyle = `rgba(47,128,237,${p.o})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    init(); draw();
    const onResize = () => init();
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return <canvas ref={ref} style={{ position:"absolute", inset:0, width:"100%", height:"100%", zIndex:0 }} />;
}

/* ─── GRADIENT CARD ──────────────────────────────────────── */
function GradientCard({ children, accent = BLUE, style: extraStyle = {}, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? `linear-gradient(#081428,#081428) padding-box, linear-gradient(135deg,${accent},${accent === BLUE ? GREEN : BLUE}) border-box`
          : `linear-gradient(#04080f,#04080f) padding-box, linear-gradient(135deg,${accent}40,#1a2d46) border-box`,
        border: "1px solid transparent",
        borderRadius: 4,
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered ? `0 16px 40px ${accent}18, 0 0 0 1px ${accent}20` : "none",
        transition: "all 0.35s ease",
        cursor: onClick ? "pointer" : "default",
        ...extraStyle,
      }}
    >
      {children}
    </div>
  );
}

/* ─── ANIMATED BAR ───────────────────────────────────────── */
function AnimatedBar({ pct, color, delay = 0 }) {
  const ref = useRef(null);
  const v = useInView(ref);
  return (
    <div ref={ref} style={{ height:3, background:"#0a1220", borderRadius:2, overflow:"hidden" }}>
      <div style={{
        width: v ? `${pct}%` : "0%",
        height:"100%",
        background: color,
        borderRadius:2,
        transition: `width 1.2s ${delay}s cubic-bezier(.16,1,.3,1)`,
        boxShadow: `0 0 8px ${color}60`,
      }} />
    </div>
  );
}

/* ─── RISK GAUGE (SVG arc) ───────────────────────────────── */
function RiskGauge({ pct, color, label }) {
  const ref = useRef(null);
  const v = useInView(ref);
  const r = 32, cx = 40, cy = 40;
  const circ = Math.PI * r;
  const offset = circ * (1 - (v ? pct / 100 : 0));
  return (
    <div ref={ref} style={{ textAlign:"center" }}>
      <svg width={80} height={50} viewBox="0 0 80 50">
        <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`} fill="none" stroke="#0a1220" strokeWidth={6} />
        <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none" stroke={color} strokeWidth={6}
          strokeDasharray={circ} strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition:"stroke-dashoffset 1.4s cubic-bezier(.16,1,.3,1)" }} />
        <text x={cx} y={cy - 4} textAnchor="middle" fill={color} fontSize="11" fontFamily="'Bebas Neue',sans-serif" letterSpacing="1">{pct}%</text>
      </svg>
      <Mono style={{ fontSize:8, color:"#607a94", letterSpacing:"0.1em", display:"block", marginTop:-6 }}>{label}</Mono>
    </div>
  );
}

/* ─── ANIMATED COUNTER ───────────────────────────────────── */
function Counter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const v = useInView(ref);
  useEffect(() => {
    if (!v) return;
    let start = null;
    const step = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [v, target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── FLOW DIAGRAM ───────────────────────────────────────── */
function FlowDiagram() {
  const NODES = [
    { label:"CAPITAL",  sub:"VAULTS",      icon:"vault",  x:80,  color:BLUE  },
    { label:"IDENTITY", sub:"HYPEREVM",    icon:"shield", x:240, color:GREEN },
    { label:"RISK",     sub:"GUARDIAN",    icon:"lock",   x:400, color:BLUE  },
    { label:"EXEC",     sub:"HYPERLIQUID", icon:"bolt",   x:560, color:GREEN },
  ];
  const Y = 70, R = 28;

  return (
    <div style={{ padding:"36px 40px", border:"1px solid #0e1a2e" }}>
      <Mono style={{ fontSize:10, color:"#607a94", letterSpacing:"0.14em", display:"block", marginBottom:28 }}>
        PROTOCOL SIGNAL FLOW — VERIFIABLE ON-CHAIN ROUTING FROM CAPITAL CONTAINER TO EXECUTION VENUE.
      </Mono>
      <svg width="100%" viewBox="0 0 640 140" style={{ overflow:"visible" }}>
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={BLUE} stopOpacity="0.4" />
            <stop offset="100%" stopColor={GREEN} stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {NODES.slice(0, -1).map((n, i) => {
          const x1 = n.x + R, x2 = NODES[i + 1].x - R;
          return (
            <g key={i}>
              <line x1={x1} y1={Y} x2={x2} y2={Y} stroke="#304a64" strokeWidth={1} />
              <line x1={x1} y1={Y} x2={x2} y2={Y}
                stroke="url(#lineGrad)" strokeWidth={1.5}
                strokeDasharray="5 18"
                style={{ animation:`flowDash ${1.8 + i * 0.25}s linear infinite` }} />
            </g>
          );
        })}

        {NODES.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={Y} r={R + 4} fill={`${n.color}08`} />
            <circle cx={n.x} cy={Y} r={R} fill="#04080f" stroke={n.color} strokeWidth={1.5} />
            <foreignObject x={n.x - 12} y={Y - 12} width={24} height={24}>
              <div style={{ color: n.color, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <Icon name={n.icon} size={16} color={n.color} />
              </div>
            </foreignObject>
            <text x={n.x} y={Y + R + 14} textAnchor="middle" fill="#eaf2ff" fontSize="9" fontFamily="'Space Mono',monospace" letterSpacing="1">{n.label}</text>
            <text x={n.x} y={Y + R + 24} textAnchor="middle" fill="#4a6480" fontSize="7" fontFamily="'Space Mono',monospace">{n.sub}</text>
            {i === 0 && (
              <circle cx={n.x} cy={Y} r={R + 10} fill="none" stroke={BLUE} strokeWidth={1}
                style={{ animation:"pulseRing 2.5s ease-out infinite" }} />
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ─── TICKER ─────────────────────────────────────────────── */
function Ticker() {
  const items = [...TICKER, ...TICKER];
  return (
    <div style={{ background:"#04080f", borderBottom:"1px solid #0e1a2e", overflow:"hidden", height:34, position:"relative" }}>
      <div style={{ display:"flex", gap:48, position:"absolute", top:0, left:0, height:"100%", alignItems:"center", animation:"ticker 30s linear infinite", whiteSpace:"nowrap" }}>
        {items.map((t, i) => (
          <Mono key={i} style={{ fontSize:10, letterSpacing:"0.12em", color:"#607a94" }}>
            <span style={{ color:BLUE, marginRight:10 }}>◦</span>{t}
          </Mono>
        ))}
      </div>
    </div>
  );
}

/* ─── NAV ────────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  function go(id) { document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }); }
  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:200, height:58, display:"flex", alignItems:"center", padding:"0 32px", justifyContent:"space-between", background:scrolled?"rgba(2,5,12,0.96)":"transparent", backdropFilter:scrolled?"blur(14px)":"none", borderBottom:scrolled?"1px solid #0e1a2e":"1px solid transparent", transition:"all .3s" }}>
      <div style={{ display:"flex", alignItems:"center", gap:9 }}>
        {/* Coded SVG icon — same height as WHITELIST button (31px) */}
        <svg width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg"
          style={{ animation:"logoFloat 4s ease-in-out infinite", flexShrink:0 }}>
          <defs>
            <linearGradient id="logoGradNav" x1="2" y1="30" x2="34" y2="2" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2F80ED"/>
              <stop offset="1" stopColor="#00C896"/>
            </linearGradient>
          </defs>
          {/* Lower arm */}
          <path d="M5 26C5 17 10 13 20 13H32" stroke="url(#logoGradNav)" strokeWidth="8.5" strokeLinecap="round" opacity="0.72"/>
          {/* Upper arm */}
          <path d="M5 18C5 8 10 3 21 3H32" stroke="url(#logoGradNav)" strokeWidth="8.5" strokeLinecap="round"/>
        </svg>
        {/* Wordmark — Bebas Neue matching site heading style */}
        <span style={{
          fontFamily:"'Bebas Neue',sans-serif",
          fontSize:20,
          letterSpacing:"0.14em",
          lineHeight:1,
          userSelect:"none",
          background:"linear-gradient(90deg,#eaf2ff 20%,#00C896 60%,#eaf2ff 80%)",
          backgroundSize:"250% auto",
          WebkitBackgroundClip:"text",
          WebkitTextFillColor:"transparent",
          animation:"logoShimmer 5s linear infinite"
        }}>FUNDORIA</span>
      </div>
      <div style={{ display:"flex", gap:32, alignItems:"center" }}>
        {[["vision","VISION"],["protocol-section","PROTOCOL"],["rewards-section","REWARDS"],["token-section","TOKEN"],["faq-section","FAQ"]].map(([id, label]) => (
          <button key={id} onClick={() => go(id)} style={{ background:"transparent", border:"none", color:"#607a94", fontSize:10, fontFamily:"'Space Mono',monospace", letterSpacing:"0.12em", cursor:"pointer", transition:"color .2s" }}
            onMouseEnter={e => e.target.style.color = "#eaf2ff"}
            onMouseLeave={e => e.target.style.color = "#607a94"}>{label}</button>
        ))}
        <Mono style={{ fontSize:10, color:BLUE, letterSpacing:"0.12em", cursor:"pointer" }}>WHITEPAPER</Mono>
      </div>
      <button onClick={() => go("whitelist-section")}
        style={{ background:GRAD, border:"none", padding:"8px 20px", borderRadius:3, color:"#fff", fontSize:10, fontFamily:"'Space Mono',monospace", letterSpacing:"0.1em", cursor:"pointer", transition:"opacity .2s, transform .2s" }}
        onMouseEnter={e => { e.target.style.opacity = "0.85"; e.target.style.transform = "scale(1.03)"; }}
        onMouseLeave={e => { e.target.style.opacity = "1"; e.target.style.transform = "scale(1)"; }}>
        WHITELIST ●
      </button>
    </nav>
  );
}

/* ─── HERO ───────────────────────────────────────────────── */
function Hero() {
  const [tick, setTick] = useState(0);
  useEffect(() => { const id = setInterval(() => setTick(t => t + 1), 70); return () => clearInterval(id); }, []);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@!";
  const scramble = (word, phase) => word.split("").map((c, i) => i < phase ? c : chars[Math.floor(Math.random() * chars.length)]).join("");

  const stats = [["HyperEVM","NETWORK"],["0%","CUSTODY"],["On-Chain","RISK ENGINE"],["Live Alpha","STATUS"]];

  return (
    <section id="vision" style={{ minHeight:"94vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"100px 24px 64px", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 60% 50% at 50% 0%, #081428 0%, #02050c 100%)", zIndex:0 }} />
      <ParticleCanvas />
      {/* Gradient orb */}
      <div style={{ position:"absolute", top:"15%", left:"50%", transform:"translateX(-50%)", width:400, height:400, borderRadius:"50%", background:`radial-gradient(circle, ${BLUE}18 0%, transparent 70%)`, zIndex:0, animation:"orbFloat 6s ease-in-out infinite" }} />
      <div style={{ position:"absolute", top:0, left:"50%", transform:"translateX(-50%)", width:1, height:"45%", background:`linear-gradient(${BLUE}40,transparent)`, zIndex:1 }} />

      <div style={{ position:"relative", zIndex:2, maxWidth:880 }}>
        <Fade>
          <div style={{ display:"flex", gap:10, justifyContent:"center", marginBottom:32, flexWrap:"wrap" }}>
            <Tag color={BLUE}>PRE-LAUNCH</Tag>
            <Tag color={GREEN}>HYPEREVM NATIVE</Tag>
            <Tag color="#607a94">PHASE 01: ACTIVE</Tag>
          </div>
        </Fade>
        <Fade delay={0.1}>
          <Mono style={{ fontSize:11, color:BLUE, letterSpacing:"0.2em", display:"block", marginBottom:14 }}>[ SYSTEM_INIT ]</Mono>
          <h1 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(56px,10vw,116px)", lineHeight:0.88, margin:0, color:"#eaf2ff", letterSpacing:"0.02em" }}>
            {scramble("PROTOCOL-NATIVE", Math.min(15, tick - 5))}
            <br />
            <GT>{scramble("CAPITAL MARKETS", Math.min(15, tick - 20))}</GT>
          </h1>
        </Fade>
        <Fade delay={0.25}>
          <p style={{ fontSize:16, color:"#8aaccc", maxWidth:560, margin:"28px auto 0", lineHeight:1.8, fontStyle:"italic" }}>
            Fundoria is a non-custodial capital markets protocol on HyperEVM — where trader skill is verified on-chain, risk is enforced by smart contracts, and capital allocation is fully programmable.
          </p>
        </Fade>
        <Fade delay={0.4}>
          <div style={{ display:"flex", gap:14, justifyContent:"center", marginTop:40, flexWrap:"wrap" }}>
            <button onClick={() => document.getElementById("whitelist-section").scrollIntoView({ behavior:"smooth" })}
              style={{ background:GRAD, border:"none", padding:"14px 36px", borderRadius:4, color:"#fff", fontSize:12, fontFamily:"'Space Mono',monospace", letterSpacing:"0.1em", cursor:"pointer", transition:"all .25s", boxShadow:`0 0 0 0 ${BLUE}40` }}
              onMouseEnter={e => { e.target.style.transform="translateY(-2px)"; e.target.style.boxShadow=`0 8px 28px ${BLUE}40`; }}
              onMouseLeave={e => { e.target.style.transform="translateY(0)"; e.target.style.boxShadow=`0 0 0 0 ${BLUE}40`; }}>
              WHITELIST NOW
            </button>
            <button onClick={() => document.getElementById("protocol-section").scrollIntoView({ behavior:"smooth" })}
              style={{ background:"transparent", border:"1px solid #1a2d46", padding:"14px 36px", borderRadius:4, color:"#9ab4cc", fontSize:12, fontFamily:"'Space Mono',monospace", letterSpacing:"0.1em", cursor:"pointer", transition:"all .25s" }}
              onMouseEnter={e => { e.target.style.borderColor="#607a94"; e.target.style.color="#eaf2ff"; }}
              onMouseLeave={e => { e.target.style.borderColor="#304a64"; e.target.style.color="#9ab4cc"; }}>
              READ DOCUMENTATION
            </button>
          </div>
        </Fade>

        {/* Animated stats bar */}
        <Fade delay={0.55}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:1, maxWidth:560, margin:"60px auto 0", background:"#0e1a2e" }}>
            {stats.map(([v, l], i) => (
              <div key={i} style={{ background:"#04080f", padding:"18px 8px", textAlign:"center", position:"relative", overflow:"hidden" }}>
                <div style={{ position:"absolute", bottom:0, left:0, right:0, height:1, background:GRAD, opacity:0.4 }} />
                <p style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:20, color:"#eaf2ff", margin:"0 0 4px", letterSpacing:"0.06em" }}>{v}</p>
                <p style={{ fontSize:9, color:"#4a6480", fontFamily:"'Space Mono',monospace", letterSpacing:"0.12em", margin:0 }}>{l}</p>
              </div>
            ))}
          </div>
        </Fade>
        <Fade delay={0.65}>
          <Mono style={{ fontSize:11, color:"#4a6480", display:"block", marginTop:32, letterSpacing:"0.08em", animation:"bounce 2s ease-in-out infinite" }}>SCROLL ↓</Mono>
        </Fade>
      </div>
    </section>
  );
}

/* ─── PROTOCOL LOGIC ─────────────────────────────────────── */
function ProtocolLogic() {
  const [active, setActive] = useState(null);
  return (
    <section id="protocol-section" style={{ padding:"120px 24px", maxWidth:1100, margin:"0 auto" }}>
      <Fade>
        <Mono style={{ fontSize:10, color:BLUE, letterSpacing:"0.18em", display:"block", marginBottom:12 }}>PROTOCOL LOGIC</Mono>
        <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(42px,6vw,76px)", color:"#eaf2ff", margin:"0 0 16px", lineHeight:0.9 }}>
          NON-CUSTODIAL.<br /><GT>NOT DISCRETIONARY.</GT>
        </h2>
        <p style={{ fontSize:14, color:"#8aaccc", maxWidth:460, lineHeight:1.75 }}>
          Every constraint and settlement is enforced by code — not human gatekeepers. Fundoria coordinates capital with zero intermediary trust.
        </p>
      </Fade>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:1, marginTop:56, background:"#0a1220" }}>
        {MODULES.map((m, i) => (
          <Fade key={i} delay={i * 0.06}>
            <GradientCard accent={active === i ? BLUE : "#304a64"} onClick={() => setActive(active === i ? null : i)}
              style={{ borderRadius:0, border:"none", background: active===i
                ? `linear-gradient(#081428,#081428) padding-box, linear-gradient(135deg,${BLUE},${GREEN}) border-box`
                : `linear-gradient(#04080f,#04080f) padding-box, linear-gradient(135deg,#1a2d4630,#0a122060) border-box`,
              }}>
              <div style={{ padding:"28px 30px" }}>
                <Mono style={{ fontSize:9, color:active===i?GREEN:"#4a6480", letterSpacing:"0.14em", display:"block", marginBottom:6 }}>LOGIC_MODULE::{m.id}</Mono>
                <p style={{ fontSize:13, color:active===i?"#eaf2ff":"#9ab4cc", fontFamily:"'Space Mono',monospace", letterSpacing:"0.06em", margin:"0 0 10px", fontWeight:"bold" }}>[{active===i?"−":"+"}] {m.label}</p>
                <div style={{ maxHeight:active===i?200:0, opacity:active===i?1:0, overflow:"hidden", transition:"all .35s ease" }}>
                  <p style={{ fontSize:13, color:"#8aaccc", lineHeight:1.65, margin:0 }}>{m.desc}</p>
                </div>
                {active!==i && <p style={{ fontSize:13, color:"#4a6480", margin:0, lineHeight:1.5 }}>{m.desc.slice(0, 60)}…</p>}
              </div>
            </GradientCard>
          </Fade>
        ))}
      </div>

      <Fade delay={0.3}>
        <div style={{ marginTop:80 }}>
          <FlowDiagram />
        </div>
      </Fade>

      <Fade delay={0.2}>
        <div style={{ marginTop:80, display:"grid", gridTemplateColumns:"1fr 1fr", gap:40, alignItems:"center" }}>
          <div>
            <Mono style={{ fontSize:10, color:BLUE, letterSpacing:"0.18em", display:"block", marginBottom:16 }}>PROTOCOL VISION</Mono>
            <h3 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(32px,4vw,52px)", color:"#eaf2ff", margin:"0 0 16px", lineHeight:0.95 }}>
              PROTOCOL-NATIVE<br /><GT>capital markets.</GT>
            </h3>
            <p style={{ fontSize:14, color:"#8aaccc", lineHeight:1.75 }}>
              Fundoria establishes a protocol-controlled infrastructure that coordinates traders and capital within a unified, rule-enforced system. Trading skill becomes a verifiable on-chain primitive, independent of custody.
            </p>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:1 }}>
            {[
              ["0x_00","Programmatic capital allocation governed by code"],
              ["0x_01","Risk constraints enforced at protocol level"],
              ["0x_02","Verifiable performance regardless of balance size"],
              ["0x_03","Non-custodial capital managed via vaults"],
            ].map(([code, text], i) => (
              <Fade key={i} delay={i * 0.08}>
                <div style={{ display:"flex", gap:16, alignItems:"flex-start", padding:"16px 20px", background:"#04080f", borderLeft:`2px solid ${BLUE}20`, transition:"border-color .2s" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = `${BLUE}80`}
                  onMouseLeave={e => e.currentTarget.style.borderColor = `${BLUE}20`}>
                  <Mono style={{ fontSize:9, color:GREEN, letterSpacing:"0.1em", paddingTop:2, minWidth:44 }}>{code}</Mono>
                  <span style={{ fontSize:13, color:"#9ab4cc", lineHeight:1.55 }}>{text}</span>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
}

/* ─── ARCHITECTURE ───────────────────────────────────────── */
function Architecture() {
  const [active, setActive] = useState(0);
  const [traceTick, setTraceTick] = useState(0);
  useEffect(() => { const id = setInterval(() => setTraceTick(t => (t + 1) % 4), 1200); return () => clearInterval(id); }, []);

  return (
    <section style={{ padding:"100px 24px", background:"#030810", borderTop:"1px solid #0e1a2e" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <Fade>
          <Mono style={{ fontSize:10, color:BLUE, letterSpacing:"0.18em", display:"block", marginBottom:12 }}>ARCHITECTURE</Mono>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(38px,5.5vw,68px)", color:"#eaf2ff", margin:"0 0 12px", lineHeight:0.92 }}>
            PROTOCOL COMPONENTS &<br /><GT>EXECUTION FLOW.</GT>
          </h2>
          <p style={{ fontSize:14, color:"#8aaccc", maxWidth:480, lineHeight:1.75 }}>
            Fundoria separates capital custody, execution, and risk enforcement into verifiable, auditable components.
          </p>
        </Fade>

        <Fade delay={0.15}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:1, marginTop:56, background:"#0a1220" }}>
            {ARCH_STAGES.map((s, i) => (
              <div key={i} onClick={() => setActive(i)}
                style={{ padding:"24px", background:active===i?"#081428":"#04080f", borderTop:`2px solid ${active===i?BLUE:"transparent"}`, cursor:"pointer", transition:"all .25s" }}>
                <div style={{ width:36, height:36, borderRadius:"50%", border:`1px solid ${active===i?BLUE:"#304a64"}`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:12, transition:"all .25s", background:active===i?`${BLUE}15`:"transparent" }}>
                  <Icon name={s.icon} size={16} color={active===i?BLUE:"#607a94"} />
                </div>
                <Mono style={{ fontSize:9, color:active===i?GREEN:"#4a6480", letterSpacing:"0.12em", display:"block", marginBottom:6 }}>STAGE::{s.id} / {s.layer}</Mono>
                <p style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:18, color:active===i?"#eaf2ff":"#9ab4cc", letterSpacing:"0.06em", margin:"0 0 4px", transition:"color .25s" }}>{s.title}</p>
                <Mono style={{ fontSize:10, color:"#607a94", letterSpacing:"0.08em", display:"block" }}>{s.sub}</Mono>
              </div>
            ))}
          </div>
        </Fade>

        <Fade delay={0.2}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:1, background:"#0e1a2e" }}>
            {["↑ CAPITAL_IN","↑ ORACLE_VALIDATED","↑ SETTLEMENT","↑ HYPERLIQUID_EXEC"].map((l, i) => (
              <div key={i} style={{ padding:"8px 24px", background:"#04080f" }}>
                <Mono style={{ fontSize:9, color:i===active?BLUE:"#4a6480", letterSpacing:"0.08em", transition:"color .25s" }}>{l}</Mono>
              </div>
            ))}
          </div>
        </Fade>

        <Fade delay={0.1}>
          <div style={{ marginTop:1, padding:"28px 32px", background:"#04080f", border:"1px solid #0e1a2e", display:"flex", gap:20, alignItems:"flex-start" }}>
            <div style={{ width:40, height:40, borderRadius:"50%", border:`1px solid ${BLUE}40`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, background:`${BLUE}10` }}>
              <Icon name={ARCH_STAGES[active].icon} size={18} color={BLUE} />
            </div>
            <div>
              <Mono style={{ fontSize:9, color:GREEN, letterSpacing:"0.12em", display:"block", marginBottom:6 }}>STAGE::{ARCH_STAGES[active].id} / {ARCH_STAGES[active].layer}</Mono>
              <p style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:22, color:"#eaf2ff", letterSpacing:"0.06em", margin:"0 0 8px" }}>{ARCH_STAGES[active].title}</p>
              <p style={{ fontSize:13, color:"#8aaccc", lineHeight:1.7, margin:0, maxWidth:640 }}>{ARCH_STAGES[active].desc}</p>
            </div>
          </div>
        </Fade>

        <Fade delay={0.25}>
          <div style={{ marginTop:40, padding:"28px 32px", background:"#030810", border:"1px solid #0e1a2e" }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20 }}>
              <Mono style={{ fontSize:10, color:"#607a94", letterSpacing:"0.12em" }}>TRACE_LOG :: STAGE_0{active + 1}</Mono>
              <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:GREEN, display:"inline-block", animation:"pulse 1.5s infinite" }} />
                <Mono style={{ fontSize:9, color:GREEN, letterSpacing:"0.1em" }}>LIVE</Mono>
              </div>
            </div>
            {TRACE_LINES.map(([comment, code], i) => (
              <div key={i} style={{ marginBottom:10, opacity:i <= traceTick ? 1 : 0.15, transition:"opacity .5s" }}>
                <Mono style={{ fontSize:11, color:"#4a6480", display:"block" }}>{comment}</Mono>
                <Mono style={{ fontSize:12, color:i === traceTick ? GREEN : "#8aaccc", display:"block" }}>{code}{i === traceTick ? " █" : ""}</Mono>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ─── RISK AS CODE ───────────────────────────────────────── */
function RiskSection() {
  const [blink, setBlink] = useState(true);
  useEffect(() => { const id = setInterval(() => setBlink(b => !b), 900); return () => clearInterval(id); }, []);

  return (
    <section style={{ padding:"100px 24px", borderTop:"1px solid #0e1a2e", borderBottom:"1px solid #0e1a2e" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>
        <Fade>
          <Mono style={{ fontSize:10, color:BLUE, letterSpacing:"0.18em", display:"block", marginBottom:12 }}>RISK CONTROLS</Mono>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(38px,5vw,64px)", color:"#eaf2ff", margin:"0 0 20px", lineHeight:0.92 }}>
            RISK AS CODE.<br /><GT>NOT POLICY.</GT>
          </h2>
          <p style={{ fontSize:14, color:"#8aaccc", lineHeight:1.75, marginBottom:32 }}>
            Constraints are enforced pre-execution through protocol-level gating. No manual overrides. No discretionary exceptions. Fundoria operates as a headless risk manager — rules are executable logic, not governance choices.
          </p>
          {RISK_ITEMS.map((r, i) => (
            <Fade key={i} delay={i * 0.07}>
              <div style={{ display:"flex", gap:16, alignItems:"flex-start", marginBottom:14 }}>
                <div style={{ width:20, height:20, borderRadius:"50%", border:`1px solid ${GREEN}40`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>
                  <Icon name="check" size={10} color={GREEN} />
                </div>
                <span style={{ fontSize:13, color:"#9ab4cc", lineHeight:1.55 }}>{r.label}</span>
              </div>
            </Fade>
          ))}
        </Fade>

        <Fade delay={0.2}>
          <div style={{ border:"1px solid #0e1a2e", padding:"30px", fontFamily:"'Space Mono',monospace" }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:24 }}>
              <Mono style={{ fontSize:10, color:"#607a94", letterSpacing:"0.12em" }}>SECURE_MONITOR_V1.07</Mono>
              <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:GREEN, animation:"pulse 1.5s infinite", display:"inline-block" }} />
                <Mono style={{ fontSize:9, color:GREEN }}>ALIVE</Mono>
              </div>
            </div>

            {/* Gauges row */}
            <div style={{ display:"flex", justifyContent:"space-around", marginBottom:20, paddingBottom:20, borderBottom:"1px solid #0a1220" }}>
              <RiskGauge pct={33} color={GREEN} label="DRAWDOWN" />
              <RiskGauge pct={18} color={BLUE} label="DAILY LOSS" />
              <RiskGauge pct={70} color="#f0a030" label="AUDIT" />
            </div>

            <Mono style={{ fontSize:9, color:BLUE, letterSpacing:"0.1em", display:"block", marginBottom:12 }}>#ROOT-LEVEL DRAWDOWN CAPS</Mono>
            {RISK_METRICS.map(({ label, value, pct, status, color }, i) => (
              <div key={i} style={{ marginBottom:14 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:5 }}>
                  <Mono style={{ fontSize:10, color:"#607a94", letterSpacing:"0.08em" }}>{label}</Mono>
                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <Mono style={{ fontSize:12, color:"#eaf2ff" }}>{value}</Mono>
                    <span style={{ fontSize:8, color, border:`1px solid ${color}30`, padding:"2px 7px", borderRadius:2 }}>{status}</span>
                  </div>
                </div>
                <AnimatedBar pct={pct} color={color} delay={i * 0.1} />
              </div>
            ))}

            <div style={{ marginTop:20, padding:"12px 16px", background:"#081428", border:`1px solid ${BLUE}20` }}>
              <Mono style={{ fontSize:9, color:"#607a94", display:"block" }}>ABSOLUTE_LOSS_CEILING DD_THRESHOLD_01</Mono>
              <Mono style={{ fontSize:13, color:"#eaf2ff", display:"block", marginTop:4 }}>HARD_CAP: 15%</Mono>
              <Mono style={{ fontSize:9, color:"#4a6480", display:"block", marginTop:4 }}>Deterministic loss ceilings at sub-account level.</Mono>
            </div>

            <Mono style={{ fontSize:9, color:"#304a64", display:"block", marginTop:16 }}>ENFORCE_ENGINE::V.ALPHA · SECURE_LINK: {blink ? "█" : "░"}</Mono>
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ─── REWARDS ────────────────────────────────────────────── */
function Rewards() {
  return (
    <section id="rewards-section" style={{ padding:"100px 24px", background:"#030810", borderBottom:"1px solid #0e1a2e" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <Fade>
          <Mono style={{ fontSize:10, color:BLUE, letterSpacing:"0.18em", display:"block", marginBottom:12 }}>REWARDS & INCENTIVES</Mono>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(38px,5vw,64px)", color:"#eaf2ff", margin:"0 0 12px", lineHeight:0.92 }}>
            PERFORMANCE-DRIVEN<br /><GT>CAPITAL ACCESS.</GT>
          </h2>
          <p style={{ fontSize:14, color:"#8aaccc", maxWidth:520, lineHeight:1.75 }}>
            Capital access and scaling are determined algorithmically — based on observed performance and compliance with enforced risk constraints.
          </p>
        </Fade>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16, marginTop:56 }}>
          {[
            { label:"TRADER INCENTIVES",    icon:"chart",  value:"22%", sub:"of FND supply", color:BLUE,  desc:"Performance-based profit sharing derived from vault participation. Splits scale with verification tier, consistency, and long-term track record." },
            { label:"ECOSYSTEM & TREASURY", icon:"layers", value:"17%", sub:"of FND supply", color:GREEN, desc:"Ecosystem growth, third-party integrations, DAO treasury deployment, and long-term protocol sustainability. Governed by token holders." },
            { label:"LIQUIDITY PROVISION",  icon:"zap",    value:"8%",  sub:"of FND supply", color:"#15B8A6", desc:"Seeded liquidity for FND token markets and vault bootstrapping. Released progressively aligned with protocol milestones." },
          ].map((r, i) => (
            <Fade key={i} delay={i * 0.1}>
              <GradientCard accent={r.color} style={{ height:"100%" }}>
                <div style={{ padding:"32px" }}>
                  <div style={{ width:44, height:44, borderRadius:"50%", border:`1px solid ${r.color}40`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:20, background:`${r.color}10` }}>
                    <Icon name={r.icon} size={18} color={r.color} />
                  </div>
                  <Mono style={{ fontSize:10, color:"#607a94", letterSpacing:"0.14em", display:"block", marginBottom:8 }}>{r.label}</Mono>
                  <p style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:40, color:"#eaf2ff", margin:"0 0 2px", letterSpacing:"0.06em" }}>{r.value}</p>
                  <Mono style={{ fontSize:9, color:r.color, letterSpacing:"0.1em", display:"block", marginBottom:14 }}>{r.sub}</Mono>
                  <p style={{ fontSize:13, color:"#8aaccc", lineHeight:1.65, margin:0 }}>{r.desc}</p>
                </div>
              </GradientCard>
            </Fade>
          ))}
        </div>

        <Fade delay={0.3}>
          <div style={{ marginTop:48, padding:"32px 40px", border:"1px solid #0e1a2e", display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:32 }}>
            {[["TRADERS","Attract capital via verified performance"],["CAPITAL","Incentivises disciplined risk-adjusted returns"],["PERFORMANCE","Increases institutional participation"],["GOVERNANCE","Evolves risk and allocation frameworks"]].map(([title, desc], i) => (
              <div key={i}>
                <Mono style={{ fontSize:10, color:BLUE, letterSpacing:"0.12em", display:"block", marginBottom:8 }}>{title}</Mono>
                <p style={{ fontSize:12, color:"#607a94", lineHeight:1.6, margin:0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ─── TOKEN COIN (large SVG) ─────────────────────────────── */
function TokenCoin({ hovered, setHovered }) {
  const ref = useRef(null);
  const inView = useInView(ref, 0.1);
  const [angle, setAngle] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setAngle(a => (a + 0.25) % 360), 16);
    return () => clearInterval(id);
  }, []);

  const R = 180, IR = 118, cx = 200, cy = 200;
  let cum = 0;
  const segs = TOKEN_ALLOC.map(t => {
    const startA = (cum / 100) * 2 * Math.PI - Math.PI / 2;
    cum += t.pct;
    const endA = (cum / 100) * 2 * Math.PI - Math.PI / 2;
    const x1 = cx + R * Math.cos(startA), y1 = cy + R * Math.sin(startA);
    const x2 = cx + R * Math.cos(endA),   y2 = cy + R * Math.sin(endA);
    const ix1 = cx + IR * Math.cos(startA), iy1 = cy + IR * Math.sin(startA);
    const ix2 = cx + IR * Math.cos(endA),   iy2 = cy + IR * Math.sin(endA);
    const large = endA - startA > Math.PI ? 1 : 0;
    const d = `M${ix1.toFixed(2)},${iy1.toFixed(2)} A${IR},${IR} 0 ${large},1 ${ix2.toFixed(2)},${iy2.toFixed(2)} L${x2.toFixed(2)},${y2.toFixed(2)} A${R},${R} 0 ${large},0 ${x1.toFixed(2)},${y1.toFixed(2)} Z`;
    return { ...t, d, midA: startA + (endA - startA) / 2 };
  });

  return (
    <div ref={ref} style={{ position:"relative", width:400, height:400, flexShrink:0 }}>
      {/* Outer ambient glow */}
      <div style={{ position:"absolute", inset:-40, borderRadius:"50%", background:`radial-gradient(circle, ${BLUE}12 0%, transparent 70%)`, pointerEvents:"none" }} />

      <svg width={400} height={400} viewBox="0 0 400 400" style={{ overflow:"visible" }}>
        <defs>
          <radialGradient id="coinGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#0e1a2e" />
            <stop offset="100%" stopColor="#04080f" />
          </radialGradient>
          <filter id="segGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="ringGlow">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Ambient orbit rings */}
        {[220, 240, 260].map((r, i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="none"
            stroke={BLUE} strokeWidth={0.5}
            opacity={0.06 + i * 0.04}
            style={{ animation:`pulseRing ${3 + i}s ease-in-out infinite`, animationDelay:`${i * 0.8}s` }} />
        ))}

        {/* Rotating dashed ring */}
        <circle cx={cx} cy={cy} r={195} fill="none"
          stroke={BLUE} strokeWidth={1} opacity={0.2}
          strokeDasharray="4 12"
          style={{ transformOrigin:`${cx}px ${cy}px`, transform:`rotate(${angle}deg)` }} />
        <circle cx={cx} cy={cy} r={195} fill="none"
          stroke={GREEN} strokeWidth={1} opacity={0.15}
          strokeDasharray="2 20"
          style={{ transformOrigin:`${cx}px ${cy}px`, transform:`rotate(${-angle * 0.6}deg)` }} />

        {/* Donut segments */}
        {segs.map((s, i) => {
          const isHov = hovered === i;
          const scale = inView ? (isHov ? 1.04 : 1) : 0.85;
          return (
            <path key={i} d={s.d}
              fill={s.color}
              opacity={inView ? (hovered === null ? 0.9 : isHov ? 1 : 0.35) : 0}
              filter={isHov ? "url(#segGlow)" : undefined}
              style={{
                transformOrigin:`${cx}px ${cy}px`,
                transform:`scale(${scale})`,
                transition:"opacity .8s ease, transform .35s ease",
                cursor:"pointer",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            />
          );
        })}

        {/* Segment label lines on hover */}
        {hovered !== null && segs[hovered] && (() => {
          const s = segs[hovered];
          const lx = cx + 210 * Math.cos(s.midA);
          const ly = cy + 210 * Math.sin(s.midA);
          const lx2 = cx + 230 * Math.cos(s.midA);
          const ly2 = cy + 230 * Math.sin(s.midA);
          return (
            <g>
              <line x1={lx} y1={ly} x2={lx2} y2={ly2} stroke={s.color} strokeWidth={1} opacity={0.8} />
              <text x={lx2 + (lx2 > cx ? 6 : -6)} y={ly2 + 4}
                textAnchor={lx2 > cx ? "start" : "end"}
                fill={s.color} fontSize="10" fontFamily="'Space Mono',monospace"
                letterSpacing="1">{s.pct}%</text>
            </g>
          );
        })()}

        {/* Inner circle */}
        <circle cx={cx} cy={cy} r={IR - 2} fill="url(#coinGrad)"
          stroke={`${BLUE}60`} strokeWidth={1.5} />

        {/* Inner glow ring */}
        <circle cx={cx} cy={cy} r={IR - 2} fill="none"
          stroke={BLUE} strokeWidth={8} opacity={0.06}
          filter="url(#ringGlow)" />

        {/* $FND text */}
        <text x={cx} y={cy - 12} textAnchor="middle"
          fontFamily="'Bebas Neue',sans-serif" fontSize="38" fill="#eaf2ff"
          letterSpacing="3">$FND</text>
        <text x={cx} y={cy + 10} textAnchor="middle"
          fontFamily="'Space Mono',monospace" fontSize="8" fill="#607a94"
          letterSpacing="2">COORDINATION TOKEN</text>
        <text x={cx} y={cy + 26} textAnchor="middle"
          fontFamily="'Space Mono',monospace" fontSize="8" fill="#4a6480"
          letterSpacing="1">1,000,000,000 SUPPLY</text>

        {/* Live dot */}
        <circle cx={cx + 46} cy={cy - 20} r={3} fill={GREEN}
          style={{ animation:"pulse 2s infinite" }} />
      </svg>
    </div>
  );
}

/* ─── TOKEN ──────────────────────────────────────────────── */
function Token() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="token-section" style={{ padding:"120px 24px", position:"relative", overflow:"hidden" }}>
      {/* Section background grid */}
      <div style={{ position:"absolute", inset:0, backgroundImage:`linear-gradient(${BLUE}06 1px, transparent 1px), linear-gradient(90deg, ${BLUE}06 1px, transparent 1px)`, backgroundSize:"60px 60px", pointerEvents:"none" }} />
      <div style={{ position:"absolute", inset:0, background:`radial-gradient(ellipse 80% 60% at 50% 50%, ${BLUE}08 0%, transparent 70%)`, pointerEvents:"none" }} />

      <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1 }}>
        <Fade>
          <Mono style={{ fontSize:10, color:BLUE, letterSpacing:"0.18em", display:"block", marginBottom:12 }}>TOKEN ARCHITECTURE</Mono>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(38px,5vw,64px)", color:"#eaf2ff", margin:"0 0 12px", lineHeight:0.92 }}>
            THE $FND<br /><GT>COORDINATION UTILITY LAYER.</GT>
          </h2>
          <p style={{ fontSize:14, color:"#8aaccc", maxWidth:520, lineHeight:1.75, marginTop:16 }}>
            $FND aligns traders, capital providers, and contributors through native coordination mechanisms and verifiable access rules.
          </p>
        </Fade>

        {/* ── Main chart + allocation row ── */}
        <Fade delay={0.15}>
          <div style={{ display:"flex", gap:64, alignItems:"center", marginTop:64, flexWrap:"wrap", justifyContent:"center" }}>
            <TokenCoin hovered={hovered} setHovered={setHovered} />

            {/* Allocation breakdown */}
            <div style={{ flex:1, minWidth:300 }}>
              <Mono style={{ fontSize:10, color:"#607a94", letterSpacing:"0.14em", display:"block", marginBottom:24 }}>
                TOKEN ALLOCATION — SUPPLY: 1,000,000,000 $FND
              </Mono>
              {TOKEN_ALLOC.map((t, i) => (
                <div key={i} style={{ marginBottom:18 }}
                  onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:7 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                      <div style={{
                        width:10, height:10, borderRadius:"50%", background:t.color, flexShrink:0,
                        boxShadow:hovered===i?`0 0 12px ${t.color}, 0 0 24px ${t.color}40`:"none",
                        transition:"box-shadow .3s",
                      }} />
                      <Mono style={{ fontSize:12, color:hovered===i?"#eaf2ff":"#9ab4cc", transition:"color .2s" }}>{t.label}</Mono>
                    </div>
                    <Mono style={{ fontSize:16, color:"#eaf2ff", fontWeight:"bold", letterSpacing:"0.04em" }}>{t.pct}%</Mono>
                  </div>
                  <AnimatedBar pct={t.pct} color={t.color} delay={i * 0.1} />
                </div>
              ))}

              {/* Token stats row */}
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:1, marginTop:32, background:"#0a1220" }}>
                {[["1B","TOTAL SUPPLY"],["40%","COMMUNITY"],["PHASE 1","ACTIVE"]].map(([v, l], i) => (
                  <div key={i} style={{ background:"#04080f", padding:"16px", textAlign:"center", position:"relative", overflow:"hidden" }}>
                    <div style={{ position:"absolute", bottom:0, left:0, right:0, height:1, background:GRAD, opacity:0.3 }} />
                    <p style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:22, color:"#eaf2ff", margin:"0 0 3px", letterSpacing:"0.06em" }}>{v}</p>
                    <Mono style={{ fontSize:8, color:"#4a6480", letterSpacing:"0.12em", display:"block" }}>{l}</Mono>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fade>

        {/* ── Utility cards ── */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16, marginTop:48 }}>
          {TOKEN_CARDS.map((c, i) => (
            <Fade key={i} delay={i * 0.08}>
              <GradientCard accent={i === 1 ? GREEN : BLUE}>
                <div style={{ padding:"28px" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
                    <div style={{ width:32, height:32, borderRadius:"50%", border:`1px solid ${i===1?GREEN:BLUE}40`, display:"flex", alignItems:"center", justifyContent:"center", background:`${i===1?GREEN:BLUE}10` }}>
                      <Icon name={i===0?"vault":i===1?"chart":"dao"} size={14} color={i===1?GREEN:BLUE} />
                    </div>
                    <Mono style={{ fontSize:10, color:i===1?GREEN:BLUE, letterSpacing:"0.12em" }}>{c.label}</Mono>
                  </div>
                  <p style={{ fontSize:13, color:"#8aaccc", lineHeight:1.65, margin:0 }}>{c.desc}</p>
                </div>
              </GradientCard>
            </Fade>
          ))}
        </div>

        {/* ── Feature grid ── */}
        <Fade delay={0.3}>
          <div style={{ marginTop:16, display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:1, background:"#0a1220" }}>
            {[
              { label:"VERIFICATION", sub:"VAULT ISOLATION",    color:BLUE  },
              { label:"GOVERNANCE",   sub:"DAO GOVERNED",       color:GREEN },
              { label:"INCENTIVES",   sub:"ECOSYSTEM REWARDS",  color:BLUE  },
              { label:"RISK ENGINE",  sub:"HARD BOUNDS ACTIVE", color:GREEN },
            ].map((f, i) => (
              <div key={i} style={{ background:"#04080f", padding:"20px 24px", transition:"background .2s", position:"relative", overflow:"hidden" }}
                onMouseEnter={e => e.currentTarget.style.background="#081428"}
                onMouseLeave={e => e.currentTarget.style.background="#04080f"}>
                <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:f.color, opacity:0.4 }} />
                <Mono style={{ fontSize:9, color:BLUE, letterSpacing:"0.12em", display:"block", marginBottom:6 }}>$FND</Mono>
                <Mono style={{ fontSize:11, color:"#eaf2ff", letterSpacing:"0.08em", display:"block", marginBottom:4 }}>{f.label}</Mono>
                <Mono style={{ fontSize:9, color:f.color, letterSpacing:"0.08em", display:"block" }}>{f.sub}</Mono>
              </div>
            ))}
          </div>
        </Fade>

        {/* Disclosure */}
        <Fade delay={0.1}>
          <div style={{ marginTop:32, padding:"20px 28px", border:"1px solid #0a1220" }}>
            <Mono style={{ fontSize:9, color:"#4a6480", letterSpacing:"0.08em", lineHeight:1.7, display:"block" }}>
              [ GLOBAL_DISCLOSURE ] — $FND IS A COORDINATION UTILITY TOKEN. IT IS NOT AN INVESTMENT CONTRACT, SECURITY, OR CLAIM ON PROTOCOL REVENUE OR TRADER PERFORMANCE. ALLOCATION FIGURES ARE ILLUSTRATIVE AND SUBJECT TO CHANGE.
            </Mono>
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ─── PARTICIPATION ──────────────────────────────────────── */
function Participation() {
  return (
    <section style={{ padding:"100px 24px", background:"#030810", borderTop:"1px solid #0e1a2e" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <Fade>
          <Mono style={{ fontSize:10, color:BLUE, letterSpacing:"0.18em", display:"block", marginBottom:12 }}>PARTICIPATION</Mono>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(38px,5vw,64px)", color:"#eaf2ff", margin:"0 0 8px", lineHeight:0.92 }}>
            POSITION YOUR SKILL<br /><GT>AS INFRASTRUCTURE.</GT>
          </h2>
          <Mono style={{ fontSize:11, color:"#607a94", letterSpacing:"0.1em", display:"block" }}>No discretionary gates. Phased onboarding active.</Mono>
        </Fade>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16, marginTop:56 }}>
          {CLASSES.map((c, i) => (
            <Fade key={i} delay={i * 0.1}>
              <GradientCard accent={c.accent} style={{ height:"100%" }}>
                <div style={{ padding:"32px", display:"flex", flexDirection:"column", height:"100%" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
                    <div style={{ width:44, height:44, borderRadius:"50%", border:`1px solid ${c.accent}50`, display:"flex", alignItems:"center", justifyContent:"center", background:`${c.accent}10`, flexShrink:0 }}>
                      <Icon name={c.icon} size={20} color={c.accent} />
                    </div>
                    <div>
                      <Mono style={{ fontSize:9, color:c.accent, letterSpacing:"0.14em", display:"block" }}>{c.id}</Mono>
                      <Mono style={{ fontSize:9, color:"#4a6480", letterSpacing:"0.1em", display:"block" }}>class / {c.class}</Mono>
                    </div>
                  </div>
                  <p style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:22, color:"#eaf2ff", letterSpacing:"0.06em", margin:"0 0 4px" }}>{c.tag}</p>
                  <Mono style={{ fontSize:10, color:"#4a6480", letterSpacing:"0.08em", display:"block", marginBottom:22 }}>{c.settle}</Mono>
                  {c.items.map((item, j) => (
                    <div key={j} style={{ display:"flex", gap:12, marginBottom:11, alignItems:"flex-start" }}>
                      <div style={{ width:16, height:16, borderRadius:"50%", border:`1px solid ${c.accent}30`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>
                        <Icon name="check" size={8} color={c.accent} />
                      </div>
                      <span style={{ fontSize:13, color:"#8aaccc", lineHeight:1.55 }}>{item}</span>
                    </div>
                  ))}
                  <button onClick={() => document.getElementById("whitelist-section").scrollIntoView({ behavior:"smooth" })}
                    style={{ marginTop:"auto", paddingTop:24, width:"100%", padding:"12px 0", background:"transparent", border:`1px solid ${c.accent}40`, color:c.accent, fontSize:10, fontFamily:"'Space Mono',monospace", letterSpacing:"0.12em", cursor:"pointer", borderRadius:3, transition:"all .25s" }}
                    onMouseEnter={e => { e.target.style.background=`${c.accent}15`; e.target.style.borderColor=c.accent; }}
                    onMouseLeave={e => { e.target.style.background="transparent"; e.target.style.borderColor=`${c.accent}40`; }}>
                    {c.cta} →
                  </button>
                </div>
              </GradientCard>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── INSTITUTIONAL GATEWAY ──────────────────────────────── */
function InstitutionalGateway() {
  return (
    <section style={{ padding:"100px 24px", borderTop:"1px solid #0e1a2e", borderBottom:"1px solid #0e1a2e" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <Fade>
          <Mono style={{ fontSize:10, color:BLUE, letterSpacing:"0.18em", display:"block", marginBottom:12 }}>INSTITUTIONAL GATEWAY</Mono>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(38px,5vw,64px)", color:"#eaf2ff", margin:"0 0 12px", lineHeight:0.92 }}>
            PROTOCOL<br /><GT>INTEGRATIONS.</GT>
          </h2>
          <p style={{ fontSize:14, color:"#8aaccc", maxWidth:520, lineHeight:1.75 }}>
            Fundoria provides institution-grade connectivity for high-throughput strategies, secure treasury scaling, and verifiable performance reporting.
          </p>
        </Fade>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginTop:56 }}>
          <Fade delay={0.1}>
            <GradientCard accent={BLUE}>
              <div style={{ padding:"36px" }}>
                <div style={{ width:44, height:44, borderRadius:"50%", border:`1px solid ${BLUE}40`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:16, background:`${BLUE}10` }}>
                  <Icon name="shield" size={20} color={BLUE} />
                </div>
                <Mono style={{ fontSize:10, color:BLUE, letterSpacing:"0.14em", display:"block", marginBottom:12 }}>COMPLIANCE READY</Mono>
                <p style={{ fontSize:13, color:"#8aaccc", lineHeight:1.7, margin:0 }}>
                  Verifiable on-chain audit trails and rule-enforced risk parameters for institutional mandates. Every allocation decision is attributable, reproducible, and checkpointed on-chain.
                </p>
              </div>
            </GradientCard>
          </Fade>
          <Fade delay={0.15}>
            <GradientCard accent={GREEN}>
              <div style={{ padding:"36px" }}>
                <div style={{ width:44, height:44, borderRadius:"50%", border:`1px solid ${GREEN}40`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:16, background:`${GREEN}10` }}>
                  <Icon name="bolt" size={20} color={GREEN} />
                </div>
                <Mono style={{ fontSize:10, color:GREEN, letterSpacing:"0.14em", display:"block", marginBottom:12 }}>CLEAN LIQUIDITY</Mono>
                <p style={{ fontSize:13, color:"#8aaccc", lineHeight:1.7, margin:0 }}>
                  Direct settlement on HyperEVM with non-custodial capital protection at every execution layer. No counterparty custody risk. No discretionary override path.
                </p>
              </div>
            </GradientCard>
          </Fade>
        </div>

        <Fade delay={0.2}>
          <div style={{ marginTop:16, background:"#04080f", padding:"40px", border:"1px solid #0e1a2e" }}>
            <Mono style={{ fontSize:10, color:"#607a94", letterSpacing:"0.14em", display:"block", marginBottom:16 }}>INSTITUTIONAL ONBOARDING</Mono>
            <h3 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:28, color:"#eaf2ff", margin:"0 0 12px", letterSpacing:"0.06em" }}>
              DISCUSS CUSTOM MANDATES, API ACCESS, OR DAO TREASURY INTEGRATIONS WITH OUR CONTRIBUTORS.
            </h3>
            <div style={{ display:"flex", gap:16, marginTop:24, flexWrap:"wrap" }}>
              <button onClick={() => document.getElementById("whitelist-section").scrollIntoView({ behavior:"smooth" })}
                style={{ background:GRAD, border:"none", padding:"12px 28px", borderRadius:3, color:"#fff", fontSize:11, fontFamily:"'Space Mono',monospace", letterSpacing:"0.1em", cursor:"pointer", transition:"all .25s" }}
                onMouseEnter={e => { e.target.style.opacity="0.85"; e.target.style.transform="translateY(-2px)"; }}
                onMouseLeave={e => { e.target.style.opacity="1"; e.target.style.transform="translateY(0)"; }}>
                REQUEST INSTITUTIONAL ACCESS
              </button>
              <a href="mailto:PARTNERS@FUNDORIA.IO" style={{ display:"flex", alignItems:"center", padding:"12px 28px", border:"1px solid #1a2d46", borderRadius:3, color:"#9ab4cc", fontSize:11, fontFamily:"'Space Mono',monospace", letterSpacing:"0.1em", textDecoration:"none", transition:"all .25s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor="#607a94"; e.currentTarget.style.color="#eaf2ff"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="#304a64"; e.currentTarget.style.color="#9ab4cc"; }}>
                PARTNERS@FUNDORIA.IO
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ─── ROADMAP ────────────────────────────────────────────── */
function Roadmap() {
  return (
    <section style={{ padding:"120px 24px", maxWidth:1100, margin:"0 auto" }}>
      <Fade>
        <Mono style={{ fontSize:10, color:BLUE, letterSpacing:"0.18em", display:"block", marginBottom:12 }}>LIFECYCLE</Mono>
        <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(38px,5vw,64px)", color:"#eaf2ff", margin:"0 0 8px", lineHeight:0.92 }}>
          THE <GT>EVOLUTION.</GT>
        </h2>
        <p style={{ fontSize:14, color:"#8aaccc", maxWidth:420, lineHeight:1.75, marginTop:12 }}>
          From core infrastructure to institutional capital markets. Each phase builds on verified foundations before proceeding.
        </p>
      </Fade>

      {/* Timeline connector */}
      <Fade delay={0.1}>
        <div style={{ display:"flex", alignItems:"center", gap:0, marginTop:56, marginBottom:1 }}>
          {ROADMAP.map((r, i) => (
            <div key={i} style={{ flex:1, display:"flex", alignItems:"center" }}>
              <div style={{ width:12, height:12, borderRadius:"50%", background:r.status==="ACTIVE"?GREEN:"#304a64", border:`2px solid ${r.status==="ACTIVE"?GREEN:"#304a64"}`, flexShrink:0, boxShadow:r.status==="ACTIVE"?`0 0 12px ${GREEN}60`:"none", position:"relative" }}>
                {r.status==="ACTIVE" && <div style={{ position:"absolute", inset:-4, borderRadius:"50%", border:`1px solid ${GREEN}40`, animation:"pulseRing 2s ease-out infinite" }} />}
              </div>
              {i < ROADMAP.length - 1 && (
                <div style={{ flex:1, height:1, background:i===0?`linear-gradient(90deg,${GREEN},#1a2d46)`:"#304a64" }} />
              )}
            </div>
          ))}
        </div>
      </Fade>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1, background:"#0a1220" }}>
        {ROADMAP.map((r, i) => (
          <Fade key={i} delay={i * 0.12}>
            <GradientCard accent={r.status==="ACTIVE"?GREEN:"#304a64"} style={{ borderRadius:0 }}>
              <div style={{ padding:"32px" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:20 }}>
                  <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:52, color:"#0a1220", lineHeight:1 }}>0{r.phase}</span>
                  <span style={{ fontSize:9, color:r.status==="ACTIVE"?GREEN:"#4a6480", border:`1px solid ${r.status==="ACTIVE"?GREEN+"40":"#304a64"}`, padding:"3px 10px", fontFamily:"'Space Mono',monospace", letterSpacing:"0.12em", display:"flex", alignItems:"center", gap:5 }}>
                    {r.status==="ACTIVE" && <span style={{ width:5, height:5, borderRadius:"50%", background:GREEN, animation:"pulse 1.5s infinite", display:"inline-block" }} />}
                    {r.status}
                  </span>
                </div>
                <Mono style={{ fontSize:9, color:"#4a6480", letterSpacing:"0.14em", display:"block", marginBottom:6 }}>MISSION_LOG_PHASE_0{r.phase}.TXT</Mono>
                <p style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:22, color:"#eaf2ff", letterSpacing:"0.06em", margin:"0 0 4px" }}>{r.title}</p>
                <Mono style={{ fontSize:10, color:r.status==="ACTIVE"?GREEN:"#607a94", letterSpacing:"0.08em", display:"block", marginBottom:20 }}>{r.sub}</Mono>
                {r.items.map((item, j) => (
                  <div key={j} style={{ display:"flex", gap:12, marginBottom:10, alignItems:"flex-start" }}>
                    <div style={{ width:14, height:14, borderRadius:"50%", border:`1px solid ${r.status==="ACTIVE"?GREEN+"40":"#1a2d4640"}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:2 }}>
                      <Icon name="check" size={7} color={r.status==="ACTIVE"?GREEN:"#607a94"} />
                    </div>
                    <span style={{ fontSize:13, color:"#607a94", lineHeight:1.55 }}>{item}</span>
                  </div>
                ))}
                <Mono style={{ fontSize:9, color:"#304a64", letterSpacing:"0.1em", display:"block", marginTop:20 }}>MILESTONE-GATED — NO FIXED DATE</Mono>
              </div>
            </GradientCard>
          </Fade>
        ))}
      </div>
    </section>
  );
}

/* ─── FAQ ────────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq-section" style={{ padding:"100px 24px", background:"#030810", borderTop:"1px solid #0e1a2e" }}>
      <div style={{ maxWidth:760, margin:"0 auto" }}>
        <Fade>
          <Mono style={{ fontSize:10, color:BLUE, letterSpacing:"0.18em", display:"block", marginBottom:12 }}>KNOWLEDGE BASE</Mono>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(38px,5vw,64px)", color:"#eaf2ff", margin:"0 0 12px", lineHeight:0.92 }}>
            TECHNICAL <GT>FAQ.</GT>
          </h2>
          <Mono style={{ fontSize:10, color:"#4a6480", letterSpacing:"0.1em", display:"block", marginBottom:40 }}>Direct answers for protocol-native capital markets.</Mono>
        </Fade>
        {FAQS.map((f, i) => (
          <Fade key={i} delay={i * 0.03}>
            <div style={{ borderBottom:"1px solid #0a1220" }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{ width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"18px 0", background:"transparent", border:"none", cursor:"pointer", textAlign:"left" }}>
                <div style={{ display:"flex", gap:16, alignItems:"center" }}>
                  <Mono style={{ fontSize:10, color:open===i?BLUE:"#4a6480", transition:"color .2s" }}>{"?>"}</Mono>
                  <Mono style={{ fontSize:13, color:open===i?"#eaf2ff":"#9ab4cc", letterSpacing:"0.04em", transition:"color .2s" }}>{f.q}</Mono>
                </div>
                <div style={{ width:20, height:20, borderRadius:"50%", border:`1px solid ${open===i?GREEN:BLUE}40`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginLeft:16, transition:"border-color .2s" }}>
                  <span style={{ color:open===i?GREEN:BLUE, fontSize:14, fontFamily:"monospace", lineHeight:1, transition:"color .2s" }}>{open===i?"−":"+"}</span>
                </div>
              </button>
              <div style={{ maxHeight:open===i?400:0, overflow:"hidden", transition:"max-height .4s cubic-bezier(.16,1,.3,1)" }}>
                <div style={{ paddingBottom:20 }}>
                  <Mono style={{ fontSize:9, color:GREEN, letterSpacing:"0.1em", display:"block", marginBottom:8 }}>SYS::RESPONSE_STREAM</Mono>
                  <p style={{ fontSize:13, color:"#8aaccc", lineHeight:1.75, margin:"0 0 12px", paddingLeft:26 }}>{f.a}</p>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}

/* ─── WHITELIST ──────────────────────────────────────────── */
function WhitelistForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const valid = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  async function submit() {
    if (!valid(email)) { setErr("Enter a valid email address."); return; }
    setErr(""); setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setLoading(false); setDone(true);
  }

  if (done) return (
    <div style={{ textAlign:"center", padding:"32px 0" }}>
      <div style={{ width:56, height:56, borderRadius:"50%", border:`2px solid ${GREEN}`, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px", background:`${GREEN}10`, boxShadow:`0 0 24px ${GREEN}30` }}>
        <Icon name="check" size={22} color={GREEN} />
      </div>
      <p style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:28, color:"#eaf2ff", letterSpacing:"0.06em", margin:"0 0 8px" }}>YOU'RE IN.</p>
      <Mono style={{ fontSize:12, color:"#607a94", display:"block" }}>We'll be in touch with early access details. Watch your inbox.</Mono>
    </div>
  );

  return (
    <div>
      <div style={{ display:"flex", border:"1px solid #1a2d46", borderRadius:4, overflow:"hidden", maxWidth:480, margin:"0 auto", transition:"border-color .2s" }}
        onFocusCapture={e => e.currentTarget.style.borderColor = BLUE}
        onBlurCapture={e => e.currentTarget.style.borderColor = "#304a64"}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && submit()}
          placeholder="protocol@access.link"
          style={{ flex:1, background:"#04080f", border:"none", outline:"none", padding:"14px 16px", fontSize:12, color:"#8aaccc", fontFamily:"'Space Mono',monospace", letterSpacing:"0.04em" }} />
        <button onClick={submit} disabled={loading}
          style={{ background:GRAD, border:"none", padding:"0 22px", cursor:"pointer", fontSize:11, fontFamily:"'Space Mono',monospace", color:"#fff", letterSpacing:"0.1em", whiteSpace:"nowrap", transition:"opacity .2s" }}
          onMouseEnter={e => e.target.style.opacity="0.85"} onMouseLeave={e => e.target.style.opacity="1"}>
          {loading ? "..." : "FND::WHITELIST.REGISTER →"}
        </button>
      </div>
      {err && <Mono style={{ color:"#ff6060", fontSize:11, textAlign:"center", display:"block", marginTop:8 }}>{err}</Mono>}
      <Mono style={{ fontSize:10, color:"#4a6480", display:"block", textAlign:"center", marginTop:12, letterSpacing:"0.06em" }}>
        REGISTRATION IS FREE AND DOES NOT CONSTITUTE A PURCHASE, ALLOCATION, OR COMMITMENT OF ANY KIND.
      </Mono>
    </div>
  );
}

function WhitelistSection() {
  return (
    <section id="whitelist-section" style={{ padding:"120px 24px", textAlign:"center", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 70% 60% at 50% 100%, #081428 0%, #02050c 100%)", zIndex:0 }} />
      <div style={{ position:"absolute", bottom:"20%", left:"50%", transform:"translateX(-50%)", width:500, height:500, borderRadius:"50%", background:`radial-gradient(circle, ${GREEN}0a 0%, transparent 70%)`, zIndex:0, animation:"orbFloat 8s ease-in-out infinite reverse" }} />
      <div style={{ position:"relative", zIndex:1, maxWidth:640, margin:"0 auto" }}>
        <Fade>
          <Tag color={GREEN}>PHASED ONBOARDING ACTIVE</Tag>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(44px,8vw,90px)", color:"#eaf2ff", margin:"24px 0 12px", lineHeight:0.88 }}>
            JOIN THE<br /><GT>FUNDORIA WHITELIST.</GT>
          </h2>
          <p style={{ fontSize:14, color:"#8aaccc", lineHeight:1.75, marginBottom:8 }}>
            Members receive priority onboarding, early governance visibility, and standing invitations to contributor sessions.
          </p>
        </Fade>
        <Fade delay={0.15}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:0, maxWidth:560, margin:"24px auto 36px" }}>
            {["Early access to the trading interface during evaluation phases","Priority eligibility for trader verification cohorts","Governance previews and contributor sessions","Direct ecosystem updates ahead of public release"].map((b, i) => (
              <div key={i} style={{ display:"flex", gap:10, alignItems:"flex-start", padding:"8px 0" }}>
                <Icon name="check" size={12} color={GREEN} style={{ marginTop:2, flexShrink:0 }} />
                <Mono style={{ fontSize:11, color:"#607a94", letterSpacing:"0.04em", textAlign:"left" }}>{b}</Mono>
              </div>
            ))}
          </div>
        </Fade>
        <Fade delay={0.25}><WhitelistForm /></Fade>
      </div>
    </section>
  );
}

/* ─── FOOTER ─────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background:"#030810", borderTop:"1px solid #0e1a2e", padding:"40px 32px 32px" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:24, marginBottom:24 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <svg width="30" height="26" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{ animation:"logoFloat 4s ease-in-out infinite", flexShrink:0 }}>
              <defs>
                <linearGradient id="logoGradFooter" x1="2" y1="30" x2="34" y2="2" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2F80ED"/>
                  <stop offset="1" stopColor="#00C896"/>
                </linearGradient>
              </defs>
              <path d="M5 26C5 17 10 13 20 13H32" stroke="url(#logoGradFooter)" strokeWidth="8.5" strokeLinecap="round" opacity="0.72"/>
              <path d="M5 18C5 8 10 3 21 3H32" stroke="url(#logoGradFooter)" strokeWidth="8.5" strokeLinecap="round"/>
            </svg>
            <span style={{
              fontFamily:"'Bebas Neue',sans-serif",
              fontSize:17,
              letterSpacing:"0.14em",
              lineHeight:1,
              userSelect:"none",
              background:"linear-gradient(90deg,#eaf2ff 20%,#00C896 60%,#eaf2ff 80%)",
              backgroundSize:"250% auto",
              WebkitBackgroundClip:"text",
              WebkitTextFillColor:"transparent",
              animation:"logoShimmer 5s linear infinite"
            }}>FUNDORIA</span>
          </div>
          <div style={{ display:"flex", gap:8 }}>
            {[["◻","X"],["○","TG"],["◁","DC"]].map(([icon, label], i) => (
              <div key={i} title={label} style={{ width:36, height:36, border:"1px solid #0e1a2e", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", borderRadius:3, transition:"border-color .2s, background .2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor="#4a6480"; e.currentTarget.style.background="#0a1220"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="#0e1a2e"; e.currentTarget.style.background="transparent"; }}>
                <Mono style={{ fontSize:13, color:"#607a94" }}>{icon}</Mono>
              </div>
            ))}
          </div>
          <div style={{ display:"flex", gap:28, flexWrap:"wrap" }}>
            {["WHITEPAPER","HYPERLIQUID ↗","RISK FRAMEWORK [SOON]","STATUS [V0.1]"].map((l, i) => (
              <Mono key={i} style={{ fontSize:10, color:"#4a6480", letterSpacing:"0.12em", cursor:"pointer", transition:"color .2s" }}
                onMouseEnter={e => e.target.style.color="#9ab4cc"}
                onMouseLeave={e => e.target.style.color="#4a6480"}>{l}</Mono>
            ))}
          </div>
          <Mono style={{ fontSize:10, color:"#304a64", letterSpacing:"0.06em" }}>© 2026 FUNDORIA · HYPEREVM</Mono>
        </div>
        <div style={{ borderTop:"1px solid #080f1a", paddingTop:20 }}>
          <Mono style={{ fontSize:9, color:"#304a64", letterSpacing:"0.06em", lineHeight:1.7, display:"block" }}>
            [ DISCLOSURE ] · $FND IS AN ACCESS AND COORDINATION TOKEN. NOT AN INVESTMENT, SECURITY, OR PROFIT-SHARING INSTRUMENT. USERS ARE RESPONSIBLE FOR LOCAL REGULATORY COMPLIANCE. FUNDORIA IS NOT A REGISTERED BROKER, EXCHANGE, OR INVESTMENT ADVISOR.
          </Mono>
        </div>
      </div>
    </footer>
  );
}

/* ─── ROOT ───────────────────────────────────────────────── */
export default function FundoriaV2() {
  return (
    <div style={{ background:"#02050c", minHeight:"100vh", fontFamily:"'DM Sans',sans-serif", color:"#eaf2ff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=DM+Sans:ital,wght@0,300;0,500;1,300&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}

        @keyframes ticker      { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes pulse       { 0%,100%{opacity:1} 50%{opacity:0.25} }
        @keyframes orbFloat    { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-24px)} }
        @keyframes bounce      { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        @keyframes pulseRing   { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(1.8);opacity:0} }
        @keyframes flowDash    { to{stroke-dashoffset:-30} }
        @keyframes scanLine    { 0%{top:-2px} 100%{top:100%} }
        @keyframes fadeSlideIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes glowPulse   { 0%,100%{box-shadow:0 0 12px #2F80ED20} 50%{box-shadow:0 0 28px #2F80ED50} }
        @keyframes coinRotate  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes segEntrance { from{opacity:0;transform:scale(0.8)} to{opacity:0.9;transform:scale(1)} }
        @keyframes logoFloat   { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-3px)} }
        @keyframes logoShimmer { 0%{background-position:200% center} 100%{background-position:-200% center} }

        ::-webkit-scrollbar      { width:3px }
        ::-webkit-scrollbar-track{ background:#02050c }
        ::-webkit-scrollbar-thumb{ background:#0e1a2e }

        ::selection { background:#2F80ED30; color:#dce8ff }

        @media(max-width:768px){
          section { padding-left:16px!important; padding-right:16px!important }
          h1 { font-size:clamp(48px,14vw,80px)!important }
          h2 { font-size:clamp(32px,10vw,56px)!important }
          div[style*="gridTemplateColumns: repeat(4"] { grid-template-columns:1fr 1fr!important }
          div[style*="gridTemplateColumns: repeat(3"] { grid-template-columns:1fr!important }
          div[style*="gridTemplateColumns: 1fr 1fr"]:not(nav *) { grid-template-columns:1fr!important }
          nav > div:nth-child(2) { display:none!important }
        }
      `}</style>
      <Nav />
      <div style={{ paddingTop:58 }}>
        <Ticker />
        <Hero />
        <ProtocolLogic />
        <Architecture />
        <RiskSection />
        <Rewards />
        <Token />
        <Participation />
        <InstitutionalGateway />
        <Roadmap />
        <FAQ />
        <WhitelistSection />
        <Footer />
      </div>
    </div>
  );
}
