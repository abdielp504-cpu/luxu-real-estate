import { HeaderServer } from "@/components/features/layout/header-server"
import { Hero } from "@/components/features/home/hero"
import { type Property } from "@/components/features/properties/property-card"
import { PropertyGrid } from "@/components/features/properties/property-grid"
import { createClient } from "@/lib/supabase/server"
import Image from "next/image"

// Sample data for initial UI (if DB is empty)
const SAMPLE_PROPERTIES: Property[] = [
  {
    id: "1",
    slug: "the-glass-house",
    title: "The Glass House",
    price: 4500000,
    address: "123 Ocean Drive",
    city: "Miami",
    images: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"],
    amenities: ["Pool", "Beach View"],
    status: 'available'
  },
  {
    id: "2",
    slug: "modern-oasis",
    title: "Modern Oasis",
    price: 8200000,
    address: "456 Hilltop Lane",
    city: "Los Angeles",
    images: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"],
    amenities: ["Spa", "Home Theater"],
    status: 'available'
  },
  {
    id: "3",
    slug: "nordic-retreat",
    title: "Nordic Retreat",
    price: 3100000,
    address: "789 Pine Forest",
    city: "Aspen",
    images: ["https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop"],
    amenities: ["Fireplace", "Mountain View"],
    status: 'available'
  }
]

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  // Try to fetch from DB
  const { data: properties } = await supabase
    .from('properties')
    .select('*')
    .limit(3)

  // Fetch user favorites if logged in
  let userFavorites: string[] = []
  if (user) {
    const { data: favs } = await supabase
      .from('favorites')
      .select('property_id')
      .eq('user_id', user.id)
    userFavorites = favs?.map(f => f.property_id) || []
  }

  const displayProperties = properties && properties.length > 0 
    ? properties.map(p => ({
        ...p,
        is_favorite: userFavorites.includes(p.id)
      })) 
    : SAMPLE_PROPERTIES.map(p => ({
        ...p,
        is_favorite: userFavorites.includes(p.id)
      }))

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderServer />
      
      <main className="flex-grow">
        <Hero />

        {/* Featured Properties Section */}
        <PropertyGrid 
          properties={displayProperties as Property[]} 
          title="Featured Estates" 
          subtitle="Curated Collection" 
        />

        {/* Narrative Section */}
        <section className="bg-black py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square">
              <Image 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Lifestyle"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="space-y-8">
              <h2 className="font-serif text-white text-5xl sm:text-6xl font-light leading-tight">
                Beyond <br />
                <span className="italic">The Walls</span>
              </h2>
              <p className="text-white/70 font-sans text-lg font-light leading-relaxed max-w-lg">
                We believe that a home is more than just a structure. It is a sanctuary, an investment, and a legacy. Our mission is to connect you with spaces that inspire and elevate your lifestyle.
              </p>
              <div className="pt-8">
                <a href="#" className="text-white font-sans text-xs tracking-[0.3em] uppercase border-b border-white pb-2 hover:text-accent hover:border-accent transition-all">
                  Our Philosophy
                </a>
              </div>
            </div>
          </div>
        </section>
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
