import { db } from "@/lib/db";
export async function getPublishedCourse() {
  const courses = await db.course.findMany({
    where: {
      isPublished: true,
    },
    include: {
      lessons: true,
    },
  });
  return courses;
}
