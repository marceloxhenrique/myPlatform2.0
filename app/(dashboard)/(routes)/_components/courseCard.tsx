import React from "react";
import { BookOpenCheck } from "lucide-react";
type LessonsProps = {
  id: string;
  title: string;
  description: string;
};

type CourseProps = {
  id: string;
  title: string;
  lessons: LessonsProps[];
  isPublished: boolean;
  // imageUrl: string;
};

export function CourseCard({
  id,
  title,
  lessons,
  isPublished,
}: // imageUrl,
CourseProps) {
  return (
    <section className="min-w-[10rem] max-w-xl h-72 p-2 hover:bg-slate-100 flex flex-col rounded-md cursor-pointer border-2 border-slate-100  m-2">
      <section className=" w-full h-64 rounded-md bg-black">.</section>
      <section className="  rounded-b-md">
        <h1 className="my-4 text-black font-medium text-xl">{title}</h1>
        <section className="text-slate-500 inline-flex items-center ">
          {" "}
          <BookOpenCheck className="h-4 w-4 text-emerald-800" />
          <p className="ml-2">{lessons.length} Lessons</p>
        </section>
      </section>
    </section>
  );
}
