import React, {useState} from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  return (
    <div>
      <Card className='expenses'>
        <Filter selected={filteredYear} onChangeFilter = {filterChangeHandler}/>
        {expenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)}
      </Card>
    </div>
  );
}

export default Expenses;
