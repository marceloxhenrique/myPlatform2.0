export type Purchase = {
  id: string;
  userId: string;
  courseId: string;
  course: Course;
  createdAt: Date;
};

export type FormCreateCourseProps = {
  title: string;
  description: string;
};

type Lesson = {
  id: string;
  title: string;
  description: string | null;
  createdAt: Date;
  updateAt: Date;
  videoUrl: string | null;
  isPublished: boolean;
  courseId: string;
} | null;

type CourseData = {
  id: string;
  title: string;
  description: string | null;
  createdAt: Date;
  updateAt: Date;
  imageUrl: string | null;
  isPublished: boolean;
  lessons: Lesson[];
} | null;
