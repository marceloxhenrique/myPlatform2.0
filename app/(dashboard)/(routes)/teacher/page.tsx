"use client";
import CoursesTable from "./_components/table";

const TeacherPage = () => {
  return (
    <main className="p-6 min-w-full min-h-full">
      <CoursesTable title={"HTML5"} status={true} lessons={5} />
    </main>
  );
};

export default TeacherPage;
