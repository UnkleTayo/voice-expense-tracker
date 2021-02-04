import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  // Logic for adding and deleting transations
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deletTransaction = (id) =>
    dispatch({ type: 'DELETE_TRANSACTIONS', payload: id });

  const addTransaction = (transaction) =>
    dispatch({ type: 'ADD_TRANSACTIONS', payload: transaction });
  return (
    <ExpenseTrackerContext.Provider
      value={{ deletTransaction, addTransaction }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
