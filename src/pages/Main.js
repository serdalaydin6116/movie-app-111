import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
// import { AuthContext } from "../context/AuthContext";
// import { toastWarnNotify } from "../helpers/ToastNotify";




const API_KEY =  "44ca0b8068c6b9281d54cd70542fd5b6"
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;



const Main = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);
  
  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };



  return (
    <>
      <div className="d-flex justify-content-center flex-wrap">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  )
  
};

export default Main