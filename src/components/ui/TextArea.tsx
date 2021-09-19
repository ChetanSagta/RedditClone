import { ChangeEventHandler } from "react";


interface IProps {
  maxLength?: number;
  className?: string;
  placeholder?:string;
  rows?:number;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
}

export const TextArea = (props: IProps) => {
  return (
    <textarea
      maxLength={props.maxLength}
      className={props.className }
      placeholder={props.placeholder}
      rows={props.rows}
      onChange={props.onChange}
    ></textarea>
  );
};
