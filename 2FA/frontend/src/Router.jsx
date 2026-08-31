import { Route, Routes } from 'react-router-dom'
import Login from './features/Authentication/pages/Login'
import Register from './features/Authentication/pages/Register'

const Router = () => {
  return (
    <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Router