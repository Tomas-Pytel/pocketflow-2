type TransactionType = "Income" | "Expense";

type TransactionCategory =
  | "Health"
  | "Groceries"
  | "House"
  | "Free_Time"
  | "Job"
  | "Transport";

interface Transaction {
  id: number;
  date: Date;
  title: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
}

export type { TransactionType, TransactionCategory, Transaction };
