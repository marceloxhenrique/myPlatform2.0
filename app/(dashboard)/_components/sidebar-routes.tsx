"use client";

import { BookOpenText, Layout, LucideIcon, PencilRuler } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { useAuth } from "@clerk/nextjs";
import { FC } from "react";

type SidebarRoute = {
  icon: LucideIcon;
  label: string;
  href: string;
};

type SidebarRoutes = SidebarRoute[];

const guestRoutes: SidebarRoutes = [
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

const teacherRoutes: SidebarRoutes = [
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

export const SidebarRoutes: FC = () => {
  const { userId } = useAuth();

  const isTeacher1: string | undefined = process.env.NEXT_PUBLIC_TEACHER_ID1;
  const isTeacher2: string | undefined = process.env.NEXT_PUBLIC_TEACHER_ID2;
  const isTeacher = userId === isTeacher1 || userId === isTeacher2;

  const routes: SidebarRoutes = isTeacher ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
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
