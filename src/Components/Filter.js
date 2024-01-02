import { Link } from "react-router-dom"

import Pop from "./Modal"
function SideBar(){
    return(
        <div className="sidebar">
            <ul className="menu">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='Search'>Search</Link></li>
                <li><Link to='rockets'>Rockets</Link></li>
                <li><Link to='Capsules'>Capsules</Link></li>
            </ul>
        </div>  
    )
}
export default SideBar