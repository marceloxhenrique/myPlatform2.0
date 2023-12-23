import TitleForm from "../_components/titleForm";
import { db as Prisma } from "@/lib/db";
import DescriptionForm from "../_components/descriptionForm";
import { LessonsList } from "../_components/lessonsList";

type CourseData = {
  id: string;
  title: string;
  description: string | null;
  createdAt: Date;
  updateAt: Date;
  imageUrl: string | null;
  isPublished: boolean;
  lessons: Lesson[];
} | null;

type Lesson = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updateAt: Date;
  videoUrl: string;
  courseId: string;
  isPublished: boolean;
};

const CreateCourse = async ({ params }: { params: { courseId: string } }) => {
  const course: string = params.courseId.toString();

  const courseData: CourseData = await Prisma.course.findUnique({
    where: {
      id: course,
    },
    select: {
      id: true,
      title: true,
      description: true,
      createdAt: true,
      updateAt: true,
      imageUrl: true,
      isPublished: true,
      lessons: {
        select: {
          id: true,
          title: true,
          description: true,
          createdAt: true,
          updateAt: true,
          videoUrl: true,
          courseId: true,
          isPublished: true,
        },
      },
    },
  });

  return (
    <main className="flex flex-col gap-6 p-4 lg:flex-row">
      <section className="h-min flex-1">
        <TitleForm courseData={courseData} />
        <DescriptionForm courseData={courseData} />
      </section>
      <section className="flex-1">
        <LessonsList courseData={courseData} />
      </section>
    </main>
  );
};

export default CreateCourse;
