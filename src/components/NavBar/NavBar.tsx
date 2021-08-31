import { Login } from "./Login";
import { RedditLogo } from "./RedditLogo";
import { SearchBar } from "./SearchBar";

interface NavBarProp{
  className: string
}

export const NavBar = (props:NavBarProp) => {
  return(
    <div className={props.className}>
      <RedditLogo/>
      <SearchBar/>
      <Login/>
    </div>
  );
}