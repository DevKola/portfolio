import { ButtonLink } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { usePageTitle } from '../lib/use-page-title'

export function NotFound() {
  usePageTitle('Page not found')

  return (
    <Container className="flex flex-col items-start gap-8 py-24">
      <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-accent">404</p>
      <h1 className="max-w-[520px] text-[40px] leading-[42px] tracking-[-0.36px] md:text-h1 md:leading-[50px] text-content">
        This page hasn’t been built yet.
      </h1>
      <p className="max-w-[420px] text-body1 text-content-muted">
        The link may be out of date, or the project moved. Head back to the work.
      </p>
      <ButtonLink to="/portfolio">View Portfolio</ButtonLink>
    </Container>
  )
}
