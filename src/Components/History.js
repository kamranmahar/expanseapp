import React,{useContext} from 'react';

import {GlobalContext} from '../Context/GlobalContext';

import {Transaction} from './Transaction'

export const History =()=> {



const { transactions } = useContext(GlobalContext);


console.log(transactions);
  return (
    <div >
      <h3>History</h3>
      <ul className="list">
        {
        transactions.map(transaction =>(
        <Transaction transaction= { transaction }/>
          )
        )
      }
       
      </ul>
      
    </div>
  )
}

