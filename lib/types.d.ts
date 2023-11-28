export type Lessons = {
  id: String;
  title: String;
  description: String;
  createdAt: Date;
  updateAt: Date;
  videoUrl: String;
  courseId: String;
  isPublished: Boolean;
};

export type Purchase = {
  id: String;
  userId: String;
  courseId: String;
  course: Course;
  createdAt: Date;
};

export type Course = {
  id: String;
  title: String;
  description: String;
  createdAt: Date;
  updateAt: Date;
  imageUrl: String;
  isPublished: Boolean;
  lessons: Lessons[];
};
