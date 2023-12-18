import TitleForm from "../_components/titleForm";
import { db as Prisma } from "@/lib/db";
import DescriptionForm from "../_components/descriptionForm copy";

const CreateCourse = async ({ params }: { params: { courseId: string } }) => {
  const course: string = params.courseId.toString();

  const courseData = await Prisma.course.findUnique({
    where: {
      id: course,
    },
  });
  return (
    <main className="flex flex-col gap-6 p-4 lg:flex-row">
      <section className="h-min flex-1">
        <TitleForm courseData={courseData} />
        <DescriptionForm courseData={courseData} />
      </section>
      <section className="flex-1"></section>
    </main>
  );
};

export default CreateCourse;
