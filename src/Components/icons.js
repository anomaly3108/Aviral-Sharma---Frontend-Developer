import './icons.css'
import RocketLogo from'../Assets/rocket.svg'
import capsuleLogo from '../Assets/capsule.svg'

function Icons({val}){

    const Rocket = (
        <div className='borderbox rocketCss' style={{backgroundColor: "#055288"}}>
            <div className='logocontainer'>
            <img src={RocketLogo} className='logo rocket'/>
            </div>
            <div>{val}</div>
        </div>
    )

    const Capsule = (
        <div className='borderbox rocketCss' style={{backgroundColor: "#179401"}}>
            <div className='logocontainer'>
            <img src={capsuleLogo} className='logo'/>
            </div>
            <div>{val}</div>
        </div>
    )
    
    if(val=='Rocket'){
        return Rocket
    }
    else{
        return Capsule
    }
}

export default Icons