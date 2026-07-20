// type Props = {
//   currentUserId: string
//   receiver: {
//     id: string
//     full_name: string
//     username: string
//     headline: string | null
//   }
//   messages: any[]
// }


// export default function ChatWindow({
//   currentUserId,
//   receiver,
//   messages,
// }: Props) {


//   return (

//     <div className="
//       rounded-3xl
//       border
//       bg-white
//       shadow-sm
//       overflow-hidden
//     ">


//       {/* Header */}

//       <div className="
//         border-b
//         p-6
//       ">

//         <h1 className="
//           text-xl
//           font-bold
//         ">
//           {receiver.full_name}
//         </h1>


//         <p className="text-sm text-slate-500">
//           @{receiver.username}
//         </p>


//         <p className="text-sm text-slate-600">
//           {receiver.headline}
//         </p>

//       </div>



//       {/* Messages */}

//       <div className="
//         min-h-[400px]
//         space-y-4
//         p-6
//         bg-slate-50
//       ">


//         {messages.length === 0 && (

//           <p className="
//             text-center
//             text-slate-400
//           ">
//             No messages yet. Start the conversation.
//           </p>

//         )}



//         {messages.map((message)=> (

//           <div
//             key={message.id}
//             className={`
//               flex
//               ${
//                 message.sender_id === currentUserId
//                 ? 'justify-end'
//                 : 'justify-start'
//               }
//             `}
//           >

//             <div className="
//               max-w-xs
//               rounded-2xl
//               bg-white
//               px-4
//               py-3
//               shadow
//             ">

//               {message.content}

//             </div>


//           </div>

//         ))}


//       </div>



//       {/* Input later */}

//       <div className="
//         border-t
//         p-4
//       ">

//         <p className="
//           text-sm
//           text-slate-400
//         ">
//           Message input coming next...
//         </p>

//       </div>


//     </div>

//   )
// }


import MessageInput from './MessageInput'

type Props = {
  currentUserId: string
  receiver: {
    id: string
    full_name: string
    username: string
    headline: string | null
  }
  messages: any[]
}

export default function ChatWindow({
  currentUserId,
  receiver,
  messages,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-[#E8D3B5] bg-white shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-[#F1E2CE] bg-[#FFF9F2] p-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#8B5E3C] text-lg font-bold text-white shadow-sm">
          {receiver.full_name?.charAt(0)}
        </div>

        <div>
          <h1 className="text-lg font-semibold text-[#3B2A1F]">
            {receiver.full_name}
          </h1>

          <p className="text-sm text-[#7A6552]">
            @{receiver.username}
          </p>

          {receiver.headline && (
            <p className="text-sm text-[#9B8775]">
              {receiver.headline}
            </p>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="min-h-[500px] space-y-4 bg-[#FCF7F0] p-6">
        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center py-20">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#F3E6D7] text-2xl">
                💬
              </div>
              <p className="font-medium text-[#7A6552]">
                No messages yet
              </p>
              <p className="text-sm text-[#A08B78]">
                Start the conversation with {receiver.full_name}.
              </p>
            </div>
          </div>
        ) : (
          messages.map((message) => {
            const isSender =
              message.sender_id === currentUserId

            return (
              <div
                key={message.id}
                className={`flex ${
                  isSender ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-3xl px-4 py-3 shadow-sm transition-all ${
                    isSender
                      ? 'rounded-br-md bg-blue-100 text-blue-950'
                      : 'rounded-bl-md bg-[#F5E6D3] text-[#4B3621]'
                  }`}
                >
                  <p className="whitespace-pre-wrap text-[15px] leading-relaxed">
                    {message.content}
                  </p>

                  <div
                    className={`mt-2 text-right text-[11px] ${
                      isSender
                        ? 'text-blue-700'
                        : 'text-[#8B7355]'
                    }`}
                  >
                    {new Date(message.created_at).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* Input */}
      <div className="border-t border-[#F1E2CE] bg-white p-4">
        <MessageInput receiverId={receiver.id} />
      </div>
    </div>
  )
}