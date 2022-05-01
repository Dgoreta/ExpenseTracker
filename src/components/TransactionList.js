import React from 'react'
import { useSelector } from "react-redux";

import { Transaction } from './Transaction';

export const TransactionList = () => {
    const transactions=useSelector((state)=>{
        return state.transactions;
    });
  return (
    <div>
        <h3>History</h3>
    <ul className="list">
      {transactions.transactions.map(transaction=>(
          <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </ul>
    </div>
  )
}
