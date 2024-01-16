"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type CourseData = {
  id: string;
  title: string;
  description: string | null;
  createdAt: Date;
  updateAt: Date;
  imageUrl: string | null;
  isPublished: boolean;
  lessons: Lesson[];
} | null;

type Lesson = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updateAt: Date;
  videoUrl: string;
  courseId: string;
  isPublished: boolean;
};

export function LessonsList({ courseData }: { courseData: CourseData }) {
  const router = useRouter();
  const totalLessons: number | undefined = courseData?.lessons.length;
  return (
    <Table>
      <TableCaption>
        Total of <span className="text-base font-semibold">{totalLessons}</span>{" "}
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
        {courseData?.lessons.map((lesson) => (
          <TableRow key={lesson.id}>
            <TableCell className="font-medium">{lesson.title}</TableCell>
            <TableCell className="text-center">
              {lesson.isPublished ? (
                <p className="inline-block rounded-lg bg-emerald-500 px-2 py-1">
                  Published
                </p>
              ) : (
                <p className="inline-block rounded-lg bg-red-500 px-2 py-1">
                  Not Published
                </p>
              )}
            </TableCell>
            <TableCell className="text-right text-2xl">
              <Button
                variant={"secondary"}
                onClick={() => {
                  router.push(`/teacher/lessons/${lesson.id}`);
                }}
              >
                Edit
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
