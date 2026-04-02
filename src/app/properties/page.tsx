import { Suspense } from "react"
import { HeaderServer } from "@/components/features/layout/header-server"
import { PropertyGrid } from "@/components/features/properties/property-grid"
import { PropertyFilters } from "@/components/features/properties/property-filters"
import { PropertyGridSkeleton } from "@/components/features/properties/property-skeleton"
import { createClient } from "@/lib/supabase/server"
import { Tables } from "@/types/supabase"

type Property = Tables<'properties'> & { is_favorite: boolean }

async function PropertyResults({ params }: { params: any }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const search = params.search as string
  const minPrice = Number(params.minPrice) || 0
  const maxPrice = Number(params.maxPrice) || 200000000 
  const type = params.type as string
  const city = params.city as string

  let query = supabase
    .from('properties')
    .select('*')
    .gte('price', minPrice)
    .lte('price', maxPrice)

  if (search) {
    query = query.or(`title.ilike.%${search}%,address.ilike.%${search}%,city.ilike.%${search}%`)
  }

  if (type && type !== 'all') {
    query = query.eq('type', type)
  }

  if (city && city !== 'all') {
    query = query.eq('city', city)
  }

  const { data: properties } = await query.order('created_at', { ascending: false })

  // Map favorites
  let userFavorites: string[] = []
  if (user) {
    const { data: favs } = await supabase
      .from('favorites')
      .select('property_id')
      .eq('user_id', user.id)
    userFavorites = favs?.map(f => f.property_id) || []
  }

  const propertiesWithFavs = properties?.map(p => ({
    ...p,
    is_favorite: userFavorites.includes(p.id)
  }))

  return (
    <PropertyGrid 
      properties={(propertiesWithFavs as Property[]) || []} 
      subtitle={properties && properties.length > 0 ? `${properties.length} Results Found` : "Search Results"}
      title="Curated Selection"
    />
  )
}

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeaderServer />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-secondary/20 py-20 px-4 sm:px-6 lg:px-8 border-b border-border/40">
          <div className="container mx-auto">
            <h1 className="font-serif text-5xl sm:text-6xl font-light tracking-tight mb-4 text-black">
              Property <span className="italic text-accent">Portfolio</span>
            </h1>
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground ml-1">
              Refined Living Selection
            </p>
          </div>
        </section>

        {/* Filters */}
        <PropertyFilters />

        {/* Results */}
        <div className="container mx-auto">
          <Suspense key={JSON.stringify(params)} fallback={<PropertyGridSkeleton />}>
            <PropertyResults params={params} />
          </Suspense>
        </div>
      </main>

      <footer className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-border/40">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <span className="font-serif text-2xl font-semibold tracking-widest uppercase">
            Luxe
          </span>
          <p className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground">
            &copy; 2026 Luxe Real Estate. All Rights Reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-muted-foreground hover:text-black transition-colors font-sans text-[10px] tracking-widest uppercase">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-black transition-colors font-sans text-[10px] tracking-widest uppercase">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
