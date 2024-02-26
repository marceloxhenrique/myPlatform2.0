import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { courseId: string } },
) {
  const courseId = params.courseId;
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json("Not Authorized", { status: 401 });
    }
    const coursesEnrolled = await db.purchase.findMany({
      where: {
        courseId,
        userId,
      },
    });
    return NextResponse.json(coursesEnrolled, { status: 201 });
  } catch (erro) {
    return NextResponse.json("Unable to enroll this course", { status: 500 });
  }
}
