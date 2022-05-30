import React, { useState } from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesChart from '../ExpensesChart/ExpensesChart';

function Expenses({ expenses, extractDIFromExpenses, extractUIFromExpenses }) {
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);
  const extractDeletedItem = (itemId) => {
    extractDIFromExpenses(itemId); 
  }

  const extractUpgratedItem = (updatingId, updatingItemData) => {
    extractUIFromExpenses(updatingId, updatingItemData)
  }

  return (
    <div>
      <Card className='expenses'>
        <Filter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        < ExpensesChart expenses={filteredExpenses} />
        < ExpensesList expenses={filteredExpenses} extractDIFromEL={extractDeletedItem} extractUIFromEL={extractUpgratedItem}/>
      </Card>
    </div>
  );
}

export default Expenses;
