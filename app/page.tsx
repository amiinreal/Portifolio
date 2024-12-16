import { Suspense } from "react"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"
import { LoadingProjects } from "@/components/loading-projects"

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Suspense fallback={<LoadingProjects />}>
        <Projects />
      </Suspense>
      <Contact />
    </div>
  )
}
