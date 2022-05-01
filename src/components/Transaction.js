import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTransaction } from '../context/GlobalState';

export const Transaction = ({transaction}) => {

    const dispach=useDispatch();
    const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li className={transaction.amount<0 ? "minus":"plus"}>
        {transaction.text} <span>{sign}Kn{Math.abs(transaction.amount)}</span>
        <button onClick={()=>dispach(deleteTransaction(transaction.id))} className="delete-btn">x</button>
      </li> 
  )
}
