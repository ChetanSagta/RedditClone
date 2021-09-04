import { BsSearch } from "react-icons/bs";
import { TextBox } from "../ui/TextBox";

export const SearchBar = () => {
  return (
    <span className="flex-grow">
      <form className="flex ml-10 border-2 m-1 mt-0">
        <BsSearch size="30" className="flex h-6 mt-2 pl-2" />
        <TextBox placeholder="Search Reddit Clone" type="search"/>
      </form>
    </span>
  );
};
