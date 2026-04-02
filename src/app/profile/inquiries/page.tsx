import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, ArrowRight } from "lucide-react"

export default async function InquiriesPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  // Fetch inquiries with property details
  const { data: inquiries } = await supabase
    .from('inquiries')
    .select(`
      *,
      property:property_id (id, title, address, city, images, price)
    `)
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="space-y-4">
        <h2 className="font-serif text-3xl font-light italic">My <span className="not-italic">Inquiries</span></h2>
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
          Track your requests and communication with our agents.
        </p>
      </div>

      <div className="space-y-6">
        {inquiries && inquiries.length > 0 ? (
          inquiries.map((inquiry) => (
            <Card key={inquiry.id} className="rounded-none border-border/40 hover:border-black transition-all group">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Property Image */}
                  <div className="relative w-full md:w-48 aspect-[4/3] md:aspect-auto overflow-hidden">
                    <Image
                      src={(inquiry.property as any)?.images[0]}
                      alt={(inquiry.property as any)?.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Inquiry Info */}
                  <div className="flex-grow p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <h3 className="font-serif text-xl">{(inquiry.property as any)?.title}</h3>
                          <p className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground flex items-center">
                            <MapPin className="h-3 w-3 mr-2" />
                            {(inquiry.property as any)?.address}, {(inquiry.property as any)?.city}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground flex items-center justify-end">
                            <Calendar className="h-3 w-3 mr-2" />
                            {new Date(inquiry.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      <div className="bg-secondary/10 p-4 border-l-2 border-black/20">
                        <p className="font-sans text-xs text-muted-foreground leading-relaxed italic">
                          &quot;{inquiry.message}&quot;
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 flex justify-end">
                      <Link 
                        href={`/properties/${inquiry.property_id}`}
                        className="font-sans text-[10px] tracking-[0.3em] uppercase text-black flex items-center group/link hover:text-accent transition-colors"
                      >
                        View Property <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/link:translate-x-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="py-32 text-center border border-dashed border-border/40">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground">
              You haven&apos;t sent any inquiries yet.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
