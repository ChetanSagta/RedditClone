import { Login } from "./Login";
import { RedditLogo } from "./RedditLogo";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import React from "react";

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

  const logOut = () => {
    localStorage.clear();
    window.location.reload()
  }

  return (
    <div className={props.className}>
      <Link to="/">
        <RedditLogo />
      </Link>
      <SearchBar />
      {!isLoggedIn && <Login />}
      {isLoggedIn && (
        <React.Fragment>
          <Button type="button">{localStorage.getItem("User")}</Button>
          <Button type="button" onClick={logOut}>Logout</Button>
        </React.Fragment>
      )}
    </div>
  );
};
