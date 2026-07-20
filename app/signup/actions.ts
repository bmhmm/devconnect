'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'


export type SignupState = {
  error: string | null
}


export async function signup(
  state: SignupState,
  formData: FormData
): Promise<SignupState> {

  const supabase = await createClient()


  const email =
    formData.get('email') as string

  const password =
    formData.get('password') as string

  const confirmPassword =
    formData.get('confirmPassword') as string



  if (password !== confirmPassword) {
    return {
      error: 'Passwords do not match.',
    }
  }


  if (password.length < 8) {
    return {
      error: 'Password must be at least 8 characters.',
    }
  }


  const { error } =
    await supabase.auth.signUp({
      email,
      password,
    })


  if (error) {
    return {
      error: error.message,
    }
  }


  revalidatePath('/', 'layout')

  redirect('/account')
}