import React from "react";
import {BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"; 
import Createuser from "./Createuser";
import Updateuser from "./Updateuser";
import User from "./User";

function App() {
  return (
    <>
    <Router> 
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/create" element={<Createuser />} />
          <Route path="/update/:id" element={<Updateuser />} /> 
        </Routes>  
    </Router>
       
    </>
  );
}


export default App;