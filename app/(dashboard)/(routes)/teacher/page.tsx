import CoursesTable from "./_components/table";
import { getAllCourse } from "@/actions/getAllCourses";
import { Button } from "@/components/ui/button";
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
  console.log(courses);
  return (
    <>
      <section className="flex justify-end">
        <Button className="bg-green-700 hover:bg-green-600">New Course</Button>
      </section>
      <Table>
        <TableCaption>A list of your Courses.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Title</TableHead>
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
