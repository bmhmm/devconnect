import ChatHeader from "./ChatHeader"
import ChatBubble from "./ChatBubble"


type Props = {
  currentUserId:string

  receiver:any

  messages:any[]
}


export default function ChatPanel({
  currentUserId,
  receiver,
  messages,
}:Props){


  return (

    <div
      className="
        flex
        h-full
        flex-col
      "
    >

      <ChatHeader
        profile={receiver}
      />



      <div
        className="
          flex-1
          space-y-3
          overflow-y-auto
          bg-slate-50
          p-6
        "
      >

        {messages.length === 0 ? (

          <p
            className="
              text-center
              text-slate-400
            "
          >
            No messages yet.
          </p>

        ):(

          messages.map((message)=>(
            <ChatBubble
              key={message.id}
              message={message}
              currentUserId={currentUserId}
            />
          ))

        )}

      </div>


    </div>

  )
}