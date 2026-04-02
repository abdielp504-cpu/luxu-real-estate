'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/login?error=' + encodeURIComponent(error.message))
  }

  revalidatePath('/', 'layout')
  redirect('/profile')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      data: {
        full_name: formData.get('full_name') as string,
      }
    }
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/signup?error=' + encodeURIComponent(error.message))
  }

  revalidatePath('/', 'layout')
  redirect('/login?message=Check your email to confirm your account.')
}

export async function updateProfile(formData: FormData) {
  const supabase = await createClient()
  
  const data = {
    full_name: formData.get('full_name') as string,
    avatar_url: formData.get('avatar_url') as string,
  }

  const { error } = await supabase.auth.updateUser({
    data: data
  })

  if (error) {
    redirect('/profile?error=' + encodeURIComponent(error.message))
  }

  // Also update the public.profiles table
  const { data: { user } } = await supabase.auth.getUser()
  if (user) {
    await supabase
      .from('profiles')
      .update({
        full_name: data.full_name,
        avatar_url: data.avatar_url,
      })
      .eq('id', user.id)
  }

  revalidatePath('/profile')
  redirect('/profile?message=Profile updated successfully.')
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath('/', 'layout')
  redirect('/')
}
