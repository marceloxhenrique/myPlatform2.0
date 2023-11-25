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
    href: "/courses",
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
    href: "/courses",
  },
  {
    icon: PencilRuler,
    label: "Teacher",
    href: "/teacher",
  },
];

const isTeacher1 = process.env.NEXT_PUBLIC_TEACHER_ID1;
const isTeacher2 = process.env.NEXT_PUBLIC_TEACHER_ID2;

export const SidebarRoutes = () => {
  const { userId } = useAuth();

  return (
    <div className="flex flex-col w-full">
      {userId === isTeacher1 || isTeacher2
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
