import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import EditBooks from "./Pages/EditBooks";
import  CreateBooks  from "./Pages/CreateBooks";
import DeleteBooks from "./Pages/DeleteBooks";
import ShowBooks from "./Pages/ShowBooks";


const App = () =>{
  return(
    <Routes>
      <Route path='/'  element={<Home/>}   />
      <Route path='/books/create'  element={<CreateBooks/>}   />
      <Route path='/books/details/:id'  element={<ShowBooks/>}   />
      <Route path='/books/edit/:id'  element={<EditBooks/>}   />
      <Route path='/books/delete/:id'  element={<DeleteBooks/>}   />
    </Routes>
  )
}

export default App