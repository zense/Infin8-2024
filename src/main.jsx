import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Events from './pages/Events.jsx';
import EventPage from './pages/EventPage.jsx';
import Error from './pages/Error.jsx';
import Team from './pages/Team.jsx';
import Sponsors from './pages/Sponsors.jsx';
import AnimatedRoutes from './components/AnimatedRoutes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <AnimatedRoutes/>
    </BrowserRouter>
  </React.StrictMode>,
);
