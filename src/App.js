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
    []

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
