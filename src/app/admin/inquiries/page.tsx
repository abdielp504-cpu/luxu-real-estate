import { createClient } from "@/lib/supabase/server"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Mail, MessageSquare } from "lucide-react"

export default async function AdminInquiriesPage() {
  const supabase = await createClient()

  const { data: inquiries } = await supabase
    .from('inquiries')
    .select(`
      *,
      property:property_id (title, city)
    `)
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="space-y-4">
        <h2 className="font-serif text-4xl font-light italic text-black">Client <span className="not-italic">Inquiries</span></h2>
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">Manage incoming interest and leads</p>
      </div>

      <div className="border border-border/40 bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary/5 hover:bg-secondary/5 border-b border-border/40">
              <TableHead className="font-sans text-[10px] tracking-[0.2em] uppercase text-black py-6 px-8">Client</TableHead>
              <TableHead className="font-sans text-[10px] tracking-[0.2em] uppercase text-black py-6 px-8">Property</TableHead>
              <TableHead className="font-sans text-[10px] tracking-[0.2em] uppercase text-black py-6 px-8">Message</TableHead>
              <TableHead className="font-sans text-[10px] tracking-[0.2em] uppercase text-black py-6 px-8">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inquiries && inquiries.length > 0 ? (
              inquiries.map((inquiry) => (
                <TableRow key={inquiry.id} className="hover:bg-secondary/5 transition-colors border-b border-border/20">
                  <TableCell className="py-6 px-8">
                    <div className="space-y-1">
                      <p className="font-serif text-lg font-medium flex items-center">
                        <User className="h-3 w-3 mr-2 text-accent" /> {inquiry.name}
                      </p>
                      <p className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground flex items-center">
                        <Mail className="h-3 w-3 mr-2" /> {inquiry.email}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="py-6 px-8">
                    <div className="space-y-1">
                      <p className="font-sans text-xs uppercase font-bold">{(inquiry.property as any)?.title}</p>
                      <p className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground">{(inquiry.property as any)?.city}</p>
                    </div>
                  </TableCell>
                  <TableCell className="py-6 px-8 max-w-xs">
                    <p className="font-sans text-xs text-muted-foreground italic leading-relaxed line-clamp-2">
                      &quot;{inquiry.message}&quot;
                    </p>
                  </TableCell>
                  <TableCell className="py-6 px-8">
                    <div className="flex items-center font-sans text-[10px] tracking-widest uppercase text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-2" />
                      {new Date(inquiry.created_at).toLocaleDateString()}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="py-20 text-center font-sans text-xs tracking-widest uppercase text-muted-foreground">
                  No inquiries received yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
