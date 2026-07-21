'use client'

import { useState } from 'react'
import { sendMessage } from '@/app/account/messages/actions'
import { useRouter } from 'next/navigation'


// type Props = {
//   receiverId: string
// }

type Props = {
  receiverId: string
  onMessageSent?: () => void
}


export default function MessageInput({
  receiverId,
  onMessageSent,
}: Props){


  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()



  async function handleSend() {

    if (!message.trim()) return


    try {

      setLoading(true)


      // await sendMessage(
      //   receiverId,
      //   message
      // )


      // setMessage('')

      // router.refresh()

      await sendMessage(
  receiverId,
  message
)

setMessage('')

onMessageSent?.()


    } finally {

      setLoading(false)

    }

  }



  return (

    <div
  className="
    flex
    items-end
    gap-3
    border-t
    bg-white
    p-4
  "
>


      {/* <input
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        placeholder="Write a message..."
        className="
        !bg-black
        text-white
          flex-1
          rounded-xl
          border
          px-4
          py-3
          outline-none
        "
      /> */}
      <textarea
  rows={1}
  value={message}
  onChange={(e)=>setMessage(e.target.value)}
  placeholder="Write a message..."

  className="
    max-h-40
    min-h-[48px]
    flex-1
    resize-none
    rounded-2xl
    border
    border-[#D8BFA3]
    bg-[#FFF9F2]
    px-4
    py-3
    text-[#3B2A1F]
    outline-none
    focus:ring-2
    focus:ring-[#8B5E3C]
  "
/>


      {/* <button
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

      </button> */}
      <button
  onClick={handleSend}
  disabled={loading}
  className="
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-full
    bg-[#8B5E3C]
    text-white
    transition
    hover:bg-[#6F4A31]
    disabled:opacity-50
  "
>

  {loading ? "..." : "➤"}

</button>


    </div>

  )
}