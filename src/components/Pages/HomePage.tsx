import { Body } from "../Body/Body";
import { NavBar } from "../NavBar/NavBar";

export const HomePage = () => {
  return(
    <div>
      <NavBar className="flex bg-white border-b-2"/>
      <Body className="pl-64 pr-32 flex"/>
    </div>
  );
}