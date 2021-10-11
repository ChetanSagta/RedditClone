import React from "react";
import './Card.css'

interface ICard {
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export const Card = (props: ICard) => {
  return (
    <div
      className={
        "cardContainer " + props.className
      }
      id={props.id}
    >
      {props.children}
    </div>
  );
};
