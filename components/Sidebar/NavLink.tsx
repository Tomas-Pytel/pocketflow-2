"use client";

import { IconType } from "react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLink {
  label: string;
  href: string;
  icon: IconType;
}

type NavLinkComponentProps = {
  link: NavLink;
};

export default function NavLinkComponent({ link }: NavLinkComponentProps) {
  const Icon = link.icon;
  const pathName: string = usePathname();
  const isActive: boolean =
    pathName === link.href || pathName.startsWith(`${link.href}/`);

  return (
    <Link
      href={link.href}
      className={`flex flex-row items-center gap-4 rounded-lg px-4 py-1.5 transition-all duration-500 
                hover:bg-zinc-900 hover:text-zinc-50 ${
                  isActive ? "bg-zinc-900 text-zinc-50" : ""
                }`}
    >
      <Icon />
      <span>{link.label}</span>
    </Link>
  );
}
