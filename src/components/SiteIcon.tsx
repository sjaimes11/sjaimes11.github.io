import type { SVGProps } from 'react'

export type IconName =
  | 'about'
  | 'strengths'
  | 'experience'
  | 'projects'
  | 'skills'
  | 'education'
  | 'certifications'
  | 'contact'
  | 'web'
  | 'mobile'
  | 'data'
  | 'ai'

type SiteIconProps = SVGProps<SVGSVGElement> & {
  name: IconName
}

export function SiteIcon({ name, ...props }: SiteIconProps) {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    ...props,
  }

  switch (name) {
    case 'about':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5.5 19.5c1.7-3 4.2-4.5 6.5-4.5s4.8 1.5 6.5 4.5" />
        </svg>
      )
    case 'strengths':
      return (
        <svg {...commonProps}>
          <path d="M12 3.5l1.9 3.9 4.3.6-3.1 3 0.7 4.2-3.8-2-3.8 2 0.7-4.2-3.1-3 4.3-.6L12 3.5z" />
        </svg>
      )
    case 'experience':
      return (
        <svg {...commonProps}>
          <rect x="4" y="6.5" width="16" height="12" rx="2.5" />
          <path d="M9 6.5V5a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0115 5v1.5" />
          <path d="M4 11.5h16" />
        </svg>
      )
    case 'projects':
      return (
        <svg {...commonProps}>
          <path
            strokeWidth={1.5}
            d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          />
        </svg>
      )
    case 'skills':
      return (
        <svg {...commonProps}>
          <path d="M8.5 8.5l-3 3 3 3" />
          <path d="M15.5 8.5l3 3-3 3" />
          <path d="M13.5 5.5l-3 12" />
        </svg>
      )
    case 'education':
      return (
        <svg {...commonProps}>
          <path d="M3.5 9.5L12 5l8.5 4.5L12 14 3.5 9.5z" />
          <path d="M6.5 11.2v4.3c1.5 1.1 3.3 1.7 5.5 1.7s4-.6 5.5-1.7v-4.3" />
        </svg>
      )
    case 'certifications':
      return (
        <svg {...commonProps}>
          <path d="M8 4.5h8l3 3v5.5c0 3.8-3.1 6.5-7 7.8-3.9-1.3-7-4-7-7.8V7.5l3-3z" />
          <path d="M9.5 10.5l1.6 1.6 3.4-3.6" />
        </svg>
      )
    case 'contact':
      return (
        <svg {...commonProps}>
          <rect x="4" y="6" width="16" height="12" rx="2.5" />
          <path d="M5 8l7 5 7-5" />
        </svg>
      )
    case 'web':
      return (
        <svg {...commonProps}>
          <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
          <path d="M3.5 9h17" />
          <path d="M8 7h.01M11 7h.01" />
        </svg>
      )
    case 'mobile':
      return (
        <svg {...commonProps}>
          <rect x="7.5" y="3.5" width="9" height="17" rx="2.2" />
          <path d="M11 17.5h2" />
        </svg>
      )
    case 'data':
      return (
        <svg {...commonProps}>
          <path d="M5 18.5V10.5" />
          <path d="M12 18.5V5.5" />
          <path d="M19 18.5v-7" />
          <path d="M3.5 18.5h17" />
        </svg>
      )
    case 'ai':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="2.2" />
          <path d="M12 4.5v3" />
          <path d="M12 16.5v3" />
          <path d="M4.5 12h3" />
          <path d="M16.5 12h3" />
          <path d="M6.8 6.8l2.1 2.1" />
          <path d="M15.1 15.1l2.1 2.1" />
          <path d="M17.2 6.8l-2.1 2.1" />
          <path d="M8.9 15.1l-2.1 2.1" />
        </svg>
      )
    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      )
  }
}
