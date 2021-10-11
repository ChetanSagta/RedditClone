import React from "react";
import './Button.css';

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
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
