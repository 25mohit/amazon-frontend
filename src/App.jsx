import './App.css'
import './Style.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Page/Home'
import Signin from './components/Page/Signin'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/ap'>
          <Route index element={<Navigate to="/" />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
