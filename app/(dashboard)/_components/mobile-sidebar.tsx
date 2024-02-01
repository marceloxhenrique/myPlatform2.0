import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger
        className="pr-4 transition hover:opacity-75 md:hidden"
        aria-controls="radix-:R2mpj9:"
      >
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="bg-white p-0">
        <SheetClose className="h-full w-full">
          <Sidebar />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};
