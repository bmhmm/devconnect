'use client'

import { useState } from 'react'
import { sendMessage } from '@/app/account/messages/actions'
import { useRouter } from 'next/navigation'


type Props = {
  receiverId: string
}


export default function MessageInput({
  receiverId,
}: Props) {


  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()



  async function handleSend() {

    if (!message.trim()) return


    try {

      setLoading(true)


      await sendMessage(
        receiverId,
        message
      )


      setMessage('')

      router.refresh()


    } finally {

      setLoading(false)

    }

  }



  return (

    <div className="
      flex
      gap-3
      border-t
      p-4
    ">


      <input
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        placeholder="Write a message..."
        className="
        bg-black
          flex-1
          rounded-xl
          border
          px-4
          py-3
          outline-none
        "
      />


      <button
        onClick={handleSend}
        disabled={loading}
        className="
          rounded-xl
          bg-[#8B5E3C]
          px-6
          text-white
          font-semibold
          disabled:opacity-50
        "
      >

        {loading
          ? 'Sending...'
          : 'Send'
        }

      </button>


    </div>

  )
}