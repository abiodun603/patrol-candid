import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import "./styles/index.css"
import "./styles/index.css"
import { AuthContextProvider } from './context/authContext/AuthContext';
// import { GuardContextProvider } from './context/guardContext/GuardContext';
document.title = "candidsolutionlimited"
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);