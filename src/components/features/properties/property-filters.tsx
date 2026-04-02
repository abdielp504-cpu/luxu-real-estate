"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search, X, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function PropertyFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [search, setSearch] = useState(searchParams.get("search") || "")
  const [priceRange, setPriceRange] = useState([
    Number(searchParams.get("minPrice")) || 0,
    Number(searchParams.get("maxPrice")) || 20000000,
  ])
  const [type, setType] = useState(searchParams.get("type") || "all")
  const [city, setCity] = useState(searchParams.get("city") || "all")

  const [isPending, setIsPending] = useState(false)

  const handleApplyFilters = () => {
    setIsPending(true)
    const params = new URLSearchParams()
    if (search) params.set("search", search)
    if (priceRange[0] > 0) params.set("minPrice", priceRange[0].toString())
    if (priceRange[1] < 20000000) params.set("maxPrice", priceRange[1].toString())
    if (type !== "all") params.set("type", type)
    if (city !== "all") params.set("city", city)

    router.push(`/properties?${params.toString()}`)
    // We can't easily detect when the server component finishes re-rendering, 
    // but the URL change will trigger it. We'll reset pending after a short delay or on effect.
  }

  useEffect(() => {
    setIsPending(false)
  }, [searchParams])

  const handleReset = () => {
    setIsPending(true)
    setSearch("")
    setPriceRange([0, 20000000])
    setType("all")
    setCity("all")
    router.push("/properties")
  }

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="bg-white border-b border-border/40 sticky top-20 z-40">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-6 lg:gap-8 items-end">
          {/* Search */}
          <div className="flex-grow w-full lg:w-auto space-y-2 sm:col-span-2 lg:col-span-1">
            <Label className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground ml-1">
              Search
            </Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="City, Address, or Property Name"
                className="pl-10 rounded-none border-b-border border-t-0 border-x-0 focus-visible:ring-0 focus-visible:border-black transition-all bg-transparent"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Type */}
          <div className="w-full space-y-2">
            <Label className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground ml-1">
              Property Type
            </Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="rounded-none border-b-border border-t-0 border-x-0 focus:ring-0 focus:border-black bg-transparent">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent className="rounded-none">
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* City */}
          <div className="w-full space-y-2">
            <Label className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground ml-1">
              Location
            </Label>
            <Select value={city} onValueChange={setCity}>
              <SelectTrigger className="rounded-none border-b-border border-t-0 border-x-0 focus:ring-0 focus:border-black bg-transparent">
                <SelectValue placeholder="All Cities" />
              </SelectTrigger>
              <SelectContent className="rounded-none">
                <SelectItem value="all">All Cities</SelectItem>
                <SelectItem value="Miami">Miami</SelectItem>
                <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                <SelectItem value="New York">New York</SelectItem>
                <SelectItem value="Aspen">Aspen</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price Range */}
          <div className="w-full lg:w-64 space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex justify-between items-center">
              <Label className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground ml-1">
                Price Range
              </Label>
              <span className="font-sans text-[10px] tracking-tighter text-black">
                {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
              </span>
            </div>
            <Slider
              defaultValue={[0, 20000000]}
              max={20000000}
              step={100000}
              value={priceRange}
              onValueChange={setPriceRange}
              className="py-4"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-4 w-full lg:w-auto sm:col-span-2 lg:col-span-1">
            <Button
              onClick={handleApplyFilters}
              disabled={isPending}
              className="flex-grow lg:flex-none bg-black text-white hover:bg-black/90 rounded-none px-8 py-6 text-[10px] tracking-[0.2em] uppercase transition-all"
            >
              {isPending ? "Refining..." : "Apply"}
            </Button>
            <Button
              variant="outline"
              onClick={handleReset}
              disabled={isPending}
              className="lg:flex-none border-black text-black hover:bg-black hover:text-white rounded-none p-4 transition-all"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
