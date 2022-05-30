import React from 'react';
import './DeleteItem.css'

function DeleteItem({itemId, extractDIFromDI}) {

  const deleteItemHandler = (event) => {
    extractDIFromDI(itemId)
  }

  return (
    <div className='expense-item__delete'>
      <button onClick={deleteItemHandler}><div></div></button>
    </div>
  );
}

export default DeleteItem;
