import { Transaction } from "../types";

type TransactionsTableProps = {
  transactions: Transaction[];
};

export default function TransactionsTable({
  transactions,
}: TransactionsTableProps) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Transaction</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.title}</td>
            <td>€ {transaction.amount}</td>
            <td>{transaction.category}</td>
            <td>{transaction.timestamp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
