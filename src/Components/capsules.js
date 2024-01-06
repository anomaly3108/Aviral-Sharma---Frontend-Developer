import { useState } from "react";
import Pop from "./Modal";

function Cap({data}){
    const [popup, setPopup] = useState(false)

    return(
        <div className="item" onClick={()=>(setPopup(!popup))}>
            <div className="data">
                <span className="title">SERIAL:</span><span className="value"> {data?.capsule_serial}</span><br/>
                {/* <span className="title">MISSIONS:</span><span className="value">{data.missions[0].name}</span><br/> */}
                <span className="title">TYPE:</span><span className="value">{data?.type}</span><br/>
            </div>
            {popup && <Pop popupdata={data} modalType="0"/>}
        </div>
    )
}

export default Cap;