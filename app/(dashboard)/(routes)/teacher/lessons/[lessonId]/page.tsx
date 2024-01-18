import TitleForm from "../_components/titleForm";
import { db as Prisma } from "@/lib/db";
import DescriptionForm from "../_components/descriptionForm";
import LessonVideoSelector from "../_components/lessonVideoSelector";
import PublishLessonButton from "../_components/publishLessonButton";
import { Lesson } from "@/lib/types";

const CreateLesson = async ({ params }: { params: { lessonId: string } }) => {
  const lessonId: string = params.lessonId.toString();

  const lessonData: Lesson = await Prisma.lesson.findUnique({
    where: {
      id: lessonId,
    },
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
  });

  return (
    <main className="flex flex-col gap-6 p-4 lg:flex-row">
      <section className="h-min flex-1">
        <PublishLessonButton lessonData={lessonData} />
        <TitleForm lessonData={lessonData} />
        <DescriptionForm lessonData={lessonData} />
        <LessonVideoSelector lessonData={lessonData} />
      </section>
      <section className="flex-1"></section>
    </main>
  );
};

export default CreateLesson;
