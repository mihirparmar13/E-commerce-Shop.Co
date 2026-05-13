
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Cart from './Pages/Cart'
import Category from './Pages/Category'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'
import Layout from './Common/Layout'
import { Provider } from 'react-redux'
import { store } from './store'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './Pages/Login'
import SingUp from './Pages/SingUp'
import ProtectedRoute from './Common/ProtectedRoute'

function App() {

  const { pathname } = useLocation();

  useEffect(() => {

    window.scrollTo(0, 0);

  }, [pathname]);



  return (
    <Provider store={store}>
      <ToastContainer position="bottom-right" autoClose={2000} theme="dark" />
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='singup' element={<SingUp />} />
        <Route path='/' element={<Layout />}>

          <Route index element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
          />

          <Route path='category' element={
            <ProtectedRoute>
              <Category />
            </ProtectedRoute>
          }
          />

          <Route path='cart' element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
          />

          <Route path='/product/:id' element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          }
          />

        </Route>
      </Routes>
    </Provider>
  )
}

export default App
