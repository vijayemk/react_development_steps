import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  //   const handleClick = () => {
  //     navigate("/count");
  //   };

  return (
    <div>
      Home
      <div>
        {/* Navigate using navigate pakage */}
        <button onClick={() => navigate("/count")}>get count</button>
        {/* Navigate using link pakage */}
        <Link to="/count">get countsss</Link>
      </div>
    </div>
  );
}

export default Home;
