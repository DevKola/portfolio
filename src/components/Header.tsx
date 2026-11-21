import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { profile } from '../data/portfolio'
import { cn } from '../lib/cn'
import { Icon } from './Icon'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'
import { Container } from './ui/Container'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/portfolio', label: 'Portfolio', end: false },
  { to: '/contact', label: 'Contact Me', end: false },
]

const linkClass = 'text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors'
const activeClass = 'text-accent'
const idleClass = 'text-content hover:text-accent'

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="relative">
      <Container className="flex items-center justify-between py-8">
        <Logo />
        <div className="flex items-center gap-8">
          <nav aria-label="Main" className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => cn(linkClass, isActive ? activeClass : idleClass)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="text-content md:hidden"
          >
            <Icon name="menu" className="size-6" />
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 flex flex-col bg-navy text-white md:hidden"
        >
          <Container className="flex items-center justify-between py-8">
            <Logo className="text-white" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-white"
            >
              <Icon name="close" className="size-6" />
            </button>
          </Container>

          <nav aria-label="Mobile" className="mt-10 flex flex-col px-6 sm:px-10">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-5 font-serif text-[32px] leading-none text-white/90 transition-colors hover:text-accent"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto flex items-center justify-between px-6 pb-10 sm:px-10">
            <div className="flex items-center gap-6">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="text-white/80 transition-colors hover:text-accent"
                >
                  <Icon name={social.icon} />
                </a>
              ))}
            </div>
            <div className="[&_button]:border-white/30 [&_button]:text-white">
              <ThemeToggle />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
