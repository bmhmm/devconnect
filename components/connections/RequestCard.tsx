'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

type Props = {
  request: any
}

export default function RequestCard({ request }: Props) {
  const supabase = createClient()

  const [loading, setLoading] = useState(false)

  async function acceptRequest() {
    setLoading(true)

    await supabase
      .from('connections')
      .update({
        status: 'accepted',
      })
      .eq('id', request.id)

    location.reload()
  }

  async function declineRequest() {
    setLoading(true)

    await supabase
      .from('connections')
      .delete()
      .eq('id', request.id)

    location.reload()
  }

  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div>

        <h3 className="font-semibold text-slate-900">
          {request.requester.full_name}
        </h3>

        <p className="text-sm text-slate-500">
          @{request.requester.username}
        </p>

        <p className="mt-2 text-sm text-slate-600">
          {request.requester.headline}
        </p>

      </div>

      <div className="flex gap-3">

        <button
          disabled={loading}
          onClick={acceptRequest}
          className="rounded-xl bg-green-600 px-5 py-2 font-medium text-white hover:bg-green-700"
        >
          Accept
        </button>

        <button
          disabled={loading}
          onClick={declineRequest}
          className="rounded-xl bg-red-500 px-5 py-2 font-medium text-white hover:bg-red-600"
        >
          Decline
        </button>

      </div>

    </div>
  )
}