import TitleForm from "../_components/titleForm";
import { db as Prisma } from "@/lib/db";
import DescriptionForm from "../_components/descriptionForm";
import { LessonsList } from "../_components/lessonsList";

import CourseThumbnailSelector from "../_components/courseThumbnailSelector";
import PublishCourseButton from "../_components/publishCourseButton";
import NewLessonButton from "../../lessons/_components/newLessonButton";
import { CourseData } from "@/lib/types";

const CreateCourse = async ({ params }: { params: { courseId: string } }) => {
  const courseId: string = params.courseId.toString();

  const courseData: CourseData = await Prisma.course.findUnique({
    where: {
      id: courseId,
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
    <main className="flex flex-col gap-6 p-2 lg:flex-row">
      <section className="h-min flex-1">
        <PublishCourseButton courseData={courseData} />
        <TitleForm courseData={courseData} />
        <DescriptionForm courseData={courseData} />
        <CourseThumbnailSelector courseData={courseData} />
      </section>
      <section className="flex-1">
        <NewLessonButton />
        <LessonsList courseData={courseData} />
      </section>
    </main>
  );
};

export default CreateCourse;
