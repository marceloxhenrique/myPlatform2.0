"use client";
import { useParams } from "next/navigation";

const CreateCourse = () => {
  const params = useParams();
  console.log(params);
  return <h1>Create {params.coursename}</h1>;
};

export default CreateCourse;
