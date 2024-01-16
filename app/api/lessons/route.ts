import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { db as Prisma } from "@/lib/db";

import { isTeacher } from "@/lib/isTeacher";

export async function POST(request: NextRequest) {
  try {
    const { userId } = auth();
    const { title, id } = await request.json();

    if (!userId || !isTeacher(userId)) {
      return NextResponse.json("Not Authorized", { status: 401 });
    }

    if (!title) {
      return NextResponse.json({ error: "Invalid data" }, { status: 404 });
    }

    const isLessonExist = await Prisma.lesson.findFirst({
      where: {
        title: title,
      },
    });
    if (isLessonExist) {
      return NextResponse.json(
        { error: "A lesson with the same name already exist" },
        { status: 400 },
      );
    }
    const lesson = await Prisma.lesson.create({
      data: {
        title: title,
        courseId: id,
      },
    });
    return NextResponse.json(lesson, { status: 201 });
  } catch (error) {
    return NextResponse.json("Unable to create lesson", { status: 500 });
  }
}
