'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function deleteProperty(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from('properties').delete().eq('id', id)
  if (error) return { success: false, error: error.message }
  revalidatePath('/admin/properties')
  revalidatePath('/properties')
  return { success: true }
}

export async function updateInquiryStatus(id: string, status: string) {
  // Assuming we add a status column to inquiries later, for now we just log it or update if exists
  const supabase = await createClient()
  // const { error } = await supabase.from('inquiries').update({ status }).eq('id', id)
  // if (error) return { success: false, error: error.message }
  revalidatePath('/admin/inquiries')
  return { success: true }
}

export async function toggleFavorite(propertyId: string, isFavorite: boolean) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return { success: false, error: "Please login to save properties." }
  }

  if (isFavorite) {
    // Remove from favorites
    const { error } = await supabase
      .from('favorites')
      .delete()
      .eq('user_id', user.id)
      .eq('property_id', propertyId)

    if (error) return { success: false, error: error.message }
    revalidatePath('/profile/favorites')
    return { success: true, action: 'removed' }
  } else {
    // Add to favorites
    const { error } = await supabase
      .from('favorites')
      .insert({
        user_id: user.id,
        property_id: propertyId
      })

    if (error) return { success: false, error: error.message }
    revalidatePath('/profile/favorites')
    return { success: true, action: 'added' }
  }
}

export async function submitInquiry(formData: FormData) {
  const supabase = await createClient()
  
  const propertyId = formData.get('propertyId') as string
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  // Get current user if logged in
  const { data: { user } } = await supabase.auth.getUser()

  const { error } = await supabase
    .from('inquiries')
    .insert({
      property_id: propertyId,
      user_id: user?.id || null,
      name,
      email,
      message
    })

  if (error) {
    console.error('Inquiry error:', error)
    return { success: false, error: error.message }
  }

  return { success: true }
}
