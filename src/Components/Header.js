import { useState } from "react"
import { Link } from "react-router-dom";
import SideBar from './Filter';

function Header() {
  const [sidebar, setSidebar] = useState(true)
    return (
      <nav className="header">
        <div className="home"><span onClick={()=>setSidebar(!sidebar)}>+</span><Link to=''>SpaceX</Link></div>
          <ul className="menu">
            <li><Link to='rockets'>Rockets</Link></li>
            <li><Link to='Capsules'>Capsules</Link></li>
          </ul>
          {sidebar && <SideBar/>}
      </nav>
    );
  }
  
  export default Header;
  