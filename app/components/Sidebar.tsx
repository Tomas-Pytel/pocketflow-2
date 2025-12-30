import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="bg-zinc-800 w-sm p-5 text-zinc-100">
      <div className="flex flex-row items-center">
        <Image src="/favicon.svg" height={40} width={40} alt="app logo" />
        <h3 className="pl-5 font-semibold text-2xl">Pocketflow</h3>
      </div>
    </aside>
  );
}
