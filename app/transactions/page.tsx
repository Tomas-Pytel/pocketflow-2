import TransactionsTable from "../../components/transactions/TransactionsTable";
import { Transaction, TransactionType } from "./types";
import TransactionFilter from "../../components/transactions/TransactionFilter";

const transactions: Transaction[] = [
  {
    id: 1,
    date: new Date(),
    title: "Medicals",
    amount: -12.5,
    type: "Expense",
    category: "Health",
  },
  {
    id: 2,
    date: new Date(),
    title: "Grocery Shopping",
    amount: -30,
    type: "Expense",
    category: "Groceries",
  },
  {
    id: 3,
    date: new Date(),
    title: "Rent Payment",
    amount: -650,
    type: "Expense",
    category: "House",
  },
  {
    id: 4,
    date: new Date(),
    title: "Coffee",
    amount: -5.4,
    type: "Expense",
    category: "Free_Time",
  },
  {
    id: 5,
    date: new Date(),
    title: "Salary Deposit",
    amount: 2500,
    type: "Income",
    category: "Job",
  },
  {
    id: 6,
    date: new Date(),
    title: "Gas station",
    amount: -100,
    type: "Expense",
    category: "Transport",
  },
];

interface PageProps {
  searchParams?: { [key: string]: string | string[] };
}

export default function TransactionsPage({ searchParams }: PageProps) {
  let items = transactions;
  const searchProperty = searchParams?.type;
  const property: TransactionType | "All" =
    searchProperty === "Expense" || searchProperty === "Income"
      ? searchProperty
      : "All";

  const filter = (property: TransactionType | "All"): void => {
    if (property === "All") items = transactions;
    else
      items = transactions.filter(
        (transaction) => transaction.type === property,
      );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[6fr_3fr] w-full gap-4 text-zinc-300">
      <section className=" bg-zinc-800 rounded-xl border border-zinc-700 p-5">
        <header className="flex flex-row justify-between text-xl font-semibold mb-4">
          <h3 className="text-zinc-50">Recent transactions</h3>
          <TransactionFilter property="type" />
        </header>
        <TransactionsTable transactions={transactions} />
      </section>
      <section className="bg-zinc-800 rounded-xl border border-zinc-700 p-4">
        graph
      </section>
    </div>
  );
}
