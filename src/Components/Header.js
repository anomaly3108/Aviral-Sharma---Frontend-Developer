import { Link } from "react-router-dom";

function Header() {
    return (
      <nav className="header">
        <div className="home"><Link to=''>SpaceX</Link></div>
        <button className="btn">Search</button>
          <ul className="menu">
            <li><Link to='rockets'>Rockets</Link></li>
            <li><Link to='Capsules'>Capsules</Link></li>
          </ul>
      </nav>
    );
  }
  
  export default Header;
  