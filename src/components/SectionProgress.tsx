import { useActiveSection, SectionDef } from '../hooks/useActiveSection';

interface SectionProgressProps {
  sections: SectionDef[];
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function SectionProgress({ sections }: SectionProgressProps) {
  const active = useActiveSection(sections);

  return (
    <nav
      aria-label="Section progress navigation"
      className="fixed right-5 top-1/2 -translate-y-1/2 z-[900] hidden xl:flex flex-col items-center gap-[22px]"
    >
      {/* Vertical spine line */}
      <div
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(14,26,46,0.8) 15%, rgba(14,26,46,0.8) 85%, transparent 100%)' }}
        aria-hidden="true"
      />

      {sections.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            aria-label={`Go to ${label}`}
            aria-current={isActive ? 'location' : undefined}
            title={label}
            className="group relative flex items-center justify-center w-5 h-5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue/60"
          >
            {/* Hover label (left side, 2xl only) */}
            <span
              className="absolute right-[18px] font-mono text-[8px] uppercase tracking-[0.18em] whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 hidden 2xl:block"
              style={{ color: isActive ? '#2F80ED' : 'rgba(138,172,204,0.5)' }}
            >
              {label}
            </span>

            {/* Dot */}
            <span
              className={[
                'block rounded-full transition-all duration-300',
                isActive
                  ? 'w-[9px] h-[9px] bg-blue'
                  : 'w-[5px] h-[5px] bg-[#0E1A2E] border border-[#1e3050] group-hover:border-blue/40 group-hover:w-[7px] group-hover:h-[7px]',
              ].join(' ')}
              style={isActive ? { boxShadow: '0 0 10px rgba(47,128,237,0.65), 0 0 20px rgba(47,128,237,0.25)' } : undefined}
              aria-hidden="true"
            />
          </button>
        );
      })}
    </nav>
  );
}
