import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function makeAdmin() {
  try {
    const user = await prisma.user.update({
      where: { email: "amiin20004@gmail.com" },
      data: { role: "ADMIN" },
    })
    console.log("Successfully updated user to admin:", user)
  } catch (error) {
    console.error("Error updating user:", error)
  } finally {
    await prisma.$disconnect()
  }
}

makeAdmin()
