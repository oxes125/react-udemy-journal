import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { JournalApp } from './JournalApp';
import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <BrowserRouter> {/* useRoutes() may be used only in the context of a <Router> component. */}
     <JournalApp /> 
    </BrowserRouter>
  </React.StrictMode>
);

