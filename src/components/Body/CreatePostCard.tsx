import { BsImageFill } from "react-icons/bs";
import { Avatar } from "../ui/Avatar";
import { Card } from "../ui/Card";
import { TextBox } from "../ui/TextBox";
import {FiLink} from "react-icons/fi";
import  AvatarImage  from '../../images/avatar.png';

export const CreatePostCard = () => {
  return (
    <Card>
      <div className="flex">
        <Avatar src={AvatarImage} alt="Avatar Image" />
        <TextBox type="text" placeholder="Create a New Post"/>
        <BsImageFill className="h-10 w-10 m-1"/>
        <FiLink className="h-8 w-8 m-1"/>
      </div>
    </Card>
  );
};
