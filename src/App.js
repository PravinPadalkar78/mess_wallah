import './App.css';
import './bootstrap.min.css'
import './owl.carousel.min.css'
import './owl.theme.default.min.css'

import React,{ useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './components/Login/login'
import Signup from './components/Login/signup'
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile';
import Home from './components/Home/home'
import About from './components/About/about'
import Services from './components/Services/services'
import Members from './components/Members/members'
import Footer from './components/Footer/footer'
import Contact from './components/Contact/contact'
import Alert from './components/Alert'
import Modal from './components/modal';

const App = () => {
 useEffect(() => {
    document.title ="MessWallah"
 }, [])
 
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);

  }
  return (
    <div className="App">
      
        {/* <Home/> */}

      <Router>
      <Navbar />
        
       
        <Alert alert={alert} />
        <Routes>
       
          <Route exact path="/" element={<Home />}></Route>
       
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/login" element={<Login showAlert={showAlert} />}></Route>
          <Route exact path="/signup" element={<Signup showAlert={showAlert}/>}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/plans" element={<Profile />}></Route>

          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/members" element={<Members />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/modal" element={<Modal />}></Route>

        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
