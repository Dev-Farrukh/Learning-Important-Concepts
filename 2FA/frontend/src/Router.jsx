import { Route, Routes } from 'react-router-dom'
import Login from './features/Authentication/pages/Login'

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Router