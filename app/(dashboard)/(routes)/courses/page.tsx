import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getCourse } from "@/actions/getCourses";
import { CourseCard } from "../_components/courseCard";

const CoursePage = async () => {
  const courses = await getCourse();
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
};

export default CoursePage;
