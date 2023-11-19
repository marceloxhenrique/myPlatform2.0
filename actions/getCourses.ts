import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function getCourse() {
  const courses = await prisma.course.findMany({
    where: {
      isPublishsed: false,
    },
  });

  return courses;
}
