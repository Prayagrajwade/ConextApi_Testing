import React from 'react';
import './App.css';
import { UserContextProvider } from './UserContext';
import Login from './Login';
import Profile from './Profile';

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
