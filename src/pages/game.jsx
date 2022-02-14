import React, { useEffect, useState } from 'react';

import Toothpicks from '../components/Toothpicks';

const Game = () => {
  const [toothpicksCount, setToothpicksCount] = useState([3, 5, 7]);
  const [player, setPlayer] = useState(1);
  const [message, setMessage] = useState();

  useEffect(() => {
    // update the document title
    document.title = '牙签游戏';
  });

  const takeAway = (index, amount) => {
    if (amount && toothpicksCount[index] - amount >= 0) {
      toothpicksCount[index] = toothpicksCount[index] - amount;
      window.console.log(toothpicksCount.toString());
      if (toothpicksCount.toString() == '0,0,0') {
        setMessage('Success');
      } else {
        setPlayer(player == 1 ? 2 : 1);
        setMessage();
      }
      setToothpicksCount([...toothpicksCount]);
    } else {
      setMessage('Caution');
    }
  };

  const reset = () => {
    setToothpicksCount([3, 5, 7]);
    setPlayer(1);
    setMessage();
  };

  return (
    <>
      <div>
        <h1>三行牙签</h1>
        <>
          {toothpicksCount.map((number, index) => {
            return <Toothpicks key={index} player={player} number={number} index={index} takeAway={takeAway} />;
          })}
        </>
        <>{message == 'Caution' && <p>牙签的数目错误，请重新输入</p>}</>
        <>{message == 'Success' && <p>恭喜{player}号玩家取得了胜利✌🏻！</p>}</>
        <p>
          <button
            onClick={() => {
              reset();
            }}
          >
            重设游戏
          </button>
        </p>
      </div>
    </>
  );
};

export default Game;
