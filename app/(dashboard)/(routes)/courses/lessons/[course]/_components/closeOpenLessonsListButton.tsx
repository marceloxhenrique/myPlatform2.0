import { Button } from "@/components/ui/button";
import React from "react";

const CloseOpenLessonsListButton = () => {
  const closeOpenLessonListButton = () => {};
  return (
    <Button
      onClick={closeOpenLessonListButton}
      className="bg-green-600 hover:bg-green-500"
    >
      Close
    </Button>
  );
};

export default CloseOpenLessonsListButton;
