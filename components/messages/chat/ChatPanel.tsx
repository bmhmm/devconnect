'use client'

import { useEffect, useState } from "react"
import { createClient } from '@/lib/supabase/client'

import ChatHeader from "./ChatHeader"
// import ChatBubble from "./ChatBubble"
import ChatMessages from "./ChatMessages"

import MessageInput from "../MessageInput"

import { getConversation } from "@/lib/chat"
import { markConversationAsRead } from '@/app/account/messages/read-actions'


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
  const supabase = createClient()

//   async function loadConversation() {

//   const data = await getConversation(
//     currentUserId,
//     receiver.id
//   )

//   setMessages(data)

// }

//    async function loadConversation() {

//   // await markConversationAsRead(receiver.id)
//   await markConversationAsRead(currentUserId, receiver.id)

//   const data = await getConversation(
//     currentUserId,
//     receiver.id
//   )

//   setMessages(data)

// }

  async function loadConversation() {

  const data = await getConversation(
    currentUserId,
    receiver.id
  )

  setMessages(data)

}

//   useEffect(() => {

//   async function loadConversation() {

//     const data = await getConversation(
//       currentUserId,
//       receiver.id
//     )

//     setMessages(data)

//   }

//   loadConversation()

// }, [currentUserId, receiver.id])

// useEffect(() => {

//   loadConversation()

// }, [currentUserId, receiver.id])


useEffect(() => {

  async function openChat(){

    await markConversationAsRead(
      currentUserId,
      receiver.id
    )

    await loadConversation()

  }

  openChat()

}, [currentUserId, receiver.id])

useEffect(() => {

  const channel = supabase
    .channel(`chat-${currentUserId}-${receiver.id}`)

    // .on(
    //   'postgres_changes',
    //   {
    //     event: 'INSERT',
    //     schema: 'public',
    //     table: 'messages',
    //   },
    //   async () => {
    //     await loadConversation()
    //   }
    // )

     .on(
  'postgres_changes',
  {
    event: '*',
    schema: 'public',
    table: 'messages',
  },
  async () => {
    await loadConversation()
  }
)

    .subscribe()

  return () => {
    supabase.removeChannel(channel)
  }

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

  // <div
  //   className="
  //     flex
  //     h-full
  //     w-full
  //     flex-col
  //     overflow-hidden
  //   "
  // >

  <div
  className="
    flex
    h-full
    w-full
    min-h-0
    flex-col
    overflow-hidden
  "
>

    <div className="shrink-0">

      <ChatHeader
        profile={receiver}
      />

    </div>


    {/* <div
      className="
        flex-1
        overflow-hidden
      "
    > */}
    <div
  className="
    flex-1
    min-h-0
    overflow-hidden
  "
>

      {/* <div
        className="
          h-full
          overflow-y-auto
          bg-slate-50
          p-6
        "
      >

       

      </div> */}
      {/* <div className="h-full overflow-y-auto bg-slate-50 p-6">
</div> */}

      <ChatMessages
  messages={messages}
  currentUserId={currentUserId}
/>

    </div>


    <div className="shrink-0">

      {/* <MessageInput
        receiverId={receiver.id}
      /> */}
      <MessageInput
  receiverId={receiver.id}
  onMessageSent={loadConversation}
/>

    </div>

  </div>

)

}