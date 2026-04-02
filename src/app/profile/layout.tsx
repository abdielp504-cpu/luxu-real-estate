import { HeaderServer } from "@/components/features/layout/header-server"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { User, Heart, MessageSquare, Settings, LogOut } from "lucide-react"
import { logout } from "@/app/auth/actions"

const navItems = [
  { name: "General", href: "/profile", icon: User },
  { name: "My Favorites", href: "/profile/favorites", icon: Heart },
  { name: "Inquiries", href: "/profile/inquiries", icon: MessageSquare },
  { name: "Settings", href: "/profile/settings", icon: Settings },
]

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeaderServer />
      
      <main className="flex-grow py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sidebar Navigation */}
            <aside className="w-full lg:w-64 space-y-8">
              <div className="space-y-4">
                <h1 className="font-serif text-4xl font-light tracking-tight">
                  User <span className="italic text-accent">Studio</span>
                </h1>
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  Personal Dashboard
                </p>
              </div>

              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-4 px-4 py-3 font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-black hover:bg-secondary/50 transition-all group"
                  >
                    <item.icon className="h-4 w-4 group-hover:text-accent transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                ))}
                
                <Separator className="my-4 bg-border/40" />
                
                <form action={logout}>
                  <button
                    type="submit"
                    className="w-full flex items-center space-x-4 px-4 py-3 font-sans text-[10px] tracking-[0.2em] uppercase text-destructive hover:bg-destructive/5 transition-all group"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="font-semibold">Log out</span>
                  </button>
                </form>
              </nav>
            </aside>

            {/* Content Area */}
            <div className="flex-grow">
              {children}
            </div>
            
          </div>
        </div>
      </main>
    </div>
  )
}
