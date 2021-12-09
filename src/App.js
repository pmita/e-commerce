import React from 'react'
// REACT ROUTER
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// PAGES
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Products from './pages/products/Products';
import Profile from './pages/profile/Profile';
import Testimonials from './pages/testimonials/Testimonials';
import Signup from './pages/signup/Signup';
// COMPONENTS
import Navbar from './components/Navbar';
import Signin from './pages/sigin/Signin';

function App() {
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
          <Route path='/profile' element={<Profile />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
