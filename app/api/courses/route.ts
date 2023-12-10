import { NextRequest, NextResponse } from "next/server";
import { db as Prisma } from "@/lib/db";

export async function POST(request: NextRequest) {
  const { title } = await request.json();
  if (!title) {
    return NextResponse.json({ error: "Invalid data" }, { status: 404 });
  }

  const isCourseExist = await Prisma.course.findUnique({
    where: {
      title: title,
    },
  });
  if (isCourseExist) {
    return NextResponse.json(
      { error: "A Course with the same name already exist" },
      { status: 400 },
    );
  }
  await Prisma.course.create({
    data: {
      title: title,
    },
  });

  return NextResponse.json("Course succesfully created!");
}
