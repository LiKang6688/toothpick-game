import React, { useEffect } from 'react';

const Favorites = () => {
  useEffect(() => {
    // update the document title
    document.title = '思路';
  });

  return (
    <div>
      <h1>思路</h1>
      <p>设置一个数组[3,5,7]；</p>
      <p>玩家确认行数并输入拿牙签的数目， 从数组中减去这个数目；</p>
      <p>如果数组不是[0,0,0]，两个玩家号交替。</p>
    </div>
  );
};

export default Favorites;
