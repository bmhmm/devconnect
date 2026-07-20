// import { redirect, notFound } from 'next/navigation'
// import { createClient } from '@/lib/supabase/server'
// import ChatWindow from '@/components/messages/ChatWindow'


// type Props = {
//   params: Promise<{
//     userId: string
//   }>
// }


// export default async function ChatPage({
//   params,
// }: Props) {

//   const { userId } = await params

//   const supabase = await createClient()


//   const {
//     data: {
//       user
//     },
//   } = await supabase.auth.getUser()


//   if (!user) {
//     redirect('/login')
//   }


//   // get other user profile

//   const { data: profile } =
//     await supabase
//       .from('profiles')
//       .select(`
//         id,
//         full_name,
//         username,
//         avatar_url,
//         headline
//       `)
//       .eq('id', userId)
//       .single()


//   if (!profile) {
//     notFound()
//   }



//   // get messages between two users

//   const { data: messages } =
//     await supabase
//       .from('messages')
//       .select('*')
//       .or(
//         `
//         and(sender_id.eq.${user.id},receiver_id.eq.${userId}),
//         and(sender_id.eq.${userId},receiver_id.eq.${user.id})
//         `
//       )
//       .order('created_at', {
//         ascending: true,
//       })


//   return (

//     <main className="
//       mx-auto
//       max-w-4xl
//       px-6
//       py-10
//     ">

//       <ChatWindow
//         currentUserId={user.id}
//         receiver={profile}
//         messages={messages ?? []}
//       />

//     </main>

//   )
// }









import { redirect, notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import ChatWindow from '@/components/messages/ChatWindow'


type Props = {
  params: Promise<{
    userId: string
  }>
}


export default async function ChatPage({
  params,
}: Props) {

  const { userId } = await params

  const supabase = await createClient()


  const {
    data: {
      user
    },
  } = await supabase.auth.getUser()


  if (!user) {
    redirect('/login')
  }


  const { data: profile } =
    await supabase
      .from('profiles')
      .select(`
        id,
        full_name,
        username,
        avatar_url,
        headline
      `)
      .eq('id', userId)
      .single()



  if (!profile) {
    notFound()
  }



  // const { data: messages } =
  //   await supabase
  //     .from('messages')
  //     .select('*')
  //     .or(
  //       `
  //       and(sender_id.eq.${user.id},receiver_id.eq.${userId}),
  //       and(sender_id.eq.${userId},receiver_id.eq.${user.id})
  //       `
  //     )
  //     .order('created_at', {
  //       ascending: true,
  //     })

    const { data: messages, error } = await supabase
  .from('messages')
  .select('*')
  .or(
    `and(sender_id.eq.${user.id},receiver_id.eq.${userId}),and(sender_id.eq.${userId},receiver_id.eq.${user.id})`
  )
  .order('created_at', {
    ascending: true,
  })

console.log('Current user:', user.id)
console.log('Receiver:', userId)
console.log('Messages:', messages)
console.log('Error:', error)

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">

      <ChatWindow
        currentUserId={user.id}
        receiver={profile}
        messages={messages ?? []}
      />

    </main>
  )
}