import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

import ConversationList from '@/components/messages/ConversationList'

export default async function MessagesPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      <h1 className="mb-8 text-3xl font-bold">
        Messages
      </h1>

      <ConversationList
        userId={user.id}
      />

    </main>
  )
}