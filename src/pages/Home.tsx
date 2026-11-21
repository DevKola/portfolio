import { ContactCta } from '../components/ContactCta'
import { Portrait } from '../components/Portrait'
import { ProjectVisual } from '../components/ProjectVisual'
import { ButtonLink } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { profile, projects } from '../data/portfolio'
import { usePageTitle } from '../lib/use-page-title'

function Monitor() {
  return (
    <div className="relative">
      <div className="rounded-[10px] bg-slate-200/80 p-2 shadow-[0_40px_80px_-40px_rgba(15,25,35,0.55)] ring-1 ring-black/5">
        <div className="overflow-hidden rounded-[4px]">
          <ProjectVisual project={projects[0]} aspectClassName="aspect-[16/10]" priority />
        </div>
      </div>
      <div className="mx-auto h-10 w-24 bg-slate-200/80" />
      <div className="mx-auto h-2 w-44 rounded-b-md bg-slate-300/80" />
    </div>
  )
}

export function Home() {
  usePageTitle()

  return (
    <>
      <section className="overflow-hidden">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_0.92fr] md:items-start">
            <div className="order-2 md:order-1 md:py-12">
              <h1 className="max-w-[500px] text-[40px] leading-[42px] tracking-[-0.36px] md:text-h1 md:leading-[50px] text-content">{profile.hero}</h1>
              <ButtonLink to="/#about" variant="primary" className="mt-10">
                About Me
              </ButtonLink>
            </div>
            <div className="order-1 md:order-2 md:-mb-24">
              <Monitor />
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="border-t border-line">
        <Container className="grid gap-12 py-24 md:grid-cols-[0.8fr_1fr] md:items-start md:gap-20">
          <Portrait src="/me.jpg" />
          <div className="max-w-[520px]">
            <h2 className="text-[32px] leading-[36px] tracking-[-0.29px] font-bold md:text-h2 md:leading-[42px] text-content">About Me</h2>
            <p className="mt-6 text-body1 text-content">{profile.about}</p>
            <p className="mt-4 text-body1 text-content-muted">{profile.aboutSecondary}</p>
            <ButtonLink to="/portfolio" variant="secondary" className="mt-8">
              Go to Portfolio
            </ButtonLink>
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  )
}
