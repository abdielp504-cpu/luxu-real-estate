import { Metadata } from "next"
import { notFound } from "next/navigation"
import { HeaderServer } from "@/components/features/layout/header-server"
import { PropertyGallery } from "@/components/features/properties/property-gallery"
import { InquiryForm } from "@/components/features/properties/inquiry-form"
import { PropertyGrid } from "@/components/features/properties/property-grid"
import { FavoriteButton } from "@/components/features/properties/favorite-button"
import { createClient } from "@/lib/supabase/server"
import { MapPin, BedDouble, Bath, Maximize2, Home, Check } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export const revalidate = 3600 // revalidate every hour

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  
  const { data: property } = await supabase
    .from('properties')
    .select('title, description, images, city, address')
    .eq('slug', slug)
    .single()

  if (!property) return {}

  const description = property.description?.substring(0, 160) || `Luxury property in ${property.city}. ${property.address}. Discover more at Luxe.`

  return {
    title: property.title,
    description: description,
    openGraph: {
      title: `${property.title} | Luxe Real Estate`,
      description: description,
      images: property.images?.length > 0 ? [{ url: property.images[0] }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: property.title,
      description: description,
      images: property.images?.length > 0 ? [property.images[0]] : [],
    },
  }
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  // Fetch property by SLUG with agent profile
  const { data: property } = await supabase
    .from('properties')
    .select(`
      *,
      agent:agent_id (
        full_name,
        avatar_url,
        role
      )
    `)
    .eq('slug', slug)
    .single()

  if (!property) {
    notFound()
  }

  // Check if it's a favorite
  let isFavorite = false
  if (user) {
    const { data: favorite } = await supabase
      .from('favorites')
      .select('id')
      .eq('user_id', user.id)
      .eq('property_id', property.id)
      .maybeSingle()
    isFavorite = !!favorite
  }

  // Fetch similar properties
  const { data: similarProperties } = await supabase
    .from('properties')
    .select('*')
    .eq('city', property.city)
    .neq('slug', slug)
    .limit(3)

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(property.price)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeaderServer />
      
      <main className="flex-grow">
        {/* Gallery Section */}
        <section className="container mx-auto px-4 py-8">
          <PropertyGallery images={property.images} />
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Left Column: Info */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Header Info */}
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white rounded-none px-4 py-1 text-[10px] tracking-[0.2em] uppercase">
                    {property.status}
                  </Badge>
                  <Badge variant="outline" className="border-black text-black rounded-none px-4 py-1 text-[10px] tracking-[0.2em] uppercase">
                    {property.type}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h1 className="font-serif text-5xl sm:text-6xl font-light tracking-tight text-black flex-grow">
                      {property.title}
                    </h1>
                    <FavoriteButton 
                      propertyId={property.id} 
                      initialIsFavorite={isFavorite} 
                      className="bg-secondary/20 hover:bg-secondary/30"
                    />
                  </div>
                  <p className="font-sans text-sm tracking-[0.1em] text-muted-foreground uppercase flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-accent" />
                    {property.address}, {property.city}
                  </p>
                </div>

                <div className="text-4xl font-serif tracking-tighter text-black border-y border-border/40 py-6">
                  {formattedPrice}
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="space-y-1">
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Bedrooms</p>
                  <div className="flex items-center space-x-3">
                    <BedDouble className="h-5 w-5 text-accent" />
                    <span className="font-serif text-xl">{property.beds}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Bathrooms</p>
                  <div className="flex items-center space-x-3">
                    <Bath className="h-5 w-5 text-accent" />
                    <span className="font-serif text-xl">{property.baths}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Square Feet</p>
                  <div className="flex items-center space-x-3">
                    <Maximize2 className="h-5 w-5 text-accent" />
                    <span className="font-serif text-xl">{property.sqft.toLocaleString()}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Type</p>
                  <div className="flex items-center space-x-3">
                    <Home className="h-5 w-5 text-accent" />
                    <span className="font-serif text-xl capitalize">{property.type}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <h2 className="font-serif text-3xl font-light italic">The <span className="not-italic">Narrative</span></h2>
                <div className="font-sans text-lg text-muted-foreground leading-relaxed max-w-3xl space-y-4">
                  {property.description ? (
                    property.description.split('\n').map((para: string, i: number) => (
                      <p key={i}>{para}</p>
                    ))
                  ) : (
                    <p>Experience unparalleled luxury in this exceptional property. Every detail has been meticulously curated to provide the ultimate living experience.</p>
                  )}
                </div>
              </div>

              {/* Amenities */}
              <div className="space-y-8">
                <h2 className="font-serif text-3xl font-light">Refined <span className="italic">Features</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {property.amenities?.map((amenity: string, i: number) => (
                    <div key={i} className="flex items-center space-x-3 group">
                      <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="font-sans text-xs tracking-widest uppercase">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Agent Card */}
              <Separator className="bg-border/40" />
              <div className="bg-secondary/5 p-10 space-y-8">
                <h3 className="font-serif text-2xl font-light">Listed <span className="italic">By</span></h3>
                <div className="flex items-center space-x-6">
                  <Avatar className="h-20 w-20 border border-border/50">
                    <AvatarImage src={(property.agent as any)?.avatar_url} />
                    <AvatarFallback className="font-serif text-lg bg-white">
                      {(property.agent as any)?.full_name?.substring(0, 2).toUpperCase() || "LS"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="font-serif text-xl">{(property.agent as any)?.full_name || "Luxe Specialist"}</p>
                    <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{(property.agent as any)?.role || "Global Partner"}</p>
                    <div className="pt-2">
                      <Button variant="link" className="p-0 h-auto font-sans text-[10px] tracking-[0.2em] uppercase text-black hover:text-accent transition-colors">
                        View Agent Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Inquiry Form */}
            <div className="relative">
              <InquiryForm propertyId={property.id} propertyName={property.title} />
            </div>

          </div>
        </section>

        {/* Similar Properties Section */}
        {similarProperties && similarProperties.length > 0 && (
          <section className="bg-secondary/10 py-32 border-t border-border/40">
            <div className="container mx-auto px-4">
              <PropertyGrid 
                properties={similarProperties as any} 
                title="Similar Estates" 
                subtitle="Exclusively Curated" 
              />
            </div>
          </section>
        )}
      </main>

      <footer className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-border/40">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <span className="font-serif text-2xl font-semibold tracking-widest uppercase">
            Luxe
          </span>
          <p className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground">
            &copy; 2026 Luxe Real Estate. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
