import type { PropsWithChildren, ReactNode } from 'react'

type ShellCardProps = PropsWithChildren<{
  className?: string
  header?: ReactNode
}>

export function ShellCard({ className = '', header, children }: ShellCardProps) {
  const classes = ['shell-card', className].filter(Boolean).join(' ')

  return (
    <article className={classes}>
      {header ? <div className="shell-card__header">{header}</div> : null}
      <div className="shell-card__body">{children}</div>
    </article>
  )
}
