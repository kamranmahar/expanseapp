import React, { useContext } from 'react';
import {GlobalContext} from '../Context/GlobalContext';

export const Balance =()=> {
    const { transactions } = useContext(GlobalContext);

    const amountValues = transactions.map(transaction =>(transaction.Amount),0);
    const total =amountValues.reduce((amount,item) =>(amount+=item),0);
    return (
        <div className="Balance"> 
        <h3>Balance</h3>
    <h1>${total}</h1>
        </div>
    );
  }
  
