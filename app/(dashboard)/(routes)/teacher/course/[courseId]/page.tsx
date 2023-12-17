import TitleForm from "../_components/titleForm";
import { db as Prisma } from "@/lib/db";

const CreateCourse = async ({ params }: { params: { courseId: string } }) => {
  const course: string = params.courseId.toString();

  const courseData = await Prisma.course.findUnique({
    where: {
      id: course,
    },
  });
  return (
    <main>
      <TitleForm courseData={courseData} />
    </main>
  );
};

export default CreateCourse;
