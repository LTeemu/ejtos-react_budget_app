import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };
  //Increase / decrease 10
  const handleAllocation = (name, mathOperator) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: mathOperator === '+' ? 'ADD_EXPENSE' : 'REMOVE_EXPENSE',
      payload: expense
    });
  }

  return (
    <tr>
      <td>{props.name}</td>
      <td>{currency}{props.cost}</td>
      <td><button className='allocation-btn bg-green' onClick={event => handleAllocation(props.name, '+')}><span className='allocation-operator'>+</span></button></td>
      <td><button className='allocation-btn bg-red' onClick={event => handleAllocation(props.name, '-')}><span className='allocation-operator'>-</span></button></td>
      <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
    </tr>
  );
};

export default ExpenseItem;
