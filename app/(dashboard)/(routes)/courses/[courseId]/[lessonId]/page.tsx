import React from "react";
import ReacPlayer from "react-player";
const Lesson = () => {
  return (
    <div>
      Lesson
      <ReacPlayer
        controls={true}
        url={`https://www.youtube.com/watch?v=4xDzrJKXOOY`}
      />
    </div>
  );
};

export default Lesson;
