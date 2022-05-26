import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css';
import Card from '../Card/Card';

function Expenses(props) {
  const expenses = [
    { id: 1, date: new Date(2022, 3, 4), title: 'Kids', amount: 120 },
    { id: 2, date: new Date(2021, 3, 4), title: 'Car', amount: 140 },
    { id: 3, date: new Date(2022, 3, 4), title: 'Teeth', amount: 100 },
  ]
  return (
    <Card className='expenses'>
      {expenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)}
    </Card>
  );
}

export default Expenses;
