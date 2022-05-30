import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpensesList.css';

function ExpensesList({ expenses, extractDIFromEL, extractUIFromEL }) {
  let expensesContent = <p>No expenses found</p>;

  const extractDeletedItem = (itemId) => {
    extractDIFromEL(itemId)
  }

  const extractUpgratedItem = (updatingId, updatingItemData) => {
    extractUIFromEL(updatingId, updatingItemData)
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
        extractUIFromEI={extractUpgratedItem}
      />
    ))}
  </ul>
};

export default ExpensesList;
