import React , { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CreateCommunity } from "../CreateCommunity";
import "./UserButton.css";

export const UserButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [ccHidden, setccHidden] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("Jwt Token")) {
      setIsLoggedIn(false);
    }
  }, []);

  const logOut = () => {
    localStorage.clear();
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
        onClick={() => {
          setClicked((flag) => !flag);
          if(!ccHidden) setccHidden(true);
        }}
      >
        <span className="username">{localStorage.getItem("User")?.toUpperCase()}</span>
        <div className={`container ${clicked ? "show" : ""}`}>
          <Link to="/profile">
            <div>Profile</div>
          </Link>
          <div onClick={() => setccHidden(false)}>
            Create Community
          </div>
          <div onClick={logOut}>Logout</div>
        </div>
      </div>
      <CreateCommunity value={ccHidden} />
    </React.Fragment>
  );
};
