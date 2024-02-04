"use client";
import ReactPlayer from "react-player";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CourseData } from "@/lib/types";
import LessonsList from "./_components/lessonsList";
import CloseOpenLessonsListButton from "./_components/closeOpenLessonsListButton";

const Course = ({ params }: { params: { course: string } }) => {
  const [course, setCourse] = useState<CourseData>();
  const [openCloseLessonList, setOpenCloseLessonList] = useState<boolean>(true);
  const firstLesson = course?.lessons[0];
  const [actualLessonData, setActualLessonData] = useState({
    lessonUrl: firstLesson?.videoUrl,
    lessonTitle: firstLesson?.title,
    lessonDescription: firstLesson?.description,
  });

  const closeOpenLessonListButton = () => {
    setOpenCloseLessonList(!openCloseLessonList);
  };

  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get(`/api/courses/${params.course}`);
        setCourse(res.data.course);
      } catch (error) {
        console.error(error);
      }
    };
    getCourse();
  }, [params.course]);

  return (
    <main className="relative flex h-full w-full flex-col p-2">
      {course && (
        <section className="flex  flex-col items-center justify-center gap-4">
          <div className=" max-w-full">
            <div className="flex items-center justify-between">
              <h1 className="md:text-4xls py-2 text-2xl transition-all duration-500">
                {course?.title}
              </h1>

              {!openCloseLessonList && (
                <CloseOpenLessonsListButton
                  closeOpenLessonListButton={closeOpenLessonListButton}
                />
              )}
            </div>
            <div className="flex flex-row  overflow-hidden sm:relative">
              <div className="overflow-hidden rounded-md">
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
                  url={`${actualLessonData.lessonUrl || firstLesson?.videoUrl}`}
                />
              </div>
              <div>
                {openCloseLessonList && (
                  <LessonsList
                    lessons={course?.lessons}
                    setActualLessonData={setActualLessonData}
                    closeOpenLessonListButton={closeOpenLessonListButton}
                  />
                )}
              </div>
            </div>
            <section className="py-5">
              <h1 className="text-lg">{actualLessonData.lessonTitle}</h1>
              <p className="max-w-4xl">{actualLessonData.lessonDescription}</p>
            </section>
          </div>
        </section>
      )}
    </main>
  );
};

export default Course;
