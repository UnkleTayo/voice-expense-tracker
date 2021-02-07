import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{ textAlign: 'center', padding: `0 10%` }}>
      Try saying: <br />
      Add {isIncome ? 'Income ' : 'Expense '} for {isIncome ? '$500 ' : '$40 '}{' '}
      in category {isIncome ? 'Salary ' : 'Food '} for{' '}
      {isIncome ? 'Friday ' : 'Sunday '}
    </div>
  );
};

export default InfoCard;
