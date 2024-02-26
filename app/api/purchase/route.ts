import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const { userId, courseId } = await request.json();

    if (!userId || !courseId) {
      return NextResponse.json("Not Authorized", { status: 401 });
    }
    await db.purchase.create({
      data: {
        userId,
        courseId,
      },
    });
    return NextResponse.json({ status: 201 });
  } catch (erro) {
    return NextResponse.json("Unable to enroll this course", { status: 500 });
  }
}
