import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import '../Assets/bootstrap.min.css'
// Hom
import Home from '../Pages/Home';
// 
import Nav from '../Component/Nav/Nav';
const Index = () => {
   return (
      <BrowserRouter>
<Nav/>
      <Routes>
      <Route to='/'element={<Home/>}/>
      

      </Routes>
      </BrowserRouter>
   );
};

export default Index;
