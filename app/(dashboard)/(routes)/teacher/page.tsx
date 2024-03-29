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
  return (
    <>
      <NewCourseButton />
      <Table>
        <TableCaption>A list of your Courses.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Course</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Lessons</TableHead>
            <TableHead className="text-center">Seetings</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <CoursesTable />
        </TableBody>
      </Table>
    </>
  );
};

export default TeacherPage;
