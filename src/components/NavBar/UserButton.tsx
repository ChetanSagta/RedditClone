import React from "react";
import { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CreateCommunity } from "../CreateCommunity";
import "./UserButton.css";

export const UserButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [ccHidden, setccHidden] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("Jwt Token") === null) {
      setIsLoggedIn(false);
    }
  }, []);

  const logOut = () => {
    console.log("In Logout");
    localStorage.removeItem("JwtToken");
    window.location.reload();
  };

  if (!isLoggedIn)
    return (
      <div className="container">
        <BiUser />
      </div>
    );

  return (
    <React.Fragment>
      <div
        className={`container ${clicked === true ? "show" : ""}`}
        onClick={() => setClicked((flag) => !flag)}
      >
        <span>Chetan</span>
        <div>
          <Link to="/profile">
            <div>Profile</div>
          </Link>
          <div onClick={() => {setccHidden(false);}}>
            Create Community
          </div>
          <div onClick={logOut}>Logout</div>
        </div>
      </div>
      <CreateCommunity value={ccHidden} />
    </React.Fragment>
  );
};
