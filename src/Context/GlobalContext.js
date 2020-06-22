import React, { useReducer } from 'react';
import { AppReducer } from './AppReducer'
//create the Initial Values for context

const TransctionData={
    transactions:[
  
    ]
}
//create the Context for data to be shared with all componennts
export const GlobalContext = React.createContext(TransctionData);

//create provider
export const GlobalProvider = ({ children }) =>{
    const [state,Dispatch]=useReducer(AppReducer,TransctionData);

    //Action for the transaction
    function deleteTran(id) {
        Dispatch({
            type:"Delete",
            payload:id

        });
    }

    function addTransaction(transactions) {
        Dispatch({
            type:"Add",
            payload:transactions

        });
    }

    return <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                deleteTran,
                addTransaction
                
            }

    } >
        { children }
    </GlobalContext.Provider>
}