import { JSX } from "react";
import { Transaction } from "../types";
import { FaHouse } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";
import { cn, formatDate } from "@/app/utils/global";

type TransactionsTableProps = {
  transactions: Transaction[];
};

const categoryIconMap: Record<string, JSX.Element> = {
  Groceries: <FaShoppingCart className="w-5 h-5" />,
  Transport: <FaCarAlt className="w-5 h-5" />,
  House: <FaHouse className="w-5 h-5" />,
  Health: <FaBriefcaseMedical className="w-5 h-5" />,
  Job: <FaWallet className="w-5 h-5" />,
  Free_Time: <IoGameController className="w-5 h-5" />,
};

const categoryColorMap: Record<string, string> = {
  Groceries: "bg-blue-600/30 text-blue-400",
  Transport: "bg-violet-600/30 text-violet-400",
  House: "bg-orange-600/30 text-orange-400",
  Health: "bg-red-600/30 text-red-400",
  Job: "bg-green-600/30 text-green-400",
  Free_Time: "bg-yellow-600/30 text-yellow-400",
};

export default function TransactionsTable({
  transactions,
}: TransactionsTableProps) {
  return (
    <table className="w-full">
      <thead className="text-zinc-500">
        <tr>
          <th className="py-1.5 px-2 text-left">Transaction</th>
          <th className="py-1.5 px-2 text-left">Category</th>
          <th className="py-1.5 px-2 text-left">Date</th>
          <th className="py-1.5 px-2 text-right">Amount</th>
        </tr>
      </thead>
      <tbody className="text-center py-3">
        {transactions.map((transaction) => (
          <tr key={transaction.id} className="border-t border-zinc-600">
            <td className="py-4 px-2 font-semibold text-left flex flex-row items-center gap-3">
              <span
                className={cn(
                  "p-2 rounded-lg",
                  categoryColorMap[transaction.category]
                )}
              >
                {categoryIconMap[transaction.category] ?? (
                  <FaWallet className="w-5 h-5" />
                )}
              </span>
              {transaction.title}
            </td>
            <td className="py-4 px-2 text-left">
              <span
                className={cn(
                  "p-1.5 rounded-lg",
                  categoryColorMap[transaction.category]
                )}
              >
                {transaction.category.replace("_", " ")}
              </span>
            </td>
            <td className="py-4 px-2 text-left text-zinc-500">
              {formatDate(transaction.timestamp)}
            </td>
            <td
              className={`py-4 px-2 text-right font-semibold ${
                transaction.amount > 0 ? "text-green-400" : ""
              }`}
            >
              {transaction.amount < 0 ? "-" : "+"}
              {Math.abs(transaction.amount).toFixed(2)} €
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
