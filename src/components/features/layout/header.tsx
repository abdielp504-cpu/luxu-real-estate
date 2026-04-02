"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { UserNav } from "./user-nav"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const navItems = [
  { name: "Properties", href: "/properties" },
  { name: "Agents", href: "/agents" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

interface HeaderProps {
  user?: any // Type as Supabase user or specific user interface
}

export function Header({ user }: HeaderProps) {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-serif text-2xl font-semibold tracking-widest uppercase">
            Luxe
          </span>
        </Link>

        <nav className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent font-sans text-sm tracking-widest uppercase hover:bg-transparent hover:text-accent transition-colors",
                        pathname === item.href && "text-accent"
                      )}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center space-x-4">
          {user ? (
            <UserNav user={user} />
          ) : (
            <Link href="/login">
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white rounded-none text-[10px] tracking-[0.2em] uppercase transition-all px-6">
                Login
              </Button>
            </Link>
          )}
          <Button className="bg-black text-white hover:bg-black/90 rounded-none text-[10px] tracking-[0.2em] uppercase transition-all px-6 hidden sm:inline-flex">
            Book a Viewing
          </Button>
        </div>
      </div>
    </header>
  )
}
