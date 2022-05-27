import React, {useState} from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';
import ExpensesList from '../ExpensesList/ExpensesList';

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

  return (
    <div>
      <Card className='expenses'>
        <Filter
        selected={filteredYear} 
        onChangeFilter = {filterChangeHandler}
        />
        < ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
