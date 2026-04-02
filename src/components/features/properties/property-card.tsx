import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { MapPin, Maximize2, BedDouble, Bath } from "lucide-react"
import { FavoriteButton } from "./favorite-button"

export interface Property {
  id: string
  slug: string
  title: string
  price: number
  address: string
  city: string
  images: string[]
  amenities: string[]
  status: 'available' | 'sold' | 'pending'
  type?: string
  beds?: number
  baths?: number
  sqft?: number
  is_favorite?: boolean
}

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(property.price)

  return (
    <Card className="group relative overflow-hidden border-none bg-transparent shadow-none">
      <Link href={`/properties/${property.slug}`} className="block overflow-hidden">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src={property.images[0] || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-white/90 text-black border-none px-4 py-1 text-[10px] tracking-[0.2em] uppercase backdrop-blur-sm">
              {property.status}
            </Badge>
          </div>
          <div className="absolute top-4 right-4 z-10">
            <FavoriteButton 
              propertyId={property.id} 
              initialIsFavorite={!!property.is_favorite} 
            />
          </div>
        </div>
      </Link>

      <CardContent className="px-0 pt-6 pb-2">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl font-medium tracking-tight hover:text-accent transition-colors">
            <Link href={`/properties/${property.slug}`}>
              {property.title}
            </Link>
          </h3>
          <span className="font-sans text-sm tracking-widest uppercase text-muted-foreground">
            {property.city}
          </span>
        </div>
        <p className="font-sans text-xs tracking-[0.1em] text-muted-foreground uppercase flex items-center mb-4">
          <MapPin className="w-3 h-3 mr-1" />
          {property.address}
        </p>
        <div className="text-2xl font-serif tracking-tighter mb-4">
          {formattedPrice}
        </div>
      </CardContent>

      <CardFooter className="px-0 py-2 border-t border-border/40 flex justify-between">
        <div className="flex space-x-4 text-muted-foreground">
          <span className="flex items-center text-[10px] tracking-widest uppercase">
            <BedDouble className="w-4 h-4 mr-2" />
            {property.beds || 0} Beds
          </span>
          <span className="flex items-center text-[10px] tracking-widest uppercase">
            <Bath className="h-4 h-4 mr-2" />
            {property.baths || 0} Baths
          </span>
          <span className="flex items-center text-[10px] tracking-widest uppercase">
            <Maximize2 className="w-4 h-4 mr-2" />
            {(property.sqft || 0).toLocaleString()} sqft
          </span>
        </div>
      </CardFooter>
    </Card>
  )
}
