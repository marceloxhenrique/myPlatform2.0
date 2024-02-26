import { NextRequest, NextResponse } from "next/server";
import { utapi } from "../server/uploadthing";
export async function DELETE(
  request: NextRequest,
  { params }: { params: { imageURL: string } },
) {
  if (params.imageURL != "b29d820f-4452-4504-a415-5fe19b5af428-223acx.png") {
    try {
      await utapi.deleteFiles(params.imageURL);
      return NextResponse.json("File deleted", { status: 201 });
    } catch (error) {
      return NextResponse.json("Unable to delete this file", { status: 500 });
    }
  }
  return NextResponse.json("File changed", { status: 201 });
}
