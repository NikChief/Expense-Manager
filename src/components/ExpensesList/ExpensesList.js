import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpensesList.css';

function ExpensesList({ expenses }) {
  let expensesContent = <p>No expenses found</p>;

  if (expenses.length  === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found</h2>
  }
  return <ul className='expenses-list'>
    {expenses.map(expense => (
      <ExpenseItem
        key={expense.id}
        expense={expense}
      />
    ))}
  </ul>
};

export default ExpensesList;
