import { createClient } from '@/lib/supabase/server'
import RequestCard from './RequestCard'

type Props = {
  userId: string
}

export default async function RequestsList({
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
      )
    `)
    .eq('receiver_id', userId)
    .eq('status', 'pending')

  return (
    <section className="space-y-6">

      <h2 className="text-xl font-semibold">
        Pending Requests
      </h2>

      {!data?.length ? (
        <div className="rounded-2xl border border-dashed p-10 text-center text-slate-500">
          No pending requests.
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((request: any) => (
            <RequestCard
              key={request.id}
              request={request}
            />
          ))}
        </div>
      )}

    </section>
  )
}