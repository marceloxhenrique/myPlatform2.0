import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function getAllCourse() {
  const courses = await prisma.course.findMany({
    include: {
      lessons: true,
    },
  });

  return courses;
}
