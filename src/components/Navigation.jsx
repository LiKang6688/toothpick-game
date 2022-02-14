import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">主页</Link>
      </li>
      <li>
        <Link to="/game">开始游戏</Link>
      </li>
      <li>
        <Link to="/idea">思路想法</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
