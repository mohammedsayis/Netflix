import React from 'react'
import { useState , useEffect } from 'react'
import instance from '../baseUrl'
import './Banar1.css'
 
function Banar1({fetchUrl}) {
    const [movie,setMovies]=useState([])
   
   
    async function fetchData(){
       
        const result = await instance.get(fetchUrl)
        console.log(result.data.results);
        
        setMovies(result.data.results[ 
          Math.floor(Math.random()*result.data.results.length-1)
        ])      
    }
    useEffect(()=>{
        fetchData()
    },[])
    console.log("sayis");
    console.log(movie); 
    console.log("sayis2");
    const base_url = "https://image.tmdb.org/t/p/original/";
    function truncate(str,n){     //text last three dot (...) in banner
      n=100;
      return str?.length>n ? str.substring(0,n-1)+". . . ":str
    }
  return (
    <div className='container'>
      <div className='banner'
     style={
      {
        backgroundImage:`url(${base_url}${movie.backdrop_path})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
      }
    }>
   <div className='banner_text'>
    <h1 className='banner_title'>
      {movie.name}
    </h1>
    <h4 className='banner_contant'>
      {truncate(movie.overview)}</h4>
   </div>
    </div>
    </div>
  )
}

export default Banar1   