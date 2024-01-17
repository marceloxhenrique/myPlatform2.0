import { Skeleton } from "@/components/ui/skeleton";
import { getPublishedCourse } from "@/actions/getPublishedCourses";
const Loading = async () => {
  const courses = await getPublishedCourse();

  return (
    <main className="h-full w-full p-4">
      <section className="grid w-full items-center p-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course) => (
          <Skeleton
            key={course.id}
            className="m-2 flex h-72 min-w-[10rem] max-w-xl cursor-pointer flex-col rounded-md border-2  p-2"
          >
            <Skeleton className=" h-64 w-full rounded-md bg-gray-200"></Skeleton>
            <Skeleton className="  rounded-b-md">
              <Skeleton className="my-4 text-xl font-medium"></Skeleton>
              <Skeleton className="inline-flex items-center text-slate-500 ">
                <Skeleton className="h-4 w-4 " />
              </Skeleton>
            </Skeleton>
          </Skeleton>
        ))}
      </section>
    </main>
  );
};

export default Loading;
