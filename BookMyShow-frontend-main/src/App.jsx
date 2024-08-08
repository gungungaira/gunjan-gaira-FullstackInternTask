import React from "react";
import "./App.css";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import BsState from "./Context/BsState";
import Home from "./Pages/Home";
import Navigation from './Navigation/Navigation'
import Carousel from './Carousel/Carousel'
import Form from './Form/Form'

function App() {
  return (
    <>
      {/* <BsState>
        <Navigation/>
        <Carousel/>
        <Form/>
        <Home />

      </BsState> */}
      <BsState>
      <Router>
      <Navigation/>
      <Routes>
      
        <Route path="/" element={<Carousel />}/>
        <Route path="Home" element={<Home />}/>
        <Route path="Form" element={<Form />}/>
        
    
      </Routes>
    </Router>
    </BsState>






    </>
  )
}

export default App;
