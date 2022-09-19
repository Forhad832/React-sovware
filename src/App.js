import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Career from './components/Career/Career';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <BrowserRouter>
       <Navbar />
       <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/career' element={<Career />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
       </Routes>
       <Footer />
    </BrowserRouter>
  );
}

export default App;
