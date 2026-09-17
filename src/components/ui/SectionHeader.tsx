import Reveal from './Reveal';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  dark = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <Reveal className={`text-center max-w-3xl mx-auto mb-16 space-y-3 ${className}`}>
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
          dark
            ? 'bg-white/10 text-goldLight border border-goldPrimary/30'
            : 'bg-goldLight/30 text-goldDark'
        }`}
      >
        {badge}
      </div>
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold ${
          dark ? 'text-white' : 'text-deepSlate'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{subtitle}</p>
      )}
    </Reveal>
  );
}
