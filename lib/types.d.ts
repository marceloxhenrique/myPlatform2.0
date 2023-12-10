export type Lessons = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updateAt: Date;
  videoUrl: string;
  courseId: string;
  isPublished: boolean;
};

export type Purchase = {
  id: string;
  userId: string;
  courseId: string;
  course: Course;
  createdAt: Date;
};

export type Course = {
  id: string;
  title: string;
  description: ?string;
  createdAt: Date;
  updateAt: Date;
  imageUrl: ?string;
  isPublished: boolean;
  lessons: Lessons[];
};

export type FormCreateCourseProps = {
  title: string;
  description: string;
};
