import React from "react";
import Image from "next/image";
import { BookOpenCheck } from "lucide-react";
type LessonsProps = {
  id: string;
  title: string;
  videoUrl: string | null;
  courseId: string;
  isPublished: boolean;
};

type CourseProps = {
  id: string;
  title: string;
  imageUrl: string;
  isPublished: boolean;
  lessons: LessonsProps[];
};

export function CourseCard({ title, lessons, imageUrl }: CourseProps) {
  return (
    <section className="border-slate-150 m-2  flex min-w-[10rem] max-w-xl cursor-pointer flex-col rounded-md border-2 p-2  hover:bg-slate-100">
      <section className="relative aspect-video overflow-hidden rounded-md ">
        <Image fill src={imageUrl} className="object-cover" alt={title} />
      </section>
      <section className="rounded-b-md">
        <h1 className="my-4 text-xl font-medium text-black">{title}</h1>
        <section className="inline-flex items-center text-slate-500 ">
          <BookOpenCheck className="h-4 w-4  text-emerald-800 " />
          <p className="ml-2">{lessons.length} Lessons</p>
        </section>
      </section>
    </section>
  );
}
