"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { PlusCircle } from "lucide-react";

const NewCourseButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/teacher/create");
  };
  return (
    <section className="flex w-full justify-end">
      <Button
        onClick={handleClick}
        className="mx-2 my-2 gap-2 bg-green-700 text-left hover:bg-green-600"
      >
        <PlusCircle className="h-4 w-4" />
        New Course
      </Button>
    </section>
  );
};

export default NewCourseButton;
