import { createClient } from '@/lib/supabase/client'

const supabase = createClient()

export async function getConversation(
  currentUserId: string,
  otherUserId: string
) {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .or(
      `
      and(sender_id.eq.${currentUserId},receiver_id.eq.${otherUserId}),
      and(sender_id.eq.${otherUserId},receiver_id.eq.${currentUserId})
      `
    )
    .order('created_at', {
      ascending: true,
    })

  if (error) {
    console.error(error)
    return []
  }

  return data
}