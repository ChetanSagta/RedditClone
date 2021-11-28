import axios from "axios";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
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
import { BASE_URL } from "../../CONSTANTS";
import './SubmitPage.css';

export const SubmitPage = () => {
  const [wordCount, setWordCount] = useState(0);
  const [postType, setPostType] = useState("Post");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState<string | File>();

  const updateWorldCount = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value);
    setWordCount(event.target.textLength);
  };

  const updatePostType = (event: MouseEvent) => {
    setTitle(""); setBody("");
    const textContent = event.currentTarget.textContent;
    if (textContent) setPostType(textContent);
  };

  const submitPost = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios({
      baseURL: BASE_URL + "/post/add",
      method: "post",
      data: {
        title: title,
        body: body,
      },
    })
      .then(function (response) {
        alert(response);
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  const saveDraft = () => {
    console.info("Save Draft")
  }

  return (
    <div>
      <NavBar className="navbar" />
      <div id="body">
        <div id="leftSide">
          <div className="postTitle">
            <span>Create a Post</span>
            <span className="float-right">Draft 0</span>
          </div>
          <br />
          <Card id="communityCard">
            <div id="communityContainer">
              <Avatar src="" />
              <div id="communityText">Choose a community</div>
              <BsArrowDownShort size={30} />
            </div>
          </Card>
          <Card id="postCard">
            <div className="post-selector">
              <button
                className="btn"
                onClick={updatePostType}
              >
                <BsFilePost className="icon" />
                <div>Post</div>
              </button>
              <button
                className="btn"
                onClick={updatePostType}
              >
                <BsCardImage className="icon"/> Images & Videos
              </button>
              <button
                className="btn"
                onClick={updatePostType}
              >
                <BsLink45Deg className="icon" /> Link
              </button>
            </div>
            <form onSubmit={submitPost}>
              <div id="title">
                <TextArea
                  placeholder="Title"
                  rows={1}
                  className="title"
                  maxLength={300}
                  onChange={updateWorldCount}
                />
                <div>{wordCount}/300</div>
              </div>
              <SubmitBody
                bodyType={postType}
                setBody={(content: string | File) => setBody(content)}
              />
              <div>
                <Button type="submit">
                  Post
                </Button>
                <Button type="button" onClick={saveDraft}>
                  Save Draft
                </Button>
              </div>
            </form>
          </Card>
        </div>
        <div id="rightSide">
          <RuleCard />
        </div>
      </div>
    </div>
  );
};
