import React from 'react'
import Home from './home'
import NavBar from './navbar';
import Singers from './singers';
import Albums from './albums';

import { Route,Routes } from 'react-router-dom';


export default function App() {
  return (
    <> 
      <div>
      <NavBar/>
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/singers' element={<Singers />}></Route>
            <Route path='/albums' element={<Albums />}></Route>
        </Routes>
      </div>
    </>
  );
}