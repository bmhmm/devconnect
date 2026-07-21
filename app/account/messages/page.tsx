// import { createClient } from '@/lib/supabase/server'
// import { redirect } from 'next/navigation'

// import ConversationList from '@/components/messages/ConversationList'

// export default async function MessagesPage() {
//   const supabase = await createClient()

//   const {
//     data: { user },
//   } = await supabase.auth.getUser()

//   if (!user) {
//     redirect('/login')
//   }

//   return (
//     <main className="mx-auto max-w-7xl px-6 py-10">

//       <h1 className="mb-8 text-3xl font-bold">
//         Messages
//       </h1>

//       <ConversationList
//         userId={user.id}
//       />

//     </main>
//   )
// }





import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

import MessagesLayout from '@/components/messages/MessagesLayout'


export default async function MessagesPage(){

  const supabase = await createClient()


  const {
    data:{
      user
    }
  } = await supabase.auth.getUser()



  if(!user){
    redirect('/login')
  }



  const { data } = await supabase
    .from('connections')
    .select(`
      requester:profiles!connections_requester_id_fkey(
        id,
        full_name,
        username,
        avatar_url,
        headline
      ),
      receiver:profiles!connections_receiver_id_fkey(
        id,
        full_name,
        username,
        avatar_url,
        headline
      )
    `)
    .eq('status','accepted')
    .or(
      `requester_id.eq.${user.id},receiver_id.eq.${user.id}`
    )



  const conversations =
    data?.map((connection:any)=>{

      return connection.requester.id === user.id
      ? connection.receiver
      : connection.requester

    }) ?? []



  return (

    <main
      className="
        mx-auto
        max-w-7xl
        px-6
        py-10
      "
    >

     <MessagesLayout
  conversations={conversations}
  currentUserId={user.id}
/>

    </main>

  )
}