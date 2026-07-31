import { useState, useEffect } from 'react';

const SIZE = 8;
const REGIONS = ['12,44', '03,19', '27,08', '15,31'];

export const ScanPanel = () => {
  const [activeCells, setActiveCells] = useState(new Set());
  const [caption, setCaption] = useState('SCANNING…');

  useEffect(() => {
    let i = 0;
    const tick = () => {
      const count = 2 + Math.floor(Math.random() * 3);
      const cells = new Set();
      while (cells.size < count) {
        cells.add(Math.floor(Math.random() * SIZE * SIZE));
      }
      setActiveCells(cells);
      setCaption(`CHANGE DETECTED · REGION ${REGIONS[i % REGIONS.length]}`);
      i += 1;
    };
    tick();
    const id = setInterval(tick, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto bg-surface border border-line rounded-lg p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-[10px] text-muted uppercase">geosentinel.scan</span>
        <span className="w-1.5 h-1.5 rounded-full bg-teal" style={{ boxShadow: '0 0 6px #4DD8C0' }} />
      </div>

      <div className="relative">
        <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${SIZE}, 1fr)` }}>
          {Array.from({ length: SIZE * SIZE }).map((_, idx) => (
            <div
              key={idx}
              className="aspect-square rounded-sm transition-colors duration-500"
              style={{
                background: activeCells.has(idx) ? '#4DD8C0' : '#171C24',
                opacity: activeCells.has(idx) ? 0.9 : 1,
              }}
            />
          ))}
        </div>
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent animate-scan" />
      </div>

      <p className="font-mono text-[10px] text-teal mt-4">{caption}</p>
    </div>
  );
};