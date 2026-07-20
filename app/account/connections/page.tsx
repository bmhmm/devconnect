import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

import RequestsList from '@/components/connections/RequestsList'
import ConnectionsList from '@/components/connections/ConnectionList'

export default async function ConnectionsPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

//   return (
//     <main className="mx-auto max-w-6xl space-y-10 px-6 py-10">

//       <div>
//         <h1 className="text-3xl font-bold text-slate-900">
//           Connections
//         </h1>

//         <p className="mt-2 text-slate-500">
//           Manage your connection requests.
//         </p>
//       </div>

//       <RequestsList userId={user.id} />

//       <ConnectionsList userId={user.id} />

//     </main>
//   )
return (
  <main className="mx-auto min-h-screen max-w-6xl space-y-10 px-6 py-12 antialiased">

    {/* Header Banner */}
    <div className="relative overflow-hidden rounded-3xl border border-[#E6DCCF] bg-gradient-to-r from-[#FAF6F0] via-[#F4ECE1] to-[#EFE6D8] p-8 shadow-sm transition-all duration-300 ease-out hover:shadow-md">
      {/* Decorative subtle ambient light background accent */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#E3D3C1]/30 blur-2xl" />

      <div className="relative z-10 max-w-xl">
        <h1 className="text-3xl font-bold tracking-tight text-[#3B2314] sm:text-4xl">
          Connections
        </h1>

        <p className="mt-2.5 text-base font-medium leading-relaxed text-[#8C735B]">
          Manage your connection requests and build your network.
        </p>
      </div>
    </div>

    {/* Main Content Sections */}
    <div className="space-y-8">
      <section className="rounded-3xl border border-[#EFE8DF] bg-[#FAF8F5] p-6 shadow-sm transition-all duration-300 ease-out hover:shadow-md sm:p-8">
        <RequestsList userId={user.id} />
      </section>

      <section className="rounded-3xl border border-[#EFE8DF] bg-[#FAF8F5] p-6 shadow-sm transition-all duration-300 ease-out hover:shadow-md sm:p-8">
        <ConnectionsList userId={user.id} />
      </section>
    </div>

  </main>
)
}