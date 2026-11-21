import { cn } from '../../lib/cn'

export type ButtonVariant = 'primary' | 'secondary'

const base =
  'inline-flex items-center justify-center gap-2 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 disabled:pointer-events-none disabled:cursor-not-allowed'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-navy text-white hover:bg-accent disabled:bg-field disabled:text-content-muted',
  secondary:
    'border border-content/40 text-content hover:border-navy hover:bg-navy hover:text-white',
}

export function buttonStyles(variant: ButtonVariant = 'primary', className?: string) {
  return cn(base, variants[variant], className)
}
