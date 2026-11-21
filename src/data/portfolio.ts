export type MockupVariant = 'dashboard' | 'board' | 'invoice' | 'ticket'

export type ProjectImage = {
  src: string
  alt: string
  portrait?: boolean
}

export type Project = {
  slug: string
  title: string
  summary: string
  intro: string
  role: string
  tags: string[]
  background: string[]
  highlights: string[]
  tech: string[]
  accent: string
  wash: string
  variant: MockupVariant
  images?: { hero: string; previews: ProjectImage[] }
  links: { live?: string; source?: string }
  year: string
}

export const profile = {
  name: 'Kolade Ayinde',
  firstName: 'Kolade',
  role: 'Full-stack developer',
  hero: 'Hey, I’m Kolade and I love building fast web and mobile apps.',
  about:
    'I’m a full-stack developer building web and mobile products with TypeScript, NestJS, .NET and React Native. I care about typed API contracts, clean data models and interfaces that stay fast under real use. Most of my work pairs a NestJS or .NET backend with a React client, and I test as I go rather than at the end.',
  aboutSecondary:
    'When I’m not coding I’m usually reading about systems design or rebuilding something I shipped months ago because I found a better way to do it. I’d love you to check out my work.',
  email: 'koladeayinde@gmail.com',
  location: 'Remote · open to relocation',
  socials: [
    { label: 'GitHub', href: 'https://github.com/DevKola/', icon: 'github' as const },
    { label: 'X', href: 'https://x.com/iam_d_Kolade/', icon: 'x' as const },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kolade-ayinde-296382253/', icon: 'linkedin' as const },
  ],
}

export const skills = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'C#', 'SQL'] },
  {
    group: 'Backend',
    items: ['NestJS', 'Node.js', 'ASP.NET Core', '.NET', 'PostgreSQL', 'TypeORM', 'MongoDB'],
  },
  {
    group: 'Frontend',
    items: ['React', 'React Native', 'Redux Toolkit', 'Tailwind CSS', 'Mantine', 'Zod'],
  },
  {
    group: 'Platform',
    items: ['Docker', 'JWT & OAuth', 'Swagger/OpenAPI', 'Cloudinary', 'Resend', 'Git'],
  },
]

export const projects: Project[] = [
  {
    slug: 'finance',
    title: 'Finance',
    summary:
      'A full-stack personal finance app with budgets, savings pots and a dashboard that rolls everything into one view.',
    intro:
      'This project pairs a NestJS API with a React client to track spending, budgets and savings. I designed the data model first, then built a typed contract between the two apps so the dashboard could never drift from the API.',
    role: 'Full-stack Development',
    tags: ['NestJS', 'PostgreSQL', 'React'],
    background: [
      'Finance started as a way to stop juggling spreadsheets. Transactions are scoped to a user and support search, category filters, sorting and pagination. Budgets track monthly spend and the remaining allowance, savings pots handle deposits and withdrawals atomically, and recurring bills roll up into the totals.',
      'The interesting part was the contract. The React client validates every response with Zod, so a backend change that breaks the shape fails loudly in development instead of rendering an empty chart in production. Authentication uses short-lived JWT access tokens with rotated, hashed refresh tokens stored server-side.',
    ],
    highlights: [
      'JWT access tokens with rotated, hashed refresh tokens',
      'Atomic savings transactions that preserve balance invariants',
      'A single overview endpoint shaped for the dashboard',
      'Idempotent seed data and PostgreSQL migrations',
    ],
    tech: ['NestJS', 'TypeORM', 'PostgreSQL', 'React', 'Redux Toolkit', 'Zod', 'Mantine'],
    accent: '#2f6e5f',
    wash: '#e7f0ed',
    variant: 'dashboard',
    images: {
      hero: '/projects/finance/hero.jpg',
      previews: [
        {
          src: '/projects/finance/budget.jpg',
          alt: 'Editing a monthly budget in the Finance app',
        },
        {
          src: '/projects/finance/pots.jpg',
          alt: 'Savings pots with progress toward each goal',
        },
      ],
    },
    links: { live: 'https://finance-web-lilac.vercel.app/' },
    year: '2026',
  },
  {
    slug: 'kaban',
    title: 'Kaban',
    summary:
      'A kanban task manager with email-verified accounts, Google sign-in and boards, lists, tasks and subtasks.',
    intro:
      'Kaban is a board-based task manager built for teams and solo makers. Accounts are verified by email before access, Google sign-in sits alongside email and password, and attachments upload straight to Cloudinary.',
    role: 'Full-stack Development',
    tags: ['NestJS', 'React', 'PostgreSQL'],
    background: [
      'The data model is a hierarchy: a board owns lists, a list owns tasks, and a task owns subtasks. Moving work between columns is a single optimistic update on the client with a server-side reorder so two people dragging at once cannot corrupt the order.',
      'Authentication was the most demanding piece. Email verification uses expiring, single-use tokens issued through Resend, and Google OAuth returns the same session shape as password login, so the client has one code path. Image uploads are signed on the server and streamed to Cloudinary rather than proxied through the API.',
    ],
    highlights: [
      'Email verification with expiring, single-use tokens',
      'Google OAuth sharing one session shape with password login',
      'Boards → lists → tasks → subtasks hierarchy',
      'Server-signed Cloudinary image uploads',
    ],
    tech: ['NestJS', 'PostgreSQL', 'React', 'Tailwind CSS', 'Redux Toolkit', 'Google OAuth'],
    accent: '#33567f',
    wash: '#e5ebf4',
    variant: 'board',
    images: {
      hero: '/projects/kaban/hero.jpg',
      previews: [
        {
          src: '/projects/kaban/task.jpg',
          alt: 'Viewing a task with its checklist and subtasks in Kaban',
        },
        {
          src: '/projects/kaban/tablet-delete.jpg',
          alt: 'Deleting a board on a tablet in Kaban',
          portrait: true,
        },
      ],
    },
    links: { live: 'https://kaban-web-psi.vercel.app/' },
    year: '2026',
  },
  {
    slug: 'invoices',
    title: 'Invoices',
    summary:
      'An invoicing workspace for freelancers with typed forms, date handling and a centralized data layer.',
    intro:
      'A React application for creating and managing invoices. The focus was on form ergonomics: fast entry, clear validation, and dates that behave the same everywhere.',
    role: 'Front-end Development',
    tags: ['React', 'Mantine', 'Redux Toolkit'],
    background: [
      'Invoices is a focused front-end project. Each invoice is created through a validated form with line items, payment terms and due dates, and the list view supports filtering by status so overdue work is impossible to miss.',
      'State lives in Redux Toolkit with typed slices, and the forms use Mantine’s form hooks with a shared validation layer. Dates are handled through dayjs with a single parsing rule so a due date cannot shift by a day when the browser timezone changes.',
    ],
    highlights: [
      'Validated invoice forms with line items and payment terms',
      'Typed Redux Toolkit store with entity adapters',
      'Timezone-safe date parsing across the app',
      'Responsive table and detail views',
    ],
    tech: ['React', 'TypeScript', 'Mantine', 'Redux Toolkit', 'React Router', 'dayjs'],
    accent: '#6b4a6b',
    wash: '#f2e9f1',
    variant: 'invoice',
    images: {
      hero: '/projects/invoices/hero.jpg',
      previews: [
        {
          src: '/projects/invoices/edit.jpg',
          alt: 'Creating an invoice in the Invoices app',
        },
        {
          src: '/projects/invoices/delete.jpg',
          alt: 'Confirming invoice deletion',
        },
      ],
    },
    links: { live: 'https://invoice-website.koladeayinde.workers.dev/' },
    year: '2026',
  },
  {
    slug: 'ticket-scan',
    title: 'Ticket Scan',
    summary:
      'Signed QR tickets generated on demand and delivered by email, with single-use codes enforced server-side.',
    intro:
      'A small backend with a sharp edge: an attendee code is looked up, checked for reuse, signed into a token, rendered as a QR image and emailed — in one request.',
    role: 'Backend Development',
    tags: ['Node.js', 'MongoDB', 'Nodemailer'],
    background: [
      'Ticket Scan handles the moment between buying a ticket and walking through the door. A submitted attendee code is matched against MongoDB and rejected if it does not exist or has already been used, so a ticket cannot be replayed.',
      'Valid codes are signed with a server-held secret and rendered into a QR image data URL. The image is attached to an email sent through Nodemailer, which keeps the token out of the URL entirely while still giving the attendee something scannable at the gate.',
    ],
    highlights: [
      'Single-use codes enforced at the database level',
      'Cryptographically signed QR tokens',
      'QR rendered server-side and emailed as an attachment',
      'No token material exposed in URLs',
    ],
    tech: ['Node.js', 'MongoDB', 'Nodemailer', 'QR generation'],
    accent: '#2b5f70',
    wash: '#e6eff3',
    variant: 'ticket',
    links: {},
    year: '2025',
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index === -1) return { previous: undefined, next: undefined }
  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  }
}
