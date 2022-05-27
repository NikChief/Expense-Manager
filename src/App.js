import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, date: new Date(2022, 3, 4), title: 'Kids', amount: 120 },
    { id: 2, date: new Date(2021, 3, 4), title: 'Car', amount: 140 },
    { id: 3, date: new Date(2022, 3, 4), title: 'Teeth', amount: 100 },
  ])

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
    setExpenses(prevState=> {return [...prevState, expense]})
  }
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
