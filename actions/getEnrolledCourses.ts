import { db } from "@/lib/db";

export default async function GetEnrolledCourses(userId: string | undefined) {
  const course = await db.purchase.findMany({
    where: {
      userId: userId,
    },
  });
  return course;
}
