import { getCourse } from "@/actions/getCourses";
export default async function Home() {
  const course = await getCourse();
  console.log(course);
  return (
    <div>
      Dashboard
      {course.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
