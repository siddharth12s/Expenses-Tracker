import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "../Expenses/ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChange = (event) => {
    setFilteredYear(event);
    console.log(event)
  };

  const filteredExpenses = props.items.filter(item => {
    return item.date.getFullYear().toString() === filteredYear;
  })
  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChange} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
}

export default Expenses;
