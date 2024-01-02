import './icons.css'

function Icons({val}){
    let color = "#2aa6ff"
    if(val!='Rocket') color= "#ffee2a"
    const css={background: "linear-gradient(black, "+color+", black)"}
    return(
        <div className="loader">
            <div className='icon'>{val}</div>
            <span> 
                <i style={css}>
                </i>
            </span>
        </div>
    )
}

export default Icons