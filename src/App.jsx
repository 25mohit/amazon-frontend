import './App.css'
import './Style.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Page/Home'
import Signin from './components/Page/Signin'
import MainWrapper from './components/HOC/MainWrapper/MainWrapper'
import AmazonPay from './components/Page/AmazonPay'
import Order from './components/Page/Order'
import YourAccount from './components/Page/YourAccount'
import Cart from './components/Page/Cart'
import NotFound from './components/Page/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<MainWrapper />}>
          <Route index element={<Home />} />
          <Route path='amazonpay' element={<AmazonPay />} />
          <Route path='gp/'>
            <Route index element={<Navigate to="/document-not-found" />} />
            <Route path='order-history' element={<Order />} />
            <Route path='your-account' element={<YourAccount />} />
            <Route path='cart' element={<Cart />} />
          </Route>
        </Route>
        <Route path='/ap'>
          <Route index element={<Navigate to="/" />} />
          <Route path="signin" element={<Signin />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
