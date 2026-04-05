import { SiteIcon, type IconName } from './SiteIcon'

type SectionTitleProps = {
  eyebrow: string
  title: string
  description?: string
  icon?: IconName
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  icon,
}: SectionTitleProps) {
  return (
    <div className="section-heading">
      <div className="section-heading__row">
        {icon ? (
          <span className="section-heading__icon">
            <SiteIcon name={icon} />
          </span>
        ) : null}
        <div className="section-heading__copy">
          <span className="section-heading__eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
      </div>
    </div>
  )
}
