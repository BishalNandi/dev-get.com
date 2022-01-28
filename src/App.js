import './App.css';
import React, {useReducer, createContext} from 'react'
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { initialState, reducer } from "./reducer/UseReducer";

// import Header from './Components/Header';
// import Firstsection from './Components/Firstsection';
// import Cards1 from './Components/Cards1';
// import Search from './Components/Search';
// import Cards2 from './Components/Card2';
// import Secondsection from './Components/Secondsection';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
// import { Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Registration from './Components/Registration';
import Project from './Components/Project';
import Animationlogo from './Components/Animationlogo';
// import Changing from './Components/Changing';
import Logout from './Components/Logout';
import Errorpage from './Components/Errorpage'
export const UserContext = createContext();


const Routing =() => {

  return (
    <>
    
    
    <Switch>
    <Route exact path="/">
      <Home/>
      <Animationlogo/>
      {/* <Changing/> */}
    </Route>

    <Route path="/about">
      <About/>
    </Route>

    <Route path = "/contact">
      <Contact/>
    </Route>

    <Route path="/project">
      <Project/>
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

 <Route path="/logout">
        <Logout />
      </Route>
    

<Route>
        <Errorpage />
      </Route>
    </Switch>
    
  
    
    <Footer/>
    </>
  )
}

const App = () => {

  //* we use useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
   
      <UserContext.Provider value={{state, dispatch}}>
        
        <Navbar />
        <Routing />
        

      </UserContext.Provider>
  )
}


export default App;
