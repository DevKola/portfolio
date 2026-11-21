import type { ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'
import { buttonStyles } from './button-styles'
import type { ButtonVariant } from './button-styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary', type = 'button', className, ...props }: ButtonProps) {
  return <button type={type} className={buttonStyles(variant, className)} {...props} />
}

type ButtonLinkProps = LinkProps & { variant?: ButtonVariant }

export function ButtonLink({ variant = 'primary', className, ...props }: ButtonLinkProps) {
  return <Link className={buttonStyles(variant, className)} {...props} />
}
