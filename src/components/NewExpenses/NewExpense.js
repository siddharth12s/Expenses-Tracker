import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm.js'
import './NewExpense.css'
import './ExpenseForm.css'

function NewExpense(props) {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
      props.onAddExpense(expenseData);
      setFormVisibility(false);
  }
  const [formVisibility, setFormVisibility] = useState(false);

  const clickHandler = (event) => { 
    setFormVisibility(true);
  }

  const stopclickHandler = (event) => { 
    setFormVisibility(false);
  }

  return (
    <div className='new-expense'>
      {!formVisibility && <button onClick={clickHandler}>Add Expense</button>}
      {formVisibility && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopclickHandler} />}
    </div>
  )
}
export default NewExpense
