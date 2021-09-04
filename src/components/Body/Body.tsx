import { PostCard } from "../Post/PostCard";
import { AboutCard } from "./AboutCard";
import { CreatePostCard } from "./CreatePostCard";
import { FilterCard } from "./FilterCard";
import image from "../../images/redditicon.png";

interface Props {
  className: string;
}

export const Body = (props: Props) => {
  return (
    <div className={props.className}>
      <div id="left Side" className="p-2 flex-grow mr-4 flex-col">
        <CreatePostCard/>
        <FilterCard />
        <PostCard text="This is a dummy Tag" header="Dummy Header"/>
        <PostCard src={image} header="Dummy Image"/>
      </div>
      <div id="right Side" className="max-w-sm">
        <AboutCard />
      </div>
    </div>
  );
};
