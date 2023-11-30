"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FormCreateCourseProps } from "@/lib/types";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
});

export default function CreateCourse({
  params,
}: {
  params: { course: string };
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormCreateCourseProps>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (formData: FormCreateCourseProps) => {
    alert(formData);
  };
  return (
    <main className=" w-full h-full flex p-4">
      <form
        className=" w-full h-full flex flex-col  lg:flex-row"
        onSubmit={handleSubmit((formData) => {
          console.table(formData);
        })}
      >
        <section className="lg:w-1/2 p-4">
          <label htmlFor="title">
            <p>text</p>
            <input
              className="w-full"
              defaultValue={decodeURIComponent(params.course)}
              {...register("title")}
              id="title"
              type="text"
            />
            {errors.title?.message && <p>{errors.title?.message}</p>}
          </label>
          <label htmlFor="description">
            <p>Description</p>
            <input
              defaultValue={decodeURIComponent(params.course)}
              {...register("description")}
              id="description"
              type="text"
            />
            {errors.description?.message && (
              <p>{errors.description?.message}</p>
            )}
          </label>
        </section>
        <section className="">
          <label htmlFor="title">
            <p>text</p>
            <input
              className=""
              defaultValue={decodeURIComponent(params.course)}
              {...register("title")}
              id="title"
              type="text"
            />
            {errors.title?.message && <p>{errors.title?.message}</p>}
          </label>
          <label htmlFor="description">
            <p>Description</p>
            <input
              defaultValue={decodeURIComponent(params.course)}
              {...register("description")}
              id="description"
              type="text"
            />
            {errors.description?.message && (
              <p>{errors.description?.message}</p>
            )}
          </label>
        </section>
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
