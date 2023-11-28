import { EditCourseButton } from "@/components/editCourseButton";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Pencil, Trash2 } from "lucide-react";
const PopOver = () => {
  return (
    <Popover>
      <PopoverTrigger className="text-2xl" aria-controls="radix-:R47jcrbdmcq:">
        ...
      </PopoverTrigger>
      <PopoverContent className="flex flex-col justify-items-start gap-2">
        <EditCourseButton title="Edit" icon={<Pencil />} />
        <EditCourseButton title="Delete" icon={<Trash2 />} />
      </PopoverContent>
    </Popover>
  );
};

export default PopOver;
