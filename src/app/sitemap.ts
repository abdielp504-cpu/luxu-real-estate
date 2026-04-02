import { MetadataRoute } from 'next'
import { createClient } from '@/lib/supabase/server'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = await createClient()
  const baseUrl = 'https://luxe-real-estate.vercel.app' // Update with actual domain

  // Fetch all property IDs
  const { data: properties } = await supabase
    .from('properties')
    .select('id, updated_at')

  const propertyEntries: MetadataRoute.Sitemap = (properties || []).map((property) => ({
    url: `${baseUrl}/properties/${property.id}`,
    lastModified: new Date(property.updated_at),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/properties`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    ...propertyEntries,
  ]
}
