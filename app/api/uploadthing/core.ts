import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@clerk/nextjs";
import { isTeacher } from "@/lib/isTeacher";
const f = createUploadthing();

const handleAuth = () => {
  const { userId } = auth();
  const isAuthorized = isTeacher(userId);

  if (!isAuthorized) throw new Error("Unauthorized");
  return { userId };
};

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {
      console.log("Ready");
    }),
} satisfies FileRouter;
export type ourFileRouter = typeof ourFileRouter;
