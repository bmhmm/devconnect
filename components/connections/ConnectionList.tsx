import { createClient } from '@/lib/supabase/server'

type Props = {
  userId: string
}

export default async function ConnectionsList({
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
        username
      ),
      receiver:profiles!connections_receiver_id_fkey(
        id,
        full_name,
        username
      )
    `)
    .eq('status', 'accepted')
    .or(
      `requester_id.eq.${userId},receiver_id.eq.${userId}`
    )

  return (
    <section className="space-y-6">

      <h2 className="text-xl font-semibold">
        My Connections
      </h2>

      {!data?.length ? (
        <div className="rounded-2xl border border-dashed p-10 text-center text-slate-500">
          No connections yet.
        </div>
      ) : (
        <div className="grid gap-4">

          {data.map((connection: any) => {
            const other =
              connection.requester.id === userId
                ? connection.receiver
                : connection.requester

            return (
              <div
                key={connection.id}
                className="rounded-2xl border bg-white p-5 shadow-sm"
              >
                <h3 className="font-semibold">
                  {other.full_name}
                </h3>

                <p className="text-sm text-slate-500">
                  @{other.username}
                </p>
              </div>
            )
          })}

        </div>
      )}

    </section>
  )
}