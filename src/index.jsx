import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/home';
import Game from './pages/game';
import Idea from './pages/idea';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="game" element={<Game />} />
        <Route path="idea" element={<Idea />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
