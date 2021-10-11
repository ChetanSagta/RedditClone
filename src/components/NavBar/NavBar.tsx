import { Login } from "./Login";
import { RedditLogo } from "./RedditLogo";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import { UserButton } from "./UserButton";

interface NavBarProp {
  className: string;
}

export const NavBar = (props: NavBarProp) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("Jwt Token")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className={props.className}>
      <Link to="/">
        <RedditLogo />
      </Link>
      <SearchBar />
      {!isLoggedIn && (
        <React.Fragment>
          <Login />
        </React.Fragment>
      )} 
      <UserButton />
    </div>
  );
};
