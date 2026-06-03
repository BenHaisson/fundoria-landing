import { useState, useEffect, useRef } from "react";

/* ─── BRAND ─────────────────────────────────────────────── */
const BLUE = "#2F80ED";
const GREEN = "#00C896";
const GRAD = `linear-gradient(90deg,${BLUE},${GREEN})`;

/* ─── DATA ───────────────────────────────────────────────── */
const TICKER = [
  "PROTOCOL STATUS: PRE-LAUNCH","PHASE 1: CORE INFRASTRUCTURE",
  "IDENTITY LAYER: COMPLETE","SMART CONTRACTS: IN AUDIT",
  "TRADER EVALUATION: IN DEV","HYPERLIQUID NATIVE: ✓","NON-CUSTODIAL: ✓",
];

const MODULES = [
  { id:"01", label:"UX INTERFACE", desc:"Unified trading environment mirroring live Hyperliquid order books, pricing, and liquidity metrics. Identical UX across evaluation and funded phases eliminates behavioral divergence." },
  { id:"02", label:"SMART VAULTS", desc:"Programmable capital containers defining allocation limits, risk parity constraints, and deterministic settlement pools — governed by code, not discretion." },
  { id:"03", label:"PROTOCOL CONTROL", desc:"Identity verification and risk enforcement layer on HyperEVM. Every order is validated against identity, capital availability, and risk constraints before execution is authorised." },
  { id:"04", label:"EXECUTION ENGINE", desc:"Hyperliquid provides the canonical execution venue: high-throughput order matching, sub-second latency, and on-chain settlement guarantees." },
  { id:"05", label:"OFF-CHAIN INDEXER", desc:"Deterministic computation layer for performance aggregation, drawdown auditing, and signed attestations committed on-chain as verifiable checkpoints." },
  { id:"06", label:"DAO GOVERNANCE [PHASE III]", desc:"Progressive decentralisation of risk frameworks, fee structures, and protocol upgrade paths — beginning with protocol stewards toward full DAO authority." },
];

const ARCH_STAGES = [
  { id:"01", layer:"VAULT LAYER",   title:"TRADER VAULTS",  sub:"CAPITAL ISOLATION",  desc:"Isolated capital with enforced drawdown and exposure constraints. Non-custodial by design. Each sub-account is independently bounded at the protocol level." },
  { id:"02", layer:"ORACLE LAYER",  title:"RISK ENGINE",    sub:"GUARD & VALIDATE",   desc:"Monitors NAV in real time, validates risk limits, and triggers automatic execution halts when constraints are breached. No manual path to override." },
  { id:"03", layer:"COORD LAYER",   title:"MASTER HUB",     sub:"ALLOCATE & SETTLE",  desc:"Capital allocation and settlement logic across all vaults and strategies. Profit and loss are finalised deterministically at epoch boundaries." },
  { id:"04", layer:"MARKET ACCESS", title:"EXECUTION",      sub:"HYPERLIQUID NATIVE", desc:"Trades executed on Hyperliquid with on-chain references for continuous verification. Execution is externalized; Fundoria never modifies matching logic." },
];

const TRACE_LINES = [
  ["// Stage 1 · Data Ingress",     "vault_state.update_on_fill(trade)"],
  ["// Stage 2 · Guardian Verify",  "oracle.validate_metrics(sharpe, vol)"],
  ["// Stage 3 · Continuous NAV",   "nav.stream_live()"],
  ["// Stage 4 · Immutable Checkpoint","ledger.write_checkpoint(epoch_id)_"],
];

const RISK_ITEMS = [
  { code:"RC_00", label:"Deterministic drawdown protection" },
  { code:"RC_01", label:"Non-custodial risk enforcement" },
  { code:"RC_02", label:"Real-time execution gating" },
  { code:"RC_03", label:"Independent oracle verification" },
  { code:"RC_04", label:"Smart contracts under independent security audit" },
];

const TOKEN_CARDS = [
  { label:"VERIFICATION & TIERS",   desc:"Required for trader progression and access to advanced capital allocation modules. Tier advancement is algorithmic and continuous." },
  { label:"ECOSYSTEM INCENTIVES",   desc:"Incentive distribution tied to protocol activity, vault participation, and contributor engagement — not speculative demand." },
  { label:"GOVERNED PARAMETERS",    desc:"Vote on global risk limits, fee structures, and protocol-level coordination hooks. Governance power weighted by alignment metrics." },
];

const TOKEN_ALLOC = [
  { label:"Community & Ecosystem", pct:40, color:BLUE },
  { label:"Protocol Treasury",     pct:25, color:GREEN },
  { label:"Team & Contributors",   pct:20, color:"#2196F3" },
  { label:"Early Backers",         pct:10, color:"#15B8A6" },
  { label:"Liquidity Provision",   pct:5,  color:"#06C18A" },
];

const CLASSES = [
  { id:"FND_CLS_01", class:"TRADERS",          tag:"SKILL VERIFICATION",  settle:"On-Chain Track Record",     accent:BLUE,
    items:["Simulated & funded trading environments","Persistent on-chain performance history","Protocol-mediated capital access","Tiered progression via verified metrics"],
    cta:"APPLY FOR WHITELIST" },
  { id:"FND_CLS_02", class:"CAPITAL PROVIDERS", tag:"CAPITAL PROVISION",   settle:"Non-Custodial Settlement",  accent:GREEN,
    items:["Programmable non-custodial vaults","Automated accounting & settlement","Rule-enforced risk management","Verified traders with auditable records"],
    cta:"PRE-REGISTER INTEREST" },
  { id:"FND_CLS_03", class:"DAOs & INSTITUTIONS",tag:"TREASURY SCALING",  settle:"DAO Native Integration",    accent:"#15B8A6",
    items:["Custom mandate-specific profiles","On-chain performance attestations","Direct governance integration","Institutional API access"] ,
    cta:"REQUEST INSTITUTIONAL ACCESS" },
];

const ROADMAP = [
  { phase:"01", title:"FOUNDATION",      sub:"CORE TRADING & VERIFICATION",  status:"ACTIVE",
    items:["Protocol interface & simulated environments","On-chain identity & attribution logic","Hyperliquid integration","Initial vault architecture with enforced risk"] },
  { phase:"02", title:"SCALING",          sub:"VAULT MARKETS & CAPITAL",       status:"PENDING",
    items:["Mandate-specific vault configurations","Institutional & DAO capital pathways","Enhanced settlement & reporting","Capital scaling tied to performance tiers"] },
  { phase:"03", title:"DECENTRALISATION", sub:"GOVERNANCE & ECOSYSTEM",        status:"PENDING",
    items:["DAO-controlled protocol parameters","Third-party integrations & analytics","Composable financial products","Standardised on-chain identity primitives"] },
];

const FAQS = [
  { q:"How is risk enforced?",             a:"Risk rules are encoded in vault contracts and enforced by the guardian oracle. Breaches trigger automated constraints — with no path for manual override." },
  { q:"What if the oracle fails?",         a:"Circuit-breaker logic halts execution for any affected vault. The system defaults to a safe state; no new orders are routed until oracle health is restored." },
  { q:"How is off-chain data verified?",   a:"Off-chain computation outputs are signed attestations committed to on-chain storage. Any third party can reproduce the computation from the same inputs and verify the result." },
  { q:"Is the protocol non-custodial?",    a:"Yes. Capital is held through smart-contract vaults on HyperEVM. The protocol never exercises custodial control or discretionary intervention over allocated capital." },
  { q:"Who can become a verified trader?", a:"Any participant who completes the evaluation phase through the Fundoria interface. Verification is purely performance-based — no relationship, jurisdiction, or approval process." },
  { q:"What blockchain does Fundoria run on?", a:"HyperEVM, the smart-contract layer of the Hyperliquid ecosystem. Execution is handled by Hyperliquid's HyperCore matching engine." },
  { q:"Are the smart contracts audited?",  a:"Smart contracts are currently under independent security audit. Audit reports will be published on-chain and linked from the protocol documentation before mainnet." },
  { q:"How do investors allocate to traders?", a:"Capital providers deposit into vault contracts. Allocation to verified traders is algorithmic — based on verification tier, performance history, and vault-specific eligibility rules." },
  { q:"What is the $FND token and what is it used for?", a:"FND is a coordination utility token enabling governance participation, trader tier progression, vault access, and ecosystem incentives. It does not represent equity, revenue-sharing rights, or a claim on performance." },
  { q:"When is the mainnet launch expected?", a:"Deployment is milestone-gated. Phase I is active. Phase II vault markets launch after independent security review. No fixed calendar date is committed." },
  { q:"What is the minimum deposit for capital providers?", a:"Minimum deposit parameters are configured per vault and will be published prior to Phase II launch. No global minimum is set at the protocol level." },
  { q:"How does Fundoria differ from traditional prop trading firms?", a:"Prop firms enforce rules off-chain, custody capital, and apply discretionary overrides. Fundoria implements all risk, identity, and capital logic as deterministic smart contracts — no intermediary, no discretion, full auditability." },
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
    <div ref={ref} style={{ opacity:v?1:0, transform:v?`translateY(0)`:`translateY(${y}px)`, transition:`opacity .6s ${delay}s ease, transform .6s ${delay}s ease` }}>
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

/* ─── TICKER ─────────────────────────────────────────────── */
function Ticker() {
  const items = [...TICKER, ...TICKER];
  return (
    <div style={{ background:"#04080f", borderBottom:"1px solid #0e1a2e", overflow:"hidden", height:34, position:"relative" }}>
      <div style={{ display:"flex", gap:48, position:"absolute", top:0, left:0, height:"100%", alignItems:"center", animation:"ticker 30s linear infinite", whiteSpace:"nowrap" }}>
        {items.map((t, i) => (
          <Mono key={i} style={{ fontSize:10, letterSpacing:"0.12em", color:"#3a5070" }}>
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
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:200, height:58, display:"flex", alignItems:"center", padding:"0 32px", justifyContent:"space-between", background: scrolled?"rgba(2,5,12,0.96)":"transparent", backdropFilter: scrolled?"blur(14px)":"none", borderBottom: scrolled?"1px solid #0e1a2e":"1px solid transparent", transition:"all .3s" }}>
      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
        <div style={{ width:24, height:24, borderRadius:4, background:GRAD }} />
        <Mono style={{ fontSize:20, color:"#dce8ff", letterSpacing:"0.08em", fontFamily:"'Bebas Neue',sans-serif" }}>Fundoria</Mono>
        <span style={{ width:6, height:6, borderRadius:"50%", background:GREEN, animation:"pulse 2s infinite" }} />
      </div>
      <div style={{ display:"flex", gap:32, alignItems:"center" }}>
        {[["vision","VISION"],["protocol-section","PROTOCOL"],["rewards-section","REWARDS"],["token-section","TOKEN"],["faq-section","FAQ"]].map(([id,label]) => (
          <button key={id} onClick={() => go(id)} style={{ background:"transparent", border:"none", color:"#3a5070", fontSize:10, fontFamily:"'Space Mono',monospace", letterSpacing:"0.12em", cursor:"pointer" }}>{label}</button>
        ))}
        <Mono style={{ fontSize:10, color:BLUE, letterSpacing:"0.12em", cursor:"pointer" }}>WHITEPAPER</Mono>
      </div>
      <button onClick={() => go("whitelist-section")} style={{ background:GRAD, border:"none", padding:"8px 20px", borderRadius:3, color:"#fff", fontSize:10, fontFamily:"'Space Mono',monospace", letterSpacing:"0.1em", cursor:"pointer" }}>WHITELIST ●</button>
    </nav>
  );
}

/* ─── HERO ───────────────────────────────────────────────── */
function Hero() {
  const [tick, setTick] = useState(0);
  useEffect(() => { const id = setInterval(() => setTick(t => t + 1), 70); return () => clearInterval(id); }, []);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@!";
  const scramble = (word, phase) => word.split("").map((c, i) => i < phase ? c : chars[Math.floor(Math.random() * chars.length)]).join("");

  return (
    <section id="vision" style={{ minHeight:"94vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"100px 24px 64px", position:"relative" }}>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 60% 50% at 50% 0%, #081428 0%, #02050c 100%)", zIndex:0 }} />
      <div style={{ position:"absolute", top:0, left:"50%", transform:"translateX(-50%)", width:1, height:"45%", background:`linear-gradient(${BLUE}30,transparent)`, zIndex:0 }} />
      <div style={{ position:"relative", zIndex:1, maxWidth:880 }}>
        <Fade>
          <div style={{ display:"flex", gap:10, justifyContent:"center", marginBottom:32, flexWrap:"wrap" }}>
            <Tag color={BLUE}>PRE-LAUNCH</Tag>
            <Tag color={GREEN}>HYPEREVM NATIVE</Tag>
            <Tag color="#3a5070">PHASE 01: ACTIVE</Tag>
          </div>
        </Fade>
        <Fade delay={0.1}>
          <Mono style={{ fontSize:11, color:BLUE, letterSpacing:"0.2em", display:"block", marginBottom:14 }}>[ SYSTEM_INIT ]</Mono>
          <h1 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(56px,10vw,116px)", lineHeight:0.88, margin:0, color:"#dce8ff", letterSpacing:"0.02em" }}>
            {scramble("PROTOCOL-NATIVE", Math.min(15, tick - 5))}
            <br />
            <GT>{scramble("CAPITAL MARKETS", Math.min(15, tick - 20))}</GT>
          </h1>
        </Fade>
        <Fade delay={0.25}>
          <p style={{ fontSize:16, color:"#4a6484", maxWidth:560, margin:"28px auto 0", lineHeight:1.8, fontStyle:"italic" }}>
            Fundoria is a non-custodial capital markets protocol on HyperEVM — where trader skill is verified on-chain, risk is enforced by smart contracts, and capital allocation is fully programmable.
          </p>
        </Fade>
        <Fade delay={0.4}>
          <div style={{ display:"flex", gap:14, justifyContent:"center", marginTop:40, flexWrap:"wrap" }}>
            <button onClick={() => document.getElementById("whitelist-section").scrollIntoView({behavior:"smooth"})} style={{ background:GRAD, border:"none", padding:"14px 36px", borderRadius:4, color:"#fff", fontSize:12, fontFamily:"'Space Mono',monospace", letterSpacing:"0.1em", cursor:"pointer" }}>
              WHITELIST NOW
            </button>
            <button onClick={() => document.getElementById("protocol-section").scrollIntoView({behavior:"smooth"})} style={{ background:"transparent", border:"1px solid #1a2d46", padding:"14px 36px", borderRadius:4, color:"#6080a0", fontSize:12, fontFamily:"'Space Mono',monospace", letterSpacing:"0.1em", cursor:"pointer" }}>
              READ DOCUMENTATION
            </button>
          </div>
        </Fade>
        <Fade delay={0.55}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:1, maxWidth:560, margin:"60px auto 0", background:"#0e1a2e" }}>
            {[["HyperEVM","NETWORK"],["0%","CUSTODY"],["On-Chain","RISK ENGINE"],["Live Alpha","STATUS"]].map(([v,l],i) => (
              <div key={i} style={{ background:"#04080f", padding:"18px 8px", textAlign:"center" }}>
                <p style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:20, color:"#dce8ff", margin:"0 0 4px", letterSpacing:"0.06em" }}>{v}</p>
                <p style={{ fontSize:9, color:"#2a3f58", fontFamily:"'Space Mono',monospace", letterSpacing:"0.12em", margin:0 }}>{l}</p>
              </div>
            ))}
          </div>
        </Fade>
        <Fade delay={0.65}>
          <Mono style={{ fontSize:11, color:"#2a3f58", display:"block", marginTop:32, letterSpacing:"0.08em" }}>SCROLL ↓</Mono>
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
        <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(42px,6vw,76px)", color:"#dce8ff", margin:"0 0 16px", lineHeight:0.9 }}>
          NON-CUSTODIAL.<br /><GT>NOT DISCRETIONARY.</GT>
        </h2>
        <p style={{ fontSize:14, color:"#4a6484", maxWidth:460, lineHeight:1.75 }}>
          Every constraint and settlement is enforced by code — not human gatekeepers. Fundoria coordinates capital with zero intermediary trust.
        </p>
      </Fade>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:1, marginTop:56, background:"#0a1220" }}>
        {MODULES.map((m, i) => (
          <Fade key={i} delay={i * 0.06}>
            <div onClick={() => setActive(active === i ? null : i)} style={{ padding:"28px 30px", background: active===i?"#081428":"#04080f", borderLeft:`2px solid ${active===i?BLUE:"transparent"}`, cursor:"pointer", transition:"all .2s" }}>
              <Mono style={{ fontSize:9, color: active===i?GREEN:"#2a3f58", letterSpacing:"0.14em", display:"block", marginBottom:6 }}>LOGIC_MODULE::{m.id}</Mono>
              <p style={{ fontSize:13, color: active===i?"#dce8ff":"#6080a0", fontFamily:"'Space Mono',monospace", letterSpacing:"0.06em", margin:"0 0 10px", fontWeight:"bold" }}>[+ ] {m.label}</p>
              <p style={{ fontSize:13, color:"#3a5070", lineHeight:1.65, margin:0, maxHeight: active===i?200:0, opacity: active===i?1:0, overflow:"hidden", transition:"all .3s" }}>{m.desc}</p>
              {active!==i && <p style={{ fontSize:13, color:"#2a3f58", margin:0, lineHeight:1.5 }}>{m.desc.slice(0,60)}…</p>}
            </div>
          </Fade>
        ))}
      </div>

      {/* Signal Flow */}
      <Fade delay={0.3}>
        <div style={{ marginTop:80, padding:"36px 40px", border:"1px solid #0e1a2e" }}>
          <Mono style={{ fontSize:10, color:"#3a5070", letterSpacing:"0.14em", display:"block", marginBottom:28 }}>PROTOCOL SIGNAL FLOW — VERIFIABLE ON-CHAIN ROUTING FROM CAPITAL CONTAINER TO EXECUTION VENUE.</Mono>
          <div style={{ display:"flex", alignItems:"center", position:"relative" }}>
            {[["CAPITAL","VAULTS"],["IDENTITY","HYPEREVM"],["RISK","GUARDIAN"],["EXEC","HYPERLIQUID"]].map(([top,bot],i) => (
              <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", position:"relative" }}>
                {i > 0 && <div style={{ position:"absolute", left:"-50%", top:24, width:"100%", height:1, background:`linear-gradient(90deg,#1a2d46,${BLUE}30)` }} />}
                <div style={{ width:48, height:48, borderRadius:"50%", border:`2px solid ${i===0?BLUE:"#1a2d46"}`, display:"flex", alignItems:"center", justifyContent:"center", background: i===0?"#081428":"#04080f", position:"relative", zIndex:1 }}>
                  {i===0 && <div style={{ width:10, height:10, borderRadius:"50%", background:BLUE }} />}
                </div>
                <Mono style={{ fontSize:9, color:"#dce8ff", letterSpacing:"0.1em", marginTop:10, display:"block" }}>{top}</Mono>
                <Mono style={{ fontSize:8, color:"#2a3f58", letterSpacing:"0.1em", display:"block" }}>{bot}</Mono>
              </div>
            ))}
          </div>
        </div>
      </Fade>

      {/* Protocol Vision */}
      <Fade delay={0.2}>
        <div style={{ marginTop:80, display:"grid", gridTemplateColumns:"1fr 1fr", gap:40, alignItems:"center" }}>
          <div>
            <Mono style={{ fontSize:10, color:BLUE, letterSpacing:"0.18em", display:"block", marginBottom:16 }}>PROTOCOL VISION</Mono>
            <h3 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(32px,4vw,52px)", color:"#dce8ff", margin:"0 0 16px", lineHeight:0.95 }}>
              PROTOCOL-NATIVE<br /><GT>capital markets.</GT>
            </h3>
            <p style={{ fontSize:14, color:"#4a6484", lineHeight:1.75 }}>
              Fundoria establishes a protocol-controlled infrastructure that coordinates traders and capital within a unified, rule-enforced system. Trading skill becomes a verifiable on-chain primitive, independent of custody.
            </p>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:1 }}>
            {[
              ["0x_00","Programmatic capital allocation governed by code"],
              ["0x_01","Risk constraints enforced at protocol level"],
              ["0x_02","Verifiable performance regardless of balance size"],
              ["0x_03","Non-custodial capital managed via vaults"],
            ].map(([code,text],i) => (
              <Fade key={i} delay={i*0.08}>
                <div style={{ display:"flex", gap:16, alignItems:"flex-start", padding:"16px 20px", background:"#04080f", borderLeft:`2px solid ${BLUE}20` }}>
                  <Mono style={{ fontSize:9, color:GREEN, letterSpacing:"0.1em", paddingTop:2, minWidth:44 }}>{code}</Mono>
                  <span style={{ fontSize:13, color:"#6080a0", lineHeight:1.55 }}>{text}</span>
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
  useEffect(() => { const id = setInterval(() => setTraceTick(t => (t+1)%4), 1200); return () => clearInterval(id); }, []);

  return (
    <section style={{ padding:"100px 24px", background:"#030810", borderTop:"1px solid #0e1a2e" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <Fade>
          <Mono style={{ fontSize:10, color:BLUE, letterSpacing:"0.18em", display:"block", marginBottom:12 }}>ARCHITECTURE</Mono>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(38px,5.5vw,68px)", color:"#dce8ff", margin:"0 0 12px", lineHeight:0.92 }}>
            PROTOCOL COMPONENTS &<br /><GT>EXECUTION FLOW.</GT>
          </h2>
          <p style={{ fontSize:14, color:"#4a6484", maxWidth:480, lineHeight:1.75 }}>
            Fundoria separates capital custody, execution, and risk enforcement into verifiable, auditable components.
          </p>
        </Fade>

        <Fade delay={0.15}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:1, marginTop:56, background:"#0a1220" }}>
            {ARCH_STAGES.map((s, i) => (
              <div key={i} onClick={() => setActive(i)} style={{ padding:"24px", background: active===i?"#081428":"#04080f", borderTop:`2px solid ${active===i?BLUE:"transparent"}`, cursor:"pointer", transition:"all .2s" }}>
                <Mono style={{ fontSize:9, color:active===i?GREEN:"#2a3f58", letterSpacing:"0.12em", display:"block", marginBottom:6 }}>STAGE::{s.id} / {s.layer}</Mono>
                <p style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:18, color:"#dce8ff", letterSpacing:"0.06em", margin:"0 0 4px" }}>{s.title}</p>
                <Mono style={{ fontSize:10, color:"#3a5070", letterSpacing:"0.08em", display:"block" }}>{s.sub}</Mono>
              </div>
            ))}
          </div>
        </Fade>

        <Fade delay={0.2}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:1, background:"#0e1a2e" }}>
            {["↑ CAPITAL_IN","↑ ORACLE_VALIDATED","↑ SETTLEMENT","↑ HYPERLIQUID_EXEC"].map((l,i) => (
              <div key={i} style={{ padding:"8px 24px", background:"#04080f" }}>
                <Mono style={{ fontSize:9, color:"#2a3f58", letterSpacing:"0.08em" }}>{l}</Mono>
              </div>
            ))}
          </div>
        </Fade>

        <Fade delay={0.1}>
          <div style={{ marginTop:1, padding:"28px 32px", background:"#04080f", border:"1px solid #0e1a2e" }}>
            <Mono style={{ fontSize:9, color:GREEN, letterSpacing:"0.12em", display:"block", marginBottom:8 }}>STAGE::{ARCH_STAGES[active].id} / {ARCH_STAGES[active].layer}</Mono>
            <p style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:22, color:"#dce8ff", letterSpacing:"0.06em", margin:"0 0 8px" }}>{ARCH_STAGES[active].title}</p>
            <p style={{ fontSize:13, color:"#4a6484", lineHeight:1.7, margin:0, maxWidth:640 }}>{ARCH_STAGES[active].desc}</p>
          </div>
        </Fade>

        <Fade delay={0.25}>
          <div style={{ marginTop:40, padding:"28px 32px", background:"#030810", border:"1px solid #0e1a2e", fontFamily:"'Space Mono',monospace" }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20 }}>
              <Mono style={{ fontSize:10, color:"#3a5070", letterSpacing:"0.12em" }}>TRACE_LOG :: STAGE_0{active+1}</Mono>
              <Mono style={{ fontSize:9, color:GREEN, letterSpacing:"0.1em" }}>● LIVE</Mono>
            </div>
            {TRACE_LINES.map(([comment, code], i) => (
              <div key={i} style={{ marginBottom:10, opacity: i<=traceTick?1:0.2, transition:"opacity .4s" }}>
                <Mono style={{ fontSize:11, color:"#2a3f58", display:"block" }}>{comment}</Mono>
                <Mono style={{ fontSize:12, color: i===traceTick?GREEN:"#4a6484", display:"block" }}>{code}{i===traceTick?" █":""}</Mono>
              </div>
            ))}
            <div style={{ marginTop:16, display:"flex", gap:20 }}>
              <Mono style={{ fontSize:9, color:"#1a2d46" }}>DETERMINISTIC_RULES</Mono>
              <Mono style={{ fontSize:9, color:"#1a2d46" }}>AUDIT_TRAIL::ON_CHAIN</Mono>
            </div>
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
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(38px,5vw,64px)", color:"#dce8ff", margin:"0 0 20px", lineHeight:0.92 }}>
            RISK AS CODE.<br /><GT>NOT POLICY.</GT>
          </h2>
          <p style={{ fontSize:14, color:"#4a6484", lineHeight:1.75, marginBottom:32 }}>
            Constraints are enforced pre-execution through protocol-level gating. No manual overrides. No discretionary exceptions. Fundoria operates as a headless risk manager — rules are executable logic, not governance choices.
          </p>
          {RISK_ITEMS.map((r, i) => (
            <Fade key={i} delay={i * 0.07}>
              <div style={{ display:"flex", gap:16, alignItems:"flex-start", marginBottom:14 }}>
                <Mono style={{ fontSize:9, color:GREEN, letterSpacing:"0.12em", paddingTop:2, minWidth:44 }}>{r.code}</Mono>
                <span style={{ fontSize:13, color:"#6080a0", lineHeight:1.55 }}>{r.label}</span>
              </div>
            </Fade>
          ))}
        </Fade>

        <Fade delay={0.2}>
          <div style={{ border:"1px solid #0e1a2e", padding:"30px", fontFamily:"'Space Mono',monospace" }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:24 }}>
              <Mono style={{ fontSize:10, color:"#3a5070", letterSpacing:"0.12em" }}>SECURE_MONITOR_V1.07</Mono>
              <Mono style={{ fontSize:9, color:GREEN, letterSpacing:"0.1em" }}>● ALIVE</Mono>
            </div>
            <Mono style={{ fontSize:9, color:"#2a3f58", display:"block", marginBottom:20 }}>LOG_ID::8D8593</Mono>
            <Mono style={{ fontSize:9, color:BLUE, letterSpacing:"0.1em", display:"block", marginBottom:12 }}>#ROOT-LEVEL DRAWDOWN CAPS</Mono>

            {[["MAX DRAWDOWN","5.00%","ACTIVE"],["DAILY LOSS LIMIT","2.50%","ACTIVE"],["EXPOSURE CAP","10.0×","ACTIVE"],["LATENCY","< 1.2ms","CRITICAL"],["PRIORITY","CRITICAL","—"],["SMART CONTRACTS","IN AUDIT","PENDING"]].map(([l,v,s],i) => (
              <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 0", borderBottom:"1px solid #0a1220" }}>
                <Mono style={{ fontSize:10, color:"#3a5070", letterSpacing:"0.08em" }}>{l}</Mono>
                <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <Mono style={{ fontSize:13, color:"#dce8ff", letterSpacing:"0.04em" }}>{v}</Mono>
                  <span style={{ fontSize:8, color: s==="CRITICAL"?"#ff6060":s==="PENDING"?"#f0a030":GREEN, border:`1px solid ${s==="CRITICAL"?"#ff606030":s==="PENDING"?"#f0a03030":"#00C89630"}`, padding:"2px 8px", borderRadius:2 }}>{s}</span>
                </div>
              </div>
            ))}

            <div style={{ marginTop:20, padding:"12px 16px", background:"#081428", border:`1px solid ${BLUE}20` }}>
              <Mono style={{ fontSize:9, color:"#3a5070", letterSpacing:"0.08em", display:"block" }}>ABSOLUTE_LOSS_CEILING DD_THRESHOLD_01</Mono>
              <Mono style={{ fontSize:11, color:"#dce8ff", letterSpacing:"0.06em", display:"block", marginTop:4 }}>HARD_CAP: 15%</Mono>
              <Mono style={{ fontSize:9, color:"#2a3f58", display:"block", marginTop:4 }}>Deterministic loss ceilings at sub-account level. Liquidation triggers calculated pre-tick.</Mono>
            </div>

            <Mono style={{ fontSize:9, color:"#1a2d46", display:"block", marginTop:16 }}>ENFORCE_ENGINE::V.ALPHA · AUDIT_TRAIL::ON_CHAIN · SECURE_LINK: {blink?"█":"░"}</Mono>
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
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(38px,5vw,64px)", color:"#dce8ff", margin:"0 0 12px", lineHeight:0.92 }}>
            PERFORMANCE-DRIVEN<br /><GT>CAPITAL ACCESS.</GT>
          </h2>
          <p style={{ fontSize:14, color:"#4a6484", maxWidth:520, lineHeight:1.75 }}>
            Capital access and scaling are determined algorithmically — based on observed performance and compliance with enforced risk constraints, not subjective approval or off-chain negotiation.
          </p>
        </Fade>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1, marginTop:56, background:"#0a1220" }}>
          {[
            { label:"TRADER INCENTIVES", icon:"T", value:"22%", sub:"of FND supply", desc:"Performance-based profit sharing derived from vault participation. Splits scale with verification tier, consistency, and long-term track record." },
            { label:"ECOSYSTEM & TREASURY", icon:"E", value:"17%", sub:"of FND supply", desc:"Ecosystem growth, third-party integrations, DAO treasury deployment, and long-term protocol sustainability. Governed by token holders." },
            { label:"LIQUIDITY PROVISION", icon:"L", value:"8%", sub:"of FND supply", desc:"Seeded liquidity for FND token markets and vault bootstrapping. Released progressively aligned with protocol milestones." },
          ].map((r, i) => (
            <Fade key={i} delay={i * 0.1}>
              <div style={{ background:"#04080f", padding:"32px", borderTop:`2px solid ${BLUE}40` }}>
                <div style={{ width:40, height:40, borderRadius:"50%", border:`1px solid ${BLUE}40`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:20 }}>
                  <Mono style={{ fontSize:14, color:BLUE }}>{r.icon}</Mono>
                </div>
                <Mono style={{ fontSize:10, color:"#3a5070", letterSpacing:"0.14em", display:"block", marginBottom:8 }}>{r.label}</Mono>
                <p style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:36, color:"#dce8ff", margin:"0 0 2px", letterSpacing:"0.06em" }}>{r.value}</p>
                <Mono style={{ fontSize:9, color:GREEN, letterSpacing:"0.1em", display:"block", marginBottom:14 }}>{r.sub}</Mono>
                <p style={{ fontSize:13, color:"#4a6484", lineHeight:1.65, margin:0 }}>{r.desc}</p>
              </div>
            </Fade>
          ))}
        </div>

        <Fade delay={0.3}>
          <div style={{ marginTop:48, padding:"32px 40px", border:"1px solid #0e1a2e", display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:32 }}>
            {[["TRADERS","Attract capital via verified performance"],["CAPITAL","Incentivises disciplined risk-adjusted returns"],["PERFORMANCE","Increases institutional participation"],["GOVERNANCE","Evolves risk and allocation frameworks"]].map(([title,desc],i) => (
              <div key={i}>
                <Mono style={{ fontSize:10, color:BLUE, letterSpacing:"0.12em", display:"block", marginBottom:8 }}>{title}</Mono>
                <p style={{ fontSize:12, color:"#3a5070", lineHeight:1.6, margin:0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ─── TOKEN ──────────────────────────────────────────────── */
function Token() {
  let cum = 0;
  const segs = TOKEN_ALLOC.map(t => {
    const s = (cum / 100) * 2 * Math.PI - Math.PI / 2;
    cum += t.pct;
    const e = (cum / 100) * 2 * Math.PI - Math.PI / 2;
    const r = 80, cx = 100, cy = 100;
    const x1 = cx + r * Math.cos(s), y1 = cy + r * Math.sin(s);
    const x2 = cx + r * Math.cos(e), y2 = cy + r * Math.sin(e);
    return { ...t, d:`M${cx},${cy} L${x1.toFixed(2)},${y1.toFixed(2)} A${r},${r} 0 ${e - s > Math.PI ? 1 : 0},1 ${x2.toFixed(2)},${y2.toFixed(2)} Z` };
  });

  return (
    <section id="token-section" style={{ padding:"120px 24px", maxWidth:1100, margin:"0 auto" }}>
      <Fade>
        <Mono style={{ fontSize:10, color:BLUE, letterSpacing:"0.18em", display:"block", marginBottom:12 }}>TOKEN ARCHITECTURE</Mono>
        <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(38px,5vw,64px)", color:"#dce8ff", margin:"0 0 12px", lineHeight:0.92 }}>
          THE $FND<br /><GT>COORDINATION UTILITY LAYER.</GT>
        </h2>
        <p style={{ fontSize:14, color:"#4a6484", maxWidth:520, lineHeight:1.75, marginTop:16 }}>
          $FND aligns traders, capital providers, and contributors through native coordination mechanisms and verifiable access rules.
        </p>
      </Fade>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1, marginTop:56, background:"#0a1220" }}>
        {TOKEN_CARDS.map((c, i) => (
          <Fade key={i} delay={i * 0.08}>
            <div style={{ background:"#04080f", padding:"28px 28px" }}>
              <Mono style={{ fontSize:10, color:BLUE, letterSpacing:"0.12em", display:"block", marginBottom:10 }}>{c.label}</Mono>
              <p style={{ fontSize:13, color:"#4a6484", lineHeight:1.65, margin:0 }}>{c.desc}</p>
            </div>
          </Fade>
        ))}
      </div>

      <Fade delay={0.2}>
        <div style={{ marginTop:40, padding:"36px", border:"1px solid #0e1a2e" }}>
          <Mono style={{ fontSize:10, color:"#3a5070", letterSpacing:"0.14em", display:"block", marginBottom:28 }}>TOKEN ALLOCATION — SUPPLY: 1,000,000,000 $FND</Mono>
          <div style={{ display:"flex", alignItems:"center", gap:40, flexWrap:"wrap" }}>
            <svg width="200" height="200" viewBox="0 0 200 200" style={{ flexShrink:0 }}>
              {segs.map((s, i) => <path key={i} d={s.d} fill={s.color} opacity={0.9} />)}
              <circle cx="100" cy="100" r="52" fill="#04080f" />
              <text x="100" y="96" textAnchor="middle" fontFamily="'Bebas Neue',sans-serif" fontSize="16" fill="#dce8ff">$FND</text>
              <text x="100" y="111" textAnchor="middle" fontFamily="'Space Mono',monospace" fontSize="8" fill="#3a5070">1B SUPPLY</text>
            </svg>
            <div style={{ flex:1, minWidth:200 }}>
              {TOKEN_ALLOC.map((t, i) => (
                <div key={i} style={{ marginBottom:14 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:4 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                      <div style={{ width:8, height:8, borderRadius:"50%", background:t.color }} />
                      <Mono style={{ fontSize:11, color:"#6080a0" }}>{t.label}</Mono>
                    </div>
                    <Mono style={{ fontSize:13, color:"#dce8ff", fontWeight:"bold" }}>{t.pct}%</Mono>
                  </div>
                  <div style={{ height:2, background:"#0a1220", borderRadius:1 }}>
                    <div style={{ width:`${t.pct}%`, height:"100%", background:t.color, borderRadius:1 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fade>

      <Fade delay={0.3}>
        <div style={{ marginTop:32, display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:1, background:"#0a1220" }}>
          {[["VERIFICATION","VAULT ISOLATION"],["GOVERNANCE","DAO GOVERNED"],["INCENTIVES","ECOSYSTEM REWARDS"],["RISK ENGINE","HARD BOUNDS ACTIVE"]].map(([l,v],i) => (
            <div key={i} style={{ background:"#04080f", padding:"20px 24px" }}>
              <Mono style={{ fontSize:9, color:BLUE, letterSpacing:"0.12em", display:"block", marginBottom:6 }}>$FND</Mono>
              <Mono style={{ fontSize:10, color:"#dce8ff", letterSpacing:"0.08em", display:"block", marginBottom:4 }}>{l}</Mono>
              <Mono style={{ fontSize:9, color:GREEN, letterSpacing:"0.08em", display:"block" }}>{v}</Mono>
            </div>
          ))}
        </div>
      </Fade>

      <Fade delay={0.1}>
        <div style={{ marginTop:32, padding:"20px 28px", border:"1px solid #0a1220" }}>
          <Mono style={{ fontSize:9, color:"#2a3f58", letterSpacing:"0.08em", lineHeight:1.7, display:"block" }}>
            [ GLOBAL_DISCLOSURE ] — $FND IS A COORDINATION UTILITY TOKEN. IT IS NOT AN INVESTMENT CONTRACT, SECURITY, OR CLAIM ON PROTOCOL REVENUE OR TRADER PERFORMANCE. ALLOCATION FIGURES ARE ILLUSTRATIVE AND SUBJECT TO CHANGE. PARTICIPATION IS SUBJECT TO PROTOCOL ELIGIBILITY AND LOCAL REGULATORY COMPLIANCE.
          </Mono>
        </div>
      </Fade>
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
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(38px,5vw,64px)", color:"#dce8ff", margin:"0 0 8px", lineHeight:0.92 }}>
            POSITION YOUR SKILL<br /><GT>AS INFRASTRUCTURE.</GT>
          </h2>
          <Mono style={{ fontSize:11, color:"#3a5070", letterSpacing:"0.1em", display:"block", marginBottom:0 }}>No discretionary gates. Phased onboarding active.</Mono>
        </Fade>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1, marginTop:56 }}>
          {CLASSES.map((c, i) => (
            <Fade key={i} delay={i * 0.1}>
              <div style={{ background:"#04080f", padding:"32px", borderTop:`2px solid ${c.accent}`, display:"flex", flexDirection:"column" }}>
                <Mono style={{ fontSize:9, color:c.accent, letterSpacing:"0.14em", display:"block", marginBottom:4 }}>{c.id}</Mono>
                <Mono style={{ fontSize:9, color:"#2a3f58", letterSpacing:"0.1em", display:"block", marginBottom:16 }}>class / {c.class}</Mono>
                <p style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:22, color:"#dce8ff", letterSpacing:"0.06em", margin:"0 0 4px" }}>{c.tag}</p>
                <Mono style={{ fontSize:10, color:"#2a3f58", letterSpacing:"0.08em", display:"block", marginBottom:22 }}>{c.settle}</Mono>
                {c.items.map((item, j) => (
                  <div key={j} style={{ display:"flex", gap:12, marginBottom:11, alignItems:"flex-start" }}>
                    <Mono style={{ color:c.accent, fontSize:10, paddingTop:1, flexShrink:0 }}>0{j+1}</Mono>
                    <span style={{ fontSize:13, color:"#4a6484", lineHeight:1.55 }}>{item}</span>
                  </div>
                ))}
                <button onClick={() => document.getElementById("whitelist-section").scrollIntoView({behavior:"smooth"})} style={{ marginTop:"auto", paddingTop:24, width:"100%", padding:"12px 0", background:"transparent", border:`1px solid ${c.accent}30`, color:c.accent, fontSize:10, fontFamily:"'Space Mono',monospace", letterSpacing:"0.12em", cursor:"pointer" }}>
                  {c.cta} →
                </button>
              </div>
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
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(38px,5vw,64px)", color:"#dce8ff", margin:"0 0 12px", lineHeight:0.92 }}>
            PROTOCOL<br /><GT>INTEGRATIONS.</GT>
          </h2>
          <p style={{ fontSize:14, color:"#4a6484", maxWidth:520, lineHeight:1.75 }}>
            Fundoria provides institution-grade connectivity for high-throughput strategies, secure treasury scaling, and verifiable performance reporting.
          </p>
        </Fade>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:1, marginTop:56, background:"#0a1220" }}>
          <Fade delay={0.1}>
            <div style={{ background:"#04080f", padding:"36px", borderLeft:`2px solid ${BLUE}30` }}>
              <Mono style={{ fontSize:10, color:BLUE, letterSpacing:"0.14em", display:"block", marginBottom:12 }}>COMPLIANCE READY</Mono>
              <p style={{ fontSize:13, color:"#4a6484", lineHeight:1.7, margin:0 }}>
                Verifiable on-chain audit trails and rule-enforced risk parameters for institutional mandates. Every allocation decision is attributable, reproducible, and checkpointed on-chain.
              </p>
            </div>
          </Fade>
          <Fade delay={0.15}>
            <div style={{ background:"#04080f", padding:"36px", borderLeft:`2px solid ${GREEN}30` }}>
              <Mono style={{ fontSize:10, color:GREEN, letterSpacing:"0.14em", display:"block", marginBottom:12 }}>CLEAN LIQUIDITY</Mono>
              <p style={{ fontSize:13, color:"#4a6484", lineHeight:1.7, margin:0 }}>
                Direct settlement on HyperEVM with non-custodial capital protection at every execution layer. No counterparty custody risk. No discretionary override path.
              </p>
            </div>
          </Fade>
        </div>

        <Fade delay={0.2}>
          <div style={{ marginTop:1, background:"#04080f", padding:"40px 40px", border:"1px solid #0e1a2e" }}>
            <Mono style={{ fontSize:10, color:"#3a5070", letterSpacing:"0.14em", display:"block", marginBottom:16 }}>INSTITUTIONAL ONBOARDING</Mono>
            <h3 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:28, color:"#dce8ff", margin:"0 0 12px", letterSpacing:"0.06em" }}>
              DISCUSS CUSTOM MANDATES, API ACCESS, OR DAO TREASURY INTEGRATIONS WITH OUR CONTRIBUTORS.
            </h3>
            <div style={{ display:"flex", gap:16, marginTop:24, flexWrap:"wrap" }}>
              <button onClick={() => document.getElementById("whitelist-section").scrollIntoView({behavior:"smooth"})} style={{ background:GRAD, border:"none", padding:"12px 28px", borderRadius:3, color:"#fff", fontSize:11, fontFamily:"'Space Mono',monospace", letterSpacing:"0.1em", cursor:"pointer" }}>
                REQUEST INSTITUTIONAL ACCESS
              </button>
              <a href="mailto:PARTNERS@FUNDORIA.IO" style={{ display:"flex", alignItems:"center", padding:"12px 28px", border:"1px solid #1a2d46", borderRadius:3, color:"#6080a0", fontSize:11, fontFamily:"'Space Mono',monospace", letterSpacing:"0.1em", textDecoration:"none" }}>
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
        <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(38px,5vw,64px)", color:"#dce8ff", margin:"0 0 8px", lineHeight:0.92 }}>
          THE <GT>EVOLUTION.</GT>
        </h2>
        <p style={{ fontSize:14, color:"#4a6484", maxWidth:420, lineHeight:1.75, marginTop:12 }}>
          From core infrastructure to institutional capital markets. Each phase builds on verified foundations before proceeding.
        </p>
      </Fade>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1, marginTop:56, background:"#0a1220" }}>
        {ROADMAP.map((r, i) => (
          <Fade key={i} delay={i * 0.12}>
            <div style={{ background:"#04080f", padding:"32px", position:"relative" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:20 }}>
                <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:52, color:"#0a1220", lineHeight:1 }}>0{r.phase}</span>
                <span style={{ fontSize:9, color:r.status==="ACTIVE"?GREEN:"#2a3f58", border:`1px solid ${r.status==="ACTIVE"?GREEN+"30":"#1a2d46"}`, padding:"3px 10px", fontFamily:"'Space Mono',monospace", letterSpacing:"0.12em" }}>{r.status}</span>
              </div>
              <Mono style={{ fontSize:9, color:"#2a3f58", letterSpacing:"0.14em", display:"block", marginBottom:6 }}>MISSION_LOG_PHASE_0{r.phase}.TXT</Mono>
              <p style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:22, color:"#dce8ff", letterSpacing:"0.06em", margin:"0 0 4px" }}>{r.title}</p>
              <Mono style={{ fontSize:10, color:GREEN, letterSpacing:"0.08em", display:"block", marginBottom:20 }}>{r.sub}</Mono>
              {r.items.map((item, j) => (
                <div key={j} style={{ display:"flex", gap:12, marginBottom:10 }}>
                  <span style={{ color:"#1a2d46", fontSize:11, flexShrink:0 }}>›</span>
                  <span style={{ fontSize:13, color:"#3a5070", lineHeight:1.55 }}>{item}</span>
                </div>
              ))}
              <Mono style={{ fontSize:9, color:"#1a2d46", letterSpacing:"0.1em", display:"block", marginTop:20 }}>MILESTONE-GATED — NO FIXED DATE</Mono>
            </div>
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
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(38px,5vw,64px)", color:"#dce8ff", margin:"0 0 48px", lineHeight:0.92 }}>
            TECHNICAL <GT>FAQ.</GT>
          </h2>
          <Mono style={{ fontSize:10, color:"#2a3f58", letterSpacing:"0.1em", display:"block", marginBottom:32 }}>Direct answers for protocol-native capital markets.</Mono>
        </Fade>
        {FAQS.map((f, i) => (
          <Fade key={i} delay={i * 0.04}>
            <div style={{ borderBottom:"1px solid #0a1220" }}>
              <button onClick={() => setOpen(open===i?null:i)} style={{ width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"18px 0", background:"transparent", border:"none", cursor:"pointer", textAlign:"left" }}>
                <div style={{ display:"flex", gap:16, alignItems:"center" }}>
                  <Mono style={{ fontSize:10, color:open===i?BLUE:"#2a3f58" }}>{">?"}</Mono>
                  <Mono style={{ fontSize:13, color:"#6080a0", letterSpacing:"0.04em" }}>{f.q}</Mono>
                </div>
                <span style={{ color:open===i?GREEN:BLUE, fontSize:18, fontFamily:"monospace", flexShrink:0, marginLeft:16 }}>{open===i?"−":"+"}</span>
              </button>
              {open===i && (
                <div style={{ paddingBottom:20 }}>
                  <Mono style={{ fontSize:9, color:GREEN, letterSpacing:"0.1em", display:"block", marginBottom:8 }}>SYS::RESPONSE_STREAM</Mono>
                  <p style={{ fontSize:13, color:"#4a6484", lineHeight:1.75, margin:"0 0 12px", paddingLeft:26 }}>{f.a}</p>
                  <div style={{ display:"flex", gap:16, paddingLeft:26 }}>
                    <Mono style={{ fontSize:9, color:"#1a2d46" }}>INTEGRITY CHECK [OK]</Mono>
                    <Mono style={{ fontSize:9, color:"#1a2d46" }}>SOURCE: PROTOCOL_DOC_0X4F</Mono>
                  </div>
                </div>
              )}
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
      <div style={{ width:48, height:48, borderRadius:"50%", border:`2px solid ${GREEN}`, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px", color:GREEN, fontSize:22 }}>✓</div>
      <p style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:28, color:"#dce8ff", letterSpacing:"0.06em", margin:"0 0 8px" }}>YOU'RE IN.</p>
      <Mono style={{ fontSize:12, color:"#3a5070", display:"block" }}>We'll be in touch with early access details. Watch your inbox.</Mono>
    </div>
  );

  return (
    <div>
      <div style={{ display:"flex", border:"1px solid #1a2d46", borderRadius:4, overflow:"hidden", maxWidth:480, margin:"0 auto" }}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key==="Enter"&&submit()} placeholder="protocol@access.link" style={{ flex:1, background:"#04080f", border:"none", outline:"none", padding:"14px 16px", fontSize:12, color:"#8aaccc", fontFamily:"'Space Mono',monospace", letterSpacing:"0.04em" }} />
        <button onClick={submit} disabled={loading} style={{ background:GRAD, border:"none", padding:"0 22px", cursor:"pointer", fontSize:11, fontFamily:"'Space Mono',monospace", color:"#fff", letterSpacing:"0.1em", whiteSpace:"nowrap" }}>
          {loading?"...":"FND::WHITELIST.REGISTER →"}
        </button>
      </div>
      {err && <Mono style={{ color:"#ff6060", fontSize:11, textAlign:"center", display:"block", marginTop:8 }}>{err}</Mono>}
      <Mono style={{ fontSize:10, color:"#2a3f58", display:"block", textAlign:"center", marginTop:12, letterSpacing:"0.06em" }}>
        REGISTRATION IS FREE AND DOES NOT CONSTITUTE A PURCHASE, ALLOCATION, OR COMMITMENT OF ANY KIND.
      </Mono>
    </div>
  );
}

function WhitelistSection() {
  return (
    <section id="whitelist-section" style={{ padding:"120px 24px", textAlign:"center", position:"relative" }}>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 70% 60% at 50% 100%, #081428 0%, #02050c 100%)", zIndex:0 }} />
      <div style={{ position:"relative", zIndex:1, maxWidth:640, margin:"0 auto" }}>
        <Fade>
          <Tag color={GREEN}>PHASED ONBOARDING ACTIVE</Tag>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(44px,8vw,90px)", color:"#dce8ff", margin:"24px 0 12px", lineHeight:0.88 }}>
            JOIN THE<br /><GT>FUNDORIA WHITELIST.</GT>
          </h2>
          <p style={{ fontSize:14, color:"#4a6484", lineHeight:1.75, marginBottom:8 }}>
            Members receive priority onboarding, early governance visibility, and standing invitations to contributor sessions.
          </p>
        </Fade>
        <Fade delay={0.15}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:0, marginBottom:36, maxWidth:560, margin:"24px auto 36px" }}>
            {["Early access to the trading interface during evaluation phases","Priority eligibility for trader verification cohorts","Governance previews and contributor sessions","Direct ecosystem updates ahead of public release"].map((b,i) => (
              <div key={i} style={{ display:"flex", gap:10, alignItems:"flex-start", padding:"8px 0" }}>
                <span style={{ color:GREEN, fontSize:12, paddingTop:1, flexShrink:0 }}>0{i+1}</span>
                <Mono style={{ fontSize:11, color:"#3a5070", letterSpacing:"0.04em", textAlign:"left" }}>{b}</Mono>
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
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <div style={{ width:26, height:26, borderRadius:4, background:GRAD }} />
            <Mono style={{ fontSize:20, color:"#dce8ff", letterSpacing:"0.08em", fontFamily:"'Bebas Neue',sans-serif" }}>Fundoria</Mono>
            <span style={{ width:6, height:6, borderRadius:"50%", background:GREEN, animation:"pulse 2s infinite" }} />
          </div>
          <div style={{ display:"flex", gap:8 }}>
            {[["◻","X / TWITTER"],["○","TELEGRAM"],["◁","DISCORD"]].map(([icon,label],i) => (
              <div key={i} style={{ width:36, height:36, border:"1px solid #0e1a2e", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}>
                <Mono style={{ fontSize:14, color:"#3a5070" }}>{icon}</Mono>
              </div>
            ))}
          </div>
          <div style={{ display:"flex", gap:28, flexWrap:"wrap" }}>
            {["WHITEPAPER","HYPERLIQUID ↗","RISK FRAMEWORK [SOON]","STATUS [V0.1]"].map((l,i) => (
              <Mono key={i} style={{ fontSize:10, color:"#2a3f58", letterSpacing:"0.12em", cursor:"pointer" }}>{l}</Mono>
            ))}
          </div>
          <Mono style={{ fontSize:10, color:"#1a2d46", letterSpacing:"0.06em" }}>© 2026 FUNDORIA · HYPEREVM</Mono>
        </div>
        <div style={{ borderTop:"1px solid #080f1a", paddingTop:20 }}>
          <Mono style={{ fontSize:9, color:"#1a2d46", letterSpacing:"0.06em", lineHeight:1.7, display:"block" }}>
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
    <div style={{ background:"#02050c", minHeight:"100vh", fontFamily:"'DM Sans',sans-serif", color:"#dce8ff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=DM+Sans:ital,wght@0,300;0,500;1,300&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        @keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.25}}
        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-track{background:#02050c}
        ::-webkit-scrollbar-thumb{background:#0e1a2e}
        @media(max-width:768px){
          .grid-2{grid-template-columns:1fr!important}
          .grid-3{grid-template-columns:1fr!important}
          .grid-4{grid-template-columns:1fr 1fr!important}
          .hide-sm{display:none!important}
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
