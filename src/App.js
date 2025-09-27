import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Teacher from './pages/Teacher';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery'
import Contact from './pages/Contact';
// import Header from './Layout/Header';
// import Footer from './Layout/Footer';
import './App.css';
import './Blog.css';
import './About.css';
import './Teacher.css';
import './Gallery.css';
import './Header.css';
import './Footer.css';
import './Contact.css';
import './Contact.css';



function App() {
  return (
  <>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Home' element={<Home />}/>
      <Route path='/Blog' element={<Blog />}/>
      <Route path='/Teacher' element={<Teacher />}/>
      <Route path='/Gallery' element={<Gallery />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Contact' element={<Contact />}/>
    </Routes>
    
   
  </>
  )

  
}

export default App;
