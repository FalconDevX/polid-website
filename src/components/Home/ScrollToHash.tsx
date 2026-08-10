'use client';

import { useEffect } from 'react';

function scrollToHash() {
  const hash = window.location.hash;
  if (!hash) return;
  const el = document.getElementById(hash.slice(1));
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function ScrollToHash() {
  useEffect(() => {
    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return null;
}
