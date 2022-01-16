import './App.css';
// import Header from './Components/Header';
// import Firstsection from './Components/Firstsection';
// import Cards1 from './Components/Cards1';
// import Search from './Components/Search';
// import Cards2 from './Components/Card2';
// import Secondsection from './Components/Secondsection';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Registration from './Components/Registration';

function App() {
  return (
    <>
    
    <Navbar/>
    
    <Route exact path="/">
      <Home/>
    </Route>

    <Route path="/about">
      <About/>
    </Route>

    <Route path = "/contact">
      <Contact/>
    </Route>

    <Route path="/login">
      <Login/>
    </Route>

    <Route path="/signup">
      <Signup/>
    </Route>

    <Route path = "/registration">
      <Registration/>
    </Route>

    {/* <Firstsection/> */}
    {/* <Cards1/> */}
    {/* <Search/> */}
    {/* <Cards2/> */}
    {/* <Secondsection/> */}
    <Footer/>
    </>
  );
}

export default App;
