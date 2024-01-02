import './modal.css'
function Pop({popupdata}){

    return(
        <div className="modalBack">
            <div className="pop">
                <img src={popupdata.flickr_images[0]}></img>
                <div className="data">
                    <span className="title">NAME:</span><span className="value"> {popupdata.rocket_name}</span><br/>
                    <span className="title">COUNTRY:</span><span className="value">{popupdata.country}</span><br/>
                    <span className="title">Read more<a href={popupdata.wikipedia} target="blank">here</a></span><br/>
                </div>
            </div>
        </div>
        
    )
}

export default Pop;