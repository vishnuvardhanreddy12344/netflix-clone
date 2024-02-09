import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios";

export default function Hero() {

  const [movie,setmovie]=useState({})

  useEffect(()=>{
    axios.get(requests.favouritemovies).then((response)=>{
      const movies=response.data.results;
      const randommovies=movies[Math.floor(Math.random() * movies.length)];
      setmovie(randommovies);
    });

  },[]);
  const {title,backdrop_path,release_date,overview}=movie;

  return (
    <div className='w-full h=[550px] text-white'>
      <div className='w-full h-full'>
        <img src={'https://image.tmdb.org/t/p/original/${backdrop_path}'} alt={title} />

      </div>
      
    </div>
  )
}
