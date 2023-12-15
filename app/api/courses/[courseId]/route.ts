import { NextRequest, NextResponse } from "next/server";
import { db as Prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { isTeacher } from "@/lib/isTeacher";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { courseId: string } },
) {
  const courseId = params.courseId;
  if (courseId) {
    try {
      const { userId } = auth();

      if (!userId || !isTeacher(userId)) {
        return NextResponse.json("Not Authorized", { status: 401 });
      }
      const res = await Prisma.course.delete({
        where: {
          id: courseId,
        },
      });
      return NextResponse.json(`Course ${res.title} successfuly deleted`, {
        status: 201,
      });
    } catch (error) {
      return NextResponse.json(`Unable to delete the course Error: ${error}`);
    }
  }
  return NextResponse.json(`Unable to retrive data`, { status: 500 });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { courseId: string } },
) {
  const courseId = params.courseId;
  const titleName = await request.json();
  if (courseId) {
    try {
      const { userId } = auth();

      if (!userId || !isTeacher(userId)) {
        return NextResponse.json("Not Authorized", { status: 401 });
      }
      const res = await Prisma.course.update({
        where: {
          id: courseId,
        },
        data: {
          title: titleName,
        },
      });
      return NextResponse.json(`Course ${res.title} successfuly updated`, {
        status: 201,
      });
    } catch (error) {
      return NextResponse.json(
        `Unable to update the course title Error: ${error}`,
      );
    }
  }
  return NextResponse.json(`Unable to retrive data`, { status: 500 });
}
