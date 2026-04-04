import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { PortfolioContent } from '../data/portfolio'

type ContactSectionProps = {
  content: PortfolioContent
}

function LinkedInLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.5H3.56V19.5H6.94V8.5Z" fill="currentColor" />
      <path
        d="M5.25 7.08C6.36 7.08 7.06 6.34 7.06 5.41C7.04 4.46 6.36 3.75 5.27 3.75C4.18 3.75 3.47 4.46 3.47 5.41C3.47 6.34 4.16 7.08 5.23 7.08H5.25Z"
        fill="currentColor"
      />
      <path
        d="M12.24 19.5H15.62V13.36C15.62 13.03 15.64 12.71 15.74 12.48C16 11.82 16.6 11.13 17.6 11.13C18.92 11.13 19.45 12.13 19.45 13.61V19.5H22.83V13.22C22.83 9.86 21.04 8.3 18.65 8.3C16.72 8.3 15.87 9.36 15.39 10.11H15.42V8.5H12.24C12.28 9.54 12.24 19.5 12.24 19.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

function GitHubLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2C6.48 2 2 6.58 2 12.23C2 16.75 4.87 20.58 8.84 21.93C9.34 22.03 9.52 21.71 9.52 21.44C9.52 21.2 9.51 20.39 9.5 19.48C6.73 20.1 6.14 18.28 6.14 18.28C5.68 17.08 5.01 16.77 5.01 16.77C4.08 16.12 5.08 16.13 5.08 16.13C6.11 16.2 6.65 17.22 6.65 17.22C7.56 18.84 9.04 18.37 9.62 18.09C9.71 17.41 9.98 16.95 10.28 16.69C8.07 16.43 5.74 15.55 5.74 11.61C5.74 10.49 6.13 9.58 6.77 8.87C6.67 8.61 6.32 7.56 6.87 6.14C6.87 6.14 7.71 5.86 9.5 7.09C10.3 6.86 11.15 6.75 12 6.75C12.85 6.75 13.7 6.86 14.5 7.09C16.29 5.86 17.13 6.14 17.13 6.14C17.68 7.56 17.33 8.61 17.23 8.87C17.87 9.58 18.26 10.49 18.26 11.61C18.26 15.56 15.92 16.42 13.7 16.68C14.08 17.02 14.42 17.68 14.42 18.68C14.42 20.12 14.41 21.08 14.41 21.44C14.41 21.71 14.59 22.04 15.1 21.93C19.06 20.58 22 16.75 22 12.23C22 6.58 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function GmailLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20 6.5H18.83L12 11.74L5.17 6.5H4C2.9 6.5 2 7.4 2 8.5V15.5C2 16.6 2.9 17.5 4 17.5H20C21.1 17.5 22 16.6 22 15.5V8.5C22 7.4 21.1 6.5 20 6.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M3 8L12 14.5L21 8" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function PinLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21C15.5 16.2 18 13.13 18 9.75C18 6.57 15.31 4 12 4C8.69 4 6 6.57 6 9.75C6 13.13 8.5 16.2 12 21Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="2.2" fill="currentColor" />
    </svg>
  )
}

function InstagramLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="4.25"
        y="4.25"
        width="15.5"
        height="15.5"
        rx="4.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3.55" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.35" cy="6.7" r="1.05" fill="currentColor" />
    </svg>
  )
}

function getLogo(label: string): ReactNode {
  if (label === 'LinkedIn') {
    return <LinkedInLogo />
  }

  if (label === 'GitHub') {
    return <GitHubLogo />
  }

  if (label === 'Gmail') {
    return <GmailLogo />
  }

  if (label === 'Instagram') {
    return <InstagramLogo />
  }

  if (label === 'Bogota' || label === 'Bogotá') {
    return <PinLogo />
  }

  return <PinLogo />
}

export function ContactSection({ content }: ContactSectionProps) {
  const { contact } = content

  return (
    <section className="section" id="contact">
      <motion.div
        className="contact-stack"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
      >
        <div className="contact-social-row">
          {contact.socialLinks.map(link => (
            <a
              className="social-card"
              href={link.href}
              key={link.label}
              target={link.href.startsWith('#') ? undefined : '_blank'}
              rel={link.href.startsWith('#') ? undefined : 'noreferrer'}
              aria-label={link.label}
            >
              <span className="social-card__icon social-card__icon--brand">
                {getLogo(link.label)}
              </span>
              <span className="social-card__label">{link.label}</span>
            </a>
          ))}
        </div>

        <div className="contact-panels">
          <article className="terminal-card">
            <div className="terminal-card__topbar">
              <span className="terminal-dot terminal-dot--red" />
              <span className="terminal-dot terminal-dot--amber" />
              <span className="terminal-dot terminal-dot--green" />
              <strong>{contact.terminalTitle}</strong>
            </div>

            <div className="terminal-card__body">
              <span className="eyebrow">{contact.eyebrow}</span>
              <pre>{contact.terminalCommand}</pre>
              <div className="terminal-card__actions">
                <a
                  className="terminal-button"
                  href={`mailto:${contact.primaryEmail}`}
                >
                  <span>{contact.terminalButton}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </article>

          <article className="status-card">
            <span className="eyebrow">{contact.statusTitle}</span>
            <div className="status-card__main">
              <span className="status-indicator" />
              <strong>{contact.availability}</strong>
            </div>
            <p>{contact.availabilityNote}</p>
            <div className="status-card__meta">
              <a href={`mailto:${contact.primaryEmail}`}>{contact.primaryEmail}</a>
              <a href={`mailto:${contact.secondaryEmail}`}>{contact.secondaryEmail}</a>
              <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a>
            </div>
          </article>
        </div>
      </motion.div>
    </section>
  )
}
