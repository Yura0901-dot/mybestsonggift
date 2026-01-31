import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mybestsonggift.com'

  const routes = [
    '',      
    '/about-us',  
    '/how-it-work',
    '/order',      
  ]

  const locales = ['en', 'es']

  const sitemapList: MetadataRoute.Sitemap = []

  routes.forEach((route) => {
    locales.forEach((locale) => {
      sitemapList.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : route === '/order' ? 0.9 : 0.8,
      })
    })
  })

  return sitemapList
}