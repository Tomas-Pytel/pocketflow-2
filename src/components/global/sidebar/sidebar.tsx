import Image from "next/image";
import UserCard from "./user-card";

export default function Sidebar() {
  return (
    <aside className="w-80 bg-gray-50 dark:bg-slate-800 p-5">
      <div className="flex flex-row items-center gap-3 mb-10">
        <Image src="/favicon.ico" alt="Logo" width={35} height={35} />
        <span>
          <h1 className="text-xl font-bold text-slate-800 dark:text-slate-200">
            PocketFlow
          </h1>
          <p className="text-sm text-slate-500">Finance tracker</p>
        </span>
      </div>
      <UserCard />
    </aside>
  );
}
