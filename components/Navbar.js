"use client";
import { usePathname } from "next/navigation";
import GooeyNav from "@/components/ui/Components/GooeyNav/GooeyNav";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  // Convert to GooeyNav's expected format
  const gooeyNavItems = navItems.map((item) => ({
    label: item.name,
    href: item.path,
  }));

  const initialActiveIndex = navItems.findIndex(
    (item) => item.path === pathname
  );

  return (
    <div className="fixed top-4 left-4 right-4 sm:top-4 sm:right-6 sm:left-auto z-50 flex justify-center sm:justify-end">
      <GooeyNav
        items={gooeyNavItems}
        initialActiveIndex={initialActiveIndex !== -1 ? initialActiveIndex : 0}
      />
    </div>
  );
}
