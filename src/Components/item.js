import { useState } from "react";
import Pop from "./Modal";

function Item({data}){
    const [popup, setPopup] = useState(false)

    return(
        <div className="item" onClick={()=>(setPopup(!popup))}>
            <div style={{overflow: "hidden",width: "20rem",height: "13rem"}}><img src={data.flickr_images[0]} className="image"/></div>
            {console.log(data)}
            <div className="data">
                <span className="title">NAME:</span><span className="value"> {data.rocket_name}</span><br/>
                <span className="title">COUNTRY:</span><span className="value">{data.country}</span><br/>
                <span className="title">Read more<a href={data.wikipedia} target="blank">here</a></span><br/>
            </div>
            {popup && <Pop popupdata={data}/>}
        </div>
    )
}

export default Item;