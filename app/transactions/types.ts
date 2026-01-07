type TransactionType = "Income" | "Expense";

type TransactionCategory =
  | "Health"
  | "Groceries"
  | "House"
  | "FreeTime"
  | "Job";

interface Transaction {
  id: number;
  timestamp: string;
  title: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
}

export type { TransactionType, TransactionCategory, Transaction };
