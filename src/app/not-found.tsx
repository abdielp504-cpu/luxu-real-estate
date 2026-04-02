import Link from "next/link"
import { HeaderServer } from "@/components/features/layout/header-server"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeaderServer />
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-8">
          <div className="space-y-4">
            <h1 className="font-serif text-8xl font-light tracking-tighter text-secondary/40">404</h1>
            <h2 className="font-serif text-4xl font-light italic">Sanctuary <span className="not-italic">Not Found</span></h2>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground leading-relaxed">
              The space you are looking for has either moved or ceased to exist. 
              Let us guide you back to our curated portfolio.
            </p>
          </div>
          
          <div className="pt-8">
            <Link href="/properties">
              <Button className="bg-black text-white hover:bg-black/90 rounded-none px-12 py-6 text-[10px] tracking-[0.3em] uppercase transition-all">
                Explore Collection
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="py-12 border-t border-border/40 text-center">
        <span className="font-serif text-xl font-semibold tracking-widest uppercase opacity-20">Luxe</span>
      </footer>
    </div>
  )
}
