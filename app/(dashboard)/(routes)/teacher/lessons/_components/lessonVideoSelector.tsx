"use client";
import { UploadDropzone } from "@/lib/uploadthing";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Lesson } from "@/lib/types";

export default function LessonThumbnailSelector({
  lessonData: lessonData,
}: {
  lessonData: Lesson;
}) {
  return (
    <section className=" rounded-md bg-slate-200 p-4">
      <p className="text-sm font-medium leading-none">Video</p>
      <UploadDropzone
        className={`ut-label:text-xs ut-label:text-emerald-700 md:ut-label:text-base`}
        content={{
          label({ isDragActive }) {
            return isDragActive
              ? "Drop video here"
              : "Choose video or drag and drop.";
          },
        }}
        endpoint="videoUploader"
        onClientUploadComplete={(res) => {
          const data = { videoUrl: `${res[0].url}` };
          try {
            axios.patch(`/api/lessons/${lessonData?.id}`, data);
            toast.success("Video uploaded");
          } catch (err) {
            toast.error("Video could not be uploaded");
          }
        }}
        onUploadError={(error: Error) => {
          toast.error("Video could not be uploaded");
        }}
      />
    </section>
  );
}
