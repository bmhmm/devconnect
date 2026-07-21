import { createClient } from '@/lib/supabase/server'
// import ConversationCard from './ConversationCard'
import ConversationItem from './ConversationItem'
type Props = {
  userId: string
}

export default async function ConversationList({
  userId,
}: Props) {
  const supabase = await createClient()

  const { data } = await supabase
    .from('connections')
    .select(`
      *,
      requester:profiles!connections_requester_id_fkey(
        id,
        full_name,
        username,
        avatar_url,
        headline
      ),
      receiver:profiles!connections_receiver_id_fkey(
        id,
        full_name,
        username,
        avatar_url,
        headline
      )
    `)
    .eq('status', 'accepted')
    .or(
      `requester_id.eq.${userId},receiver_id.eq.${userId}`
    )

  return (
    <div className="space-y-4">

      {data?.map((connection: any) => {
        const other =
          connection.requester.id === userId
            ? connection.receiver
            : connection.requester

        return (
          <ConversationItem
  key={connection.id}
  profile={other}
  onSelect={setSelectedUser}
/>
        )
      })}

    </div>
  )
}