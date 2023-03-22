import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, expenses, dispatch, currency } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const setBudget = (newBudget) => {
    if (newBudget >= totalExpenses) {
      dispatch({
        type: 'SET_BUDGET',
        payload: newBudget,
      });
    } else {
      alert("Budget can't be lower than current expenses: " + totalExpenses + "\nInvalid budget: " + newBudget);
    }
  };

  return (
    <div className='alert alert-secondary' style={{ display: 'flex', flex: 1 }}>
      <span>Budget:&nbsp;{currency}</span>
      <input
        required='required'
        type='number'
        id='budget'
        defaultValue={2000}
        min={0}
        max={20000}
        step={10}
        value={budget}
        style={{ marginLeft: '0.5rem', size: 10, flex: 1 }}
        onChange={(event) => setBudget(event.target.value)}>
      </input>
    </div >
  );
};
export default Budget;
