export const isTeacher = (userId?: string | undefined | null) => {
  const isUserTeacher =
    userId === process.env.NEXT_PUBLIC_TEACHER_ID1 ||
    userId === process.env.NEXT_PUBLIC_TEACHER_ID2;
  return isUserTeacher;
};
