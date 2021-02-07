import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [
  {
    amount: 4000,
    category: 'Investments',
    date: '2021-02-08',
    id: '301956ac-8700-4b2f-9f5c-143351f54ff9',
    type: 'Income',
  },
  {
    amount: 2000,
    category: 'Shopping',
    date: '2021-02-08',
    id: '301956ac-8700-4b2f-9f5c-143351f54f78',
    type: 'Expense',
  },
];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  // Logic for adding and deleting transations
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) =>
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });

  const addTransaction = (trans) =>
    dispatch({ type: 'ADD_TRANSACTION', payload: trans });

  const balance = transactions.reduce((acc, currVal) => {
    return currVal.type === 'Expense'
      ? acc - currVal.amount
      : acc + currVal.amount;
  }, 0);

  return (
    <ExpenseTrackerContext.Provider
      value={{ deleteTransaction, addTransaction, transactions, balance }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
