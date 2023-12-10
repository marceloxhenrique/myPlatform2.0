import { Course } from "@/lib/types";
import { TableCell, TableRow } from "@/components/ui/table";
import PopOver from "./popoverEdit";

type CoursesTableProps = {
  courses: Course[];
};
const CoursesTable = ({ courses }: CoursesTableProps) => {
  return (
    <>
      {courses.map((course: Course) => (
        <TableRow key={+course.id}>
          <TableCell className="max-w-[5rem] font-medium">
            {course.title}
          </TableCell>
          <TableCell className="text-center">
            {course.isPublished ? (
              <p className="inline-block rounded-lg bg-emerald-500 px-2 py-1">
                Published
              </p>
            ) : (
              <p className="inline-block rounded-lg bg-red-500 px-2 py-1">
                Not Published
              </p>
            )}
          </TableCell>
          <TableCell className="text-center">{course.lessons.length}</TableCell>
          <TableCell className="text-center ">
            <PopOver courseTitle={course.title} courseId={course.id} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default CoursesTable;
