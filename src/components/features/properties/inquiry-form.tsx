"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { toast } from "sonner"
import { submitInquiry } from "@/app/properties/actions"

interface InquiryFormProps {
  propertyId: string
  propertyName: string
}

export function InquiryForm({ propertyId, propertyName }: InquiryFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true)
    setError(null)
    
    const result = await submitInquiry(formData)
    
    setIsLoading(false)
    if (result.success) {
      setIsSubmitted(true)
      toast.success("Inquiry Sent Successfully", {
        description: "An agent will contact you shortly."
      })
    } else {
      setError(result.error || "Something went wrong. Please try again.")
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-black text-white p-8 flex flex-col items-center text-center space-y-4 animate-in fade-in zoom-in duration-500 sticky top-24">
        <CheckCircle2 className="h-12 w-12 text-accent" />
        <h3 className="font-serif text-2xl">Request Received</h3>
        <p className="font-sans text-xs tracking-widest uppercase opacity-70 leading-relaxed">
          Our specialized agent will contact you shortly regarding <span className="italic">{propertyName}</span>.
        </p>
        <Button 
          variant="outline" 
          className="mt-4 border-white text-white hover:bg-white hover:text-black rounded-none"
          onClick={() => setIsSubmitted(false)}
        >
          Close
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-secondary/10 p-8 border border-border/40 space-y-8 sticky top-24">
      <div className="space-y-2">
        <h3 className="font-serif text-2xl font-light">Inquire <span className="italic">Now</span></h3>
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          Exceptional Service for Exclusive Clients
        </p>
      </div>

      <form action={handleSubmit} className="space-y-6">
        <input type="hidden" name="propertyId" value={propertyId} />
        
        <div className="space-y-2">
          <Label htmlFor="name" className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground ml-1">
            Full Name
          </Label>
          <Input 
            id="name"
            name="name"
            required 
            placeholder="John Doe"
            className="rounded-none border-b-border border-t-0 border-x-0 focus-visible:ring-0 focus-visible:border-black transition-all px-1 py-6 bg-transparent"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground ml-1">
            Email Address
          </Label>
          <Input 
            id="email"
            name="email"
            type="email"
            required 
            placeholder="name@example.com"
            className="rounded-none border-b-border border-t-0 border-x-0 focus-visible:ring-0 focus-visible:border-black transition-all px-1 py-6 bg-transparent"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground ml-1">
            Your Message
          </Label>
          <Textarea 
            id="message"
            name="message"
            required 
            defaultValue={`I am interested in ${propertyName}. Please provide more details.`}
            className="rounded-none border-b-border border-t-0 border-x-0 focus-visible:ring-0 focus-visible:border-black transition-all px-1 min-h-[100px] bg-transparent resize-none"
          />
        </div>

        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-black text-white hover:bg-black/90 rounded-none py-6 text-[10px] tracking-[0.2em] uppercase transition-all"
        >
          {isLoading ? "Transmitting..." : "Send Request"}
        </Button>

        {error && (
          <div className="flex items-center space-x-2 text-destructive text-[10px] tracking-widest uppercase mt-2">
            <AlertCircle className="h-4 w-4" />
            <span>{error}</span>
          </div>
        )}
      </form>
    </div>
  )
}
