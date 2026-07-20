'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import {
  UserPlus,
  Clock3,
  CheckCircle2,
  Loader2,
} from "lucide-react"

type Props = {
  requesterId: string
  receiverId: string
}

export default function ConnectButton({
  requesterId,
  receiverId,
}: Props) {
  const supabase = createClient()

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<
    'none' | 'pending' | 'connected'
  >('none')

  useEffect(() => {
    checkConnection()
  }, [])

  async function checkConnection() {
    const { data } = await supabase
      .from('connections')
      .select('*')
      .or(
        `and(requester_id.eq.${requesterId},receiver_id.eq.${receiverId}),and(requester_id.eq.${receiverId},receiver_id.eq.${requesterId})`
      )
      .maybeSingle()

    if (!data) {
      setStatus('none')
      return
    }

    if (data.status === 'pending') {
      setStatus('pending')
    } else {
      setStatus('connected')
    }
  }

  async function sendRequest() {
    try {
      setLoading(true)

      const { error } = await supabase
        .from('connections')
        .insert({
          requester_id: requesterId,
          receiver_id: receiverId,
        })

      if (error) throw error

      setStatus('pending')
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  if (status === 'connected') {
    // return (
    // //   <button
    // //     disabled
    // //     className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white"
    // //   >
    // //     Connected ✓
    // //   </button>
    // )
    if (status === "connected") {
  return (
    <button
      disabled
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-2xl
        bg-emerald-600
        px-7
        py-3.5
        text-sm
        font-semibold
        text-white
        shadow-lg
      "
    >
      <CheckCircle2 size={18} />
      Connected
    </button>
  )
}
  }

  if (status === 'pending') {
    // return (
    //   <button
    //     disabled
    //     className="w-full rounded-xl bg-amber-500 py-3 font-semibold text-white"
    //   >
    //     Request Sent
    //   </button>
    // )
    if (status === "pending") {
  return (
    <button
      disabled
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-2xl
        bg-amber-500
        px-7
        py-3.5
        text-sm
        font-semibold
        text-white
        shadow-lg
      "
    >
      <Clock3 size={18} />
      Request Sent
    </button>
  )
}
  }

//   return (
//     <button
//       onClick={sendRequest}
//       disabled={loading}
//       className="w-full rounded-xl bg-slate-900 py-3 font-semibold text-white transition hover:bg-slate-800"
//     >
//       {loading ? 'Sending...' : 'Connect'}
//     </button>
//   )
return (
  <button
    onClick={sendRequest}
    disabled={loading}
    className="
      group
      inline-flex
      items-center
      justify-center
      gap-2
      rounded-2xl
      bg-slate-900
      px-7
      py-3.5
      text-sm
      font-semibold
      text-white
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-1
      hover:bg-black
      hover:shadow-xl
    "
  >
    {loading ? (
      <>
        <Loader2
          size={18}
          className="animate-spin"
        />
        Sending...
      </>
    ) : (
      <>
        <UserPlus
          size={18}
          className="transition-transform group-hover:scale-110"
        />
        Connect
      </>
    )}
  </button>
)
}