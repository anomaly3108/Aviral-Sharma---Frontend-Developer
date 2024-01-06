import { useState, useEffect } from 'react';

import './modal.css'

function Pop({popupdata,modalType}){
    const [slideCount, setSlide] = useState(0)
    console.log(popupdata)

    function dateFormat(date){
        let dt = date.split("-")
        return dt[2]+"/"+dt[1]+"/"+dt[0]
    }


    // useEffect(()=>{
    //     if(modalType=="1"){
    //         let len = popupdata?.flickr_images.length
    //         console.log(slideCount, len)
    //         const timer = setInterval(() => {
    //             if(slideCount==len-1) setSlide(0)
    //             else setSlide(slideCount+1)
    //         }, 3000);
    //         return()=>clearInterval(timer)
    //     }
    // },[slideCount])

    function Modal(){
        if(modalType=="1"){
            return(
                <div className='modal_data'>
                    <div className='imagecontainer'>
                        <img src={popupdata.flickr_images[slideCount]} className='modalimage'></img>
                    </div>
                    <div style={{display:'flex',alignItems: 'baseline'}}>
                    <h1>{popupdata.rocket_name}</h1>,<h2 className="value">{popupdata.country}</h2><span>{dateFormat(popupdata?.first_flight)}</span>
                    </div>
                    <div style={{width:"30rem"}}>{popupdata.description}</div>
                    <div className="data">
                        <br/>
                        <span className="title">Read more<a href={popupdata.wikipedia} target="blank">here</a></span><br/>
                    <span className='title'>Status: </span>{popupdata.active?<span className='title' style={{color:"green"}}>Active</span>:<span className='title' style={{color:"red"}}>Not Active</span>}

                    </div>
                </div>
            )
        }
        else{
            return(
                <div>
                    <div style={{display:'flex',alignItems: 'baseline'}}>
                        <h1>{popupdata.capsule_id}</h1> <h2>{popupdata.capsule_serial}</h2><span>{dateFormat(popupdata?.original_launch.slice(0,10))}</span>
                    </div>
                    <hr className='hr'/>
                    <span className="title">Type:</span><span className="value">{popupdata.type}</span><br/>
                    <span className='title'>Details: </span><span className="value">{popupdata.details}</span><br/>
                    <span className='title'>Landings: </span><span className='value'>{popupdata.landings}</span><br/>
                    <span className='title'>{popupdata.missions.length} Missions: </span><br/>
                    <ol>
                        {popupdata.missions.map((i)=>{
                            return(
                                <li>
                                    <span className='title'>Missions Name: </span><span className='value'>{i.name}</span><br/>
                                    <span className='title'>Flight: </span><span className='value'>{i.flight}</span>
                                </li>
                            )
                            
                        })}
                    </ol>
                    <span className='title'>Status: </span><span className='title' style={popupdata?.status=="active"?{color:"green"}:{color:"red"}}>{popupdata.status}</span>
                </div>
            )
        }
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