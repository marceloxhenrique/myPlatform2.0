import TitleForm from "../_components/titleForm";
import { db as Prisma } from "@/lib/db";
import DescriptionForm from "../_components/descriptionForm";
import LessonVideoSelector from "../_components/lessonVideoSelector";
import PublishLessonButton from "../_components/publishLessonButton";
import { ArrowLeft } from "lucide-react";
import { Lesson } from "@/lib/types";
import Link from "next/link";

const CreateLesson = async ({
  params,
}: {
  params: { lessonId: string; link: string };
}) => {
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
    <main className="flex flex-col gap-6 p-2 lg:flex-row">
      <section className="h-min flex-1">
        <Link href={`/teacher/course/${lessonData?.courseId}`}>
          <ArrowLeft className="my-2 h-8 w-8 rounded-md hover:bg-slate-200" />
        </Link>
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
