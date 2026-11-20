"use client"

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentbalance:0,
  expence:0,
  income:0,
  transection:[]
};

let ExpenseSlice = createSlice({
    name: 'Expence',
    initialState,
    reducers:{
      addtransection(state,action){
        const {Name,amount}= action.payload
         
         state.transection.push({Name,amount})
         if (amount > 0) {
        state.income += amount;
         } else {
        state.expence += Math.abs(amount);
      }  
        },
        removetrancestion(state,action){
        state.transection.splice(action.payload, 1);                    
        },
    }
})   

export const {addtransection,removetrancestion} = ExpenseSlice.actions
export default ExpenseSlice.reducer
 



