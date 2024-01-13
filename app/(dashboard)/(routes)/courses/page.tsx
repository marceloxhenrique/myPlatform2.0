import { getPublishedCourse } from "@/actions/getPublishedCourses";
import { CourseCard } from "./_components/courseCard";

const CoursePage = async () => {
  const courses = await getPublishedCourse();

  return (
    <main className="h-full w-full p-4">
      <section className="grid w-full items-center p-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            id={course.id}
            lessons={course.lessons}
            isPublished={course.isPublished}
            imageUrl={course.imageUrl!}
          />
        ))}
      </section>
    </main>
  );
};

export default CoursePage;
