import { Skeleton } from "@/components/ui/skeleton"

export function PropertyDetailSkeleton() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="h-20 w-full border-b border-border/40 bg-background/80" /> {/* Header spacer */}
      
      <main className="flex-grow">
        {/* Gallery Skeleton */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 aspect-[16/10] md:aspect-[21/9]">
            <div className="md:col-span-2 md:row-span-2 bg-secondary/20 animate-pulse" />
            <div className="hidden md:block bg-secondary/20 animate-pulse" />
            <div className="hidden md:block bg-secondary/20 animate-pulse" />
            <div className="hidden md:block bg-secondary/20 animate-pulse" />
          </div>
        </section>

        {/* Content Skeleton */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <div className="flex gap-2">
                  <div className="h-6 w-20 bg-secondary/20 animate-pulse" />
                  <div className="h-6 w-20 bg-secondary/20 animate-pulse" />
                </div>
                <div className="h-16 w-3/4 bg-secondary/20 animate-pulse" />
                <div className="h-6 w-1/2 bg-secondary/20 animate-pulse" />
                <div className="h-20 w-full bg-secondary/10 animate-pulse border-y border-border/20" />
              </div>
              <div className="grid grid-cols-4 gap-8">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-16 bg-secondary/10 animate-pulse" />
                ))}
              </div>
            </div>
            <div className="bg-secondary/5 h-[500px] border border-border/40 animate-pulse" />
          </div>
        </section>
      </main>
    </div>
  )
}
