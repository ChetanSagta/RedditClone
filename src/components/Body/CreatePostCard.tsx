import { BsImageFill } from "react-icons/bs";
import { Avatar } from "../ui/Avatar";
import { Card } from "../ui/Card";
import { TextBox } from "../ui/TextBox";
import { FiLink } from "react-icons/fi";
import AvatarImage from "../../images/avatar.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './CreatePostCard.css';

export const CreatePostCard = () => {
  const [reDirectionPath, setRedirectionPath] = useState("/submit");

  useEffect(() => {
    if (localStorage.getItem("Jwt Token") == null) {
      setRedirectionPath("/login");
    }
  }, []);

  return (
    <Card className="searchCard">
        <Avatar src={AvatarImage} />
        <Link to={reDirectionPath}>
          <TextBox id="searchBox" type="text" placeholder="Create a New Post" />
        </Link>
        <Link to={reDirectionPath}>
          <BsImageFill className="bsImageFill"/>
        </Link>
        <Link to={reDirectionPath}>
          <FiLink className="fiLink" />
        </Link>
    </Card>
  );
};
