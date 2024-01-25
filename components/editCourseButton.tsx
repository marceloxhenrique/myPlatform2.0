"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
type EditCourseProps = {
  icon: ReactNode;
  title: string;
  courseId?: string;
};
export const EditCourseButton = ({
  icon,
  title,
  courseId,
}: EditCourseProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/teacher/course/${courseId}`);
  };
  return (
    <button
      onClick={handleClick}
      className="flex h-full w-full flex-row items-center gap-3 rounded-sm bg-slate-300 p-3 hover:bg-slate-400"
    >
      <span className="">{icon}</span>
      {title}
    </button>
  );
};
