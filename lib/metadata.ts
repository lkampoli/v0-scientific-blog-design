import { Metadata } from 'next'
import { siteConfig } from './config'

export const defaultMetadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.siteName}`,
    default: siteConfig.siteName,
  },
  description: siteConfig.siteDescription,
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    description: siteConfig.siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@yourhandle',
  },
}
