import React from 'react';
import './App.css';
import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';
import FormContainer from './containers/form-container/FormContainer';

export default function App() {
  return (
    <div>
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      <FormContainer />
    </div>
  );
};
