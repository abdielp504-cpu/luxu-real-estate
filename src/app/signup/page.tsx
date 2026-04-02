import Link from "next/link"
import { signup } from "@/app/auth/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HeaderServer } from "@/components/features/layout/header-server"

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams
  const error = params.error as string

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeaderServer />
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="hidden md:block relative aspect-[4/5] bg-secondary/20 overflow-hidden order-last md:order-first">
            <img 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury Minimalist House"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-black/5" />
          </div>

          {/* Form Side */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl font-light tracking-tight">
                Create <span className="italic">Account</span>
              </h1>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Join our exclusive network of luxury real estate.
              </p>
            </div>

            <form action={signup} className="space-y-6">
              <div className="space-y-2">
                <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground ml-1">
                  Full Name
                </label>
                <Input 
                  name="full_name" 
                  type="text" 
                  required 
                  className="rounded-none border-b-border border-t-0 border-x-0 focus-visible:ring-0 focus-visible:border-black transition-all px-1 py-6 bg-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground ml-1">
                  Email Address
                </label>
                <Input 
                  name="email" 
                  type="email" 
                  required 
                  className="rounded-none border-b-border border-t-0 border-x-0 focus-visible:ring-0 focus-visible:border-black transition-all px-1 py-6 bg-transparent"
                  placeholder="name@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground ml-1">
                  Password
                </label>
                <Input 
                  name="password" 
                  type="password" 
                  required 
                  className="rounded-none border-b-border border-t-0 border-x-0 focus-visible:ring-0 focus-visible:border-black transition-all px-1 py-6 bg-transparent"
                  placeholder="••••••••"
                />
              </div>

              {error && (
                <p className="text-destructive text-xs tracking-widest uppercase">
                  {error}
                </p>
              )}

              <Button className="w-full bg-black text-white hover:bg-black/90 rounded-none py-6 text-xs tracking-[0.2em] uppercase transition-all mt-4">
                Register
              </Button>
            </form>

            <div className="pt-6 text-center">
              <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-black border-b border-black pb-1 hover:text-accent hover:border-accent transition-all">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
