import { useState, ChangeEvent, useEffect,FormEvent } from "react";
import { BASE_URL} from "../CONSTANTS";
import axios from "axios";
import { Modal } from "./ui/Modal";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Button } from "./ui/Button";
import "./CreateCommunity.css";

export const CreateCommunity = (props: { value: boolean }) => {
  const [hidden, setHidden] = useState(false);
  const [subRedditName, setSubRedditName] = useState("");
  const [subRedditType, setSubRedditType] = useState("");

  useEffect(() => setHidden(props.value), [props]);

  const maxLength = 21;
  console.log(hidden);
  if (hidden) return <div />;

  const createCommuity = (event: FormEvent) =>{
    event.preventDefault();
      axios({
        baseURL: BASE_URL + "/v1/createCommunity",
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/text",
        },
        data:{name: subRedditName, type: subRedditType}
      })
        .then(function (response) {
          alert(response);
        })
        .catch(function (error) {
          console.error(error);
        });
      };
  return (
    <Modal>
      <div className="header">
        <h3>Create a Community</h3>
        <span
          onClick={() => {
            setHidden(true);
          }}
        >
          X
        </span>
      </div>
      <hr />
      <h3>Name:</h3>
      <p>
        Community Names including Capatalizations cannot be changed
        <AiOutlineInfoCircle />
      </p>
      <input
        type="text"
        placeholder="r/"
        maxLength={maxLength}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setSubRedditName(event.target.value);
        }}
      />
      {maxLength - subRedditName.length} Characters Remaining
      <br />
      <br />
      <form onSubmit={createCommuity}>
        <h3>Community Type</h3>
        <div>
          <input type="radio" name="ctype" onClick={()=> {setSubRedditType("Public")}}/>
          <h3>Public</h3> <p> Anyone can post and comment to this community</p>
        </div>
        <div>
          <input type="radio" name="ctype" onClick={()=> {setSubRedditType("Restricted")}}/>
          <h3>Restricted</h3>
          <p>
            Anyone can view this community, but only approved users can post
          </p>
        </div>
        <div>
          <input type="radio" name="ctype" onClick={()=> {setSubRedditType("Private")}}/>
          <h3>Private</h3>
          <p> Only approved users can post and submit to this community</p>
        </div>
        <div className="btnDiv">
          <Button type="button">Cancel</Button>
          <Button type="submit">Create Community</Button>
        </div>
      </form>
    </Modal>
  );
};
