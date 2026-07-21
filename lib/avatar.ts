import { createClient } from "@/lib/supabase/client"

export function getAvatarUrl(
  avatarPath: string | null | undefined
) {
  if (!avatarPath) {
    return null
  }

  const supabase = createClient()

  const {
    data: { publicUrl },
  } = supabase.storage
    .from("avatars")
    .getPublicUrl(avatarPath)

  return publicUrl
}