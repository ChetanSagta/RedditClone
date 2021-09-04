import { Card } from "../ui/Card";
import { BiUpvote, BiDownvote, BiComment, BiShareAlt } from "react-icons/bi";
import { GoReport } from "react-icons/go";
import { ReactNode } from "react";

interface ContentProps {
  header: string;
  src?: string;
  text?: string;
  className?: string;
}

export const PostCard = (props: ContentProps) => {
  let contentTag: ReactNode;

  if (props.src) {
    contentTag = <img src={props.src} alt="Todo_Maintain_Image_Size" />;
  } else if (props.text) {
    contentTag = <p>{props.text}</p>;
  }

  const shareEventHandler = () => {
    console.log("Share Event Handled");
  };

  const reportEventHandler = () => {
    console.log("Report Event Handler");
  };

  const addCommentHandler = () => {
    console.log("Adding Comment ");
  };

  const votingHandler = (value: boolean) => {
    console.log("Voted : " + value);
  };

  return (
    <Card className={props.className}>
      <div className="p-2">
        <h1 className="font-bold text-xl">{props.header}</h1>
        {contentTag}
        <div className="flex pt-5">
          <button type="button" onClick={() => votingHandler(true)}>
            <BiUpvote className="w-10 text-xl inline-block" />
          </button>
          <span>Vote</span>
          
          <button type="button" onClick={() => votingHandler(false)}>
            <BiDownvote className="w-10 text-xl inline-block" />
          </button>

          <button type="button" onClick={addCommentHandler}>
            <BiComment className="w-10 text-xl align-middle inline-block" />
          </button>
          <span>x Comments</span>

          <button type="button" onClick={shareEventHandler}>
            <BiShareAlt className="w-10 text-xl inline-block" />
          </button>
          <span>Share</span>

          <button type="button" onClick={reportEventHandler}>
            <GoReport className="w-10 text-xl inline-block" />
          </button>
          <span>Report</span>
        </div>
      </div>
    </Card>
  );
};
