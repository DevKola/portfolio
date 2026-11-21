import { Link, useParams } from 'react-router-dom'
import { ContactCta } from '../components/ContactCta'
import { Icon } from '../components/Icon'
import { ProjectMockup } from '../components/ProjectMockup'
import { ProjectVisual } from '../components/ProjectVisual'
import { Button, ButtonLink } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { getAdjacentProjects, getProject } from '../data/portfolio'
import { cn } from '../lib/cn'
import { usePageTitle } from '../lib/use-page-title'
import { NotFound } from './NotFound'

export function ProjectDetail() {
  const { slug = '' } = useParams()
  const project = getProject(slug)
  const { previous, next } = getAdjacentProjects(slug)
  usePageTitle(project?.title ?? 'Project not found')

  if (!project) return <NotFound />

  const link = project.links.live ?? project.links.source
  const linkLabel = project.links.live ? 'Visit Website' : 'View Source'

  return (
    <>
      <Container>
        <div className="pt-8">
          <ProjectVisual
            project={project}
            aspectClassName="aspect-[4/3] md:aspect-[16/9]"
            className="border-0"
            priority
          />
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:gap-24">
          <div className="lg:sticky lg:top-10 lg:self-start">
            <h1 className="text-[32px] leading-[36px] tracking-[-0.29px] font-bold md:text-h2 md:leading-[42px] text-content">{project.title}</h1>
            <p className="mt-6 text-body1 text-content">{project.intro}</p>

            <div className="mt-8 border-t border-line pt-6">
              <p className="text-[13px] font-semibold text-accent">{project.role}</p>
              <p className="mt-1 text-[13px] font-semibold text-accent">
                {project.tags.join(' / ')}
              </p>
            </div>

            {link ? (
              <ButtonLink
                to={link}
                variant="secondary"
                className="mt-8"
                {...(link.startsWith('http')
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {})}
              >
                {linkLabel}
              </ButtonLink>
            ) : (
              <div className="mt-8">
                <Button variant="secondary" disabled>
                  Visit Website
                </Button>
                <p className="mt-3 text-[12px] text-content-muted">Live link coming soon</p>
              </div>
            )}

            <div className="mt-10">
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-content-muted">
                Highlights
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-body2 text-content-muted">
                    <span className="mt-[11px] h-[1px] w-4 shrink-0 bg-accent" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-h3 text-content">Project Background</h2>
            <div className="mt-5 flex flex-col gap-4">
              {project.background.map((paragraph) => (
                <p key={paragraph} className="text-body1 text-content-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <h2 className="mt-16 text-h3 text-content">Static Previews</h2>
            <div className="mt-6 flex flex-col gap-6">
              {project.images ? (
                project.images.previews.map((preview) => (
                  <figure
                    key={preview.src}
                    className={cn(
                      'overflow-hidden border border-line bg-surface-raised',
                      preview.portrait && 'mx-auto w-full max-w-[380px]',
                    )}
                  >
                    <img
                      src={preview.src}
                      alt={preview.alt}
                      loading="lazy"
                      decoding="async"
                      className="block h-auto w-full"
                    />
                  </figure>
                ))
              ) : (
                <>
                  <ProjectMockup
                    variant={project.variant}
                    accent={project.accent}
                    wash={project.wash}
                    aspectClassName="aspect-[16/10]"
                  />
                  <div className="mx-auto w-full max-w-[320px]">
                    <ProjectMockup
                      variant={project.variant}
                      accent={project.accent}
                      wash={project.wash}
                      aspectClassName="aspect-[4/5]"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <nav
          aria-label="Project navigation"
          className="mt-20 grid border-t border-line sm:grid-cols-2"
        >
          {previous ? (
            <Link
              to={`/portfolio/${previous.slug}`}
              className="group flex items-center gap-5 border-b border-line py-8 sm:border-b-0 sm:border-r"
            >
              <Icon
                name="arrow-left"
                className="size-6 shrink-0 text-content-muted transition-colors group-hover:text-accent"
              />
              <span>
                <span className="block font-serif text-[28px] leading-tight text-content transition-colors group-hover:text-accent">
                  {previous.title}
                </span>
                <span className="text-[13px] text-content-muted">Previous Project</span>
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              to={`/portfolio/${next.slug}`}
              className="group flex items-center justify-end gap-5 py-8 text-right sm:border-l sm:border-line"
            >
              <span>
                <span className="block font-serif text-[28px] leading-tight text-content transition-colors group-hover:text-accent">
                  {next.title}
                </span>
                <span className="text-[13px] text-content-muted">Next Project</span>
              </span>
              <Icon
                name="arrow-right"
                className="size-6 shrink-0 text-content-muted transition-colors group-hover:text-accent"
              />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </Container>

      <ContactCta />
    </>
  )
}
