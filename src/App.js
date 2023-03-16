import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
import All from './compponents/all/All';
import Card from './compponents/card/Card';
import Culture from './compponents/Culture/Culture';
import Book from './compponents/forms/Book';
import ViewBooking from './compponents/forms/ViewBooking';
import Homepage from './compponents/Homepage/Homepage';
import Luxury from './compponents/luxury/Luxury';
import Navbar from './compponents/Navbar/Navbar';
import Wildlife from './compponents/Wildlife/Wildlife';


function App() {
return(
  <div>
    <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Homepage/>}/>
          <Route path='/all-in-one' element={<All/>}/>
          <Route path='/booking' element={<Book/>}/>
          <Route path='/mybookings' element={<ViewBooking/>}/>
          <Route path='/luxury' element={<Luxury/>}/>
          <Route path='/card' element={<Card/>}/>
          <Route path='/culture' element={<Culture/>}/>
          <Route path='/wildlife' element={<Wildlife/>}/>
        </Routes>
        
    </BrowserRouter>
    
    
  </div>
  );
}

export default App;
