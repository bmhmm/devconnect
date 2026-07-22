// 'use server'

// import { revalidatePath } from 'next/cache'
// import { redirect } from 'next/navigation'

// import { createClient } from '@/lib/supabase/server'

// export async function login(formData: FormData) {
//   const supabase = await createClient()

  
//   const data = {
//     email: formData.get('email') as string,
//     password: formData.get('password') as string,
//   }

//   const { error } = await supabase.auth.signInWithPassword(data)

//   if (error) {
//     console.log("SIGNUP ERROR:", error.message)
//     redirect('/error')
//   }

//   revalidatePath('/', 'layout')
//   redirect('/account')
// }


// export async function signup(formData: FormData) {
//   const supabase = await createClient()

  
//   const data = {
//     email: formData.get('email') as string,
//     password: formData.get('password') as string,
//   }

//   const { error } = await supabase.auth.signUp(data)

//   if (error) {
//     redirect('/error')
//   }

//   revalidatePath('/', 'layout')
//   redirect('/account')
// }



'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'


export type AuthState = {
  error: string | null
}


export async function login(
  state: AuthState,
  formData: FormData
): Promise<AuthState> {

  const supabase = await createClient()

  const email =
    formData.get('email') as string

  const password =
    formData.get('password') as string


  const { error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    })


  if (error) {
    return {
      error: 'Invalid email or password.',
    }
  }


  revalidatePath('/', 'layout')

  redirect("/")
}



export async function signup(
  state: AuthState,
  formData: FormData
): Promise<AuthState> {

  const supabase = await createClient()


  const email =
    formData.get('email') as string

  const password =
    formData.get('password') as string


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

  redirect("/")
}