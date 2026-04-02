import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function PropertyCardSkeleton() {
  return (
    <Card className="group relative overflow-hidden border-none bg-transparent shadow-none animate-pulse">
      <div className="relative aspect-[4/5] w-full bg-secondary/20" />
      <CardContent className="px-0 pt-6 pb-2">
        <div className="flex justify-between items-start mb-4">
          <div className="h-6 w-2/3 bg-secondary/20" />
          <div className="h-4 w-16 bg-secondary/20" />
        </div>
        <div className="h-4 w-1/2 bg-secondary/20 mb-6" />
        <div className="h-8 w-1/3 bg-secondary/20 mb-4" />
      </CardContent>
      <CardFooter className="px-0 py-2 border-t border-border/40 flex justify-between">
        <div className="flex space-x-4 w-full">
          <div className="h-3 w-16 bg-secondary/20" />
          <div className="h-3 w-16 bg-secondary/20" />
          <div className="h-3 w-16 bg-secondary/20" />
        </div>
      </CardFooter>
    </Card>
  )
}

export function PropertyGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 py-12">
      {Array.from({ length: 6 }).map((_, i) => (
        <PropertyCardSkeleton key={i} />
      ))}
    </div>
  )
}
