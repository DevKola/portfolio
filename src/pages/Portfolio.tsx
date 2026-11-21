import { Link } from 'react-router-dom'
import { ContactCta } from '../components/ContactCta'
import { ProjectVisual } from '../components/ProjectVisual'
import { buttonStyles } from '../components/ui/button-styles'
import { Container } from '../components/ui/Container'
import { projects } from '../data/portfolio'
import { cn } from '../lib/cn'
import { usePageTitle } from '../lib/use-page-title'

export function Portfolio() {
  usePageTitle('Portfolio')

  return (
    <>
      <Container>
        <h1 className="sr-only">Portfolio</h1>
        <div className="pt-4">
          {projects.map((project, index) => {
            const textFirst = index % 2 === 1
            return (
              <article
                key={project.slug}
                className={cn(
                  'grid items-center gap-10 border-line py-16 md:grid-cols-2 md:gap-16',
                  index > 0 && 'border-t',
                )}
              >
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="block transition-opacity hover:opacity-95"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <ProjectVisual project={project} aspectClassName="aspect-[16/11]" />
                </Link>

                <div className={cn('max-w-[420px]', textFirst && 'md:order-first')}>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-accent">
                    {project.year} · {project.role}
                  </p>
                  <h2 className="mt-3 text-[32px] leading-[36px] tracking-[-0.29px] font-bold md:text-h2 md:leading-[42px] text-content">
                    <Link
                      to={`/portfolio/${project.slug}`}
                      className="transition-colors hover:text-accent"
                    >
                      {project.title}
                    </Link>
                  </h2>
                  <p className="mt-5 text-body1 text-content-muted">{project.summary}</p>
                  <Link
                    to={`/portfolio/${project.slug}`}
                    className={buttonStyles('secondary', 'mt-8')}
                  >
                    View Project
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </Container>

      <ContactCta />
    </>
  )
}
