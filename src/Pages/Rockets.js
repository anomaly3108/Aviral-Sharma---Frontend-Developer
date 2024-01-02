import { useState, useEffect } from "react";

import Item from "../Components/item";
import '../Components/item.css'
import Search from "../Components/search";

function Rockets(){
    const [rockets, setRockets] = useState([])

    useEffect(()=>{
        fetch("https://api.spacexdata.com/v3/rockets", {method:'GET'})
        .then(response => response.json())
        .then(result => setRockets(result))
        .catch(error => console.log('error', error));
    },[])

    return(
    <div className="main-container">
        <Search/>
        {rockets.length<1?<span>Loading Data...</span>:rockets.map((i)=>(<Item data={i} key={i.id}/>))}
    </div>
    )
}

export default Rockets;