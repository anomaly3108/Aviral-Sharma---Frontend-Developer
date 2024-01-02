import { Link } from "react-router-dom";

import Icons from "../Components/icons";

function Home() {

  return (
    <div className="main-container">
            <div className="main-menu"><Link to='rockets'><Icons val={'Rocket'}/></Link></div>
            <div className="main-menu"><Link to='Capsules'><Icons val={'Capsules'}/></Link></div>
    </div>
  );
}

export default Home;
