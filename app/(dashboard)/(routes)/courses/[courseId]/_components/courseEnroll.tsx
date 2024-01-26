import { CourseData } from "@/lib/types";
import React from "react";
import Lesson from "../[lessonId]/page";
import { Button } from "@/components/ui/button";

const CourseEnroll = ({ course }: { course: CourseData }) => {
  const lessons = course?.lessons.length;

  console.log("here", course);
  console.log(lessons);
  return (
    <section className="border-slate-150 font- max-w-xl rounded-md border-2 p-4">
      <h1 className="py-2 text-2xl font-semibold">{course?.title}</h1>
      <p className="py-2">{lessons} lessons</p>
      <p className="py-2">{course?.description}</p>
      <div className="flex justify-end">
        <Button className="bg-green-700 text-left font-semibold hover:bg-green-600">
          Enroll this course
        </Button>
      </div>
    </section>
  );
};

export default CourseEnroll;
