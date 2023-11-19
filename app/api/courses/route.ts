import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function POST(request: NextRequest) {
  const { title, description, imageUrl } = await request.json();
  if (!title || !description || !imageUrl) {
    return NextResponse.json({ error: "Invalid data" }, { status: 404 });
  }

  const isCourseExist = await prisma.course.findUnique({
    where: {
      title: title,
    },
  });
  if (isCourseExist) {
    return NextResponse.json({ error: "Course Alredy exist" }, { status: 400 });
  }
  await prisma.course.create({
    data: {
      title: title,
      description: description,
      imageUrl: imageUrl,
    },
  });

  return NextResponse.json("Course succesfully created!");
}
