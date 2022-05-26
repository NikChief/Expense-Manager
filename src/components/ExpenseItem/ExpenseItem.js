import React from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card'
import './ExpenseItem.css';

function ExpenseItem({expense}) {

  return (
    <Card className='expense-item'>
      <ExpenseDate date={expense.date}/>
      <div className='expense-item__description'>
        <h2>{expense.title}</h2>
        <div className='expense-item__price'>{expense.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
