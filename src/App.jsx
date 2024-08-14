import './App.css'
import './Style.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Page/Home'
import Signin from './components/Page/Signin'
import MainWrapper from './components/HOC/MainWrapper/MainWrapper'
import AmazonPay from './components/Page/AmazonPay'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<MainWrapper />}>
          <Route index element={<Home />} />
          <Route path='amazonpay' element={<AmazonPay />} />
        </Route>
        <Route path='/ap'>
          <Route index element={<Navigate to="/" />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
