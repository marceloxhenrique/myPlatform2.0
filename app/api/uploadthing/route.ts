import { createNextRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";
import { NextRequest, NextResponse } from "next/server";

export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});
