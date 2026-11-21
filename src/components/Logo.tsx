import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="Kolade Ayinde — home"
      className={cn('inline-flex items-center text-content transition-opacity hover:opacity-80', className)}
    >
      <svg
        viewBox="0 0 40 40"
        className="h-8 w-8"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M20 2 38 22H2L20 2Z" />
        <path d="M20 38 2 18h36L20 38Z" opacity="0.55" />
      </svg>
    </Link>
  )
}
