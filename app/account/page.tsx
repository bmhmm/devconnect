import { createClient } from '@/lib/supabase/server'
import ProfileForm from '@/components/profile/ProfileForm'


export default async function Account() {
  const supabase = await createClient()
   
  const { data: claimsData } = await supabase.auth.getClaims()

  return(
    <> 
   <ProfileForm claims={claimsData?.claims ?? null} />

 </>
  )
}
