"use client";
import { useCallback, useEffect, useState } from "react";
import { CourseData, Lesson } from "@/lib/types";
import PopOverEditLesson from "./popOverEditLesson";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function LessonsList({ courseData }: { courseData: CourseData }) {
  const [courses, setCourses] = useState<Lesson[]>();

  const getCourses = useCallback(async () => {
    try {
      const res = await fetch(`/api/courses/${courseData?.id}`, {
        cache: "no-store",
      });
      const course = await res.json();

      setCourses(course.course.lessons);
    } catch (error) {
      console.log(error);
    }
  }, [courseData]);

  const updateCoursesTable = () => {
    getCourses();
  };

  useEffect(() => {
    getCourses();
  }, [getCourses]);

  const totalLessons: number | undefined = courseData?.lessons.length;
  return (
    <>
      <Table>
        <TableCaption>
          Total of{" "}
          <span className="text-base font-semibold">{totalLessons}</span>{" "}
          lessons in this course.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Lessons</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-right">Settings</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses &&
            courses.map((lesson) => (
              <TableRow key={lesson?.id}>
                <TableCell className="font-medium">{lesson?.title}</TableCell>
                <TableCell className="text-center">
                  {lesson?.isPublished ? (
                    <p className="inline-block rounded-md bg-emerald-500 px-2 py-1">
                      Published
                    </p>
                  ) : (
                    <p className="inline-block rounded-md bg-red-500 px-2 py-1">
                      Not Published
                    </p>
                  )}
                </TableCell>
                <TableCell className="text-right text-2xl">
                  <PopOverEditLesson
                    lessonId={lesson?.id}
                    updateCourse={updateCoursesTable}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}
