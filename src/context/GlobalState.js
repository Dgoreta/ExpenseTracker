import { createSlice } from "@reduxjs/toolkit";


export const transactionSlice=createSlice({
    name: "transactions",
    initialState:{
        transactions:[
        
            { id: 1, text: 'Flower', amount: -20 },
            { id: 2, text: 'Salary', amount: 300 },
            { id: 3, text: 'Book', amount: -10 },
            { id: 4, text: 'Camera', amount: 150 }
    
        ]
    },reducers:{
         deleteTransaction: (state,action)=>{
            return {
                ...state,
                transactions: state.transactions.filter(transaction=>transaction.id!==action.payload)
                }
        },
         addTransaction: (state,action)=>{
            return {
                ...state,
                transactions: [action.payload,...state.transactions]
                }
        }

    }
    
});

export const { deleteTransaction, addTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
 
 