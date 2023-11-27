import { ReactNode } from "react";
type SomethingProps = {
  icon: ReactNode;
  title: string;
};
export const EditCourseButton = ({ icon, title }: SomethingProps) => {
  return (
    <button className="w-full h-full flex flex-row items-center p-3 gap-2 bg-slate-300 rounded-sm hover:bg-slate-400">
      <span className="">{icon}</span>

      {title}
    </button>
  );
};
