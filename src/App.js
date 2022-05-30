import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const initial = localStorage.getItem("expensesStorage") ? 
    JSON.parse(localStorage.getItem("expensesStorage")).map(element => {
      return {
        ...element,
        date: new Date(element.date)
      }
    }) : 
    [
      { id: 1, date: new Date(2022, 1, 11), title: 'House design', amount: 3100 },
      { id: 2, date: new Date(2021, 2, 7), title: 'Car tools', amount: 1700 },
      { id: 3, date: new Date(2022, 3, 15), title: 'Teeth', amount: 2450 },
      { id: 4, date: new Date(2020, 5, 25), title: 'Party', amount: 2500 },
      { id: 5, date: new Date(2021, 3, 12), title: 'Trip to the sea', amount: 5100 },
      { id: 6, date: new Date(2022, 6, 4), title: 'Sport inventory', amount: 1200 },
      { id: 7, date: new Date(2022, 11, 21), title: 'PS5 Games', amount: 370 }
    ]

  const [expenses, setExpenses] = useState(initial)

  localStorage.setItem("expensesStorage", JSON.stringify([...expenses]));

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
    setExpenses(prevExpenses => { return [expense, ...prevExpenses] })
  }

  const deleteExpenseHandler = (itemId) => {
    console.log('App', itemId);
    setExpenses(prevExpenses => {
      const deletedExpenseId = expenses.findIndex((expense) => expense.id === itemId);
      const expensesWithoutDeleted = [...prevExpenses];
      expensesWithoutDeleted.splice(deletedExpenseId, 1);
      return expensesWithoutDeleted;
    })
  }

  const extractUpgratedItem = (updatingId, updatingItemData) => {
    console.log(updatingId, updatingItemData);
    const dateArray = updatingItemData.date.split('-').map(elementDate => +elementDate)
    setExpenses(prevExpenses => {
      return [...prevExpenses].map(expense => {
        if (expense.id !== updatingId) {
          return expense
        } else {
          return {
            ...expense,
            title: updatingItemData.title,
            date: new Date(...dateArray),
            amount: updatingItemData.amount,
          }
        }
      })
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} extractDIFromExpenses={deleteExpenseHandler} extractUIFromExpenses={extractUpgratedItem} />
    </div>
  );
}

export default App;
