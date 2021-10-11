import './TextBox.css';

interface Props{
  type: string;
  placeholder: string;
  width?: string;
  id?: string;
}

export const TextBox = (props: Props) => {
    return(
        <input
          className="textBox"
          width={props.width}
          type={props.type}
          placeholder={props.placeholder}
          id={props.id}
        />
    )
}