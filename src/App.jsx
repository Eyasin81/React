import React from 'react';

import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './Assets/bootstrap.min.css'
import Home from './Pages/Home';
import Expression from './Pages/4_JSX and JS Expression';
import Nav from './Component/Nav/Nav';
// 6 Card Design
// videos-20 useState Method
import UseState from './Pages/20_UseState';
import DesignCard from './Pages/6_DesignCard';
// Destructor Methods
import Props from './Pages/8_props_Destru/Props';
/* Map Data */
import MapData from './Pages/9_MapData';

const App = () => {
  return (
   <BrowserRouter>
   <Nav/>
   <Routes>
   <Route path='/four' element={<Expression/>}/>
   <Route path='/' element={<Home/>}/>
   <Route path='/UseState' element={<UseState/>}/>
   <Route path='/DesignCard' element={<DesignCard/>}/>

   <Route path='/destructor' element={<Props/>}/>
   <Route path='/Mapdata' element={<MapData/>}/>
   
   </Routes>
   </BrowserRouter>
  );
};

export default App;