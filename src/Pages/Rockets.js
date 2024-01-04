import { useState, useEffect } from "react";

import Item from "../Components/item";
import '../Components/item.css'
import Search from "../Components/search";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { addRocket } from "../utils/RocketSlice"

function Rockets(){

    
    const rocketItem  = useSelector(store => store.rockets.items)
    const dispatch = useDispatch();
    useEffect(()=>{
        if(rocketItem.length<1){
            fetch("https://api.spacexdata.com/v3/rockets", {method:'GET'})
            .then(response => response.json())
            .then(result => {
                dispatch(addRocket(result));
            })
            .catch(error => console.log('error', error));
        }
    },[])

    

    return(
        <>
        <Search/>
        <h1>Rockets</h1>
        <div className="main-container">
            {rocketItem.length<1?<span>Search for Rockets</span>:rocketItem[0].map((i)=>(<Item data={i} key={i.id}/>))}
        </div>
        </>
    )
}

export default Rockets;