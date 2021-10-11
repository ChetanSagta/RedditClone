import { BsSearch } from "react-icons/bs";
import { TextBox } from "../ui/TextBox";
import './SearchBar.css';

export const SearchBar = () => {
  return (
    <span className="outer">
      <form className="inner">
        <BsSearch size="30" className="searchIcon" />
        <TextBox placeholder="Search Reddit Clone" type="search"/>
      </form>
    </span>
  );
};
