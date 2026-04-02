import { cn } from "@/lib/utils"
import { PropertyCard, type Property } from "./property-card"

interface PropertyGridProps {
  properties: Property[]
  title?: string
  subtitle?: string
  className?: string
}

export function PropertyGrid({ properties, title, subtitle, className }: PropertyGridProps) {
  return (
    <section className={cn("py-24 px-4 sm:px-6 lg:px-8 container mx-auto", className)}>
      {(title || subtitle) && (
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
          <div className="max-w-xl">
            {subtitle && (
              <h2 className="text-sm font-sans tracking-[0.3em] uppercase text-accent mb-4">
                {subtitle}
              </h2>
            )}
            {title && (
              <p className="font-serif text-4xl sm:text-5xl font-light tracking-tight">
                {title}
              </p>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      
      {properties.length === 0 && (
        <div className="py-20 text-center border border-dashed border-border/60">
          <p className="font-sans text-muted-foreground tracking-widest uppercase text-xs">
            No properties found in this collection.
          </p>
        </div>
      )}
    </section>
  )
}
