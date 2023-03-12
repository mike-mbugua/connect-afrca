import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
import All from './compponents/all/All';
import Book from './compponents/forms/Book';
import ViewBooking from './compponents/forms/ViewBooking';
import Homepage from './compponents/Homepage/Homepage';


function App() {
return(
  <div>
    <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Homepage/>}/>
          <Route path='/all-in-one' element={<All/>}/>
          <Route path='/booking' element={<Book/>}/>
          <Route path='/mybookings' element={<ViewBooking/>}/>
        </Routes>
    </BrowserRouter>
    
    
  </div>
  );
}

export default App;
