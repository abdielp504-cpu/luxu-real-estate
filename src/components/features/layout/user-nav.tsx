"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { LogOut, User, Settings, CreditCard, LayoutDashboard } from "lucide-react"
import { logout } from "@/app/auth/actions"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface UserNavProps {
  user: {
    id: string
    email?: string
    user_metadata?: {
      full_name?: string
      avatar_url?: string
    }
  }
}

export function UserNav({ user }: UserNavProps) {
  const router = useRouter()
  const fullName = user.user_metadata?.full_name || user.email || "User"
  const initials = fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full focus-visible:ring-0">
          <Avatar className="h-10 w-10 border border-border/50">
            <AvatarImage src={user.user_metadata?.avatar_url} alt={fullName} />
            <AvatarFallback className="bg-secondary text-secondary-foreground font-serif text-xs">
              {initials}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 rounded-none border-border" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none font-serif">{fullName}</p>
            <p className="text-xs leading-none text-muted-foreground font-sans uppercase tracking-widest">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-border/50" />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="focus:bg-secondary cursor-pointer">
            <Link href="/profile" className="flex w-full items-center">
              <User className="mr-2 h-4 w-4" />
              <span className="font-sans text-xs uppercase tracking-widest">Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-secondary cursor-pointer">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span className="font-sans text-xs uppercase tracking-widest">Dashboard</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-secondary cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span className="font-sans text-xs uppercase tracking-widest">Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-border/50" />
        <DropdownMenuItem 
          className="focus:bg-destructive/10 text-destructive focus:text-destructive cursor-pointer"
          onClick={() => logout()}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span className="font-sans text-xs uppercase tracking-widest font-semibold">Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
