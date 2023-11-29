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
          <TableCell className="font-medium">{course.title}</TableCell>
          <TableCell className="text-center">
            {course.isPublished ? (
              <p className="py-1 px-2 rounded-lg inline-block bg-emerald-500">
                Published
              </p>
            ) : (
              <p className="py-1 px-2 rounded-lg inline-block bg-red-500">
                Not Published
              </p>
            )}
          </TableCell>
          <TableCell className="text-center">{course.lessons.length}</TableCell>
          <TableCell className="text-center ">
            <PopOver />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default CoursesTable;
