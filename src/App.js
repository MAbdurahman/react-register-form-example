import React from 'react';
import './App.css';
import Login from './components/login/Login';
import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';

export default function App() {
  return (
    <div>
      <SignIn />
      {/* <Login /> */}
      {/* <SignUp /> */}
    </div>
  );
};
