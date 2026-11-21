import type { Project } from '../data/portfolio'
import { cn } from '../lib/cn'
import { ProjectMockup } from './ProjectMockup'

export function ProjectVisual({
  project,
  aspectClassName = 'aspect-[4/3]',
  className,
  priority = false,
}: {
  project: Project
  aspectClassName?: string
  className?: string
  priority?: boolean
}) {
  const hero = project.images?.hero

  if (!hero) {
    return (
      <ProjectMockup
        variant={project.variant}
        accent={project.accent}
        wash={project.wash}
        aspectClassName={aspectClassName}
        className={className}
      />
    )
  }

  return (
    <div
      className={cn(
        'overflow-hidden border border-line bg-surface-raised',
        aspectClassName,
        className,
      )}
    >
      <img
        src={hero}
        alt={`${project.title} interface`}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className="h-full w-full object-cover object-top"
      />
    </div>
  )
}
