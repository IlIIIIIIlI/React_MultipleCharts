import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import YearStruct from './components/YearStruct';
import Records from './components/Records';
import TotalPrice from './components/TotalPrice';
import UnitPrice from './components/UnitPrice';
import HouseArea from './components/HouseArea';
import PplAttention from './components/PplAttention';
import PostTime from './components/PostTime';
import Interesting from './components/Interesting';
import NotInteresting from './components/NotInteresting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Records />
      <YearStruct />
      <UnitPrice />
      <TotalPrice />
      <HouseArea />
      <PplAttention />
      <PostTime />
      <Interesting />
      <NotInteresting />
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
