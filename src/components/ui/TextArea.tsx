import { useId } from 'react'
import type { TextareaHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type TextAreaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> & {
  label: string
  id?: string
  error?: string
}

export function TextArea({
  label,
  id,
  error,
  required,
  rows = 4,
  className,
  ...props
}: TextAreaProps) {
  const generatedId = useId()
  const fieldId = id ?? generatedId
  const errorId = `${fieldId}-error`

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={fieldId}
        className="text-[13px] font-bold uppercase tracking-[0.12em] text-content"
      >
        {label}
        {required ? (
          <span aria-hidden="true" className="ml-1 text-danger">
            *
          </span>
        ) : null}
      </label>
      <textarea
        id={fieldId}
        rows={rows}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          'w-full resize-y border bg-field px-4 py-3 text-body1 text-content outline-none transition-colors placeholder:text-content-muted/70',
          error
            ? 'border-danger focus:border-danger'
            : 'border-transparent focus:border-accent',
          className,
        )}
        {...props}
      />
      {error ? (
        <p id={errorId} className="text-[13px] leading-snug text-danger">
          {error}
        </p>
      ) : null}
    </div>
  )
}
