import { useState, useEffect } from 'react';

export interface SectionDef {
  id: string;
  label: string;
}

/**
 * Tracks which section is currently active based on scroll position.
 * Uses window.scrollY + offsetTop comparison — reliable across browsers
 * without IntersectionObserver edge cases near section boundaries.
 */
export function useActiveSection(
  sections: SectionDef[],
  headerOffset = 130,
): string {
  const [active, setActive] = useState<string>(sections[0]?.id ?? '');

  useEffect(() => {
    if (sections.length === 0) return;

    const update = () => {
      const scrollY = window.scrollY + headerOffset;

      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActive(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [sections, headerOffset]);

  return active;
}
