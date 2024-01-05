import { useState, useEffect } from 'react';

import './modal.css'

function Pop({popupdata}){
    const [slideCount, setSlide] = useState(0)

    // useEffect(()=>{
    //     let len = popupdata.flickr_images.length
    //     console.log(slideCount, len)
    //     const timer = setInterval(() => {
    //         if(slideCount==len-1) setSlide(0)
    //         else setSlide(slideCount+1)
    //     }, 3000);
    //     return()=>clearInterval(timer)
    // },[slideCount])

    function Modal(){
        return(
            <>
                <div className='imagecontainer'>
                    <img src={popupdata.flickr_images[slideCount]} className='modalimage'></img>
                </div>
                <div className="data">
                    <span className="title">NAME:</span><span className="value"> {popupdata.rocket_name}</span><br/>
                    <span className="title">COUNTRY:</span><span className="value">{popupdata.country}</span><br/>
                    <span className="title">Read more<a href={popupdata.wikipedia} target="blank">here</a></span><br/>
                </div>
            </>
        )
    }   


    return(
        <div className="modalBack">
            <div className="pop">
                <Modal/>
            </div>
        </div>
        
    )
}

export default Pop;