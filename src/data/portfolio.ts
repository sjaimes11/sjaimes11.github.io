export type { Locale, PortfolioContent } from './portfolio.types'

import { portfolioEn } from './portfolio.en'
import { portfolioEs } from './portfolio.es'
import { portfolioJa } from './portfolio.ja'
import { localeOptions } from './portfolio.shared'
import type { Locale, PortfolioContent } from './portfolio.types'

export { localeOptions }

export const portfolioContentByLocale: Record<Locale, PortfolioContent> = {
  en: portfolioEn,
  es: portfolioEs,
  ja: portfolioJa,
}

export const defaultLocale: Locale = 'en'
