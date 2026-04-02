"use client"

import { useTransition } from "react"
import { Trash2 } from "lucide-react"
import { toast } from "sonner"
import { deleteProperty } from "@/app/properties/actions"
import { Button } from "@/components/ui/button"

export function DeletePropertyButton({ id, title }: { id: string, title: string }) {
  const [isPending, startTransition] = useTransition()

  const handleDelete = () => {
    if (confirm(`Are you sure you want to remove "${title}"? This action is permanent.`)) {
      startTransition(async () => {
        const result = await deleteProperty(id)
        if (result.success) {
          toast.success("Listing Removed", {
            description: `${title} has been deleted from the portfolio.`
          })
        } else {
          toast.error("Deletion Failed", {
            description: result.error
          })
        }
      })
    }
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      disabled={isPending}
      onClick={handleDelete}
      className="rounded-none hover:text-destructive hover:bg-destructive/5 transition-all text-muted-foreground"
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  )
}
