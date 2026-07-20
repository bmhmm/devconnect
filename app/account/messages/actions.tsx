'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'


export async function sendMessage(
  receiverId: string,
  content: string
) {

  const supabase = await createClient()


  const {
    data: {
      user
    },
  } = await supabase.auth.getUser()


  if (!user) {
    throw new Error('Not authenticated')
  }


  if (!content.trim()) {
    return
  }


  const { error } =
    await supabase
      .from('messages')
      .insert({
        sender_id: user.id,
        receiver_id: receiverId,
        content: content.trim(),
      })


  if (error) {
    console.log(error)
    throw new Error('Message failed')
  }


  revalidatePath(
    `/account/messages/${receiverId}`
  )
}