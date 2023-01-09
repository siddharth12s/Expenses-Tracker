import React from "react";
import './ExpenseFilter.css'
function ExpensesFilter(props) {

    const dropChangehandler = (event) => {
            // event.preventDefault();
            props.onChangeFilter(event.target.value);
    }
    return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <select value={props.selected} onChange={dropChangehandler}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
