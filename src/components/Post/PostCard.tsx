import { Card } from "../ui/Card";
import { BiComment, BiShareAlt } from "react-icons/bi";
import { GoReport } from "react-icons/go";
import { ImArrowDown, ImArrowUp } from "react-icons/im";
import { ReactNode, useState } from "react";

interface ContentProps {
  header: string;
  src?: string;
  text?: string;
  className?: string;
}

export const PostCard = (props: ContentProps) => {
  let contentTag: ReactNode;

  const [upArrowColor,setUpArrowColor] = useState('gray');
  const [downArrowColor,setDownArrowColor] = useState('gray');

  if (props.src) {
    contentTag = (
      <img
        src={props.src}
        alt="Todo_Maintain_Image_Size"
        className="max-w-lg"
      />
    );
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
    console.log("Open Full Post");
  };

  const votingHandler = (value: boolean) => {
    console.log("Voted : " + value);
    if(value){
      if(upArrowColor === 'gray')
        setUpArrowColor('red');
      else 
        setUpArrowColor('gray')
      setDownArrowColor('gray')
    } 
    else{
      if(downArrowColor === 'gray')
        setDownArrowColor('red');
      else 
        setDownArrowColor('gray');
      setUpArrowColor('gray');
    } 
    console.log("Call to update Like Value for this post");
  };

  const openFullPostHandler = () => {
    console.log("Opening Full Points with Comments");
  }

  return (
    <Card className={props.className}>
      <div className="p-2">
        <h1 className="font-bold text-xl " >{props.header}</h1>
        <span className ="cursor-pointer" onClick={openFullPostHandler}> {contentTag} </span>
        <div className="flex pt-5 items-center">
          <ImArrowUp
            className="w-10 text-xl inline-block cursor-pointer" color={upArrowColor}
            onClick={() => votingHandler(true)}
          />
          <span>Vote</span>
          <ImArrowDown
            className="w-10 text-xl inline-block cursor-pointer" color={downArrowColor}
            onClick={() => votingHandler(false)}
          />
          <BiComment
            className="w-10 text-xl align-middle inline-block cursor-pointer"
            onClick={addCommentHandler}
          />
          <span>x Comments</span>
          <BiShareAlt
            className="w-10 text-xl inline-block cursor-pointer"
            onClick={shareEventHandler}
          />
          <span>Share</span>
          <GoReport
            className="w-10 text-xl inline-block cursor-pointer"
            onClick={reportEventHandler}
          />
          <span>Report</span>
        </div>
      </div>
    </Card>
  );
};
