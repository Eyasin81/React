import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// 23EventHandlerBinding
import EventHandlerBinding from './Pages/23EventHandlerBinding/EventHandlerBinding';

import UseStateWithObject from './Pages/29use State with Object/useStateWithObject';
//30 Passing Data from Child To Parent
import Parent from './Pages/30 Passing data from child to parent component/Parent';
import ParentData from './Pages/31more on state lifting Pssing Data From Prent to Child/ParentData';
//31 Passing Data from Parent To Child
// 
import HomeTodo from './Pages/32_Basic_Todo_App_Parent_Child/HomeTodo';
import All from './Pages/All';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<All/>}/>
    <Route path="/EventHandlerBinding" element={<EventHandlerBinding/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;