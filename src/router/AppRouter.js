import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation} from "react-router-dom";

import Main from "../pages/Main";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MovieDetail from "../pages/MovieDetail";
import React from 'react'
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";




const AppRouter = () => {
  const { currentUser } = useContext(AuthContext);
  function PrivateRouter() {
    let location = useLocation();
    if (!currentUser) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Outlet />;
  }

  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path ="/" element = {<Main />}/>
            <Route path ="/register" element = {<Register />}/>
            <Route path ="/login" element = {<Login/>}/>
            <Route path ="*" element = {<NotFound />}/>
            <Route path ="/details/:id" element = {<MovieDetail />}/>

        </Routes>
    </Router>
    
  );
};

export default AppRouter