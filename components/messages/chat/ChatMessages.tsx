// 'use client'

// import { useEffect, useRef } from 'react'

// import ChatBubble from './ChatBubble'

// type Props = {
//   messages: any[]
//   currentUserId: string
// }

// export default function ChatMessages({
//   messages,
//   currentUserId,
// }: Props) {

//   const bottomRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({
//       behavior: 'smooth',
//     })
//   }, [messages])

//   if (messages.length === 0) {
//     return (
//       <div
//         className="
//           flex
//           h-full
//           items-center
//           justify-center
//           text-slate-400
//         "
//       >
//         No messages yet.
//       </div>
//     )
//   }

//   // return (

//   //   <div
//   //     className="
//   //       flex
//   //       flex-col
//   //       gap-3
//   //     "
//   //   >

//   //     {messages.map((message) => (

//   //       <ChatBubble
//   //         key={message.id}
//   //         message={message}
//   //         currentUserId={currentUserId}
//   //       />

//   //     ))}

//   //     <div ref={bottomRef} />

//   //   </div>

//   // )


//      return (

//   <div
//     className="
//       flex-1
//       min-h-0
//       overflow-y-auto
//       bg-slate-50
//       p-6
//     "
//   >

//     {messages.length === 0 ? (

//       <div
//         className="
//           flex
//           h-full
//           items-center
//           justify-center
//           text-slate-400
//         "
//       >
//         No messages yet.
//       </div>

//     ) : (

//       <div
//         className="
//           flex
//           flex-col
//           gap-3
//         "
//       >

//         {messages.map((message) => (

//           <ChatBubble
//             key={message.id}
//             message={message}
//             currentUserId={currentUserId}
//           />

//         ))}

//         <div ref={bottomRef} />

//       </div>

//     )}

//   </div>

// )
// }







'use client'

import { useEffect, useRef } from 'react'

import ChatBubble from './ChatBubble'

type Props = {
  messages: any[]
  currentUserId: string
}

export default function ChatMessages({
  messages,
  currentUserId,
}: Props) {

  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [messages])

  return (

    <div
      className="
        flex
        h-full
        min-h-0
        flex-col
        overflow-y-auto
        bg-slate-50
        p-6
      "
    >

      {messages.length === 0 ? (

        <div
          className="
            flex
            flex-1
            items-center
            justify-center
            text-slate-400
          "
        >
          No messages yet.
        </div>

      ) : (

        <>
          {messages.map((message) => (

            <ChatBubble
              key={message.id}
              message={message}
              currentUserId={currentUserId}
            />

          ))}

          <div ref={bottomRef} />
        </>

      )}

    </div>

  )

}