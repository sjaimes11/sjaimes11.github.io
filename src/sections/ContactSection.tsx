import { motion } from 'framer-motion'
import { portfolioContent } from '../data/portfolio'

export function ContactSection() {
  const { contact } = portfolioContent

  return (
    <section className="section" id="contact">
      <motion.div
        className="contact-panel"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow">Next step</span>
        <h2>{contact.headline}</h2>
        <p>{contact.description}</p>

        <div className="contact-actions">
          <a
            className="button button--primary"
            href={`mailto:${contact.primaryEmail}`}
          >
            {contact.primaryEmail}
          </a>
          <a
            className="button button--ghost"
            href={`mailto:${contact.secondaryEmail}`}
          >
            {contact.secondaryEmail}
          </a>
        </div>

        <div className="contact-grid">
          <a className="contact-item" href={`tel:${contact.phone.replace(/\s+/g, '')}`}>
            <span>Phone</span>
            <strong>{contact.phone}</strong>
          </a>
          {contact.links.map(link => (
            <a
              className="contact-item"
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noreferrer"
            >
              <span>{link.label}</span>
              <strong>{link.value}</strong>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
