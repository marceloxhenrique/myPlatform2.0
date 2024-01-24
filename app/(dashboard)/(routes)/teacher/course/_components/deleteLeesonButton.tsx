"use client";
import axios from "axios";
import React, { ReactNode } from "react";
import { toast } from "react-hot-toast";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type DeleteLessonButtonProps = {
  icon: ReactNode;
  lessonId?: string;
  lessonTitle?: string;
  updateCourse: () => void;
};
import { Button } from "../../../../../../components/ui/button";

const DeleteLessonButton = ({
  icon,
  lessonId,
  lessonTitle,
  updateCourse,
}: DeleteLessonButtonProps) => {
  const handleDeleteCourse = async () => {
    try {
      const res = await axios.delete(`/api/lessons/${lessonId}`);
      updateCourse();
      toast.success(res.data);
    } catch (error) {
      toast.error(`Unable to delete the course Error: ${error}`);
      console.error(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger className="flex w-full flex-row gap-3 p-3">
        {icon}Delete
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Are you sure?</DialogTitle>
          <DialogDescription className="text-center">
            This action cannot be undone. This will permanently delete your
            <span className="font-extrabold">{` ${lessonTitle} `}</span> lesson
            and remove the data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
          <Button variant={"default"} className="w-full">
            Cancel
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button variant={"outline"} onClick={handleDeleteCourse}>
            Continue
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteLessonButton;
