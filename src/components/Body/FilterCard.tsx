import { Card } from "../ui/Card";
import { AiTwotoneFire, AiOutlineStar } from "react-icons/ai";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";

export const FilterCard = () => {

  const postFilter = (text : string) => {
    console.log("Post Filter Triggered");
    console.log("CLick : " + text);
  }

  return (
    <Card>
      <div className="border-blue-400 rounded-xl flex">
        <button type="button" className="font-bold m-auto flex" onClick={() => postFilter("HOT")}>
          <AiTwotoneFire className="rounded-full h-auto mx-2" /> HOT
        </button>
        <button type="button" className="font-bold m-auto flex" onClick={() => postFilter("NEW")}>
          <AiOutlineStar className="rounded-full h-auto mx-2" /> NEW
        </button>
        <button type="button" className="font-bold m-auto flex" onClick={() => postFilter("TOP")}>
          <HiOutlineArrowNarrowUp className="rounded-full h-auto mx-2" /> TOP
        </button>
      </div>
    </Card>
  );
};
