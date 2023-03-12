import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
import All from './compponents/all/All';
import Book from './compponents/forms/Book';
import Homepage from './compponents/Homepage/Homepage';


function App() {
return(
  <div>
    <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Homepage/>}/>
          <Route path='/all-in-one' element={<All/>}/>
          <Route path='/book' element={<Book/>}/>
        </Routes>
    </BrowserRouter>
    
    
  </div>
  );
}

export default App;
