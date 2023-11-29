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
    <section className="w-full flex justify-end">
      <Button
        onClick={handleClick}
        className="my-3 mx-6 text-left bg-green-700 hover:bg-green-600 gap-2"
      >
        <PlusCircle className="w-4 h-4" />
        New Course
      </Button>
    </section>
  );
};

export default NewCourseButton;
