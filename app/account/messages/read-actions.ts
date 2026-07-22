// 'use server'

// import { createClient } from '@/lib/supabase/server'

// export async function markConversationAsRead(
//   senderId: string
// ) {
//   const supabase = await createClient()

//   const {
//     data: { user },
//   } = await supabase.auth.getUser()

//   if (!user) return

//   await supabase
//     .from('messages')
//     .update({
//       read_at: new Date().toISOString(),
//     })
//     .eq('sender_id', senderId)
//     .eq('receiver_id', user.id)
//     .is('read_at', null)
// }







// 'use server'

// import { createClient } from '@/lib/supabase/server'

// export async function markConversationAsRead(
//   senderId: string
// ) {

//   const supabase = await createClient()


//   const {
//     data:{
//       user
//     }
//   } = await supabase.auth.getUser()


// //   if(!user){
// //     console.log("NO USER")
// //     return
// //   }
// if(!user){
//   console.log("NO USER")
//   return
// }


// console.log(
//   "CURRENT USER:",
//   user.id
// )

// console.log(
//   "SENDER ID:",
//   senderId
// )


//   const { data, error } = await supabase
//     .from('messages')
//     .update({
//       read_at: new Date().toISOString()
//     })
//     .eq('sender_id', senderId)
//     .eq('receiver_id', user.id)
//     .is('read_at', null)
//     .select()


//   console.log(
//     "UPDATED READ MESSAGES:",
//     data
//   )


//   console.log(
//     "READ ERROR:",
//     error
//   )

// }







// 'use server'

// import { createClient } from '@/lib/supabase/server'


// export async function markConversationAsRead(
//   senderId: string
// ) {

//   const supabase = await createClient()


//   const {
//     data:{
//       user
//     }
//   } = await supabase.auth.getUser()


//   if(!user){
//     console.log("NO USER")
//     return
//   }


//   console.log("CURRENT USER:", user.id)
//   console.log("SENDER ID:", senderId)



//   const { data: before, error: beforeError } =
//     await supabase
//       .from('messages')
//       .select('*')
//       .eq('sender_id', senderId)
//       .eq('receiver_id', user.id)


//   console.log(
//     "MATCHING MESSAGES BEFORE UPDATE:",
//     before
//   )


//   console.log(
//     "BEFORE ERROR:",
//     beforeError
//   )



//   const { data, error } =
//     await supabase
//       .from('messages')
//       .update({
//         read_at: new Date().toISOString()
//       })
//       .eq('sender_id', senderId)
//       .eq('receiver_id', user.id)
//       .is('read_at', null)
//       .select()


//   console.log(
//     "UPDATED:",
//     data
//   )


//   console.log(
//     "UPDATE ERROR:",
//     error
//   )

// }





// 'use server'

// import { createClient } from '@/lib/supabase/server'


// export async function markConversationAsRead(
//   otherUserId: string
// ) {

//   const supabase = await createClient()


//   const {
//     data:{
//       user
//     }
//   } = await supabase.auth.getUser()


//   if(!user) return


//   const { data, error } =
//     await supabase
//       .from('messages')
//       .update({
//         read_at: new Date().toISOString()
//       })
//       .eq('sender_id', otherUserId)
//       .eq('receiver_id', user.id)
//       .is('read_at', null)
//       .select()


//   console.log(
//     "MARKED READ:",
//     data
//   )

//   console.log(
//     "ERROR:",
//     error
//   )

// }





// 'use server'

// import { createClient } from '@/lib/supabase/server'


// export async function markConversationAsRead(
//   currentUserId: string,
//   otherUserId: string
// ) {

//   const supabase = await createClient()


//   const {
//     data,
//     error
//   } = await supabase
//     .from('messages')
//     .update({
//       read_at: new Date().toISOString()
//     })
//     .eq('sender_id', otherUserId)
//     .eq('receiver_id', currentUserId)
//     .is('read_at', null)
//     .select()


//   console.log(
//     "CURRENT USER:",
//     currentUserId
//   )

//   console.log(
//     "OTHER USER:",
//     otherUserId
//   )

//   console.log(
//     "MARKED READ:",
//     data
//   )

//   console.log(
//     "ERROR:",
//     error
//   )

// }


// export async function markConversationAsRead(
//   currentUserId: string,
//   otherUserId: string
// ) {

//   const supabase = await createClient()


//   console.log("CURRENT USER:", currentUserId)
//   console.log("OTHER USER:", otherUserId)



// //   const { data: checkMessages } = await supabase
// //     .from('messages')
// //     .select(
// //       `
// //       id,
// //       sender_id,
// //       receiver_id,
// //       content,
// //       read_at
// //       `
// //     )
// //     .or(
// //       `and(sender_id.eq.${otherUserId},receiver_id.eq.${currentUserId}),
// //        and(sender_id.eq.${currentUserId},receiver_id.eq.${otherUserId})`
// //     )

// const { data: checkMessages, error: checkError } =
//   await supabase
//     .from('messages')
//     .select(
//       `
//       id,
//       sender_id,
//       receiver_id,
//       content,
//       read_at
//       `
//     )
//     .eq('sender_id', otherUserId)
//     .eq('receiver_id', currentUserId)


// console.log(
//   "CHECK INCOMING MESSAGES:",
//   checkMessages
// )

// console.log(
//   "CHECK ERROR:",
//   checkError
// )


//   console.log(
//     "CONVERSATION MESSAGES:",
//     checkMessages
//   )



//   const { data, error } =
//     await supabase
//       .from('messages')
//       .update({
//         read_at: new Date().toISOString()
//       })
//       .eq('sender_id', otherUserId)
//       .eq('receiver_id', currentUserId)
//       .is('read_at', null)
//       .select()


//   console.log(
//     "MARKED READ:",
//     data
//   )

//   console.log(
//     "ERROR:",
//     error
//   )

// }




"use server";

import { createClient } from "@/lib/supabase/server";

export async function markConversationAsRead(
  currentUserId: string,
  otherUserId: string
) {
  const supabase = await createClient();

  console.log("CURRENT USER:", currentUserId);
  console.log("OTHER USER:", otherUserId);


  const { data: before, error: beforeError } = await supabase
    .from("messages")
    .select("*")
    .eq("sender_id", otherUserId)
    .eq("receiver_id", currentUserId)
    .is("read_at", null);


  console.log("BEFORE UPDATE:", before);
  console.log("BEFORE ERROR:", beforeError);



//   const { data, error } = await supabase
//     .from("messages")
//     .update({
//       read_at: new Date().toISOString(),
//     })
//     .eq("sender_id", otherUserId)
//     .eq("receiver_id", currentUserId)
//     .is("read_at", null)
//     .select();


//   console.log("UPDATED ROWS:", data);
//   console.log("UPDATE ERROR:", error);


//   return {
//     success: !error,
//     data,
//     error,
//   };



const { data, error } = await supabase
  .from("messages")
  .update({
    read_at: new Date().toISOString(),
  })
  .eq("sender_id", otherUserId)
  .eq("receiver_id", currentUserId)
  .is("read_at", null)
  .select();


console.log("UPDATED ROWS:", data);
console.log("UPDATE ERROR:", error);


return {
  success: !error,
  data,
  error,
};
}