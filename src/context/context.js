import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  // Logic for adding and deleting transations
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) =>
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });

  const addTransaction = (trans) =>
    dispatch({ type: 'ADD_TRANSACTION', payload: trans });

  console.log(transactions);
  return (
    <ExpenseTrackerContext.Provider
      value={{ deleteTransaction, addTransaction }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
