"use client";

import { Building, Users, UserCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { Button } from "../ui/button";

type MenuItem = {
  label: string;
  icon: React.ElementType;
  href?: string;
};

const menu: MenuItem[] = [
  { label: "Profile", icon: UserCircle, href: "/profile" },
  { label: "Detail Perusahaan", icon: Building, href: "/detail-perusahaan" },
  { label: "Semua User / Role", icon: Users, href: "/all-user" },
  { label: "Tanda tangan", icon: Building, href: "/signature" },
];

const SidebarSetting = () => {
  const pathname = usePathname();
  const router = useRouter();

  const renderMenu = (menu: MenuItem[]) =>
    menu.map(({ label, icon: Icon, href }) => {
      const isActive = href && pathname.startsWith(href);

      const content = (
        <div
          className={clsx(
            "flex items-center gap-3 px-2 h-11 rounded-lg transition-colors",
            isActive
              ? "bg-neutral-20 text-primary font-medium"
              : "hover:bg-neutral-20"
          )}
        >
          <Icon />
          <p className="body-large-medium">{label}</p>
        </div>
      );

      return href ? (
        <Link key={label} href={href}>
          {content}
        </Link>
      ) : (
        <div key={label}>{content}</div>
      );
    });

  return (
    <div className="my-5 flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Button variant={"outline"} onClick={() => router.back()}>
          <ArrowLeft />
        </Button>
        <p className="heading-6 text-neutral-100">Pengaturan</p>
      </div>
      <div className="flex flex-col bg-neutral-10 h-[70vh] pt-6 px-1 rounded-2xl">
        {renderMenu(menu)}
      </div>
    </div>
  );
};

export default SidebarSetting;
