import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import DeveloperHero from '@/components/developer/DeveloperHero'
import ProfileCard from '@/components/developer/ProfileCard'
import SkillsList from '@/components/developer/SkillsList'
import DeveloperProjects from "@/components/developer/DeveloperProjects"

type Props = {
  params: Promise<{
    username: string
  }>
}

export default async function DeveloperPage({
  params,
}: Props) {
  const { username } = await params

  const supabase = await createClient()

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', username)
    .single()

  if (error || !profile) {
    notFound()
  }

  const { data: profileSkills } = await supabase
  .from('profile_skills')
  .select(`
    skills (
      id,
      name
    )
  `)
  .eq('user_id', profile.id)

const skills =
  profileSkills?.map((item: any) => item.skills) ?? []

  const { data: projects } = await supabase
  .from("projects")
  .select("*")
  .eq("user_id", profile.id)
  .order("created_at", { ascending: false })

  const avatarUrl = profile.avatar_url
  ? supabase.storage
      .from('avatars')
      .getPublicUrl(profile.avatar_url)
      .data.publicUrl
  : null


const { data } = supabase.storage
  .from("avatars")
  .getPublicUrl(profile.avatar_url)


{/*final code*/}

 return (
//   

  <main className="min-h-screen bg-[#4A2B17] py-12">
    <div className="mx-auto max-w-7xl px-6">

      <div className="grid gap-8 lg:grid-cols-[340px_1fr]">

        {/* LEFT SIDEBAR */}
        <aside className="lg:sticky lg:top-8 h-fit">
          <DeveloperHero
  fullName={profile.full_name}
  username={profile.username}
  headline={profile.headline}
  company={profile.company}
  location={profile.location}
  avatarUrl={avatarUrl}
  availableForWork={profile.available_for_work}
  githubUrl={profile.github_url}
  portfolioUrl={profile.portfolio_url}
/>
        </aside>

        {/* RIGHT CONTENT */}
        <section className="space-y-8">

          <ProfileCard bio={profile.bio} />

          <SkillsList skills={skills} />
          <DeveloperProjects
  projects={projects ?? []}
/>

        </section>

      </div>

    </div>
  </main>
)
}