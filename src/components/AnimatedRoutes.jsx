import React from 'react'
import App from '../pages/Home.jsx';
import Events from '../pages/Events.jsx';
import EventPage from '../pages/EventPage.jsx';
import Error from '../pages/Error.jsx';
import Team from '../pages/Team.jsx';
import Sponsors from '../pages/Sponsors.jsx';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location  = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname} >
        <Route path='/' element={<App />} />
        <Route path='/events' element={<Events />} />
        <Route path='/events/:id' element={<EventPage />} />
        {/* <Route path='/sponsors' element={<Sponsors />} /> */}
        <Route path='/team' element={<Team />} />
       
        <Route path='*' element={<Error />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes