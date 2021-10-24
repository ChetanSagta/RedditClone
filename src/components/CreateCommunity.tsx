import { useState, ChangeEvent, useEffect,FormEvent } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
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
  if (hidden) return <div />;

  const createCommuity = (event: FormEvent) =>{
    event.preventDefault();
      axios.post("/v1/createCommunity",{communityName: subRedditName, communityType: subRedditType})
        .then(function (response: AxiosResponse) {
          alert(response);
        })
        .catch(function (error: AxiosError) {
          console.error(error.response?.data);
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
          axios.post("/v1/uniqueCommunity",event.target.value)
          .then(function(response: AxiosResponse<boolean>){
            console.log(response)
            if(response) setSubRedditName(event.target.value);
            else alert("Name should be unique");
          }
          ).catch((error: AxiosError)=>{
            alert(error);
          })          
        }}
      />
      {maxLength - subRedditName.length+" "} Characters Remaining
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
          <Button type="button" onClick={() => {setHidden(true);}}>Cancel</Button>
          <Button type="submit">Create Community</Button>
        </div>
      </form>
    </Modal>
  );
};
