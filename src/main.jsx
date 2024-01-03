import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/Home.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Events from './pages/Events.jsx'
import EventPage from './pages/EventPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/events' element={<Events/>}/>
      <Route path='/events/:id' element={<EventPage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
