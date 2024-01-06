import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Icons from "../Components/icons";

function Home() {
  
  const [motion, setCss] = useState({opacity:"0", translate:"-20px"})
  useEffect(()=>{
    setCss({opacity:"1", translate:"0px"})
  },[])

  const css={
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh"
  }

  return (
    <div className="motion" style={motion}>
      <div className="main-container" style={css}>
          <div className="main-menu"><Link to='rockets'><Icons val={'Rocket'}/></Link></div>
          <div className="main-menu"><Link to='Capsules'><Icons val={'Capsules'}/></Link></div>
      </div>
    </div>
  );
}

export default Home;
