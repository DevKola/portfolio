import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Icon } from '../components/Icon'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { TextArea } from '../components/ui/TextArea'
import { TextField } from '../components/ui/TextField'
import { profile } from '../data/portfolio'
import { usePageTitle } from '../lib/use-page-title'

type FormValues = { name: string; email: string; message: string }
type FormErrors = Partial<Record<keyof FormValues, string>>

const emptyValues: FormValues = { name: '', email: '', message: '' }

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = 'This field is required'
  if (!values.email.trim()) {
    errors.email = 'This field is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address'
  }
  if (!values.message.trim()) errors.message = 'This field is required'
  return errors
}

export function Contact() {
  usePageTitle('Contact')
  const [values, setValues] = useState<FormValues>(emptyValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
    setStatus('idle')
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const subject = encodeURIComponent(`Project enquiry from ${values.name.trim()}`)
    const body = encodeURIComponent(
      `${values.message.trim()}\n\n— ${values.name.trim()}\n${values.email.trim()}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <Container>
      <section className="grid gap-10 border-b border-line py-12 lg:grid-cols-[0.8fr_1fr] lg:gap-24">
        <h1 className="text-[40px] leading-[42px] tracking-[-0.36px] md:text-h1 md:leading-[50px] text-content">Get in Touch</h1>
        <div>
          <p className="max-w-[520px] text-body1 text-content-muted">
            I’d love to hear about what you’re working on and how I could help. I’m open
            to full-time roles and contract work, on-site or remote. My strongest ground
            is TypeScript across the stack  NestJS or .NET services with React and React
            Native clients. Tell me about the problem you’re solving and I’ll tell you
            honestly whether I’m the right fit.
          </p>
          <div className="mt-8 flex items-center gap-6">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="text-content transition-colors hover:text-accent"
              >
                <Icon name={social.icon} className="size-6" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-10 py-16 lg:grid-cols-[0.8fr_1fr] lg:gap-24">
        <div>
          <h2 className="text-[32px] leading-[36px] tracking-[-0.29px] font-bold md:text-h2 md:leading-[42px] text-content">Contact Me</h2>
          <p className="mt-4 text-body2 text-content-muted">
            Prefer email? Write to{' '}
            <a
              href={`mailto:${profile.email}`}
              target="_blank"
              rel="noreferrer"
              className="border-b border-accent text-content transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex max-w-[520px] flex-col gap-6">
          <TextField
            label="Name"
            name="name"
            placeholder="Jane Appleseed"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            autoComplete="name"
            required
          />
          <TextField
            label="Email Address"
            name="email"
            type="email"
            placeholder="email@example.com"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            autoComplete="email"
            required
          />
          <TextArea
            label="Message"
            name="message"
            placeholder="How can I help?"
            rows={5}
            value={values.message}
            onChange={handleChange}
            error={errors.message}
            required
          />

          <div className="flex flex-col gap-3">
            <Button type="submit" className="self-start">
              Send Message
            </Button>
            {status === 'sent' ? (
              <p role="status" className="text-[13px] text-content-muted">
                Your email app should open with the message ready. If it doesn’t, write to{' '}
                <a
                  href={`mailto:${profile.email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-accent text-content hover:text-accent"
                >
                  {profile.email}
                </a>
              </p>
            ) : null}
          </div>
        </form>
      </section>
    </Container>
  )
}
