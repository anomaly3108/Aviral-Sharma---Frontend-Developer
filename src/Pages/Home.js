import { Link } from "react-router-dom";

import Icons from "../Components/icons";

function Home() {
  const css={
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh"
  }

  return (
    <div className="main-container" style={css}>
        <div className="main-menu"><Link to='rockets'><Icons val={'Rocket'}/></Link></div>
        <div className="main-menu"><Link to='Capsules'><Icons val={'Capsules'}/></Link></div>
    </div>
  );
}

export default Home;
