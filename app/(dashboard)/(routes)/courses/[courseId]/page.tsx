"use client";
import { CourseData } from "@/lib/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseEnroll from "./_components/courseEnroll";

const Course = ({ params }: { params: { courseId: string } }) => {
  const [course, setCourse] = useState<CourseData>();

  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get(`/api/courses/${params.courseId}`);
        setCourse(res.data.course);
      } catch (error) {
        console.error(error);
      }
    };
    getCourse();
  }, [params.courseId]);
  return (
    <section className="p-2">
      {course && <CourseEnroll course={course} />}
    </section>
  );
};

export default Course;
