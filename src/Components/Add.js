import React, { useState,useContext } from 'react';
import {GlobalContext} from '../Context/GlobalContext';

export const  Add = () => {
  const [Description,setDesciption] = useState();
  const [Amount,SetAmount] = useState();

  const { addTransaction } =  useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTrans = {
      id:Math.random(),
      Decaription:Description,
      Amount:+Amount
    }
    addTransaction(newTrans);
  };

  return (
    <div >
        <h3>Add New Transaction</h3>
        <form onSubmit ={ onSubmit }>
          <div className="form-control">
            <label htmlFor="Description">
              Desctiption
            </label>
            <input type="text" placeholder="Description" value={Description} onChange={(e) => setDesciption(e.target.value)} ></input>
          </div>
          <div className="form-control">
            <label htmlFor="Amount">
              Amount
            </label>
            <input type="Number" value={Amount}
        onChange={(e) => SetAmount(e.target.value)}
             ></input>
          </div>
          <button className="btn"> Add Transaction</button>
        </form>
    </div>
  );
}

