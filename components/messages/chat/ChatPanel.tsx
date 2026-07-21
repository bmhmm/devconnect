'use client'

import { useEffect, useState } from "react"

import ChatHeader from "./ChatHeader"
import ChatBubble from "./ChatBubble"

import MessageInput from "../MessageInput"

import { getConversation } from "@/lib/chat"


type Props = {
  currentUserId: string
  receiver: any
}


// export default function ChatPanel({
//   currentUserId,
//   receiver,
// }: Props){
   
    export default function ChatPanel({
  currentUserId,
  receiver,
}: Props) {

  const [messages, setMessages] = useState<any[]>([])

  useEffect(() => {

  async function loadConversation() {

    const data = await getConversation(
      currentUserId,
      receiver.id
    )

    setMessages(data)

  }

  loadConversation()

}, [currentUserId, receiver.id])

//   return (

   
//     <div
//   className="
//     flex
//     h-full
//     w-full
//     flex-1
//     flex-col
//   "
// >

//       <ChatHeader
//         profile={receiver}
//       />



//       <div
//   className="
//     flex-1
//     overflow-y-auto
//     bg-slate-50
//     p-6
//   "
// >

//   {messages.length === 0 ? (

//     <p
//       className="
//         text-center
//         text-slate-400
//       "
//     >
//       No messages yet.
//     </p>

//   ) : (

//     <div className="flex flex-col gap-3">

//       {messages.map((message) => (

//         <ChatBubble
//           key={message.id}
//           message={message}
//           currentUserId={currentUserId}
//         />

//       ))}

//     </div>

//   )}

// </div>
//       <MessageInput
//   receiverId={receiver.id}
// />


//     </div>

//   )

   return (

  <div
    className="
      flex
      h-full
      w-full
      flex-col
      overflow-hidden
    "
  >

    <div className="shrink-0">

      <ChatHeader
        profile={receiver}
      />

    </div>


    <div
      className="
        flex-1
        overflow-hidden
      "
    >

      <div
        className="
          h-full
          overflow-y-auto
          bg-slate-50
          p-6
        "
      >

        {messages.length === 0 ? (

          <div
            className="
              flex
              h-full
              items-center
              justify-center
              text-slate-400
            "
          >
            No messages yet.
          </div>

        ) : (

          <div className="flex flex-col gap-3">

            {messages.map((message) => (

              <ChatBubble
                key={message.id}
                message={message}
                currentUserId={currentUserId}
              />

            ))}

          </div>

        )}

      </div>

    </div>


    <div className="shrink-0">

      <MessageInput
        receiverId={receiver.id}
      />

    </div>

  </div>

)

}