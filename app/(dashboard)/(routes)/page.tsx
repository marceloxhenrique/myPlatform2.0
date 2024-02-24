import { getPublishedCourse } from "@/actions/getPublishedCourses";
import { CourseCard } from "./courses/_components/courseCard";
import { currentUser } from "@clerk/nextjs";
import GetEnrolledCourses from "@/actions/getEnrolledCourses";
// import UserId from "../_components/userId";

export default async function Dashboard() {
  const user = await currentUser();
  // console.log("here", user?.id);
  const coursesEnrolled = await GetEnrolledCourses(user);
  const courses = await getPublishedCourse();
  console.log("Here", coursesEnrolled);
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
}
