"use client";
import { TableCell, TableRow } from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Course } from "@/lib/types";
import PopOver from "./popoverEdit";

const CoursesTable = () => {
  const [courses, setCourses] = useState<Course[]>();
  const getCourses = async () => {
    try {
      const res = await fetch("/api/courses", {
        cache: "no-store",
      });
      const course = await res.json();

      setCourses(course.courses);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCoursesTable = () => {
    getCourses();
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      {courses &&
        courses.map((course: Course) => (
          <TableRow key={course.id}>
            <TableCell className="max-w-[5rem] font-medium">
              {course.title}
            </TableCell>
            <TableCell className="text-center">
              {course.isPublished ? (
                <p className="inline-block rounded-lg bg-emerald-500 px-2 py-1">
                  Published
                </p>
              ) : (
                <p className="inline-block rounded-lg bg-red-500 px-2 py-1">
                  Not Published
                </p>
              )}
            </TableCell>
            <TableCell className="text-center">
              {course.lessons.length}
            </TableCell>
            <TableCell className="text-center ">
              <PopOver
                courseTitle={course.title}
                courseId={course.id}
                updateCourse={updateCoursesTable}
              />
            </TableCell>
          </TableRow>
        ))}
    </>
  );
};

export default CoursesTable;
