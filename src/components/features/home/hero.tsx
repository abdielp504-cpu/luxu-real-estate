import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-black">
      {/* Background Image with next/image for Optimization */}
      <Image 
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
        alt="Luxury Modern Estate"
        fill
        priority
        className="object-cover opacity-60 backdrop-grayscale-[20%]"
        sizes="100vw"
      />

      {/* Content */}
      <div className="container relative mx-auto flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <h1 className="font-serif text-5xl font-light tracking-tight text-white sm:text-7xl lg:text-8xl">
            Redefining <br />
            <span className="italic">Exceptional</span> Living
          </h1>
          <p className="max-w-xl font-sans text-lg font-light tracking-widest text-white/90 uppercase sm:text-xl">
            Curated collections of the world&apos;s most prestigious estates.
          </p>
          <div className="flex flex-col space-y-4 pt-8 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button className="bg-white text-black hover:bg-white/90 px-8 py-6 text-xs tracking-widest uppercase rounded-none">
              Explore Properties
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-xs tracking-widest uppercase rounded-none">
              Private Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-[1px] bg-white/50" />
      </div>
    </section>
  )
}
