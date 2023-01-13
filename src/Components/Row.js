import React from 'react'
import { useState , useEffect } from 'react'
import instance from '../baseUrl'
import './Row.css'

function Row({title , fetchUrl,isLargeRow}) {
    const [movies,setMovies]=useState([])
   
   
    async function fetchData(){
       
        const result = await instance.get(fetchUrl)
        console.log(result.data.results);
        setMovies(result.data.results)
    }
    useEffect(()=>{
        fetchData()
    },[])
    const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='movies'>
            {
                movies.map(movie=>(
                    <img className={`movie ${isLargeRow && "largeMovie"}`}
                    src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} 
                    alt={movies.name}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Row