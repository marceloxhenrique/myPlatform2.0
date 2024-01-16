import { NextRequest, NextResponse } from "next/server";
import { db as Prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { isTeacher } from "@/lib/isTeacher";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { lessonId: string } },
) {
  const lessonId = params.lessonId;
  if (lessonId) {
    try {
      const { userId } = auth();

      if (!userId || !isTeacher(userId)) {
        return NextResponse.json("Not Authorized", { status: 401 });
      }
      const res = await Prisma.lesson.delete({
        where: {
          id: lessonId,
        },
      });
      return NextResponse.json(`Lesson ${res.title} successfuly deleted`, {
        status: 201,
      });
    } catch (error) {
      return NextResponse.json(`Unable to delete the lesson Error: ${error}`);
    }
  }
  return NextResponse.json(`Unable to retrive data`, { status: 500 });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { lessonId: string } },
) {
  const lessonId = params.lessonId;
  const values = await request.json();
  if (lessonId) {
    try {
      const { userId } = auth();

      if (!userId || !isTeacher(userId)) {
        return NextResponse.json("Not Authorized", { status: 401 });
      }
      const res = await Prisma.lesson.update({
        where: {
          id: lessonId,
        },
        data: {
          ...values,
        },
      });
      return NextResponse.json(res, {
        status: 201,
      });
    } catch (error) {
      return NextResponse.json(`Unable to update the lesson Error: ${error}`);
    }
  }
  return NextResponse.json(`Unable to retrive data`, { status: 500 });
}
