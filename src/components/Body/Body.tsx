import { PostCard } from "../Post/PostCard";
import { AboutCard } from "./AboutCard";
import { CreatePostCard } from "./CreatePostCard";
import { FilterCard } from "./FilterCard";
import image from "../../images/redditicon.png";
import { RuleCard } from "./RuleCard";
import './Body.css'

interface Props {
  className: string;
}

export const Body = (props: Props) => (
  <div className={props.className}>
    <div id="left Side" className="leftSide">
      <CreatePostCard />
      <FilterCard />
      <PostCard text="This is a dummy Tag" header="Dummy Header" />
      <PostCard src={image} header="Dummy Image" />
      The above image resolution needs to be set
    </div>
    <div id="right Side" className="rightSide">
      <AboutCard />
      <RuleCard />
    </div>
  </div>
);
