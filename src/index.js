import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/App.scss';
// CONTEXT
import { AuthContextProvider } from './context/AuthContext'

ReactDOM.render(
  <AuthContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContextProvider>,
  document.getElementById('root')
);

