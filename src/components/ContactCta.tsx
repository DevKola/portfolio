import { Container } from './ui/Container'
import { ButtonLink } from './ui/Button'

export function ContactCta() {
  return (
    <section className="border-t border-line">
      <Container className="flex flex-col gap-10 py-20 md:flex-row md:items-center md:justify-between md:py-24">
        <h2 className="max-w-[360px] text-[32px] leading-[36px] tracking-[-0.29px] font-bold md:text-h2 md:leading-[42px] text-content">
          Interested in doing a project together?
        </h2>
        <ButtonLink to="/contact" variant="secondary" className="shrink-0">
          Contact Me
        </ButtonLink>
      </Container>
    </section>
  )
}
