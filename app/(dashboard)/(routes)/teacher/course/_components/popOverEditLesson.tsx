import DeleteLessonButton from "./deleteLeesonButton";
import { EditLessonButton } from "./editLessonButton";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Pencil, Trash2 } from "lucide-react";
const PopOverEditLesson = ({
  lessonId,
  lessonTitle,
  updateCourse,
}: {
  lessonId?: string;
  lessonTitle?: string;
  updateCourse: () => void;
}) => {
  return (
    <Popover>
      <PopoverTrigger className="text-2xl" aria-controls="radix-:R47jcrbdmcq:">
        ...
      </PopoverTrigger>
      <PopoverContent className="flex flex-col justify-items-start gap-2">
        <EditLessonButton title="Edit" lessonId={lessonId} icon={<Pencil />} />
        <section className="flex h-full w-full flex-row items-center gap-2 rounded-sm bg-slate-300 hover:bg-slate-400">
          <DeleteLessonButton
            icon={<Trash2 />}
            lessonId={lessonId}
            lessonTitle={lessonTitle}
            updateCourse={updateCourse}
          />
        </section>
      </PopoverContent>
    </Popover>
  );
};

export default PopOverEditLesson;
