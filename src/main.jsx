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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/events' element={<Events />} />
        <Route path='/events/:id' element={<EventPage />} />
        <Route path='/sponsors' element={<Sponsors />} />
        <Route path='/team' element={<Team />} />
       
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
