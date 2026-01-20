import { ReactNode } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function TransactionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-full w-full p-4 gap-4">
      <div className="flex flex-row items-center justify-between bg-zinc-800 py-3 px-4 rounded-lg text-zinc-50 border border-zinc-700">
        <span>
          <h2 className="text-2xl font-semibold">Transactions</h2>
          <span className="text-sm text-zinc-400">
            Welcome Tomas, here are you can view transaction info
          </span>
        </span>
        <Link
          href="/transactions/new"
          className="flex flex-row gap-1 cursor-pointer 
                    bg-linear-to-br from-primaryOrange from-10% to-primaryYellow text-white hover:opacity-95 focus:ring-primaryOrange 
                    px-4 py-2 rounded-md font-medium transition-colors"
        >
          <Plus />
          New transaction
        </Link>
      </div>
      {children}
    </div>
  );
}
