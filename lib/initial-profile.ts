import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import db from "./db";
import { Profile } from "@prisma/client";

export async function initialProfile(): Promise<Profile> {
  const user = await currentUser()
  if (!user) {
    return redirectToSignIn()
  }
  const profile = await db.profile.findUnique({
    where: {
      user_id: user.id
    }
  })
  if (profile) return profile
  const newProfile = await db.profile.create({
    data: {
      email: user.emailAddresses[0].emailAddress,
      name: `${user.firstName} ${user.lastName}`,
      image_url: user.imageUrl,
      user_id: user.id,
    }
  })
  return newProfile
}