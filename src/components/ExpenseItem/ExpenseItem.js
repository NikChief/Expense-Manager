import React from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card'
import './ExpenseItem.css';
import DeleteItem from '../DeleteItem/DeleteItem';

function ExpenseItem({ expense, extractDIFromEI }) {
  const extractDeletedItem = (itemId) =>{
    extractDIFromEI(itemId);
  }
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={expense.date} />
        <div className='expense-item__description'>
          <h2>{expense.title}</h2>
          <div className='expense-item__price'>${expense.amount}</div>
          < DeleteItem itemId={expense.id} extractDIFromDI={extractDeletedItem}/>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
