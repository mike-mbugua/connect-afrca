import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
import All from './compponents/all/All';
import Homepage from './compponents/Homepage/Homepage';


function App() {
return(
  <div>
    <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Homepage/>}/>
          <Route path='/all-in-one' element={<All/>}/>
        </Routes>
    </BrowserRouter>
    
    
  </div>
  );
}

export default App;
