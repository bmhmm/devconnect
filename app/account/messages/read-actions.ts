'use server'

import { createClient } from '@/lib/supabase/server'

export async function markConversationAsRead(
  senderId: string
) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return

  await supabase
    .from('messages')
    .update({
      read_at: new Date().toISOString(),
    })
    .eq('sender_id', senderId)
    .eq('receiver_id', user.id)
    .is('read_at', null)
}