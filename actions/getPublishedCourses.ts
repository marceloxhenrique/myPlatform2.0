import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function getPublishedCourse() {
  const courses = await prisma.course.findMany({
    where: {
      isPublished: true,
    },
    include: {
      lessons: true,
    },
  });
  // console.log(courses);
  return courses;
}
