import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, MessageSquare, TrendingUp, Users } from "lucide-react"

export default async function AdminOverviewPage() {
  const supabase = await createClient()

  // Fetch stats
  const { count: propertyCount } = await supabase.from('properties').select('*', { count: 'exact', head: true })
  const { count: inquiryCount } = await supabase.from('inquiries').select('*', { count: 'exact', head: true })
  
  // Stats summary cards
  const stats = [
    { title: "Total Portfolio", value: propertyCount || 0, icon: Home, label: "Active Listings" },
    { title: "Lead Volume", value: inquiryCount || 0, icon: MessageSquare, label: "Total Inquiries" },
    { title: "Market Reach", value: "12", icon: TrendingUp, label: "Cities Covered" },
    { title: "Client Base", value: "148", icon: Users, label: "Registered Buyers" },
  ]

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="space-y-4">
        <h2 className="font-serif text-4xl font-light italic text-black">Strategic <span className="not-italic">Overview</span></h2>
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">Real-time performance metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <Card key={stat.title} className="rounded-none border-border/40 bg-secondary/5 hover:bg-white transition-colors duration-500 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground group-hover:text-black transition-colors">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-serif tracking-tighter mb-1">{stat.value}</div>
              <p className="font-sans text-[10px] tracking-widest text-muted-foreground uppercase">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity Placeholder */}
      <div className="bg-secondary/5 border border-border/40 p-12 text-center">
        <p className="font-serif text-xl italic text-muted-foreground">"Excellence is not an act, but a habit."</p>
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-4">— Business Intelligence coming soon</p>
      </div>
    </div>
  )
}
