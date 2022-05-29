import React, { useState } from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card'
import './ExpenseItem.css';
import DeleteItem from '../DeleteItem/DeleteItem';
import UpgradeItem from '../UpgradeItem/UpgradeItem';
import UpgradeItemForm from '../UpgradeItemForm/UpgradeItemForm';

function ExpenseItem({ expense, extractDIFromEI, extractUIFromEI }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const extractDeletedItem = (itemId) => {
    extractDIFromEI(itemId);
  }
  const extractUpgratedItem = (updatingId, updatingItemData) => {
    extractUIFromEI( updatingId, updatingItemData)
  }

  const upgradeItemFormOn = () => {
    setIsUpdating(true)
  }

  const upgradeItemFormOff = () => {
    setIsUpdating(false)
  }

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={expense.date} />
        <div className='expense-item__description'>
          <h2>{expense.title}</h2>
          <div className='expense-item__price'>${expense.amount}</div>
          < DeleteItem itemId={expense.id} extractDIFromDI={extractDeletedItem} />
          < UpgradeItem itemId={expense.id} upgradeItemFormOn={upgradeItemFormOn} />
        </div>
      </Card>
      {isUpdating && (< UpgradeItemForm expense={expense} upgradeItemFormOff={upgradeItemFormOff} extractUIFromUIF={extractUpgratedItem}/>)}
    </li>
  );
}

export default ExpenseItem;
