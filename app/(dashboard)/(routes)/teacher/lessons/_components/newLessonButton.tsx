"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { PlusCircle } from "lucide-react";
import { CourseData } from "@/lib/types";
const NewLessonButton = ({ courseData }: { courseData: CourseData }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/teacher/lessons/create/${courseData?.id}`);
  };
  return (
    <section className="flex w-full justify-end ">
      <Button
        onClick={handleClick}
        className="gap-2 bg-green-700 text-left hover:bg-green-600"
      >
        <PlusCircle className="h-4 w-4" />
        New Lesson
      </Button>
    </section>
  );
};

export default NewLessonButton;
