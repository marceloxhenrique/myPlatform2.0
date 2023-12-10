import { NextRequest, NextResponse } from "next/server";
import { db as Prisma } from "@/lib/db";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { courseId: string } },
) {
  const courseId = params.courseId;
  if (courseId) {
    try {
      const res = await Prisma.course.delete({
        where: {
          id: courseId,
        },
      });
      return NextResponse.json(`Course ${res.title} successfuly deleted`);
    } catch (error) {
      return NextResponse.json(`Unable to delete the course Error: ${error}`);
    }
  }
  return NextResponse.json(`Course doens't exist`);
}
