import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpenses/NewExpense';

const INITIAL_EXPENSES = [
  {
      id: 1,
      title: "Chips",
      amount:50,
      date: new Date(2023,0,5)
  },
  {
      id: 2,
      title: "Notebook",
      amount:100,
      date: new Date(2023,0,2)
  },
  {
      id: 3,
      title: "Pens",
      amount:20,
      date: new Date(2022,3,1)
  },
  {
    id: 4,
    title: "Soap",
    amount:75,
    date: new Date(2022,3,1)
}
]
function App() {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpense => {
      return [expense, ...prevExpense];
    })
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
