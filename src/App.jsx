import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// 22 EventHandler_onChange_onClick
import EventHandler_onChange_onClick from './Pages/22Event-Handler-onChange-onClick/EventHandler-onChange-onClick';
// 23EventHandlerBinding
import EventHandlerBinding from './Pages/23EventHandlerBinding/EventHandlerBinding';
//24 UseState Hooks
import UseState from './Pages/24_useState Hook/UseState';
//25 UpdateState 
import UpdateState from './Pages/25updateStatebBasedOnPreviousState/UpdateState';
// 26 StopPropagation
import StopPropagation from './Pages/26EventBubblingStopPropagation/StopPropagation';

import UseStateWithObject from './Pages/29use State with Object/useStateWithObject';
//30 Passing Data from Child To Parent
import Parent from './Pages/30 Passing data from child to parent component/Parent';
import ParentData from './Pages/31more on state lifting Pssing Data From Prent to Child/ParentData';
//31 Passing Data from Parent To Child
// 
import HomeTodo from './Pages/32_Basic_Todo_App_Parent_Child/HomeTodo';
import All from './Pages/All';
import Assignment_2 from './Pages/27_Assignment_2_Counter_App/Assignment_2';
import CollectedData from './Pages/28ControlledComponentCollectFformData/CollectedData';
import FormDataFormik from './Pages/34FormDatausingFormikPackage/FormDataFormik';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<All/>}/>
    <Route path="/onChang" element={<EventHandler_onChange_onClick/>}/>
    <Route path="/EventHandlerBinding" element={<EventHandlerBinding/>}/>
    <Route path="/24" element={<UseState/>}/>
    <Route path="/25" element={<UpdateState/>}/>
    <Route path="/26" element={<StopPropagation/>}/>
    <Route path="/27" element={<Assignment_2/>}/>
    <Route path="/28" element={<CollectedData/>}/>
    <Route path="/34" element={<FormDataFormik/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;