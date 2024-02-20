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

type DeleteCourseButtonProps = {
  icon: ReactNode;
  courseId?: string;
  courseTitle?: string;
  updateCourse: () => void;
};
import { Button } from "./ui/button";

const DeleteCourseButton = ({
  icon,
  courseId,
  courseTitle,
  updateCourse,
}: DeleteCourseButtonProps) => {
  const handleDeleteCourse = async () => {
    try {
      const res = await axios.delete(`/api/courses/${courseId}`);
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
          <DialogTitle className="text-center">
            Are you sure absolutely sure?
          </DialogTitle>
          <DialogDescription className="text-center">
            This action cannot be undone. This will permanently delete your
            <span className="font-extrabold">{` ${courseTitle} `}</span> course
            and remove the data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
          <Button variant={"outline"} className="w-full">
            Cancel
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button variant={"default"} onClick={handleDeleteCourse}>
            Continue
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteCourseButton;
