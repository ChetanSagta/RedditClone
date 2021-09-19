import { BsImageFill } from "react-icons/bs";
import { Avatar } from "../ui/Avatar";
import { Card } from "../ui/Card";
import { TextBox } from "../ui/TextBox";
import {FiLink} from "react-icons/fi";
import  AvatarImage  from '../../images/avatar.png';
import { Link } from "react-router-dom";

export const CreatePostCard = () => {
  return (
    <Card>
      <div className="flex">
        <Avatar src={AvatarImage} />
        <Link to="/submit">
          <TextBox type="text" placeholder="Create a New Post"/>
        </Link>
        <Link to="/submit">
        <BsImageFill className="h-10 w-10 m-1"/>
        </Link>
        <Link to="/submit">
        <FiLink className="h-8 w-8 m-1"/>
        </Link>
      </div>
    </Card>
  );
};
