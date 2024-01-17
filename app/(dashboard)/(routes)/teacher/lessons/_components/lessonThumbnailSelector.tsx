"use client";
import { UploadDropzone } from "@/lib/uploadthing";
import axios from "axios";
import { toast } from "react-hot-toast";
import { CourseData } from "@/lib/types";

export default function LessonThumbnailSelector({
  courseData,
}: {
  courseData: CourseData;
}) {
  return (
    <section className=" rounded-md bg-slate-200 p-4">
      <UploadDropzone
        className={`ut-label:text-xs ut-label:text-emerald-700 md:ut-label:text-base`}
        content={{
          label({ isDragActive }) {
            return isDragActive
              ? "Drop image here"
              : "Choose image or drag and drop.";
          },
        }}
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          const data = { imageUrl: `${res[0].url}` };
          try {
            axios.patch(`/api/courses/${courseData?.id}`, data);
            toast.success("Image uploaded");
          } catch (err) {
            toast.error("Image could not be uploaded");
          }
        }}
        onUploadError={(error: Error) => {
          toast.error("Image could not be uploaded");
        }}
      />
    </section>
  );
}
