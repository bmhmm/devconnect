'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import DeveloperSearch from './DeveloperSearch'
import DeveloperDirectoryCard from './DeveloperDirectoryCard'

export type Developer = {
  id: string
  username: string
  full_name: string | null
  headline: string | null
  avatar_url: string | null
  location: string | null
  company: string | null
  available_for_work: boolean
}

export default function DeveloperDirectory() {
  const supabase = createClient()

  const [developers, setDevelopers] = useState<Developer[]>([])
  const [filteredDevelopers, setFilteredDevelopers] = useState<Developer[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadDevelopers()
  }, [])

  async function loadDevelopers() {
    setLoading(true)

    const { data, error } = await supabase
      .from('profiles')
      .select(`
        id,
        username,
        full_name,
        headline,
        avatar_url,
        location,
        company,
        available_for_work
      `)
      .order('full_name')

    if (error) {
      console.error(error)
    } else {
      setDevelopers(data ?? [])
      setFilteredDevelopers(data ?? [])
    }

    setLoading(false)
  }

  function handleSearch(search: string) {
    if (!search.trim()) {
      setFilteredDevelopers(developers)
      return
    }

    const keyword = search.toLowerCase()

    setFilteredDevelopers(
      developers.filter((developer) =>
        developer.full_name?.toLowerCase().includes(keyword) ||
        developer.username.toLowerCase().includes(keyword) ||
        developer.headline?.toLowerCase().includes(keyword)
      )
    )
  }

  return (
    <section className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          Developers
        </h1>

        <p className="mt-2 text-white/70">
          Discover talented developers from the community.
        </p>
      </div>

      <DeveloperSearch onSearch={handleSearch} />

      {loading ? (
        <div className="rounded-3xl bg-white p-10 text-center">
          Loading developers...
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredDevelopers.map((developer) => (
            <DeveloperDirectoryCard
              key={developer.id}
              developer={developer}
            />
          ))}
        </div>
      )}

    </section>
  )
}