// 'use client'

// import { useEffect, useState } from 'react'
// import { createClient } from '@/lib/supabase/client'
// import {
//   UserPlus,
//   Clock3,
//   CheckCircle2,
//   Loader2,
// } from "lucide-react"


// type Props = {
//   requesterId: string
//   receiverId: string
// }

// export default function ConnectButton({
//   requesterId,
//   receiverId,
// }: Props) {
//   const supabase = createClient()

//   const [loading, setLoading] = useState(false)
//   const [status, setStatus] = useState<
//     'none' | 'pending' | 'connected'
//   >('none')
  

//   useEffect(() => {
//     checkConnection()
//   }, [])

//   async function checkConnection() {
//     const { data } = await supabase
//       .from('connections')
//       .select('*')
//       .or(
//         `and(requester_id.eq.${requesterId},receiver_id.eq.${receiverId}),and(requester_id.eq.${receiverId},receiver_id.eq.${requesterId})`
//       )
//       .maybeSingle()

//     if (!data) {
//       setStatus('none')
//       return
//     }

//     if (data.status === 'pending') {
//       setStatus('pending')
//     } else {
//       setStatus('connected')
//     }
//   }

//   async function sendRequest() {
//     try {
//       setLoading(true)

//       const { error } = await supabase
//         .from('connections')
//         .insert({
//           requester_id: requesterId,
//           receiver_id: receiverId,
//         })

//       if (error) throw error

//       setStatus('pending')
//     } catch (error) {
//       console.error(error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   if (status === 'connected') {
    
//     if (status === "connected") {
//   return (
//     <button
//       disabled
//       className="
//         inline-flex
//         items-center
//         justify-center
//         gap-2
//         rounded-2xl
//         bg-emerald-600
//         px-7
//         py-3.5
//         text-sm
//         font-semibold
//         text-white
//         shadow-lg
//       "
//     >
//       <CheckCircle2 size={18} />
//       Connected
//     </button>
//   )
// }
//   }

//   if (status === 'pending') {
   
//     if (status === "pending") {
//   return (
//     <button
//       disabled
//       className="
//         inline-flex
//         items-center
//         justify-center
//         gap-2
//         rounded-2xl
//         bg-amber-500
//         px-7
//         py-3.5
//         text-sm
//         font-semibold
//         text-white
//         shadow-lg
//       "
//     >
//       <Clock3 size={18} />
//       Request Sent
//     </button>
//   )
// }
//   }


// return (
//   <button
//     onClick={sendRequest}
//     disabled={loading}
//     className="
//       group
//       inline-flex
//       items-center
//       justify-center
//       gap-2
//       rounded-2xl
//       bg-slate-900
//       px-7
//       py-3.5
//       text-sm
//       font-semibold
//       text-white
//       shadow-lg
//       transition-all
//       duration-300
//       hover:-translate-y-1
//       hover:bg-black
//       hover:shadow-xl
//     "
//   >
//     {loading ? (
//       <>
//         <Loader2
//           size={18}
//           className="animate-spin"
//         />
//         Sending...
//       </>
//     ) : (
//       <>
//         <UserPlus
//           size={18}
//           className="transition-transform group-hover:scale-110"
//         />
//         Connect
//       </>
//     )}
//   </button>
// )
// }



'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import {
  UserPlus,
  Clock3,
  CheckCircle2,
  Loader2,
} from 'lucide-react'

type Status =
  | 'none'
  | 'pending_sent'
  | 'pending_received'
  | 'connected'

type Props = {
  requesterId: string
  receiverId: string
}

export default function ConnectButton({
  requesterId,
  receiverId,
}: Props) {
  const supabase = createClient()

  const [status, setStatus] = useState<Status>('none')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    checkConnection()
  }, [])

  async function checkConnection() {
    const { data, error } = await supabase
      .from('connections')
      .select('*')
      .or(
        `and(requester_id.eq.${requesterId},receiver_id.eq.${receiverId}),and(requester_id.eq.${receiverId},receiver_id.eq.${requesterId})`
      )
      .maybeSingle()

    if (error) {
      console.error(error)
      return
    }

    if (!data) {
      setStatus('none')
      return
    }

    if (data.status === 'accepted') {
      setStatus('connected')
      return
    }

    if (data.requester_id === requesterId) {
      setStatus('pending_sent')
    } else {
      setStatus('pending_received')
    }
  }

  async function sendRequest() {
    setLoading(true)

    const { data: existing } = await supabase
      .from('connections')
      .select('id')
      .or(
        `and(requester_id.eq.${requesterId},receiver_id.eq.${receiverId}),and(requester_id.eq.${receiverId},receiver_id.eq.${requesterId})`
      )
      .maybeSingle()

    if (existing) {
      await checkConnection()
      setLoading(false)
      return
    }

    const { error } = await supabase
      .from('connections')
      .insert({
        requester_id: requesterId,
        receiver_id: receiverId,
        status: 'pending',
      })

    if (error) {
      console.error(error)
    } else {
      setStatus('pending_sent')
    }

    setLoading(false)
  }

  async function acceptRequest() {
    setLoading(true)

    const { error } = await supabase
      .from('connections')
      .update({
        status: 'accepted',
      })
      .eq('requester_id', receiverId)
      .eq('receiver_id', requesterId)

    if (error) {
      console.error(error)
    } else {
      setStatus('connected')
    }

    setLoading(false)
  }

  if (status === 'connected') {
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

  if (status === 'pending_sent') {
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

  if (status === 'pending_received') {
    return (
      <button
        onClick={acceptRequest}
        disabled={loading}
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-blue-600
          px-7
          py-3.5
          text-sm
          font-semibold
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:bg-blue-700
        "
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Accepting...
          </>
        ) : (
          <>
            <CheckCircle2 size={18} />
            Accept Request
          </>
        )}
      </button>
    )
  }

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