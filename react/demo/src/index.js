import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Courses from './basics/Courses';
import MessageButton from './basics/MessageButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MessageButton message="Hello!" />
    <MessageButton message="Hi" />
  </React.StrictMode>
);


