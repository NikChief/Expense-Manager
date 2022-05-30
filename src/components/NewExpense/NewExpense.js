import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from '../ExpenseForm/ExpenseForm';

function NewExpense(props) {
  const [isEdit, setIsEdit] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData);
    setIsEdit(false);
  }

  const startEditHandler = () => {
    setIsEdit(true);
  }

  const stopEditHandler = () => {
    setIsEdit(false);
  }

  return (
    <div className='new-expense'>
      {!isEdit && <button onClick={startEditHandler}>Add New Expense</button>}
      {isEdit && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditHandler}/>}
    </div>
  );
}

export default NewExpense;
