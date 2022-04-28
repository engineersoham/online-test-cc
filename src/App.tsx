import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      <Route path='/result' element={<Result/>}/>
    </Routes>
    </>
  );
}

export default App;