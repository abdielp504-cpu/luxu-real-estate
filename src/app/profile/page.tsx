import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { updateProfile } from "@/app/auth/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default async function ProfilePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  const params = await searchParams
  const error = params.error as string
  const message = params.message as string

  const fullName = user.user_metadata?.full_name || ""
  const initials = fullName
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2)

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      {/* Header */}
      <div className="space-y-4">
        <h2 className="font-serif text-3xl font-light italic">General <span className="not-italic">Settings</span></h2>
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
          Update your public and private information.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Avatar Sidebar */}
        <div className="flex flex-col items-center space-y-4 pt-4">
          <Avatar className="h-40 w-40 border-2 border-border/50">
            <AvatarImage src={user.user_metadata?.avatar_url} />
            <AvatarFallback className="bg-secondary text-secondary-foreground font-serif text-3xl">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="text-center">
            <p className="font-serif text-xl font-medium">{fullName || "Luxe Member"}</p>
            <p className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground italic">
              Member since {new Date(user.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Form Area */}
        <div className="md:col-span-2">
          <div className="bg-secondary/5 p-10 border border-border/40">
            <form action={updateProfile} className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="full_name" className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground ml-1">
                    Full Name
                  </Label>
                  <Input 
                    id="full_name"
                    name="full_name" 
                    type="text" 
                    defaultValue={fullName}
                    required 
                    className="rounded-none border-b-border border-t-0 border-x-0 focus-visible:ring-0 focus-visible:border-black transition-all px-1 py-6 bg-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground ml-1">
                    Email Address
                  </Label>
                  <Input 
                    id="email"
                    type="email" 
                    value={user.email}
                    disabled
                    className="rounded-none border-b-border border-t-0 border-x-0 focus-visible:ring-0 focus-visible:border-black transition-all px-1 py-6 bg-transparent opacity-50 cursor-not-allowed"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="avatar_url" className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground ml-1">
                    Avatar URL
                  </Label>
                  <Input 
                    id="avatar_url"
                    name="avatar_url" 
                    type="url" 
                    defaultValue={user.user_metadata?.avatar_url}
                    className="rounded-none border-b-border border-t-0 border-x-0 focus-visible:ring-0 focus-visible:border-black transition-all px-1 py-6 bg-transparent"
                    placeholder="https://example.com/avatar.jpg"
                  />
                </div>
              </div>

              {error && (
                <p className="text-destructive text-[10px] tracking-widest uppercase">
                  {error}
                </p>
              )}
              {message && (
                <p className="text-accent text-[10px] tracking-widest uppercase font-medium">
                  {message}
                </p>
              )}

              <div className="flex justify-end pt-4">
                <Button className="bg-black text-white hover:bg-black/90 rounded-none px-12 py-6 text-[10px] tracking-[0.2em] uppercase transition-all">
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
