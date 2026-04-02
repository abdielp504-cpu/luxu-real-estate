import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { PropertyGrid } from "@/components/features/properties/property-grid"
import { type Property } from "@/components/features/properties/property-card"

export default async function FavoritesPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  // Fetch favorited properties with a join
  const { data: favorites } = await supabase
    .from('favorites')
    .select(`
      property:property_id (*)
    `)
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  const properties = favorites?.map(f => ({
    ...(f.property as any),
    is_favorite: true
  })) || []

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="space-y-4">
        <h2 className="font-serif text-3xl font-light italic">My <span className="not-italic">Favorites</span></h2>
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
          Your curated selection of exceptional estates.
        </p>
      </div>

      {properties.length > 0 ? (
        <div className="lg:-mx-8"> {/* Negative margin to counteract grid padding */}
          <PropertyGrid 
            properties={properties as Property[]} 
            className="py-0 px-0 container-none lg:grid-cols-2" // Adjust grid to 2 columns in dashboard
          />
        </div>
      ) : (
        <div className="py-32 text-center border border-dashed border-border/40">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Your wishlist is empty. Start exploring properties.
          </p>
        </div>
      )}
    </div>
  )
}
