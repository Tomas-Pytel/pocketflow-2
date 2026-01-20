import { z } from "zod";

export const TransactionCategories = z.enum([
  "Free_Time",
  "Groceries",
  "Health",
  "House",
  "Job",
  "Transport",
]);

export const NewTransactionScheme = z.object({
  date: z.string(),
  title: z.string().min(1, "Názov musí mať minimálne 1 znak"),
  amount: z.coerce.number(),
  category: TransactionCategories,
});
export type NewTransactionValues = z.infer<typeof NewTransactionScheme>;
