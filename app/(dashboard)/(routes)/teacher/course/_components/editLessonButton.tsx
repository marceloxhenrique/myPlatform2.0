"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
type EditLessonProps = {
  icon: ReactNode;
  title: string;
  lessonId?: string;
};
export const EditLessonButton = ({
  icon,
  title,
  lessonId,
}: EditLessonProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/teacher/lessons/${lessonId}`);
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
