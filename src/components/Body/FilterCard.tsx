import { Card } from "../ui/Card";
import { AiTwotoneFire, AiOutlineStar } from "react-icons/ai";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import './FilterCard.css';

export const FilterCard = () => {

  const postFilter = (text : string) => {
    console.log("Post Filter Triggered");
    console.log("CLick : " + text);
  }

  return (
    <Card>
      <div className="container">
        <button type="button" className="filterBtn" onClick={() => postFilter("HOT")}>
          <AiTwotoneFire className="filterIcon" /> HOT
        </button>
        <button type="button" className="filterBtn" onClick={() => postFilter("NEW")}>
          <AiOutlineStar className="filterIcon" /> NEW
        </button>
        <button type="button" className="filterBtn" onClick={() => postFilter("TOP")}>
          <HiOutlineArrowNarrowUp className="filterIcon" /> TOP
        </button>
      </div>
    </Card>
  );
};
