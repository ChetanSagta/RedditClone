import { BsSearch } from "react-icons/bs";

export const SearchBar = () => {
  return (
    <span>
      <form className="flex ml-10 border-2 m-1 mt-0">
        <BsSearch size="30" className="flex-grow h-6 mt-2 pl-2" />
        <input
          className="p-1 border-black rounded m-2 flex-grow"
          type="search"
          placeholder="Search Reddit Clone"
        />
      </form>
    </span>
  );
};
