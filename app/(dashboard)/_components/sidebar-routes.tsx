"use client";

import { BookOpenText, Layout, LucideIcon, PencilRuler } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { useAuth } from "@clerk/nextjs";
import { FC } from "react";
import { isTeacher } from "@/lib/isTeacher";

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

  const routes = isTeacher(userId) ? teacherRoutes : guestRoutes;

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
