"use client";

import Image from "next/image";
import type { NavLink } from "./NavLink";
import { IoHome } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { MdSavings } from "react-icons/md";
import NavLinkComponent from "./NavLink";

const links: NavLink[] = [
  {
    label: "Home",
    href: "/",
    icon: IoHome,
  },
  {
    label: "Transactions",
    href: "/transactions",
    icon: GrTransaction,
  },
  {
    label: "Savings",
    href: "/savings",
    icon: MdSavings,
  },
];

export default function Sidebar() {
  return (
    <aside className="bg-zinc-800 w-xs p-5 text-zinc-100">
      <div className="flex flex-row items-center">
        <Image src="/favicon.svg" height={40} width={40} alt="app logo" />
        <h3 className="pl-5 font-semibold text-2xl">Pocketflow</h3>
      </div>
      <ul className="flex flex-col gap-1 mt-4 pt-3 border-t border-zinc-500 text-zinc-400 font-medium text-lg">
        {links.map((link, key) => (
          <li key={key}>
            <NavLinkComponent link={link} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
