function Cap({data}){
    console.log(data);
    return(
        <div className="item">
            <div className="data">
                <span className="title">SERIAL:</span><span className="value"> {data?.capsule_serial}</span><br/>
                {/* <span className="title">MISSIONS:</span><span className="value">{data.missions[0].name}</span><br/> */}
                <span className="title">TYPE:</span><span className="value">{data?.type}</span><br/>
            </div>
        </div>
    )
}

export default Cap;