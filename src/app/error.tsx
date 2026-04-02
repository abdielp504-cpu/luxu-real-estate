"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col min-h-screen bg-white items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-4">
          <h2 className="font-serif text-4xl font-light italic">System <span className="not-italic">Disturbance</span></h2>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground leading-relaxed">
            We encountered an unexpected error while preparing your experience. 
            Our engineers have been notified.
          </p>
        </div>
        
        <div className="pt-8 flex flex-col space-y-4 items-center">
          <Button 
            onClick={() => reset()}
            className="bg-black text-white hover:bg-black/90 rounded-none px-12 py-6 text-[10px] tracking-[0.3em] uppercase transition-all"
          >
            Attempt Restoration
          </Button>
          <Button 
            variant="link"
            onClick={() => window.location.href = '/'}
            className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
          >
            Return to Grand Lobby
          </Button>
        </div>
      </div>
    </div>
  )
}
