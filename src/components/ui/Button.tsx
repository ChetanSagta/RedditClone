import React from "react";

interface ButtonProps{
  className ?: string;
  type: string;
  children : React.ReactNode;
}


export const Button = (props: ButtonProps) =>{
  return(
    <button className={props.className}>{props.children}</button>
  );
}