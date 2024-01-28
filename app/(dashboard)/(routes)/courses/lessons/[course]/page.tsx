"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import LessonsList from "./_components/lessonsList";
import { CourseData } from "@/lib/types";
import axios from "axios";
const Course = ({ params }: { params: { course: string } }) => {
  const [course, setCourse] = useState<CourseData>();

  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get(`/api/courses/${params.course}`);
        setCourse(res.data.course);
        console.log(res.data.course);
      } catch (error) {
        console.error(error);
      }
    };
    getCourse();
  }, [params.course]);

  return (
    <section className="flex h-full w-full flex-col  p-2">
      <h1 className="py-2 text-4xl">{course?.title}</h1>
      <div className="flex justify-center gap-4">
        <div className="2 aspect-video   max-w-full rounded-md">
          {course && (
            <ReactPlayer
              controls
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload",
                  },
                },
              }}
              height="100%"
              width="100%"
              onEnded={() => {
                alert("Finished");
              }}
              url={`${course?.lessons[0]?.videoUrl}`}
            />
          )}
        </div>
        <LessonsList lessons={course?.lessons} />
      </div>
    </section>
  );
};

export default Course;
