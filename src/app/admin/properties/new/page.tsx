import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default async function NewPropertyPage() {
  async function createProperty(formData: FormData) {
    'use server'
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) redirect("/login")

    const rawData = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      price: Number(formData.get('price')),
      address: formData.get('address') as string,
      city: formData.get('city') as string,
      type: formData.get('type') as string,
      beds: Number(formData.get('beds')),
      baths: Number(formData.get('baths')),
      sqft: Number(formData.get('sqft')),
      status: 'available',
      agent_id: user.id,
      // For now, we manually input image URLs. Future phase: Storage upload.
      images: (formData.get('images') as string).split(',').map(url => url.trim()).filter(Boolean),
      amenities: (formData.get('amenities') as string).split(',').map(a => a.trim()).filter(Boolean),
    }

    const { error } = await supabase
      .from('properties')
      .insert(rawData)

    if (error) {
      console.error(error)
      return
    }

    redirect("/admin/properties")
  }

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="space-y-4">
        <h2 className="font-serif text-4xl font-light italic text-black">New <span className="not-italic">Listing</span></h2>
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">Expand your luxury portfolio</p>
      </div>

      <form action={createProperty} className="space-y-12 max-w-4xl">
        
        {/* Section 1: Core Identity */}
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <span className="font-serif text-2xl italic text-accent">01</span>
            <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold">Property Identity</h3>
            <Separator className="flex-grow bg-border/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2 md:col-span-2">
              <Label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Property Title</Label>
              <Input name="title" required className="rounded-none border-b-border border-t-0 border-x-0 focus-visible:ring-0 focus-visible:border-black transition-all bg-transparent py-6" placeholder="The Emerald Villa" />
            </div>
            
            <div className="space-y-2">
              <Label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Property Type</Label>
              <Select name="type" defaultValue="house">
                <SelectTrigger className="rounded-none border-b-border border-t-0 border-x-0 focus:ring-0 focus:border-black bg-transparent">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-none">
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="penthouse">Penthouse</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Asking Price (USD)</Label>
              <Input name="price" type="number" required className="rounded-none border-b-border border-t-0 border-x-0 focus-visible:ring-0 focus-visible:border-black transition-all bg-transparent py-6" placeholder="5500000" />
            </div>
          </div>
        </div>

        {/* Section 2: Location & Specs */}
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <span className="font-serif text-2xl italic text-accent">02</span>
            <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold">Location & Specifications</h3>
            <Separator className="flex-grow bg-border/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2 md:col-span-2">
              <Label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Address</Label>
              <Input name="address" required className="rounded-none border-b-border border-t-0 border-x-0 focus-visible:ring-0 focus-visible:border-black transition-all bg-transparent py-6" placeholder="789 Royal Drive" />
            </div>
            <div className="space-y-2">
              <Label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">City</Label>
              <Input name="city" required className="rounded-none border-b-border border-t-0 border-x-0 focus-visible:ring-0 focus-visible:border-black transition-all bg-transparent py-6" placeholder="Miami" />
            </div>
            <div className="space-y-2">
              <Label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Bedrooms</Label>
              <Input name="beds" type="number" required className="rounded-none border-b-border border-t-0 border-x-0 focus-visible:ring-0 focus-visible:border-black transition-all bg-transparent py-6" placeholder="5" />
            </div>
            <div className="space-y-2">
              <Label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Bathrooms</Label>
              <Input name="baths" type="number" required className="rounded-none border-b-border border-t-0 border-x-0 focus-visible:ring-0 focus-visible:border-black transition-all bg-transparent py-6" placeholder="4" />
            </div>
            <div className="space-y-2">
              <Label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Square Feet</Label>
              <Input name="sqft" type="number" required className="rounded-none border-b-border border-t-0 border-x-0 focus-visible:ring-0 focus-visible:border-black transition-all bg-transparent py-6" placeholder="4200" />
            </div>
          </div>
        </div>

        {/* Section 3: Media & Details */}
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <span className="font-serif text-2xl italic text-accent">03</span>
            <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold">Narrative & Assets</h3>
            <Separator className="flex-grow bg-border/40" />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">The Narrative (Description)</Label>
              <Textarea name="description" required className="rounded-none border-b-border border-t-0 border-x-0 focus-visible:ring-0 focus-visible:border-black transition-all bg-transparent min-h-[150px] resize-none" placeholder="Describe the lifestyle this property offers..." />
            </div>
            
            <div className="space-y-2">
              <Label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Image URLs (Comma separated)</Label>
              <Input name="images" className="rounded-none border-b-border border-t-0 border-x-0 focus-visible:ring-0 focus-visible:border-black transition-all bg-transparent py-6" placeholder="https://url1.jpg, https://url2.jpg" />
            </div>

            <div className="space-y-2">
              <Label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Amenities (Comma separated)</Label>
              <Input name="amenities" className="rounded-none border-b-border border-t-0 border-x-0 focus-visible:ring-0 focus-visible:border-black transition-all bg-transparent py-6" placeholder="Pool, Wine Cellar, Smart Home" />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-8">
          <Button type="submit" className="bg-black text-white hover:bg-black/90 rounded-none px-16 py-8 text-[10px] tracking-[0.3em] uppercase transition-all shadow-xl">
            Publish Property
          </Button>
        </div>
      </form>
    </div>
  )
}
