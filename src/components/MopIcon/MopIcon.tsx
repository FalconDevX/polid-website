const STRAND_COUNT = 13;

interface MopIconProps {
  colors?: string[];
  capColor?: string;
  size?: number;
}

export default function MopIcon({ colors = ['#e0a815', '#e8437e'], capColor = '#e0a815', size = 120 }: MopIconProps) {
  const strands = Array.from({ length: STRAND_COUNT }, (_, i) => {
    const t = i / (STRAND_COUNT - 1);
    const x = 20 + t * 80;
    const sway = (t - 0.5) * 46;
    const dropLength = 78 - Math.abs(t - 0.5) * 30;
    const color = colors[i % colors.length];
    return { x, sway, dropLength, color, delay: i * 0.05 };
  });

  return (
    <svg
      className="overflow-visible drop-shadow-[0_12px_18px_rgba(0,0,0,0.12)]"
      viewBox="0 0 100 130"
      width={size}
      height={size * 1.3}
      role="img"
      aria-label="mop"
    >
      <g className="origin-[50px_26px] animate-sway motion-reduce:animate-none">
        {strands.map((s, i) => (
          <path
            key={i}
            d={`M ${s.x} 26 C ${s.x + s.sway * 0.3} ${26 + s.dropLength * 0.5}, ${s.x + s.sway} ${26 + s.dropLength * 0.8}, ${s.x + s.sway * 0.6} ${26 + s.dropLength}`}
            stroke={s.color}
            strokeWidth="5.5"
            strokeLinecap="round"
            fill="none"
            className="opacity-[0.92]"
            style={{ animationDelay: `${s.delay}s` }}
          />
        ))}
      </g>
      <rect x="38" y="6" width="24" height="22" rx="8" fill={capColor} />
      <rect x="46" y="0" width="8" height="10" rx="3" fill={capColor} opacity="0.85" />
    </svg>
  );
}
