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

  if (messages.length === 0) {
    return (
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
    )
  }

  return (

    <div
      className="
        flex
        flex-col
        gap-3
      "
    >

      {messages.map((message) => (

        <ChatBubble
          key={message.id}
          message={message}
          currentUserId={currentUserId}
        />

      ))}

      <div ref={bottomRef} />

    </div>

  )
}