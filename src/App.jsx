import { useState } from 'react';
import './App.css';
import Summary from './Summary';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import { data } from './data';

function App() {
  const [transactions, setTransactions] = useState(data);

  const categories = [
    'food',
    'housing',
    'utilities',
    'transport',
    'entertainment',
    'salary',
    'other',
  ];

  const handleAdd = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <h1>Finance Tracker</h1>
      <p className="subtitle">Track your income and expenses</p>

      <Summary transactions={transactions} />
      <TransactionForm categories={categories} onAdd={handleAdd} />
      <TransactionList transactions={transactions} categories={categories} onDelete={handleDelete} />
    </div>
  );
}

export default App;
