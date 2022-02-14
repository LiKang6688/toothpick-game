import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Toothpicks = ({ player, number, index, takeAway }) => {
  const [amount, setAmount] = useState();

  const update = (event) => {
    setAmount(event.target.value);
  };
  const resetAmount = () => {
    setAmount('');
  };

  return (
    <>
      <label>
        <p>{number}</p>
        <span>{player}号玩家请输入拿走这一行牙签的数量:</span>
        <input type="text" value={amount} name="amount" onChange={update} />
      </label>
      <button
        onClick={() => {
          takeAway(index, amount);
          resetAmount();
        }}
        type="button"
      >
        确认
      </button>
    </>
  );
};

Toothpicks.propTypes = {
  number: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  takeAway: PropTypes.func.isRequired,
};

export default Toothpicks;
