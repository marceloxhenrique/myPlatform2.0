import React from "react";
import Link from "next/link";
import { CourseData } from "@/lib/types";
import { Button } from "@/components/ui/button";

const CourseEnroll = ({ course }: { course: CourseData }) => {
  const lessons = course?.lessons.length;
  return (
    <section className="border-slate-150 font- max-w-xl rounded-md border-2 p-4">
      <h1 className="py-2 text-2xl font-semibold">{course?.title}</h1>
      <p className="py-2">{lessons} lessons</p>
      <p className="py-2">{course?.description}</p>
      <div className="flex justify-end">
        <Link href={`/courses/lessons/${course?.id}`}>
          <Button className="bg-green-700 text-left font-semibold hover:bg-green-600">
            Enroll this course
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CourseEnroll;
