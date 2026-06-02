/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Landing from './components/Landing.tsx';
import Whitepaper from './components/Whitepaper.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

export default function App() {
  const [view, setView] = useState<'landing' | 'whitepaper'>('landing');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <>
      {view === 'whitepaper' ? (
        <Whitepaper onBack={() => setView('landing')} />
      ) : (
        <Landing onShowWhitepaper={() => setView('whitepaper')} />
      )}
      <ScrollToTop />
    </>
  );
}
