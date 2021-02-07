// Reducer =>takes in old state, an action and returns a new state

const contextReducer = (state, action) => {
  let transactions;
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      transactions = state.filter(
        (transaction) => transaction.id !== action.payload
      );

      localStorage.setItem('transactions', JSON.stringify(transactions));
      return transactions;
    case 'ADD_TRANSACTION':
      transactions = [action.payload, ...state];
      console.log(transactions);
      localStorage.setItem('transactions', JSON.stringify(transactions));
      return transactions;
    default:
      return state;
  }
};

export default contextReducer;
