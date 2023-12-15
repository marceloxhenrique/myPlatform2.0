import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { db as Prisma } from "@/lib/db";
import { getAllCourse } from "@/actions/getAllCourses";
import { isTeacher } from "@/lib/isTeacher";

export async function POST(request: NextRequest) {
  try {
    const { userId } = auth();
    const { title } = await request.json();

    if (!userId || !isTeacher(userId)) {
      return NextResponse.json("Not Authorized", { status: 401 });
    }

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
    const course = await Prisma.course.create({
      data: {
        title: title,
      },
    });
    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    return NextResponse.json("Unable to create course", { status: 500 });
  }
}

export async function GET() {
  try {
    const { userId } = auth();
    const getCourses = await getAllCourse();

    if (!userId) {
      return NextResponse.json("Not Authorized", { status: 401 });
    }
    return NextResponse.json({ courses: getCourses }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      "Unable to retrive data. Please try again later" + error,
      { status: 500 },
    );
  }
}
