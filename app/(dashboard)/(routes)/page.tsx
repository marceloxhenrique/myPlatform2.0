import { getPublishedCourse } from "@/actions/getPublishedCourses";
import { CourseCard } from "./courses/_components/courseCard";
export default async function Dashboard() {
  const courses = await getPublishedCourse();
  return (
    <main className="h-full w-full p-4">
      <section className="w-full p-2 items-center grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            id={course.id}
            lessons={course.lessons}
            isPublished={course.isPublished}
          />
        ))}
      </section>
    </main>
  );
}
