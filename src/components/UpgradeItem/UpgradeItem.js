import React from 'react';
import './UpgradeItem.css';

function UpgradeItem(props) {
  return (
    <div className='expense-item__update'>
      <button onClick={props.upgradeItemFormOn} ><div></div></button>
    </div>
  );
}

export default UpgradeItem;
