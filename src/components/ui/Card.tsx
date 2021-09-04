import React from "react";

interface ICard {
  className?: string;
  children: React.ReactNode;
}

export const Card = (props: ICard) => {
  return (
    <div
      className={
        "m-2 p-2 border-1 border-black rounded-md bg-white align-middle " +
        props.className
      }
    >
      {props.children}
    </div>
  );
};
