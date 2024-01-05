import { useState, useEffect } from "react";

import Cap from "../Components/capsules";
import '../Components/item.css'

function Capsules() {
    const [Capsules, setCapsules] = useState([])
    const [offset, setOffset] = useState(0)

    function offsetchange(nav){
        setOffset(offset+10)
        if(nav==1)
            setOffset(offset+10)
        else
            setOffset(offset-10)
    }

    useEffect(()=>{
        fetch("https://api.spacexdata.com/v3/capsules?limit=10&offset="+offset, {method:'GET'})
        .then(response => response.json())
        .then(result => setCapsules(result))
        .catch(error => console.log('error', error));
    },[offset])

    return(
    <>
    <div className="main-container">
        {Capsules.length<1?<span>Loading Data...</span>:Capsules.map((i)=>(<Cap data={i} key={i?.capsule_serial}/>))}
    </div>
    <div className="pagination">
            {offset<10?<span style={{color:"grey"}} className="link">prev</span>:<div onClick={()=>offsetchange(0)} className="link button">prev</div>}
            <div className="link button">{(offset/10)+1}</div>
            {Capsules.length<10?<span style={{color:"grey"}} className="link">Next</span>:<div onClick={()=>offsetchange(1)} className="link button">Next</div>}
    </div>
    </>
    
    )
}
  
  export default Capsules;
  