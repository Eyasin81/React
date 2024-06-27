import React from 'react';

import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './Assets/bootstrap.min.css'
import Home from './Pages/Home';
import Expression from './Pages/4_JSX and JS Expression';
import Nav from './Component/Nav/Nav';
const App = () => {
  return (
   <BrowserRouter>
   <Nav/>
   <Routes>
   <Route path='/four' element={<Expression/>}/>
   <Route path='/' element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  );
};

export default App;