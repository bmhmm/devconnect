"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { X, Plus } from "lucide-react"
import SkillChip from './SkillChip'
import SkillSearch from './SkillSearch'


type Skill = {
  id:string
  name:string
}


type Props = {
  userId:string
}


export default function SkillsManager({
  userId
}:Props){


const supabase = createClient()


const [skills,setSkills] = useState<Skill[]>([])
const [allSkills,setAllSkills] = useState<Skill[]>([])
const [newSkill,setNewSkill] = useState("")
const [isLoading, setIsLoading] = useState(false)



useEffect(()=>{

loadSkills()

},[])



async function loadSkills(){


const {data:availableSkills}=await supabase
.from("skills")
.select("*")
.order("name")


setAllSkills(availableSkills || [])



const {data:profileSkills}=await supabase
.from("profile_skills")
.select(`
skill_id,
skills(
id,
name
)
`)
.eq("user_id",userId)



const formatted =
profileSkills?.map((item:any)=>item.skills) || []


setSkills(formatted)


}




async function addSkill(skill:Skill){


setIsLoading(true)


const exists =
skills.some(item=>item.id===skill.id)


if(exists){
setIsLoading(false)
return
}



await supabase
.from("profile_skills")
.insert({

user_id:userId,
skill_id:skill.id

})


setSkills(prev=>[
...prev,
skill
])


setIsLoading(false)

}




async function removeSkill(skillId:string){


await supabase
.from("profile_skills")
.delete()
.eq("user_id",userId)
.eq("skill_id",skillId)



setSkills(prev=>
prev.filter(skill=>skill.id!==skillId)
)


}



async function createSkill(){


if(!newSkill.trim()) return


const {data}=await supabase
.from("skills")
.insert({
name:newSkill.trim()
})
.select()
.single()


if(data){

await addSkill(data)

setAllSkills(prev=>[
...prev,
data
])


setNewSkill("")

}


}



return (
  <div className="space-y-6">

    {/* Search */}
    <SkillSearch
      skills={allSkills.filter(
        (skill) => !skills.some((item) => item.id === skill.id)
      )}
      onSelect={addSkill}
    />

    {/* Selected Skills */}
    <div className="flex flex-wrap gap-3">
      {skills.length > 0 ? (
        skills.map((skill) => (
          <SkillChip
            key={skill.id}
            id={skill.id}
            name={skill.name}
            onRemove={removeSkill}
          />
        ))
      ) : (
        <div className="rounded-xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">
          You haven't added any skills yet.
        </div>
      )}
    </div>

    {/* Create New Skill */}
    <div className="flex gap-3">
      <input
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
        placeholder="Can't find a skill? Create one..."
        className="
          flex-1
          rounded-xl
          border
          border-slate-200
          bg-white
          px-4
          py-3
          text-sm
          outline-none
          transition
          focus:border-amber-500
        "
      />

      <button
        type="button"
        onClick={createSkill}
        disabled={isLoading}
        className="
          rounded-xl
          bg-amber-500
          px-5
          py-3
          font-medium
          text-white
          transition
          hover:bg-amber-600
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        Create
      </button>
    </div>

  </div>
)


}