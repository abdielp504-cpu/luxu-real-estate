import { createClient } from "@/lib/supabase/server"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ShieldCheck, User as UserIcon } from "lucide-react"

export default async function AdminUsersPage() {
  const supabase = await createClient()

  const { data: users } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="space-y-4">
        <h2 className="font-serif text-4xl font-light italic text-black">Member <span className="not-italic">Directory</span></h2>
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">Oversee user roles and community access</p>
      </div>

      <div className="border border-border/40 bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary/5 hover:bg-secondary/5 border-b border-border/40">
              <TableHead className="font-sans text-[10px] tracking-[0.2em] uppercase text-black py-6 px-8">Member</TableHead>
              <TableHead className="font-sans text-[10px] tracking-[0.2em] uppercase text-black py-6 px-8">Email</TableHead>
              <TableHead className="font-sans text-[10px] tracking-[0.2em] uppercase text-black py-6 px-8">Role</TableHead>
              <TableHead className="font-sans text-[10px] tracking-[0.2em] uppercase text-black py-6 px-8">Joined</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users && users.length > 0 ? (
              users.map((member) => (
                <TableRow key={member.id} className="hover:bg-secondary/5 transition-colors border-b border-border/20">
                  <TableCell className="py-6 px-8">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-10 w-10 border border-border/40">
                        <AvatarImage src={member.avatar_url} />
                        <AvatarFallback className="font-serif text-xs bg-secondary/20">
                          {member.full_name?.substring(0, 2).toUpperCase() || "LU"}
                        </AvatarFallback>
                      </Avatar>
                      <p className="font-serif text-lg">{member.full_name || "Luxe Member"}</p>
                    </div>
                  </TableCell>
                  <TableCell className="py-6 px-8 font-sans text-xs uppercase tracking-widest text-muted-foreground">
                    {member.email}
                  </TableCell>
                  <TableCell className="py-6 px-8">
                    <Badge 
                      variant={member.role === 'admin' ? 'default' : 'outline'} 
                      className="rounded-none font-sans text-[10px] tracking-[0.2em] uppercase px-3"
                    >
                      {member.role === 'admin' ? <ShieldCheck className="h-3 w-3 mr-1" /> : <UserIcon className="h-3 w-3 mr-1" />}
                      {member.role}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-6 px-8 font-sans text-[10px] tracking-widest uppercase text-muted-foreground">
                    {new Date(member.created_at).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="py-20 text-center font-sans text-xs tracking-widest uppercase text-muted-foreground">
                  No registered members found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
