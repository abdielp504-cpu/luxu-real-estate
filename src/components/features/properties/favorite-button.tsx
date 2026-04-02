"use client"

import { useState, useTransition } from "react"
import { Heart } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { toggleFavorite } from "@/app/properties/actions"
import { Button } from "@/components/ui/button"

interface FavoriteButtonProps {
  propertyId: string
  initialIsFavorite: boolean
  className?: string
}

export function FavoriteButton({ 
  propertyId, 
  initialIsFavorite, 
  className 
}: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite)
  const [isPending, startTransition] = useTransition()

  const handleToggle = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    // Optimistic UI
    const nextState = !isFavorite
    setIsFavorite(nextState)

    startTransition(async () => {
      const result = await toggleFavorite(propertyId, isFavorite)
      
      if (result.success) {
        toast.success(
          result.action === 'added' ? 'Added to Wishlist' : 'Removed from Wishlist',
          {
            description: result.action === 'added' 
              ? 'This property has been saved to your collection.' 
              : 'This property has been removed from your collection.'
          }
        )
      } else {
        // Rollback
        setIsFavorite(isFavorite)
        toast.error('Unable to save property', {
          description: result.error
        })
      }
    })
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300",
        isPending && "opacity-50",
        className
      )}
      onClick={handleToggle}
      disabled={isPending}
    >
      <Heart 
        className={cn(
          "h-5 w-5 transition-colors duration-300",
          isFavorite ? "fill-accent text-accent" : "text-white"
        )} 
      />
    </Button>
  )
}
