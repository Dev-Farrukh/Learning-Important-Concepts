import { Route, Routes } from 'react-router-dom'
import Login from './features/Authentication/pages/Login'
import Register from './features/Authentication/pages/Register'
import Home from './features/fileUpload/pages/Home'

const Router = () => {
  return (
    <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default Router