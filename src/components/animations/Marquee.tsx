import { usePrefersReducedMotion } from '../../hooks/useMediaQuery';

type MarqueeProps = {
  text: string;
  className?: string;
};

export function Marquee({ text, className = '' }: MarqueeProps) {
  const reduced = usePrefersReducedMotion();
  const content = `${text}  `;

  return (
    <div
      className={`overflow-hidden border-y border-graphite/10 py-5 md:py-7 bg-ivory ${className}`}
      aria-hidden="true"
    >
      <div
        className={`flex whitespace-nowrap ${reduced ? '' : 'animate-marquee'}`}
        style={reduced ? undefined : { width: 'max-content' }}
      >
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="font-display text-[clamp(1.5rem,4vw,2.75rem)] tracking-[0.08em] uppercase text-graphite/80 px-4"
          >
            {content}
          </span>
        ))}
      </div>
    </div>
  );
}
