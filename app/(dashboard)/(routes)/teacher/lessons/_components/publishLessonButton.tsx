"use client";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import axios from "axios";
import toast from "react-hot-toast";

type Lesson = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updateAt: Date;
  videoUrl: string;
  courseId: string;
  isPublished: boolean;
} | null;

const PublishLessonButton = ({
  lessonData: lessonData,
}: {
  lessonData: Lesson;
}) => {
  const [toggle, setToggle] = useState<boolean | undefined>(
    lessonData?.isPublished,
  );
  const handleToogle = async () => {
    setToggle(!toggle);

    try {
      await axios.patch(`/api/lessons/${lessonData?.id}`, {
        isPublished: !toggle,
      });
      toast.success("Lesson updated");
    } catch (error) {
      toast.error("Could not update your lesson");
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

export default PublishLessonButton;
