import React ,{useContext} from  'react';
import {GlobalContext} from '../Context/GlobalContext';

export const Transaction = ({transaction}) => {
    const { deleteTran } =  useContext(GlobalContext);

    return <div>
         <li className={transaction.Amount >0?"plus":"minus"}>
         <button onClick={() => deleteTran(transaction.id)} className=".delete-btn">X</button>
          { transaction.Decaription } 
          <span >  { transaction.Amount } </span>
          
        </li>
    </div>;
};
