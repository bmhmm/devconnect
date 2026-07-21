'use client'

import { useState } from 'react'
import ConversationItem from './ConversationItem'
import ChatPanel from './chat/ChatPanel'


type Profile = {
  id: string
  full_name: string
  username: string
  avatar_url: string | null
  headline: string | null
}


// type Props = {
//   conversations: Profile[]
// }
type Props = {
  conversations: Profile[]
  currentUserId: string
}


export default function MessagesLayout({
  conversations,
  currentUserId,
}: Props) {


  const [selectedUser, setSelectedUser] =
    useState<Profile | null>(null)



  return (
    <div
      className="
        grid
        h-[75vh]
        grid-cols-1
        overflow-hidden
        rounded-3xl
        border
        bg-white
        shadow-lg

        md:grid-cols-[350px_1fr]
      "
    >


      {/* Sidebar */}

      <aside
        className="
          border-r
          bg-[#FFF9F2]
          p-4
        "
      >

        <h2
          className="
            mb-5
            text-xl
            font-bold
            text-[#3B2A1F]
          "
        >
          Messages
        </h2>


        <div className="space-y-2">

          {/* {conversations.map((profile)=> (

            <button
              key={profile.id}
              onClick={() =>
                setSelectedUser(profile)
              }
              className="
                w-full
                text-left
              "
            >

              <ConversationItem
  profile={profile}
  onSelect={setSelectedUser}
/>

            </button>

          ))} */}
          {conversations.map((profile)=> (

  <ConversationItem
    key={profile.id}
    profile={profile}
    onSelect={setSelectedUser}
  />

))}


        </div>


      </aside>



      {/* Chat Area */}

      {/* <section
        className="
          flex
          items-center
          justify-center
          bg-slate-50
        "
      >

        {selectedUser ? (

          <div
            className="
              text-center
              text-slate-500
            "
          >
            Chat with {selectedUser.full_name}
          </div>

        ) : (

          <div
            className="
              text-center
              text-slate-400
            "
          >

            Select a conversation

          </div>

        )}


      </section> */}
      <section
  className="
    flex
    bg-slate-50
  "
>

{
selectedUser ? (

  <ChatPanel
    currentUserId={currentUserId}
    receiver={selectedUser}
    messages={[]}
  />

) : (

  <div
    className="
      flex
      w-full
      items-center
      justify-center
      text-slate-400
    "
  >
    Select a conversation
  </div>

)

}

</section>


    </div>
  )
}