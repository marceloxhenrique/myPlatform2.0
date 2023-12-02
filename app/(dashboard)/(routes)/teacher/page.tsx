import CoursesTable from "./_components/table";
import { getAllCourse } from "@/actions/getAllCourses";
import NewCourseButton from "./_components/newCourseButton";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TeacherPage = async () => {
  const courses = await getAllCourse();

  return (
    <>
      <NewCourseButton />
      <Table>
        <TableCaption>A list of your Courses.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Title</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Lessons</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <CoursesTable courses={courses} />
        </TableBody>
      </Table>
    </>
  );
};

export default TeacherPage;
