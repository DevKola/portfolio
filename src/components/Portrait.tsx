import { cn } from '../lib/cn'

export function Portrait({ src, className }: { src?: string; className?: string }) {
  if (src) {
    return (
      <figure className={cn('overflow-hidden bg-navy', className)}>
        <img
          src={src}
          alt="Kolade Ayinde"
          className="aspect-[4/5] w-full object-cover"
          decoding="async"
        />
      </figure>
    )
  }

  return (
    <div
      className={cn(
        'relative grid aspect-[4/5] place-items-center overflow-hidden bg-navy',
        className,
      )}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <span className="relative font-serif text-[clamp(4rem,14vw,7rem)] leading-none tracking-tight text-white/15">
        KA
      </span>
      <span className="absolute bottom-6 left-6 h-[3px] w-10 bg-accent" />
    </div>
  )
}
