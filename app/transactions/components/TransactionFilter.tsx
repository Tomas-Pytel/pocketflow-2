"use client";
import { useState } from "react";
import { Transaction, TransactionCategory, TransactionType } from "../types";
import { cn } from "@/app/utils/global";
//import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

interface TransactionFilterProps {
  property: keyof Pick<Transaction, "type" | "category">;
  //filter(propValue: TransactionType | TransactionCategory): void;
}

const typeValues: (TransactionType | "All")[] = ["All", "Expense", "Income"];
const categoryValues: (TransactionCategory | "All")[] = [
  "All",
  "Transport",
  "Job",
  "House",
  "Health",
  "Groceries",
  "Free_Time",
];

const propertyFilterMap = {
  type: typeValues,
  category: categoryValues,
};

export default function TransactionFilter({
  property,
}: //filter,
TransactionFilterProps) {
  const searchParams = useSearchParams();

  const [filterProp, setFilterProp] = useState<
    TransactionType | TransactionCategory | "All"
  >("All");

  const values: (TransactionType | TransactionCategory | "All")[] =
    propertyFilterMap[property];

  //const handle;

  return (
    <ul className="flex flex-row items-center gap-3 font-normal text-sm">
      {values.map((value) => (
        <li
          key={value}
          className={cn(
            "px-2 py-1 text-center text-zinc-400 rounded-md hover:cursor-pointer hover:bg-zinc-700",
            filterProp === value
              ? "bg-linear-to-br from-primaryOrange from-30% to-primaryYellow text-zinc-50 font-semibold"
              : ""
          )}
          onClick={() => setFilterProp(value)}
        >
          {value}
        </li>
      ))}
    </ul>
  );
}
