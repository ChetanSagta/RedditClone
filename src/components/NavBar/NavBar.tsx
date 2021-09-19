import { Login } from "./Login";
import { RedditLogo } from "./RedditLogo";
import { SearchBar } from "./SearchBar";
import {Link} from "react-router-dom";

interface NavBarProp{
  className: string
}

export const NavBar = (props:NavBarProp) => {
  return(
    <div className={props.className}>
      <Link to="/">
      <RedditLogo/>
      </Link>
      <SearchBar/>
      <Login/>
    </div>
  );
}