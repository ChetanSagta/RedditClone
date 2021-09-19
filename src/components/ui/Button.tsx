import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type}
      className="rounded-full border-2 px-4 py-2 m-1 bg-yellow-50"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
