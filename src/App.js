import React from 'react'
// REACT ROUTER
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom'
// PAGES
import Home from './pages/home/Home';
import Cart from './pages/cart/CartV2';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Products from './pages/products/Products';
import Product from './pages/product/Product';
import Profile from './pages/profile/Profile';
import Testimonials from './pages/testimonials/Testimonials';
import Signup from './pages/signup/Signup';
import CheckoutDetails from './pages/checkout/CheckoutDetails';
import CheckoutShipping from './pages/checkout/CheckoutPartTwo';
import CheckoutPartThree from './pages/checkout/CheckoutPartThree';
import CheckoutPartFour from './pages/checkout/CheckoutPartFour';
import CheckoutSuccess from './pages/checkout/CheckoutSuccess';
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
          <Route path='/cart' exact element={<Cart />} />
          <Route path='/checkout-details' exact element={<CheckoutDetails />} />
          <Route path='/checkout-shipping' exact element={<CheckoutShipping />} />
          <Route path='/checkout-part-three' element={<PrivateRouteToLogin />}>
            <Route path='/checkout-part-three' element={<CheckoutPartThree />} />
          </Route>
          <Route path='/checkout-part-four' element={<PrivateRouteToLogin />}>
            <Route path='/checkout-part-four' element={<CheckoutPartFour />} />
          </Route>
          <Route path='/checkout-sucess' element={<PrivateRouteToLogin />}>
            <Route path='/checkout-sucess' element={<CheckoutSuccess />} />
          </Route>
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
