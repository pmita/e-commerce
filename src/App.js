import React from 'react'
// REACT ROUTER
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom'
// PAGES
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Products from './pages/products/Products';
import Product from './pages/product/Product';
import Profile from './pages/profile/Profile';
import Testimonials from './pages/testimonials/Testimonials';
import Signup from './pages/signup/Signup';
// COMPONENTS
import Navbar from './components/Navbar';
import Signin from './pages/sigin/Signin';
// HOOKS
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  // STATE
  const { user } = useAuthContext()

  // FUNCTIONS
  const PrivateRouteToHome = () => {
    return user ? <Navigate to='/' /> : <Outlet />;
  }

  const PrivateRouteToLogin = () => {
    return user ? <Outlet /> : <Navigate to='/signin' />;
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' exact element={<Product />} />
          <Route path='/profile' element={<PrivateRouteToLogin />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/signin' element={<PrivateRouteToHome />}>
            <Route path='/signin' element={<Signin />} />
          </Route>
          <Route path='/signup' element={<PrivateRouteToHome />}>
            <Route path='/signup' element={<Signup />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
