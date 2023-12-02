import { Skeleton } from "@/components/ui/skeleton";
import { getPublishedCourse } from "@/actions/getPublishedCourses";
const Loading = async () => {
  const courses = await getPublishedCourse();

  return (
    <main className="h-full w-full p-4">
      <section className="w-full p-2 items-center grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course) => (
          <Skeleton
            key={course.id}
            className="min-w-[10rem] max-w-xl h-72 p-2 flex flex-col rounded-md cursor-pointer border-2  m-2"
          >
            <Skeleton className=" w-full h-64 rounded-md bg-gray-200">
              .
            </Skeleton>
            <Skeleton className="  rounded-b-md">
              <Skeleton className="my-4 font-medium text-xl"></Skeleton>
              <Skeleton className="text-slate-500 inline-flex items-center ">
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
