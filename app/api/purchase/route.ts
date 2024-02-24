import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const { data } = await request.json();
    if (!data) {
      return NextResponse.json("Not Authorized", { status: 401 });
    }
    await db.purchase.create({
      data: {
        userId: data.userId,
        courseId: data.courseId,
      },
    });
    return NextResponse.json({ status: 201 });
  } catch (erro) {
    return NextResponse.json("Unable to enroll this course", { status: 500 });
  }
}
