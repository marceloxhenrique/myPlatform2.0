import { getPublishedCourse } from "@/actions/getPublishedCourses";
import { CourseCard } from "./courses/_components/courseCard";
import { currentUser } from "@clerk/nextjs";
import GetEnrolledCourses from "@/actions/getEnrolledCourses";

type LessonsType = {
  id: string;
  title: string;
  videoUrl: string | null;
  courseId: string;
  isPublished: boolean;
};
type CourseType = {
  id: string;
  title: string;
  imageUrl: string | null;
  isPublished: boolean;
  lessons: LessonsType[];
};
export default async function Dashboard() {
  const user = await currentUser();

  const coursesEnrolled = await GetEnrolledCourses(user?.id);
  let newCourseList: CourseType[] = [];
  const courses = await getPublishedCourse();
  for (let item of coursesEnrolled) {
    newCourseList = [
      ...newCourseList,
      ...courses.filter((course) => course.id === item.courseId),
    ];
  }

  return (
    <main className="h-full w-full p-4">
      <h1 className="px-4 text-[min(10vw,2rem)] font-medium text-emerald-900">
        My Courses
      </h1>
      <section className="grid w-full items-center p-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {newCourseList?.map((course) => (
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
