import { useState, useEffect } from "react";

import Item from "../Components/item";
import '../Components/item.css'
import Search from "../Components/search";
import { useSelector, useDispatch } from "react-redux"
import { addRocket } from "../utils/RocketSlice"

function Rockets(){
    const [rocketsData, setRocketsData] = useState([])
    const dispatch = useDispatch();
    const rocketItem  = useSelector(store => store.rockets.items)
    useEffect(()=>{
        if(rocketItem.length<1){
            fetch("https://api.spacexdata.com/v3/rockets", {method:'GET'})
            .then(response => response.json())
            .then(result => {
                dispatch(addRocket(result));
                setRocketsData(result)
            })
            .catch(error => console.log('error', error));
        }
    },[])
    function showall(){
        dispatch(addRocket(rocketsData));
        console.log(rocketsData)
    }

    return(
        <>
        <Search/>
        <div style={{display:"flex"}}>
            <h1>Rockets</h1> 
            {rocketItem.length<rocketsData.length?<span className="link filter" onClick={showall}>X clear Search</span>:<></>}
        </div>
        <div className="main-container">
            {rocketItem.length<1?<span>Search for Rockets</span>:rocketItem.map((i)=>(<Item data={i} key={i.id}/>))}
        </div>
        </>
    )
}

export default Rockets;