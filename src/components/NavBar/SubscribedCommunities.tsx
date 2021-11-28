import { AiFillHome } from "react-icons/ai";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import React, { useState } from "react";
import "./SubscribedCommunities.css";
import axios, { AxiosError, AxiosResponse } from "axios";
import { BASE_URL } from "../../CONSTANTS";

export const SubscribedCommunities = () => {
  const [up, setUp] = useState(false);

  const path = BASE_URL + "/v1/subscribedCommunities";

  const token= localStorage.getItem("Jwt Token");

  var communities = null;

  if(!token) return null;

  axios
    .get(path)
    .then(function (response: AxiosResponse) {
      communities = response.data;
    })
    .catch(function (error: AxiosError) {
      alert(error);
    });

  return (
    <React.Fragment>
      <div
        className="head"
        onClick={() => {
          setUp((flag) => !flag);
        }}
      >
        <AiFillHome />
        <span>Home</span>
        {up && <RiArrowDownSFill />}
        {!up && <RiArrowUpSFill />}
      </div>
      <div className={`communities_list ${up ? "show" : ""}`}>
        <ul>
          <li>{communities}</li>
        </ul>
      </div>
    </React.Fragment>
  );
};
