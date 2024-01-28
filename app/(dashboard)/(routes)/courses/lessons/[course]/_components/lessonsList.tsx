import { Lesson } from "@/lib/types";
import React from "react";

const LessonsList = ({ lessons }: { lessons: Lesson[] | undefined }) => {
  return (
    <>
      <ul className="w-80 rounded-md bg-gray-300 py-4">
        {lessons &&
          lessons.map((lesson, index) => (
            <li
              key={lesson?.id}
              className="fle-row flex  px-4 py-2 text-lg font-medium"
            >
              <p className="pr-2">{index + 1} - </p>
              {lesson?.title}
            </li>
          ))}
      </ul>
    </>
  );
};

export default LessonsList;
