import { NavLink } from 'react-router-dom'
import { profile } from '../data/portfolio'
import { cn } from '../lib/cn'
import { Icon } from './Icon'
import { Logo } from './Logo'
import { Container } from './ui/Container'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/portfolio', label: 'Portfolio', end: false },
  { to: '/contact', label: 'Contact Me', end: false },
]

export function Footer() {
  return (
    <footer className="mt-24 bg-navy text-white">
      <Container className="flex flex-col gap-8 py-8 md:flex-row md:items-center md:justify-between">
        <Logo className="text-white" />

        <nav aria-label="Footer" className="flex flex-col gap-4 md:flex-row md:gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  'text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors',
                  isActive ? 'text-accent' : 'text-white/85 hover:text-accent',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="text-white/85 transition-colors hover:text-accent"
            >
              <Icon name={social.icon} />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}
