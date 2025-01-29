import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from './component/Todo';
import Display_button from './component/Display_button';
import Navbar from './component/Navbar';
import Home from './component/Home';
import NotFound from './component/NotFound';
import Dashboard from './sqicomponent/Dashboard';
import MyProfile from './sqicomponent/MyProfile';
import ChangePassword from './sqicomponent/ChangePassword';
import Documents from './sqicomponent/Documents';
import CourseRegistration from './sqicomponent/CourseRegistration';
import Resources from './sqicomponent/Resources';
import RegistrationHistory from './sqicomponent/RegistrationHistory';
import OneTodo from './component/OneTodo';

import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={ <App />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/one/:index" element={<OneTodo/>} />
        <Route path="/home" element={<Home />}>
          <Route path="/home/dashboard" element={<Dashboard />} />
          <Route path="/home/myprofile" element={<MyProfile />} />
          <Route path="/home/changepassword" element={<ChangePassword />} />
          <Route path="/home/documents" element={<Documents />} />
          <Route path="/home/course_registration" element={<CourseRegistration />} />
          <Route path="/home/resources" element={<Resources />} />
          <Route path="/home/registrationhistory" element={<RegistrationHistory />} />
        </Route>
        <Route path="/display_button" element={ <Display_button/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
