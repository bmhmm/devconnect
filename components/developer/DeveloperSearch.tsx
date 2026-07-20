'use client'

type Props = {
  onSearch: (value:string)=>void
  availability:string
  setAvailability:(value:string)=>void
  location:string
  setLocation:(value:string)=>void
}


export default function DeveloperSearch({
  onSearch,
  availability,
  setAvailability,
  location,
  setLocation,
}:Props){

return (

<div className="space-y-4">


<input
placeholder="Search developers..."
onChange={(e)=>onSearch(e.target.value)}
className="
w-full
rounded-2xl
bg-white
px-5
py-4
outline-none
"
/>


<div className="grid gap-4 md:grid-cols-3">


<select
value={availability}
onChange={(e)=>setAvailability(e.target.value)}
className="
rounded-xl
bg-white
px-4
py-3
"
>

<option value="all">
All developers
</option>

<option value="available">
Available now
</option>

</select>



<input
placeholder="Location..."
value={location}
onChange={(e)=>setLocation(e.target.value)}
className="
rounded-xl
bg-white
px-4
py-3
"
/>


</div>


</div>

)

}