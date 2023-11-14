"use client";

import { BookOpenText, Layout, PencilRuler } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { useAuth } from "@clerk/nextjs";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: BookOpenText,
    label: "Courses",
    href: "/course/courses",
  },
];

const teacherRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: BookOpenText,
    label: "Courses",
    href: "/course/courses",
  },
  {
    icon: PencilRuler,
    label: "Create",
    href: "/course/create",
  },
];
const isTeacher = process.env.NEXT_PUBLIC_TEACHER_ID;

export const SidebarRoutes = () => {
  const { userId } = useAuth();

  return (
    <div className="flex flex-col w-full">
      {userId === isTeacher
        ? teacherRoutes.map((route) => (
            <SidebarItem
              key={route.href}
              icon={route.icon}
              label={route.label}
              href={route.href}
            />
          ))
        : guestRoutes.map((route) => (
            <SidebarItem
              key={route.href}
              icon={route.icon}
              label={route.label}
              href={route.href}
            />
          ))}
    </div>
  );
};
