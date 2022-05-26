import React , {useState} from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card'
import './ExpenseItem.css';

function ExpenseItem({expense}) {
  const [title, setTitle] = useState(expense.title);
  const click = () => {
    console.log('Clicked!');
    setTitle('Updated!');}
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={expense.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{expense.amount}</div>
      </div>
      <button onClick={click}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
