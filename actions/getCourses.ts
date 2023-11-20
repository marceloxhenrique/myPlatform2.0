import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function getCourse() {
  const courses = await prisma.course.findMany({
    where: {
      isPublished: true,
    },
    include: {
      lessons: {
        where: {
          isPublished: true,
        },
      },
    },
  });

  return courses;
}
