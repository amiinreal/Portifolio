export interface Project {
  id: string
  title: string
  description: string
  imageUrl?: string
  figmaUrl?: string
  demoUrl?: string
  githubUrl: string
  isIframe?: string
  topics: string[]
  createdAt: string
  updatedAt: string
  userId: string
}
