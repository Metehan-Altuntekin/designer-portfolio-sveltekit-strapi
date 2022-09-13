export type Service = {
  id: number
  name: string
  icon: string

  textPrimary: string
  textSecondary: string

  relatedSkills: number[] | undefined
  relatedTags: string[] | undefined
}

export type Skill = {
  id: number
  name: string
  icon: string
  largeIcon: string
}

export type Tag = string

export type Project = {
  id: number
  name: string
  thumbnail: string
  images: string[]
  videos: string[]
  description: string

  relatedServices: number[]
  relatedSkills: number[]
  relatedTags: string[]
}
