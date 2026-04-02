import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, ExternalLink, Plus } from "lucide-react"
import { DeletePropertyButton } from "./delete-property-button"

export default async function AdminPropertiesPage() {
  const supabase = await createClient()

  const { data: properties } = await supabase
    .from('properties')
    .select('*')
    .order('created_at', { ascending: false })

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-4">
          <h2 className="font-serif text-4xl font-light italic text-black">Property <span className="not-italic">Portfolio</span></h2>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">Manage your exclusive listings</p>
        </div>
        <Link href="/admin/properties/new">
          <Button className="bg-black text-white hover:bg-black/90 rounded-none px-8 py-6 text-[10px] tracking-[0.2em] uppercase transition-all">
            <Plus className="mr-2 h-4 w-4" /> Add Property
          </Button>
        </Link>
      </div>

      <div className="border border-border/40 bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary/5 hover:bg-secondary/5 border-b border-border/40">
              <TableHead className="font-sans text-[10px] tracking-[0.2em] uppercase text-black py-6 px-8">Property</TableHead>
              <TableHead className="font-sans text-[10px] tracking-[0.2em] uppercase text-black py-6 px-8">Location</TableHead>
              <TableHead className="font-sans text-[10px] tracking-[0.2em] uppercase text-black py-6 px-8">Price</TableHead>
              <TableHead className="font-sans text-[10px] tracking-[0.2em] uppercase text-black py-6 px-8">Status</TableHead>
              <TableHead className="font-sans text-[10px] tracking-[0.2em] uppercase text-black py-6 px-8 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {properties && properties.length > 0 ? (
              properties.map((property) => (
                <TableRow key={property.id} className="hover:bg-secondary/5 transition-colors border-b border-border/20">
                  <TableCell className="py-6 px-8">
                    <div className="space-y-1">
                      <p className="font-serif text-lg font-medium">{property.title}</p>
                      <p className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground">{property.type}</p>
                    </div>
                  </TableCell>
                  <TableCell className="py-6 px-8">
                    <div className="space-y-1">
                      <p className="font-sans text-xs uppercase tracking-tight">{property.address}</p>
                      <p className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground">{property.city}</p>
                    </div>
                  </TableCell>
                  <TableCell className="py-6 px-8 font-serif text-lg">
                    {formatPrice(property.price)}
                  </TableCell>
                  <TableCell className="py-6 px-8">
                    <Badge variant="outline" className="rounded-none font-sans text-[10px] tracking-[0.2em] uppercase border-border/60">
                      {property.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-6 px-8 text-right">
                    <div className="flex justify-end space-x-2">
                      <Link href={`/properties/${property.id}`} target="_blank">
                        <Button variant="ghost" size="icon" className="rounded-none hover:bg-black hover:text-white transition-all">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="ghost" size="icon" className="rounded-none hover:bg-black hover:text-white transition-all">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <DeletePropertyButton id={property.id} title={property.title} />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="py-20 text-center font-sans text-xs tracking-widest uppercase text-muted-foreground">
                  No properties found in your portfolio.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
