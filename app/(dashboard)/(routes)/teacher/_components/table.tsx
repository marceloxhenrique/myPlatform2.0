"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
type CourseDataProps = {
  title: string;
  status: boolean;
  lessons: number;
};
import PopOver from "./popoverEdit";
const CoursesTable = ({ title, status, lessons }: CourseDataProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/teacher/create");
  };
  return (
    <>
      <section className="flex justify-end">
        <Button onClick={onClick} className="bg-green-700 hover:bg-green-600">
          New Course
        </Button>
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
          <TableRow>
            <TableCell className="font-medium">HTML5</TableCell>
            <TableCell className="text-center">Publised</TableCell>
            <TableCell className="text-center">5</TableCell>
            <TableCell className="text-center ">
              <PopOver />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default CoursesTable;
