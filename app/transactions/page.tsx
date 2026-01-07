import TransactionsTable from "./components/TransactionsTable";
import { Transaction } from "./types";

const transactions: Transaction[] = [
  {
    id: 1,
    timestamp: new Date().toISOString(),
    title: "Coffee",
    amount: 2.5,
    type: "Expense",
    category: "FreeTime",
  },
  {
    id: 2,
    timestamp: new Date().toISOString(),
    title: "Salary",
    amount: 2500,
    type: "Income",
    category: "Job",
  },
];

export default function TransactionsPage() {
  return (
    <div className="flex flex-col h-full w-full p-4 gap-4">
      <div className="bg-zinc-800 py-6 px-4 rounded-lg text-zinc-50 border border-zinc-600">
        <h2 className="text-xl">Transactions</h2>
      </div>
      <div className="flex flex-row w-full gap-4 text-zinc-300">
        <div className="w-2/3 bg-zinc-800 rounded-xl border border-zinc-600 p-4">
          <TransactionsTable transactions={transactions} />
        </div>
        <div className="w-1/3 bg-zinc-800 rounded-xl border border-zinc-600 p-4">
          graph
        </div>
      </div>
    </div>
  );
}
