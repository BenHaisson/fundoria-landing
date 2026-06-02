import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  ChevronLeft, 
  ChevronRight,
  Shield, 
  Zap, 
  TrendingUp,
  Cpu,
  Lock,
  BarChart3,
  Users,
  Menu,
  X,
  Search,
  BookOpen,
  ArrowUpRight,
  Activity,
  History,
  Scale,
  Award,
  Terminal,
  Globe,
  Database,
  Layers,
  Fingerprint,
  PieChart,
  GitBranch
} from 'lucide-react';

interface WhitepaperProps {
  onBack: () => void;
}

interface Subsection {
  subtitle: string;
  content: string;
  viz?: React.ReactNode;
  summary?: string;
}

interface Section {
  id: string;
  title: string;
  file: string;
  icon: React.ReactNode;
  subsections: Subsection[];
}

// Technical UI Primitives
const CodeHeader = ({ title, file, number }: { title: string; file: string; number: string }) => (
  <div className="font-mono bg-blue/5 border border-blue/10 border-l-[4px] border-l-blue p-6 mb-8 relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
       <Terminal className="text-protocol-text w-24 h-24" />
    </div>
    <div className="flex items-center gap-3 text-[10px] text-blue/40 uppercase tracking-[0.3em] mb-4">
       <span className="w-6 h-[1px] bg-blue" /> {file}
    </div>
    <div className="flex gap-5 items-baseline">
       <span className="text-xs text-blue/20 w-8 text-right select-none">{number}</span>
       <span className="text-blue font-bold tracking-tight text-xl">export const <span className="text-protocol-text">{title.replace(/\s/g, '_')}</span> = () =&gt; &#123;</span>
    </div>
  </div>
);

const SectionViz = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="my-12 p-8 bg-blue/5 border border-blue/10 relative overflow-hidden rounded-sm group transition-colors">
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue/50 via-blue/10 to-transparent" />
    <div className="font-mono text-[9px] text-blue uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
       <Activity className="w-3 h-3 animate-pulse" /> // ARCHITECTURE_TRACE: {title}
    </div>
    <div className="relative z-10 text-protocol-text">{children}</div>
    <div className="absolute bottom-0 right-0 p-4 opacity-[0.02]">
      <div className="w-32 h-32 border-[20px] border-blue rounded-full" />
    </div>
  </div>
);

const Synthesis = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-8 p-6 bg-blue/10 border-l-4 border-blue font-sans text-base text-protocol-text-dim leading-relaxed italic relative transition-colors">
     <div className="flex items-start gap-4">
        <div className="text-blue mt-1 shrink-0"><Lock size={18} /></div>
        <div>
           <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-blue mb-2 font-black">// PROTOCOL_CORE_INSIGHT</div>
           {children}
        </div>
     </div>
  </div>
);

const SECTIONS: Section[] = [
  {
    id: 'system-architecture',
    title: '1. High-Level System Architecture',
    file: '01_system_architecture.md',
    icon: <Cpu />,
    subsections: [
      {
        subtitle: '1.1 Architectural Overview',
        content: `Fundoria is architected as a protocol-controlled capital allocation system built on top of a high-performance execution layer. The system enforces strict separation between:

• User interaction (interface layer)
• Capital and risk control (protocol layer)
• Execution (externalized trading engine)
• Computation and verification (indexing layer)

This separation is not cosmetic—it is foundational to:
• Eliminating discretionary control
• Enforcing deterministic risk constraints
• Enabling non-custodial capital allocation
• Preserving execution neutrality

At a system level, Fundoria operates as a control plane for trading, while delegating execution to an external, verifiable market infrastructure.`,
        summary: 'Fundoria acts as a control plane, separating intent from execution to ensure protocol-level risk enforcement.'
      },
      {
        subtitle: '1.2 Core Architectural Components',
        content: `The system is composed of five primary components:

1. Traders (Identity Layer): Traders interact with the system through a dedicated interface using a non-custodial identity wallet. No direct access to execution venue; no custody of trading capital; all actions are signed and attributable.

2. Fundoria Interface (Application Layer): The interface is the exclusive entry point for all trading activity. Responsibilities include market visualization and order creation. Constraint: No order can bypass the interface or interact directly with execution.

3. Protocol Control Layer (Core Logic): The heart of Fundoria, implemented via smart contracts. Responsibilities: Identity verification, Risk enforcement, Capital allocation, Order authorization. Key property: All decisions are deterministic and enforced before execution.

4. Execution Layer (Externalized): Execution is delegated to Hyperliquid, providing matching, liquidity, and market infrastructure. Fundoria does not modify execution logic or custody exchange accounts.

5. Computation & Indexing Layer: Processes execution data to derive performance metrics, risk analytics, and trader reputation. Outputs are committed on-chain as verifiable attestations.`,
        viz: (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
             {[
               { n: 'Identity', d: 'Traders', c: 'bg-blue/20 border-blue/40' },
               { n: 'App', d: 'Interface', c: 'bg-green-500/20 border-green-500/40' },
               { n: 'Core', d: 'Protocol', c: 'bg-blue/20 border-blue/40 font-bold shadow-[0_0_15px_rgba(59,130,246,0.2)]' },
               { n: 'Exec', d: 'External', c: 'bg-white/5 border-white/10' },
               { n: 'Data', d: 'Indexing', c: 'bg-white/5 border-white/10' }
             ].map((comp, i) => (
               <div key={i} className={`p-4 border rounded-sm text-center flex flex-col justify-center gap-1 ${comp.c}`}>
                  <div className="font-mono text-[8px] uppercase tracking-widest opacity-60">{comp.n}</div>
                  <div className="font-display text-[10px] uppercase font-black tracking-tighter">{comp.d}</div>
               </div>
             ))}
          </div>
        )
      },
      {
        subtitle: '1.3 System Architecture Diagram',
        content: `The interaction flow moves from the Trader through the Interface to the Protocol Control Layer, which authorizes orders for the Execution Layer. Execution data is then processed for performance scoring.`,
        viz: (
          <div className="relative p-10 bg-black/40 border border-white/5 rounded-lg overflow-hidden group">
            <div className="flex flex-col items-center gap-8">
               {/* Trader Node */}
               <div className="w-48 p-4 bg-blue/10 border border-blue/30 rounded-sm text-center relative group-hover:border-blue transition-colors">
                  <div className="font-mono text-[9px] text-blue mb-1">IDENTITY_LAYER</div>
                  <div className="font-display font-black text-xs uppercase">Trader Wallet</div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-blue"><ChevronRight size={16} className="rotate-90 animate-bounce" /></div>
               </div>

               {/* Interface Node */}
               <div className="w-64 p-4 bg-green-500/10 border border-green-500/30 rounded-sm text-center relative">
                  <div className="font-mono text-[9px] text-green-400 mb-1">APPLICATION_LAYER</div>
                  <div className="font-display font-black text-xs uppercase">Fundoria Interface</div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-blue"><ChevronRight size={16} className="rotate-90" /></div>
               </div>

               {/* Protocol Node */}
               <div className="w-80 p-6 bg-blue/20 border border-blue/50 rounded-sm text-center relative shadow-glow">
                  <div className="font-mono text-[9px] text-blue mb-2">CONTROL_LAYER (SMART_CONTRACTS)</div>
                  <div className="grid grid-cols-2 gap-2 font-mono text-[8px] text-white/50 lowercase">
                     <div className="p-1 bg-white/5 border border-white/5">identity_check()</div>
                     <div className="p-1 bg-white/5 border border-white/5">risk_engine()</div>
                     <div className="p-1 bg-white/5 border border-white/5">capital_alloc()</div>
                     <div className="p-1 bg-white/5 border border-white/5">auth_order()</div>
                  </div>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/20"><ChevronRight size={16} className="rotate-90" /></div>
               </div>

               {/* Execution Node */}
               <div className="w-64 p-4 bg-white/5 border border-white/10 rounded-sm text-center relative opacity-60">
                  <div className="font-mono text-[9px] text-white/40 mb-1">EXECUTION_LAYER (HYPERLIQUID)</div>
                  <div className="font-display font-black text-xs uppercase">Matching & Liquidity</div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/10"><ChevronRight size={16} className="rotate-90" /></div>
               </div>

               {/* Indexing Node */}
               <div className="w-64 p-4 bg-white/5 border border-white/10 rounded-sm text-center">
                  <div className="font-mono text-[9px] text-white/40 mb-1">INDEXING_LAYER</div>
                  <div className="font-display font-black text-xs uppercase">PnL & Risk Metrics</div>
               </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 p-4 opacity-[0.02]">
               <Database className="w-40 h-40" />
            </div>
          </div>
        )
      },
      {
        subtitle: '1.4 Layered System Model',
        content: `To better understand system boundaries, Fundoria can be decomposed into five logical layers that enforce functional domains and security boundaries.`,
        viz: (
          <div className="space-y-1">
             {[
               { l: 'APPLICATION LAYER', v: 'Fundoria Trading Interface · Portfolio Dashboard · Vault UI', c: 'bg-green-500/5 border-green-500/20 text-green-400' },
               { l: 'PROTOCOL CONTROL LAYER', v: 'Identity Contracts · Risk Engine · Capital Allocation · Gateway', c: 'bg-blue/10 border-blue/30 text-blue border-l-[4px]' },
               { l: 'COMPUTATION LAYER', v: 'Indexers · Performance Engine · Risk Calculation · Attestations', c: 'bg-white/[0.02] border-white/5 text-white/40' },
               { l: 'EXECUTION LAYER', v: 'Hyperliquid Order Books · Matching Engine · Liquidity Providers', c: 'bg-white/[0.02] border-white/5 text-white/40' },
               { l: 'SETTLEMENT LAYER', v: 'Smart Contracts (HyperEVM) · Vault Balances · FND Token Logic', c: 'bg-blue/5 border-blue/10 text-white/60' }
             ].map((layer, i) => (
               <div key={i} className={`p-4 border group hover:bg-white/[0.05] transition-colors relative overflow-hidden ${layer.c}`}>
                  <div className="font-mono text-[9px] font-black tracking-widest mb-1">{layer.l}</div>
                  <div className="font-sans text-xs opacity-70 tracking-tight">{layer.v}</div>
               </div>
             ))}
          </div>
        )
      },
      {
        subtitle: '1.5 Design Principles',
        content: `The architecture is governed by five strict design constraints:

1. Execution Externalization: Execution is treated as a shared primitive, not embedded logic, enabling composability and neutrality.

2. Deterministic Control: All critical decisions (Identity, Risk, Capital) are pre-execution, rule-based, and non-discretionary.

3. Non-Custodial Capital: Capital is held in smart contracts, never controlled by traders, and governed by vault logic.

4. Identity–Capital Separation: Identity (reputation + attribution) is distinct from Capital (independent vault allocation), preventing risk leakage and identity manipulation.

5. Modular Architecture: Each component can evolve independently – interface upgrades do not affect contracts, and risk models can be upgraded via governance.`,
        summary: 'These principles ensure the protocol remains trustless, scalable, and resilient to discretionary overrides.'
      },
      {
        subtitle: '1.6 System Guarantees',
        content: `Fundoria’s architecture enforces the following guarantees critical for institutional participation and auditability:

• No unauthorized execution: Every trade must be protocol-authorized.
• No discretionary risk overrides: Rules are enforced by code.
• Full attribution of trading activity: Cryptographicly signed signatures.
• Non-custodial capital safety: Assets remain on-chain in vaults.
• Deterministic settlement outcomes: Enforced by the settlement layer.`,
        viz: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {[
               { t: 'Security', v: '100% Deterministic', icon: <Shield size={16} /> },
               { t: 'Autonomy', v: 'Zero Discretion', icon: <Zap size={16} /> },
               { t: 'Compliance', v: 'Full Attribution', icon: <Fingerprint size={16} /> },
               { t: 'Integrity', v: 'Non-Custodial', icon: <Lock size={16} /> }
             ].map((g, i) => (
               <div key={i} className="flex items-center gap-4 p-5 bg-blue/5 border border-blue/10 rounded-sm hover:border-blue/40 transition-all">
                  <div className="text-blue">{g.icon}</div>
                  <div>
                     <div className="font-mono text-[9px] text-white/30 uppercase tracking-widest">{g.t}</div>
                     <div className="font-display font-black text-xs text-white uppercase">{g.v}</div>
                  </div>
               </div>
             ))}
          </div>
        )
      },
      {
        subtitle: '1.7 Section Summary',
        content: `Fundoria’s system architecture establishes a clear separation between control and execution, enabling a new class of financial infrastructure where:

• Trading is permissioned by protocol logic
• Capital is allocated programmatically
• Risk is enforced deterministically
• Performance is verifiable on-chain

This architecture forms the foundation upon which all higher-level protocol functionality—identity, evaluation, vault allocation, and governance—is built.`
      }
    ]
  },
  {
    id: 'market-context',
    title: '2. Market Context and Infrastructure Evolution',
    file: '02_market_context.md',
    icon: <TrendingUp />,
    subsections: [
      {
        subtitle: '2.1 Capital Allocation in Trading: Historical Models',
        content: `Traditionally, the bridge between trading talent and capital has been governed by centralized institutions: proprietary trading firms, hedge funds, and family offices. In these models, "trust" is managed through legal contracts, physical oversight, and centralized risk desks. While effective for decades, these models are gated by high barriers to entry, geographic restrictions, and significant human bias in capital allocation.`,
        viz: (
          <div className="relative pl-8 space-y-10 border-l border-white/10 ml-2">
            {[
              { t: 'TradFi Era', d: 'Managed accounts — opaque, physical oversight, high barriers.', y: '1980-2010' },
              { t: 'Early DeFi', d: 'Basic copy trading — limited trust, no risk enforcement.', y: '2020-2024' },
              { t: 'Fundoria Era', d: 'Protocol-controlled allocation. Trust via code.', active: true, y: '2025+' }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className={`absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 ${item.active ? 'border-blue bg-blue shadow-glow' : 'border-white/10 bg-black'} z-10`} />
                <div className={item.active ? 'text-white' : 'text-white/30'}>
                  <div className="font-mono text-[10px] uppercase tracking-widest font-black flex items-center gap-3">
                    {item.t} <span className="opacity-30">{item.y}</span>
                  </div>
                  <div className="font-sans text-sm mt-1 leading-relaxed">{item.d}</div>
                </div>
              </div>
            ))}
          </div>
        )
      },
      {
        subtitle: '2.2 Limitations of Centralized Prop Firms and Copy Trading',
        content: `Current "Prop Firm" and Social Copy Trading models suffer from three fundamental flaws:
        
• Opaque Execution: Traders often operate on "demo" accounts with simulated slippage that does not reflect real-market impact.
• Counterparty Risk: Exposure to insolvency or discretionary payout freezes of the central platform.
• Style Drift: Without programmatic enforcement, traders may deviate from strategy (e.g., "revenge trading") before a manager can intervene.`,
        summary: 'Fundoria replaces discretionary oversight with deterministic code, eliminating counterparty and behavioral risk.'
      },
      {
        subtitle: '2.3 Maturation of On-Chain Trading Infrastructure',
        content: `The emergence of high-performance Layer 1 solutions has enabled professional trading on-chain. We have transitioned from slow, AMM-based swaps to high-throughput, CLOB-based (Central Limit Order Book) environments. This shift allows for the sub-second execution and deep liquidity required for institutional-grade capital allocation.`,
        viz: (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {[
               { l: 'AMM Swaps', v: '10s Latency', s: 'Passive Liquidity' },
               { l: 'Early CLOB', v: '1s Latency', s: 'Limited Depth' },
               { l: 'HL Execution', v: '<0.1s Latency', s: 'Institutional Depth', highlighted: true }
             ].map((stat, i) => (
               <div key={i} className={`p-4 border rounded-sm ${stat.highlighted ? 'bg-blue/10 border-blue/40' : 'bg-white/5 border-white/10 opacity-40'}`}>
                  <div className="font-mono text-[9px] uppercase tracking-widest mb-2">{stat.l}</div>
                  <div className="font-display text-lg font-black text-white">{stat.v}</div>
                  <div className="font-mono text-[8px] text-white/40 mt-1 uppercase">{stat.s}</div>
               </div>
             ))}
          </div>
        )
      },
      {
        subtitle: '2.4 Why Capital Allocation Requires Protocol Control',
        content: `For capital allocation to scale on-chain, it requires Protocol Control:
        
• Programmable Safety: The protocol acts as a "logic gate," ensuring every order complies with risk parameters before execution.
• Immutable Attribution: Performance history is mathematically tied to identity, preventing falsification of track records.`,
        viz: (
          <div className="p-6 bg-black/40 border border-white/5 rounded-sm flex items-center justify-center gap-12">
             <div className="text-center">
                <div className="w-12 h-12 bg-blue/20 border border-blue/40 flex items-center justify-center mx-auto mb-3">
                   <Shield className="text-blue" size={24} />
                </div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-white/60">Risk Logic</div>
             </div>
             <div className="h-[1px] w-20 bg-gradient-to-r from-blue/50 to-transparent relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue"><ChevronRight size={16} /></div>
             </div>
             <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-3">
                   <Activity className="text-green-400" size={24} />
                </div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-white/60">Exchange</div>
             </div>
          </div>
        )
      },
      {
        subtitle: '2.5 The Emergence of Execution-Native Ecosystems',
        content: `We are entering the era of "Execution-Native" ecosystems—where the blockchain itself is optimized specifically for trading (e.g., Hyperliquid). Fundoria leverages this by building on top of a dedicated execution primitive, allowing the protocol to focus entirely on the logic of capital and risk.`,
        summary: 'The protocol handles the logic of trust, while the L1 handles the physics of the trade.'
      },
      {
        subtitle: 'Section 2 Summary',
        content: `The shift from discretionary, human-managed trading desks to protocol-enforced capital layers is a natural evolution of DeFi. Fundoria bridges the gap between high-performance execution and the sophisticated risk management requirements of institutional capital.`
      }
    ]
  }
];

export default function Whitepaper({ onBack }: WhitepaperProps) {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Reading progress
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgress(Math.round(scrolled));

      // Active section tracking
      const sectionElements = SECTIONS.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-protocol-bg text-protocol-text selection:bg-blue/30 font-sans transition-colors duration-300">
      {/* Background Matrix Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] dark:block hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,229,190,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,190,.16) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Global Header */}
      <nav className="sticky top-0 z-[100] h-16 border-b border-protocol-border bg-protocol-bg/90 backdrop-blur-2xl px-6 flex items-center justify-between transition-colors">
         <div className="flex items-center gap-8">
            <button 
              onClick={onBack}
              className="group flex items-center gap-3 font-mono text-[10px] text-protocol-text-dim uppercase tracking-[0.3em] hover:text-blue transition-all"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">TERMINAL_EXIT</span>
              <span className="sm:hidden">EXIT</span>
            </button>
            <div className="hidden sm:flex items-center gap-3 border-l border-protocol-border pl-8">
               <div className="w-3 h-3 bg-blue clip-path-hex rotate-[30deg] shadow-glow" />
               <span className="font-mono text-xs font-black uppercase tracking-[0.2em] text-protocol-text">Fundoria // Core_Docs</span>
            </div>
         </div>

         <div className="flex items-center gap-8">
            <div className="hidden md:flex flex-col items-end">
               <div className="font-mono text-[8px] text-protocol-text-dim uppercase tracking-[0.2em]">Protocol Status</div>
               <div className="font-mono text-[9px] text-green-400 flex items-center gap-2 font-black uppercase tracking-[0.1em]">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_6px_#4ade80]" /> Verified_Alive
               </div>
            </div>
            <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2 text-protocol-text-dim hover:text-blue">
               <Menu size={24} />
            </button>
         </div>
         
         <div className="absolute bottom-0 left-0 h-[2px] bg-blue shadow-glow z-10 transition-all duration-300" 
              style={{ width: `${progress}%` }} />
      </nav>

      <div className="max-w-[1440px] mx-auto flex">
        {/* Technical Sidebar */}
        <aside className="hidden lg:block w-[300px] sticky top-16 h-[calc(100vh-64px)] border-r border-protocol-border">
           <div className="h-full overflow-y-auto px-8 py-12 scrollbar-none transition-colors">
              <div className="space-y-16">
                 <div className="space-y-8">
                    <div className="flex justify-between items-center">
                       <h4 className="font-mono text-[10px] text-protocol-text-dim uppercase tracking-[0.4em] font-black font-semibold">Chapters</h4>
                       <span className="font-mono text-[10px] text-blue font-black">{progress}%</span>
                    </div>
                    
                    <div className="space-y-2">
                       {SECTIONS.map((s, i) => (
                         <button 
                            key={s.id}
                            onClick={() => scrollTo(s.id)}
                            className={`w-full flex items-center gap-4 px-4 py-3 transition-all text-left group border-l-2 ${
                               activeSection === s.id 
                               ? 'bg-blue/5 border-blue text-protocol-text font-bold' 
                               : 'border-transparent text-protocol-text-dim hover:bg-protocol-accent-bg hover:text-protocol-text'
                            }`}
                         >
                            <span className={`font-mono text-[10px] w-5 text-right ${activeSection === s.id ? 'text-blue' : 'text-protocol-text-dim group-hover:text-blue/40'}`}>
                               {(i+1).toString().padStart(2, '0')}
                            </span>
                            <span className="font-display text-xs uppercase tracking-widest truncate">
                               {s.id.split('-').join('_')}
                            </span>
                         </button>
                       ))}
                    </div>
                 </div>

                 <div className="pt-12 border-t border-protocol-border space-y-8 transition-colors">
                    <h4 className="font-mono text-[10px] text-protocol-text-dim uppercase tracking-[0.4em] font-black">Reference</h4>
                    <div className="space-y-4">
                       {[
                         { l: 'GitHub_Main' },
                         { l: 'Audit_Reports' },
                         { l: 'Governance' },
                         { l: 'API_Manifest' }
                       ].map(link => (
                         <button key={link.l} className="flex items-center gap-3 text-protocol-text-dim font-mono text-[10px] hover:text-blue transition-colors group w-full text-left uppercase tracking-widest font-semibold">
                            <ArrowUpRight size={12} className="opacity-20 group-hover:opacity-100 transition-all font-bold" />
                            {link.l}
                         </button>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 lg:ml-12 px-6 sm:px-20 py-20 lg:py-32 max-w-[1050px] relative z-10">
           <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-40"
           >
              {/* Cover Header */}
              <header className="space-y-16">
                 <div className="inline-flex items-center gap-4 px-4 py-1.5 bg-blue/10 border border-blue/20 rounded-sm">
                    <Activity size={14} className="text-blue" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue font-black">STABLE_RELEASE // v1.2</span>
                 </div>
                 
                 <div className="space-y-8 transition-colors">
                    <h1 className="font-display text-7xl sm:text-9xl uppercase tracking-tighter leading-[0.85] text-protocol-text">
                       Protocol<br />
                       <span className="text-protocol-text opacity-20">Whitepaper</span>
                    </h1>
                    <div className="w-32 h-[2px] bg-blue shadow-glow" />
                 </div>
                 
                 <p className="text-protocol-text-dim font-sans text-xl sm:text-3xl leading-relaxed max-w-4xl border-l-[4px] border-blue/40 pl-12 py-4 italic transition-colors">
                    A <strong className="text-protocol-text font-black italic">modular</strong> blockchain architecture for <span className="text-blue">verifiable trading skill</span> and programmatic capital allocation.
                 </p>
                 
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 transition-colors">
                    {[
                      { l: 'Structure', v: 'MODULAR_L1' },
                      { l: 'Execution', v: 'EXTERNAL_HL' },
                      { l: 'Settlement', v: 'DETERMINISTIC' },
                      { l: 'Governance', v: 'DAO_CONTROL' }
                    ].map((item, i) => (
                      <div key={i} className="p-6 bg-protocol-accent-bg border border-protocol-border border-t-blue/20 group hover:border-blue/30 transition-all">
                         <div className="font-mono text-[9px] text-protocol-text-dim uppercase tracking-[0.3em] mb-3">{item.l}</div>
                         <div className="font-mono text-xs text-protocol-text group-hover:text-blue transition-colors font-bold uppercase tracking-widest font-semibold">{item.v}</div>
                      </div>
                    ))}
                 </div>
              </header>

              {/* Documentation Body */}
              <div className="space-y-48">
                 {SECTIONS.map((section, sidx) => (
                    <section key={section.id} id={section.id} className="scroll-mt-28 space-y-20">
                       <CodeHeader title={section.title.split('. ')[1]} file={section.file} number={(sidx + 1).toString().padStart(2, '0')} />
                       
                       <div className="space-y-32 md:pl-12 relative before:absolute before:left-0 before:top-8 before:bottom-8 before:w-[1px] before:bg-gradient-to-b before:from-blue/30 before:via-blue/5 before:to-transparent">
                          {section.subsections.map((sub, idx) => (
                             <div key={idx} className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                                <div className="space-y-6">
                                   <div className="flex items-center gap-4">
                                      <div className="w-2 h-2 bg-blue clip-path-hex rotate-[30deg] shadow-glow" />
                                      <h3 className="font-display text-xl sm:text-2xl text-protocol-text font-bold tracking-widest uppercase transition-colors">
                                         {sub.subtitle}
                                      </h3>
                                   </div>
                                   <p className="text-protocol-text-dim font-sans text-lg sm:text-xl leading-relaxed whitespace-pre-wrap max-w-3xl text-justify tracking-tight transition-colors">
                                      {sub.content}
                                   </p>
                                </div>
                                
                                {sub.viz && (
                                   <SectionViz title={sub.subtitle.toUpperCase()}>
                                      {sub.viz}
                                   </SectionViz>
                                )}
                                
                                {sub.summary && (
                                   <Synthesis>{sub.summary}</Synthesis>
                                )}
                             </div>
                          ))}
                       </div>
                    </section>
                 ))}
              </div>

              {/* Detailed Disclosure Footer */}
              <footer className="pt-40 pb-56 space-y-20 border-t border-protocol-border transition-colors">
                 <div className="space-y-12 group">
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-[1px] bg-blue shadow-glow" />
                       <h3 className="font-mono text-xs uppercase tracking-[0.5em] text-blue font-black">Legal_Manifest // Disclosures</h3>
                    </div>
                    <div className="p-10 bg-blue/5 border border-blue/10 space-y-6 text-[12px] font-mono text-protocol-text-dim leading-relaxed max-w-5xl italic text-justify opacity-60 group-hover:opacity-100 group-hover:bg-blue/10 transition-all font-medium">
                       <p>[NOTICE]: FUNDORIA IS A FINANCIAL INFRASTRUCTURE PROTOCOL. ALL CAPITAL DEPLOYMENT IS SUBJECT TO SMART CONTRACT RISK. FND TOKEN HOLDERS MANAGE RISK PARAMETERS; NO CENTRAL ENTITY EXERCISES DISCRETIONARY CONTROL OVER TRADES OR ASSET REDEMPTION. DONT TRUST, VERIFY THE GENESIS BLOCK HASH DIRECTLY.</p>
                       <p>[COMPLIANCE_STRING]: SHA_256 // 8a92b...e4f21 // TIMESTAMP: 2026.04.26_20:00:00Z</p>
                    </div>
                 </div>

                 <div className="flex flex-col lg:flex-row justify-between items-center gap-12 py-16 border-t border-protocol-border transition-colors">
                    <div className="flex items-center gap-6">
                       <div className="p-3 border border-blue/30 bg-blue/10 text-blue font-display text-2xl font-black rounded-sm shadow-glow">FND</div>
                       <div>
                          <div className="font-mono text-xs text-protocol-text uppercase tracking-widest font-bold font-black">Fundoria_Global_Org</div>
                          <div className="font-mono text-[8px] text-protocol-text-dim uppercase tracking-[0.3em] mt-1">Autonomous Infrastructure Layer</div>
                       </div>
                    </div>
                    <div className="flex gap-12">
                       {['X_PROTOCOL', 'NODE_DISCORD', 'AUDITS', 'GIT_SOURCE'].map(item => (
                         <a key={item} href="#" className="font-mono text-[10px] text-protocol-text-dim uppercase tracking-[0.2em] hover:text-blue transition-colors flex items-center gap-2 group font-semibold">
                            {item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                         </a>
                       ))}
                    </div>
                 </div>
              </footer>
           </motion.div>
        </main>
      </div>

      {/* Mobile Menu Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 z-[200] bg-[#080b0f] lg:hidden overflow-y-auto px-8 py-12"
          >
             <div className="flex justify-between items-center mb-20 border-b border-white/5 pb-8">
                <div className="flex items-center gap-4">
                   <div className="w-4 h-4 bg-blue clip-path-hex rotate-[30deg] shadow-glow" />
                   <span className="font-display text-xl uppercase tracking-[0.3em] font-black">CHAPTERS</span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="p-3 text-white/40">
                   <X size={32} />
                </button>
             </div>

             <div className="space-y-6">
                {SECTIONS.map((s, i) => (
                  <button 
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`w-full flex items-center gap-6 p-6 border border-white/5 text-left transition-all ${
                      activeSection === s.id ? 'bg-blue/10 border-blue/30 text-blue' : 'bg-white/[0.01] text-white/30'
                    }`}
                  >
                    <span className="font-mono text-sm opacity-20">{(i+1).toString().padStart(2, '0')}</span>
                    <span className="font-display text-2xl uppercase tracking-[0.2em] font-black">{s.id.split('-').join(' ')}</span>
                  </button>
                ))}
             </div>

             <div className="mt-28 pt-12 border-t border-white/5">
                <button onClick={onBack} className="w-full py-6 border border-white/10 font-mono text-xs uppercase tracking-[0.5em] text-white/40">
                   BACK_TO_TERMINAL
                </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
