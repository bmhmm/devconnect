// import { createClient } from '@/lib/supabase/server'
// import ProfileForm from '@/components/profile/ProfileForm'


// export default async function Account() {
//   const supabase = await createClient()
   
//   const { data: claimsData } = await supabase.auth.getClaims()

//   return(
//     <> 
//    <ProfileForm claims={claimsData?.claims ?? null} />

//  </>
//   )
// }




import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import ProfileForm from '@/components/profile/ProfileForm'


export default async function Account() {

  const supabase = await createClient()


  const {
    data: claimsData,
    error
  } = await supabase.auth.getClaims()



  if (error || !claimsData?.claims) {
    redirect('/login')
  }



  return (
    <>
      <ProfileForm 
        claims={claimsData.claims} 
      />
    </>
  )
}