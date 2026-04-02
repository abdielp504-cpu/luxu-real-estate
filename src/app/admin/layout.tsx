import { HeaderServer } from "@/components/features/layout/header-server"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { LayoutDashboard, Home, MessageSquare, Users, Settings, PlusCircle } from "lucide-react"

const adminNavItems = [
  { name: "Overview", href: "/admin", icon: LayoutDashboard },
  { name: "Properties", href: "/admin/properties", icon: Home },
  { name: "Inquiries", href: "/admin/inquiries", icon: MessageSquare },
  { name: "New Listing", href: "/admin/properties/new", icon: PlusCircle },
  { name: "Users", href: "/admin/users", icon: Users },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeaderServer />
      
      <main className="flex-grow flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-secondary/5 border-r border-border/40 p-8 space-y-10">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl font-light">Agent <span className="italic text-accent">Portal</span></h2>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Management Console</p>
          </div>

          <nav className="flex flex-col space-y-1">
            {adminNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-4 px-4 py-3 font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-black hover:bg-white border border-transparent hover:border-border/40 transition-all group"
              >
                <item.icon className="h-4 w-4 group-hover:text-accent transition-colors" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          <Separator className="bg-border/40" />
          
          <div className="pt-4">
            <Link 
              href="/profile" 
              className="flex items-center space-x-4 px-4 py-3 font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-black transition-colors"
            >
              <Settings className="h-4 w-4" />
              <span>Personal Settings</span>
            </Link>
          </div>
        </aside>

        {/* Content */}
        <section className="flex-grow p-8 md:p-12 lg:p-16">
          <div className="container mx-auto max-w-6xl">
            {children}
          </div>
        </section>
      </main>
    </div>
  )
}
