"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { UserNav } from "./user-nav";

const navItems = [
  { name: "Hogar", href: "/" },
  { name: "Propiedades", href: "/properties" },
  { name: "Acerca de", href: "/about" },
];

interface HeaderProps {
  user: any; 
}

export function Header({ user }: HeaderProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Evita errores de hidratación y el fallo de 'removeChild'
  useEffect(() => {
    setMounted(true);
  }, []);

  // Renderizado inicial simplificado para sincronizar servidor y cliente
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-serif text-2xl font-bold">LUJO</div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-serif text-2xl font-bold">
            LUJO
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent font-sans text-sm tracking-widest uppercase hover:bg-transparent transition-colors",
                        pathname === item.href ? "text-accent font-bold" : "text-muted-foreground hover:text-primary"
                      )}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-4">
          {user ? (
            <UserNav user={user} />
          ) : (
            <Link
              href="/signup"
              className="text-sm font-medium hover:underline underline-offset-4 tracking-tight"
            >
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}