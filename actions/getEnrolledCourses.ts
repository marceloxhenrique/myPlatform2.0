import { db } from "@/lib/db";

export default async function GetEnrolledCourses(userId: any) {
  const course = await db.purchase.findMany({
    where: {
      userId: userId.id,
    },
  });
  return course;
}
