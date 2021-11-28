import { Login } from "./Login";
import { RedditLogo } from "./RedditLogo";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";
import React,{ useEffect, useState } from "react";
import { UserButton } from "./UserButton";
import { SubscribedCommunities } from "./SubscribedCommunities";

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
      <SubscribedCommunities/>
      <SearchBar />
      {!isLoggedIn && (
        <React.Fragment>
          <Login />
        </React.Fragment>
      )} 
      {
        isLoggedIn && (
          <UserButton />
        )
      }      
    </div>
  );
};
