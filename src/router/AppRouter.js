import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Main from "../pages/Main";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MovieDetail from "../pages/MovieDetail";
import React from 'react'
import NotFound from "../pages/NotFound";



const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path ="/" element = {<Main />}/>
            <Route path ="/register" element = {<Register />}/>
            <Route path ="/login" element = {<Login/>}/>
            <Route path ="*" element = {<NotFound />}/>

        </Routes>
    </Router>
    
  );
};

export default AppRouter