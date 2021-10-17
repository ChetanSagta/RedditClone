import { ReactNode } from "react";
import "./Modal.css";

interface Props {
  children: ReactNode;
}

export const Modal = (props: Props) => {
  return (
    <div className="modal">
      <div className="modal-content">{props.children}</div>
    </div>
  );
};
