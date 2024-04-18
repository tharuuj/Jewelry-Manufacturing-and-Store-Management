import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import ContextProvider from './Components/context/ContextProvider';
import WorkContextProvider from './Components/context/WorkContextProvider';
import AttendanceContextProvider from './Components/context/AttendanceContextProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <WorkContextProvider>
      <AttendanceContextProvider>
      <BrowserRouter>
      
        <App />
        
      </BrowserRouter>
      </AttendanceContextProvider>
      </WorkContextProvider>
    </ContextProvider>
  </React.StrictMode>
);
