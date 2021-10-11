import { Body } from "../Body/Body";
import { NavBar } from "../NavBar/NavBar";
import './HomePage.css';

export const HomePage = () => {
  return(
    <div>
      <NavBar className="navbar"/>
      <Body className="body"/>
    </div>
  );
}