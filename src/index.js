import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from './component/Todo';
import Display_button from './component/Display_button';
import Navbar from './component/Navbar';
import Home from './component/Home';
import NotFound from './component/NotFound';
import Landing from './component/Landing';
import Count from './component/Count';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <App />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<Home />}>
          <Route path="/home/landing" element={<Landing />} />
          <Route path="/home/count" element={<Count />} />
        </Route>
       
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
