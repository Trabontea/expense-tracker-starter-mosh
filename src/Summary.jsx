function Summary({ transactions }) {
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;
  const isNegative = balance < 0;

  const fmt = (n) =>
    Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className={`summary summary--${isNegative ? 'negative' : 'positive'}`}>
      <p className="summary-label">Current balance</p>
      <p className="balance-amount">
        {isNegative ? '−' : ''}${fmt(balance)}
      </p>
      <div className="summary-stats">
        <div className="summary-stat">
          <span className="summary-stat-label">Income</span>
          <span className="income-amount">+${fmt(totalIncome)}</span>
        </div>
        <div className="summary-stat-divider" />
        <div className="summary-stat">
          <span className="summary-stat-label">Expenses</span>
          <span className="expense-amount">−${fmt(totalExpenses)}</span>
        </div>
      </div>
    </div>
  );
}

export default Summary;
