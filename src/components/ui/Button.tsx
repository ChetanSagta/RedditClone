import React from "react";

interface ButtonProps {
  type: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className="rounded-full border-2 px-4 py-2 float-right m-1 bg-yellow-50"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
