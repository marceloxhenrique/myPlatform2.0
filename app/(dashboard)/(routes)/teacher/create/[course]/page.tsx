export default function CreateCourse({
  params,
}: {
  params: { course: string };
}) {
  return <div>My Course name: {decodeURIComponent(params.course)}</div>;
}
