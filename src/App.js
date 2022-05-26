import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {id:1, date: new Date(2022, 3,4), title: 'Kids', amount: 120},
    { id: 2, date: new Date(2021, 3, 4), title: 'Car', amount: 140 },
    { id: 3, date: new Date(2022, 3, 4), title: 'Teeth', amount: 100 },
  ]

  return (
    <div>
      <h2>Started</h2>
      <p>I see it</p>
      {expenses.map(expense=><ExpenseItem key={expense.id} expense={expense}/>)}
    </div>
  );
}

export default App;
