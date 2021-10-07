import React, { useState } from "react";
import {AddCategory} from './components/AddCategory'
import {GifGrid} from "./components/GifGrid";


export const GifExpertApp= ()=>{
   const [categories, setCategories]= useState(['']);
//    const handleAdd = ()=>{
//        setCategories();
//    }
   
   return (
        <div className='content'>
        <h1>GifExpertApp</h1>
        <AddCategory setCategories={setCategories}/>        
       
            {
                categories.map( category =>{
                    return <GifGrid
                    key={category}
                    category={category}/>
                })
            }
       </div>

    )
}
