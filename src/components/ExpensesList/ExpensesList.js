import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpensesList.css';

function ExpensesList({ expenses, extractDIFromEL }) {
  let expensesContent = <p>No expenses found</p>;

  const extractDeletedItem = (itemId) => {
    extractDIFromEL(itemId)
  }

  if (expenses.length  === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found</h2>
  }
  return <ul className='expenses-list'>
    {expenses.map(expense => (
      <ExpenseItem
        key={expense.id}
        expense={expense}
        extractDIFromEI = {extractDeletedItem}
      />
    ))}
  </ul>
};

export default ExpensesList;
