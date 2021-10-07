import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import {GifGridItem }from "./GifGridItem";

export const GifGrid = ({category})=>{
    const{data, loading} = useFetchGifs(category);
   
    return (
        < div className='content-grid'>
         <h3 className='animate__fadeInUp'>{category}</h3>
        <div className='card-grid'>
        {loading && <p>Cargando...</p>}

           {
           data.map( img =>(
           <GifGridItem 
           key ={img.id}
           {...img} />
         ))
           }
        </div>
        </div>
    )
}


export default GifGrid;