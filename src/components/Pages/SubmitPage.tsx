import { ChangeEvent, MouseEvent, useState } from "react";
import {
  BsFilePost,
  BsCardImage,
  BsLink45Deg,
  BsArrowDownShort,
} from "react-icons/bs";
import { RuleCard } from "../Body/RuleCard";
import { SubmitBody } from "../Body/SubmitBody";
import { NavBar } from "../NavBar/NavBar";
import { Avatar } from "../ui/Avatar";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { TextArea } from "../ui/TextArea";

export const SubmitPage = () => {
  const [wordCount, setWordCount] = useState(0);
  const [postType , setPostType] = useState("Post");

  const updateWorldCount = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setWordCount(event.target.textLength);
  };

  const updatePostType = (event: MouseEvent) => {
    const textContent = event.currentTarget.textContent;
    if(textContent)
      setPostType(textContent);
  }

  const submitPost = () => {
    
  } 

  return (
    <div>
      <NavBar className="flex bg-white border-b-2" />
      <div className="pl-64 flex mt-10">
        <div id="left Side" className="max-w-3xl mr-2 flex-grow">
          <div className="font-bold border-t-2 border-solid border-black">
            <span className="float-left">Create a Post</span>
            <span className="float-right">Draft 0</span>
          </div>
          <br />
          <Card className="inline-block">
            <div className="flex">
              <Avatar src="" />
              <div className="flex-wrap">Choose a community</div>
              <BsArrowDownShort size={30} />
            </div>
          </Card>
          <Card className="border-b-2 flex-col">
            <div className="flex border-2 pb-2">
              <button className="w-full flex justify-center border-r-2 focus:text-blue-600" onClick={updatePostType}>
                <BsFilePost className="mt-2 mr-2" /> 
                <div>Post</div>
              </button>
              <button className="w-full flex justify-center focus:text-blue-600" onClick={updatePostType}>
                <BsCardImage className="mt-2 mr-2" /> Images & Videos
              </button>
              <button className="w-full flex justify-center border-l-2 focus:text-blue-600" onClick={updatePostType}>
                <BsLink45Deg className="mt-2 mr-2" /> Link
              </button>
            </div>
            <div className="flex m-2 border-2 rounded-md pt-2 pl-2 pr-2 pb-0 mt-2 ">
              <TextArea
                placeholder="Title"
                rows={1}
                className="resize-none w-full overflow-auto outline-none"
                maxLength={300}
                onChange={updateWorldCount}
              />
              <div>{wordCount}/300</div>
            </div>
            <SubmitBody bodyType={postType}/>
            <div>
              <Button type="submit" className="self-end" onClick={submitPost}>
                Post
              </Button>
            </div>
          </Card>
        </div>
        <div id="right Side" className="max-w-xs ">
          <RuleCard />
        </div>
      </div>
    </div>
  );
};
