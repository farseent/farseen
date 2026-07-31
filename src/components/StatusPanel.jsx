import { useState, useEffect } from 'react';

const ALL_LINES = [
  { label: 'API', value: '200 OK' },
  { label: 'BUILD', value: 'PASSING' },
  { label: 'DEPLOY', value: 'RENDER · LIVE' },
  { label: 'AUTH', value: 'JWT · VALID' },
];

export const StatusPanel = () => {
  const [shown, setShown] = useState(1);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const growId = setInterval(() => {
      setShown((s) => (s >= ALL_LINES.length ? 1 : s + 1));
    }, 1800);
    const clockId = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(growId);
      clearInterval(clockId);
    };
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto bg-surface border border-line rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-line">
        <span className="font-mono text-[10px] text-muted uppercase">system.log</span>
        <span className="font-mono text-[10px] text-muted">
          {time.toLocaleTimeString('en-US', { hour12: false })}
        </span>
      </div>

      <div className="p-4 space-y-2.5">
        {ALL_LINES.slice(0, shown).map((line) => (
          <div key={line.label} className="flex items-center justify-between font-mono text-xs">
            <span className="text-muted">{line.label}</span>
            <span className="text-teal">{line.value}</span>
          </div>
        ))}
        <div className="flex items-center gap-1 pt-1">
          <span className="font-mono text-xs text-muted">$</span>
          <span className="w-1.5 h-3 bg-teal animate-pulse" />
        </div>
      </div>
    </div>
  );
};