export async function getProjects() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/projects`
  )
  if (!response.ok) {
    throw new Error("Failed to fetch projects")
  }
  return response.json()
}

export async function createProject(data: any) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/projects`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )

  if (!response.ok) {
    throw new Error("Failed to create project")
  }

  return response.json()
}
