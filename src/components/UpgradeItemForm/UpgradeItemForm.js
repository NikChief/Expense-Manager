import React from 'react';
import './UpgradeItemForm.css';

function UpgradeItemForm({ expense, upgradeItemFormOff, extractUIFromUIF }) {
  const date = expense.date.getFullYear() + '-' + ('0' + (expense.date.getMonth() + 1)).slice(-2) + '-' + ('0' + expense.date.getDate()).slice(-2);
  const updateItem = (event) => {
    event.preventDefault();
    const updatingId = expense.id;
    
    const newDateArray = event.target.date.value.split('-');
    newDateArray[1] = (+newDateArray[1] - 1).toString(10);
    if (newDateArray[1].length===1) {newDateArray[1]='0'+newDateArray[1]}
    const newDateString = newDateArray.join('-');

    const updatingItemData = {
      amount: event.target.amount.value,
      title: event.target.title.value,
      date: newDateString,
    }
    extractUIFromUIF(updatingId, updatingItemData);
    upgradeItemFormOff();
  }

  return (
    <form onSubmit={updateItem} className='upgrade'>
      <div className='upgrade__controls'>
        <div className='upgrade__control'>
          <label>Title</label>
          <input name='title' type="text" defaultValue={expense.title} />
        </div>
        <div className='upgrade__control'>
          <label>Amount</label>
          <input name='amount' defaultValue={expense.amount} type="number" min="0.01" step="0.01" />
        </div>
        <div className='upgrade__control'>
          <label>Date</label>
          <input name='date' type="date" defaultValue={date} min="2018-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="upgrade__actions">
        <button onClick={upgradeItemFormOff} type='button'>Cancel</button>
        <button type='submit'>Update</button>
      </div>
    </form>
  );
}

export default UpgradeItemForm;
