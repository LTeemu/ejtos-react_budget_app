import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Currency() {
  const { dispatch } = useContext(AppContext);

  const setCurrency = (currency) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: currency,
    });
  };

  return (
    <div className='alert alert-secondary'>
      <span>Currency:</span>
      <select style={{ marginLeft: '0.5rem', size: 10 }} className="custom-select" onChange={(event) => setCurrency(event.target.value)}>
        <option value="$" name="Dollar">$ Dollar</option>
        <option value="£" name="Pound">£ Pound</option>
        <option value="€" name="Euro">€ Euro</option>
        <option value="₹" name="Ruppee">₹ Ruppee</option>
      </select>
    </div>
  );
}

export default Currency;
