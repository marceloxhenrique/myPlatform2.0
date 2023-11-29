import { db } from "@/lib/db";
export async function getAllCourse() {
  const courses = await db.course.findMany({
    include: {
      lessons: true,
    },
  });

  return courses;
}
