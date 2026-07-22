

type Props = {
  message: {
    content: string
    created_at: string
    sender_id: string
    read_at: string | null
  }

  currentUserId: string
}


export default function ChatBubble({
  message,
  currentUserId,
}:Props){


  const mine =
    message.sender_id === currentUserId



  return (

    // <div
    //   className={`
    //     flex
    //     ${mine ? "justify-end" : "justify-start"}
    //   `}
    // >
    <div
  className={`
    flex
    ${
      mine
        ? "justify-end"
        : "justify-start"
    }
    mb-1.5
  `}
>

      <div
        className={`
          max-w-[75%]
          rounded-2xl
          px-4
          py-2.5
          shadow

          ${
            mine
            ? `
              bg-[#1E3A5F]
              text-white
            `
            :
            `
              bg-[#F5E6D3]
              text-[#3B2A1F]
            `
          }
        `}
      >

        <p>
          {message.content}
        </p>


        {/* <p
          className={`
            mt-0.5
            text-right
            text-xs

            ${
              mine
              ? "text-blue-100"
              : "text-[#8B5E3C]"
            }
          `}
        >

          {new Date(
            message.created_at
          ).toLocaleTimeString([],{
            hour:"2-digit",
            minute:"2-digit"
          })}

        </p> */}
      <div
  className={`
    mt-0.5
    flex
    items-center
    justify-end
    gap-1
    text-xs

    ${
      mine
        ? "text-blue-100"
        : "text-[#8B5E3C]"
    }
  `}
>

  <span>
    {new Date(message.created_at).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}
  </span>

  {mine && (
    <span>
      {message.read_at ? "✓✓" : "✓"}
    </span>
  )}

</div>


      </div>

    </div>

  )
}