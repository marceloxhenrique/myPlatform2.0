import { Button } from "@/components/ui/button";
import React, { JSXElementConstructor } from "react";

const CloseOpenLessonsListButton = ({
  closeOpenLessonListButton,
}: {
  closeOpenLessonListButton: () => void;
}) => {
  return (
    <Button
      onClick={closeOpenLessonListButton}
      className="w-[10em] bg-green-600 transition-all duration-1000 ease-in-out  hover:bg-green-500"
    >
      See lessons
    </Button>
  );
};

export default CloseOpenLessonsListButton;
