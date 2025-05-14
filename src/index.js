import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n'; // i18next yapılandırmasını import et

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
