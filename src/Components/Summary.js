import React , { useContext }from 'react';
import {GlobalContext} from '../Context/GlobalContext';

export const Summary =()=> {
  const { transactions } = useContext(GlobalContext);

  const amountValues = transactions.map(transaction =>(transaction.Amount));
  const income =amountValues.filter(item => item>0).reduce((amount,item) =>(amount+=item),0);
  const expense =amountValues.filter(item => item<0).reduce((amount,item) =>(amount+=item),0);

  return (
    <div className="incomeexp">
      <div className="income">
      <h3>income</h3>
  <span className="plus">{income}</span>

      </div>
      <div className="expense">
        <h3>Expense</h3>
        <span className="minus">{expense}</span>
      </div>
    </div>
  );
}

