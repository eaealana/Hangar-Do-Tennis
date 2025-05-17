import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import Schedule from './components/Schedule'
import BookingDetails from './components/BookingDetails'
import Confirmation from './components/Confirmation'
import Profile from './components/Profile'
import Appointments from './components/Appointments'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/agendar' element={<Schedule />} />
        <Route path='/agendar/detalhes' element={<BookingDetails />} />
        <Route path='/agendar/confirmacao' element={<Confirmation />} />
        <Route path='/perfil' element={<Profile />} />
        <Route path='/reservas' element={<Appointments />} />
      </Routes>
    </>
  )
}

export default App