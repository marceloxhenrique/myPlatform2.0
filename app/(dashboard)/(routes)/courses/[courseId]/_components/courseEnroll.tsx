import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CourseData } from "@/lib/types";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const CourseEnroll = ({ course }: { course: CourseData }) => {
  const [enrolledCourse, setEnrolledCourse] = useState<boolean>(false);
  const lessons = course?.lessons.length;
  const { user } = useUser();

  useEffect(() => {
    const getCoursesEnrolled = async () => {
      const res = await axios.get(`/api/purchase/${course?.id}`);
      if (res.data.length > 0) {
        setEnrolledCourse(true);
      }
    };
    getCoursesEnrolled();
  }, [course?.id]);

  const data = {
    userId: user?.id,
    courseId: course?.id,
  };

  const addEnrollCourse = async () => {
    await axios.post(`/api/purchase`, data);
  };

  return (
    <section className="border-slate-150 font- max-w-xl rounded-md border-2 p-4">
      <h1 className="py-2 text-2xl font-semibold">{course?.title}</h1>
      <p className="py-2">{lessons} lessons</p>
      <p className="py-2">{course?.description}</p>
      <div className="flex justify-end">
        <Link href={`/courses/lessons/${course?.id}`}>
          {enrolledCourse ? (
            <Button className="bg-green-700 text-left font-semibold hover:bg-green-600">
              Continue this course
            </Button>
          ) : (
            <Button
              onClick={addEnrollCourse}
              className="bg-green-700 text-left font-semibold hover:bg-green-600"
            >
              Enroll this course
            </Button>
          )}
        </Link>
      </div>
    </section>
  );
};

export default CourseEnroll;
