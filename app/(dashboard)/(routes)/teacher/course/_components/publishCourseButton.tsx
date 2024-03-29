"use client";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import axios from "axios";
import toast from "react-hot-toast";
import { CourseData } from "@/lib/types";

const PublishCourseButton = ({ courseData }: { courseData: CourseData }) => {
  const [toggle, setToggle] = useState<boolean | undefined>(
    courseData?.isPublished,
  );
  const handleToogle = async () => {
    setToggle(!toggle);

    try {
      await axios.patch(`/api/courses/${courseData?.id}`, {
        isPublished: !toggle,
      });
      toast.success("Course updated");
    } catch (error) {
      toast.error("Could not update your course");
    }
  };
  return (
    <section className="mb-4 flex w-full items-center gap-6 rounded-md bg-slate-200 p-4 px-5 py-2 ">
      <div className="flex w-[14rem] items-center gap-4 rounded-md bg-white p-2">
        <Switch
          checked={toggle}
          onCheckedChange={() => {
            handleToogle();
          }}
        />
        {toggle ? "Published" : "Not Published"}
      </div>
    </section>
  );
};

export default PublishCourseButton;
