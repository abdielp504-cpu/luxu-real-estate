import { createClient } from "@/lib/supabase/server"
import { Header } from "./header"

export async function HeaderServer() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return <Header user={user} />
}
