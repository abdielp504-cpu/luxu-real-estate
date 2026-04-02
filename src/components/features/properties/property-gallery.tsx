"use client"

import { useState } from "react"
import Image from "next/image"
import { Maximize2, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PropertyGalleryProps {
  images: string[]
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  if (!images?.length) return <div className="aspect-video bg-secondary/20 animate-pulse" />

  return (
    <div className="space-y-4">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 aspect-[16/10] md:aspect-[21/9]">
        {/* Main Image */}
        <div 
          className="md:col-span-2 md:row-span-2 relative overflow-hidden group cursor-pointer"
          onClick={() => setSelectedImage(0)}
        >
          <Image
            src={images[0]}
            alt="Property Hero"
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="h-4 w-4" />
          </div>
        </div>

        {/* Secondary Images */}
        {images.slice(1, 3).map((image, i) => (
          <div 
            key={i}
            className="hidden md:block relative overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImage(i + 1)}
          >
            <Image
              src={image}
              alt={`Property ${i + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
        ))}

        {/* Last Grid Item (With overlay for more images) */}
        {images[3] && (
          <div 
            className="hidden md:block relative overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImage(3)}
          >
            <Image
              src={images[3]}
              alt="Property 4"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {images.length > 4 && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-serif text-xl">+{images.length - 4}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
        )}
      </div>

      {/* Lightbox / Zoom (Simple Implementation) */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <Button 
            variant="ghost" 
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </Button>
          
          <div className="relative w-full max-w-6xl aspect-video">
            <Image
              src={images[selectedImage]}
              alt="Property Fullscreen"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-8 flex space-x-4">
             <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black rounded-none"
              onClick={() => setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : images.length - 1))}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black rounded-none"
              onClick={() => setSelectedImage((prev) => (prev! < images.length - 1 ? prev! + 1 : 0))}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
