import React from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const titleChangeHandler = () => {
    console.log('Title changed!')
  }

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type="date" min="2018-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='submit'>Add</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
