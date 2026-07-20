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
  const [availabilityFilter, setAvailabilityFilter] = useState<
  "all" | "available"
>("all")

const [locationFilter, setLocationFilter] = useState("")
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

  let result = developers


  if (search.trim()) {

    const keyword = search.toLowerCase()

    result = result.filter((developer)=>
      developer.full_name
        ?.toLowerCase()
        .includes(keyword)
      ||
      developer.username
        .toLowerCase()
        .includes(keyword)
      ||
      developer.headline
        ?.toLowerCase()
        .includes(keyword)
    )

  }


  if (availabilityFilter === "available") {

    result = result.filter(
      (developer)=>
        developer.available_for_work
    )

  }


  if(locationFilter){

    result = result.filter(
      (developer)=>
        developer.location
        ?.toLowerCase()
        .includes(locationFilter.toLowerCase())
    )

  }


  setFilteredDevelopers(result)

}
function applyFilters(
  availability: "all" | "available",
  location: string
) {

  let result = developers


  if (availability === "available") {
    result = result.filter(
      (developer) =>
        developer.available_for_work
    )
  }


  if (location.trim()) {
    result = result.filter(
      (developer) =>
        developer.location
          ?.toLowerCase()
          .includes(location.toLowerCase())
    )
  }


  setFilteredDevelopers(result)
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

    <DeveloperSearch
  onSearch={handleSearch}
  availability={availabilityFilter}
  setAvailability={(value:any)=>{
    setAvailabilityFilter(value)
    applyFilters(value, locationFilter)
  }}
  location={locationFilter}
  setLocation={(value)=>{
    setLocationFilter(value)
    applyFilters(availabilityFilter,value)
  }}
/>

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