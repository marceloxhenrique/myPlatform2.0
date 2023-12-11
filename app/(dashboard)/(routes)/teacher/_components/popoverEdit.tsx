import DeleteCourseButton from "@/components/deleteCourseButton";
import { EditCourseButton } from "@/components/editCourseButton";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Pencil, Trash2 } from "lucide-react";
const PopOver = ({
  courseId,
  courseTitle,
  updateCourse,
}: {
  courseId: string;
  courseTitle: string;
  updateCourse: () => void;
}) => {
  return (
    <Popover>
      <PopoverTrigger className="text-2xl" aria-controls="radix-:R47jcrbdmcq:">
        ...
      </PopoverTrigger>
      <PopoverContent className="flex flex-col justify-items-start gap-2">
        <EditCourseButton
          courseTitle={courseTitle}
          title="Edit"
          icon={<Pencil />}
        />
        <section className="flex h-full w-full flex-row items-center gap-2 rounded-sm bg-slate-300 hover:bg-slate-400">
          <DeleteCourseButton
            icon={<Trash2 />}
            courseId={courseId}
            courseTitle={courseTitle}
            updateCourse={updateCourse}
          />
        </section>
      </PopoverContent>
    </Popover>
  );
};

export default PopOver;
