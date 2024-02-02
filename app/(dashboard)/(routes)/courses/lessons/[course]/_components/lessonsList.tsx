import { Lesson } from "@/lib/types";
import React, { useEffect } from "react";

type LessonProps = {
  lessons: Lesson[] | undefined;
  closeOpenLessonListButton: () => void;
  setActualLessonData: React.Dispatch<
    React.SetStateAction<{
      lessonUrl: string | null | undefined;
      lessonTitle: string | undefined;
      lessonDescription: string | null | undefined;
    }>
  >;
};

const LessonsList = ({
  lessons,
  closeOpenLessonListButton,
  setActualLessonData,
}: LessonProps) => {
  const handleClick = (lesson: Lesson) => {
    setActualLessonData({
      lessonUrl: lesson?.videoUrl,
      lessonTitle: lesson?.title,
      lessonDescription: lesson?.description,
    });
  };

  useEffect(() => {
    setActualLessonData({
      lessonUrl: lessons && lessons[0]?.videoUrl,
      lessonTitle: lessons && lessons[0]?.title,
      lessonDescription: lessons && lessons[0]?.description,
    });
  }, [lessons, setActualLessonData]);

  return (
    <ul className="absolute right-0 top-0 ml-2 h-full w-60 rounded-md bg-gray-300 p-2 md:static md:w-72">
      <button
        className=" px-4 py-2 text-gray-500 hover:text-gray-950"
        onClick={closeOpenLessonListButton}
      >
        {`> Close`}
      </button>
      {lessons &&
        lessons.map((lesson, index) => (
          <button
            className="w-full"
            key={lesson?.id}
            onClick={() => handleClick(lesson)}
          >
            <li
              className={`fle-row flex  rounded-md border-2 border-transparent px-4 py-2 text-lg font-medium hover:border-slate-500 hover:bg-gray-200`}
            >
              <p className=" pr-2">{index + 1} - </p>
              {lesson?.title}
            </li>
          </button>
        ))}
    </ul>
  );
};

export default LessonsList;
